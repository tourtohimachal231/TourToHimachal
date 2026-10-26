"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/lib/settings-context"
import { Phone, ArrowRight, Sparkles, ShieldCheck, Clock, CalendarCheck } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import Image from "next/image"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

export function CTABanner() {
  const { settings } = useSettings()

  function getImageUrl(url: string): string {
    if (!url) return "/placeholder.svg"
    const trimmed = url.trim()
    const normalized = trimmed.startsWith("/http") ? trimmed.slice(1) : trimmed
    if (normalized.includes("res.cloudinary.com") || normalized.includes("cloudinary.com")) {
      return optimizeCloudinaryDeliveryUrl(normalized, {
        width: 1920,
        quality: "auto",
        format: "auto",
        crop: "limit",
      })
    }
    return normalized
  }

  const whatsappRaw = (settings.whatsapp_number || "918628839955").replace(/[^0-9]/g, "") || "918628839955"
  const phone = settings.contact_phone || "+918628839955"

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      {/* Background panoramic landscape */}
      <Image
        src={getImageUrl("https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795901/y1plr2wekvbv7g7yjyk0.webp")}
        alt="Panoramic Himalayan mountain landscape"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />

      {/* Cinematic dark mountain gradient overlay (crystal clear contrast, no washed-out orange tint) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/90" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Trust Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase md:text-sm">
              Start Your Journey Today • 100% Free Consultation
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ready to Experience the Himalayas?{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Let&apos;s Plan Your Custom Trip
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            Connect directly with our local travel architects in Chintpurni. We&apos;ll craft a personalized day-by-day
            itinerary with transparent taxi fares tailored to your family, honeymoon, or temple pilgrimage.
          </p>

          {/* Key Guarantees Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 backdrop-blur-xs">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>15-Minute Custom Quote</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 backdrop-blur-xs">
              <CalendarCheck className="h-4 w-4 text-emerald-400" />
              <span>Only 20% Token to Reserve</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 backdrop-blur-xs">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>Free Weather Rescheduling</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <Button
              size="xl"
              className="group h-13 gap-2.5 rounded-xl bg-emerald-600 px-8 text-base font-semibold text-white shadow-xl transition-all hover:bg-emerald-500 hover:shadow-2xl"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappRaw}?text=${encodeURIComponent("Hi TourToHimachal! I want to plan my dream trip. Please share options and cab rates.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="h-13 gap-2.5 rounded-xl border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-950"
              asChild
            >
              <a href={`tel:${phone}`}>
                <Phone className="h-5 w-5" />
                <span>Call {phone}</span>
              </a>
            </Button>
          </div>

          {/* Reassurance text */}
          <p className="mt-6 text-xs text-slate-400">
            No spam, no aggressive sales calls. Just friendly, local mountain advice from people who live here.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
