import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createAdminClient } from "@/lib/supabase/admin"
import { sendLeadNotification } from "@/lib/email"

const taxiBookingSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, "Valid 10-digit phone number is required")
    .max(15, "Phone number is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal(""))
    .nullable(),
  subject: z.string().trim().max(200).optional().nullable(),
  message: z
    .string({ required_error: "Booking details are required" })
    .trim()
    .min(5, "Booking details must be at least 5 characters")
    .max(2000, "Message must be under 2000 characters"),
  serviceType: z.string().trim().optional().default("taxi"),
  howFound: z.string().trim().max(100).optional().nullable(),
  referralCode: z.string().trim().max(50).optional().nullable(),
  honeypot: z.string().optional().nullable(),
})

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json()

    // Server-side validation
    const validationResult = taxiBookingSchema.safeParse(rawBody)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const {
      name,
      phone,
      email,
      subject,
      message,
      serviceType,
      howFound,
      referralCode,
      honeypot,
    } = validationResult.data

    // Honeypot spam check - silently reject bot submissions
    if (honeypot && honeypot.trim().length > 0) {
      console.warn("⚠️ Bot submission blocked on /api/taxi-booking")
      return NextResponse.json({
        success: true,
        message: "Thank you! Your taxi booking has been received.",
        referenceNumber: "TTH-BLOCKED",
      })
    }

    const supabase = createAdminClient()

    // Prevent accidental duplicate submission within 60 seconds
    const numericPhone = phone.replace(/\D/g, "")
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString()
    const { data: existingLead } = await supabase
      .from("leads")
      .select("reference_number")
      .eq("phone", phone)
      .eq("service_type", "taxi")
      .gte("created_at", oneMinuteAgo)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()

    if (existingLead?.reference_number) {
      console.log("ℹ️ Duplicate taxi submission prevented, reusing reference:", existingLead.reference_number)
      return NextResponse.json({
        success: true,
        message: "Your booking request has been received! Our team will contact you shortly.",
        referenceNumber: existingLead.reference_number,
      })
    }

    // Safe email fallback: Postgres column has NOT NULL constraint
    const safeEmail = email && email.trim().length > 0 ? email.trim() : "noemail@tourtohimachal.in"
    const safeSubject = subject && subject.trim().length > 0 ? subject.trim() : "Taxi Booking Inquiry"

    // Insert the lead using privileged server-only admin client
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        phone: numericPhone.length >= 10 ? phone : numericPhone,
        email: safeEmail,
        subject: safeSubject,
        message,
        service_type: serviceType || "taxi",
        status: "new",
        how_found: howFound || null,
        referral_code: referralCode || null,
      })
      .select("reference_number")
      .single()

    if (error) {
      console.error("❌ Supabase insert error in /api/taxi-booking:", error.message)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to save your booking. Please try again or reach us via WhatsApp.",
          error: error.message,
        },
        { status: 500 },
      )
    }

    if (!data?.reference_number) {
      console.error("❌ No reference number generated for taxi lead")
      return NextResponse.json(
        {
          success: false,
          message: "Failed to generate booking reference. Please try again.",
        },
        { status: 500 },
      )
    }

    // Dispatch staff notification asynchronously; do not fail booking if email delivery fails
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "booking@tourtohimachal.in"
    try {
      await sendLeadNotification({
        to: adminEmail,
        leadData: {
          name,
          email: safeEmail,
          phone,
          subject: safeSubject,
          message,
          serviceType: "taxi",
          referenceNumber: data.reference_number,
        },
      })
    } catch (notificationError) {
      console.error("⚠️ Non-fatal: Taxi booking notification email failed to dispatch:", notificationError)
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your taxi booking has been received. We will respond within 12 hours.",
      referenceNumber: data.reference_number,
    })
  } catch (error) {
    console.error("❌ Unexpected error in /api/taxi-booking:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
