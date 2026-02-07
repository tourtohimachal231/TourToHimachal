import type { Metadata } from "next"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { StaticHero } from "@/components/ui/static-hero"
import { FileText, Calendar, AlertCircle, CreditCard, Users, MapPin, Clock, XCircle, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | TourToHimachal - Tours, Packages & Taxi Services",
  description:
    "Read TourToHimachal's terms of service to understand our booking policies, cancellation rules, payment terms, and service conditions for tours, packages, and taxi services in Himachal Pradesh.",
  keywords: "terms of service tourtohimachal, booking terms, cancellation policy, himachal travel terms, taxi service terms",
  openGraph: {
    title: "Terms of Service | TourToHimachal",
    description: "Clear and fair terms for your Himachal travel experience.",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pb-8 overflow-x-hidden">
        {/* Hero Section */}
        <StaticHero
          image="Images/diary.png"
          badge="Clear & Fair Terms"
          title="Terms of Service"
          subtitle="These terms govern your use of TourToHimachal services. We believe in transparent, fair, and straightforward policies so you can book your Himachal journey with confidence."
        />


        {/* Main Content */}
        <section className="py-6 md:py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Introduction */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Introduction</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to TourToHimachal. These Terms of Service ("Terms") govern your use of our website, booking
                  platform, and travel services including tour packages, taxi services, and travel planning assistance.
                  By accessing our services or making a booking, you agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  TourToHimachal is a Himachal Pradesh-based travel company committed to providing memorable and
                  hassle-free travel experiences. We operate with transparency, integrity, and a focus on customer
                  satisfaction.
                </p>
              </div>

              {/* Booking & Reservations */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Booking & Reservations</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Making a Booking</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bookings can be made through our website, via phone, WhatsApp, or email. All bookings are subject to
                      availability and confirmation. A booking is considered confirmed only after you receive a written
                      confirmation from TourToHimachal.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Information Accuracy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You agree to provide accurate, complete, and current information during the booking process. This
                      includes names, contact details, travel dates, number of travelers, and any special requirements.
                      Incorrect information may affect your booking and incur additional charges.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Booking Confirmation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Upon successful booking, you will receive a confirmation via email or WhatsApp containing your
                      booking details, itinerary, and payment receipt. Please review this carefully and contact us
                      immediately if there are any discrepancies.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Third-Party Bookings</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      For services provided by third parties (hotels, activities, etc.), their specific terms and
                      conditions may apply in addition to our Terms. We will provide you with relevant third-party terms
                      where applicable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Payment Terms</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Advance Payment</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        A non-refundable advance payment is required to confirm your booking. The advance amount
                        typically ranges from 20% to 50% of the total package cost, depending on the type of service
                        and season.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Balance Payment</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The remaining balance must be paid before or upon the start of your trip, as specified in your
                        booking confirmation. Failure to pay the balance on time may result in cancellation of your
                        booking.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Payment Methods</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We accept payments via UPI, bank transfer, credit/debit cards, and other digital payment methods.
                        All payments are processed securely through trusted payment gateways. We do not store your
                        payment card details.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Price Changes</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Prices quoted at the time of booking are final unless there are significant changes in taxes,
                        fuel prices, or government regulations. We will inform you of any price changes before finalizing
                        your booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation & Refund Policy */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Cancellation & Refund Policy</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We understand that plans may change. Our cancellation policy is as follows:
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-saffron pl-4">
                      <h3 className="text-foreground font-semibold mb-1">Tour Packages</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                        <li><strong>30+ days before travel:</strong> Full refund (minus advance processing fee)</li>
                        <li><strong>15-29 days before travel:</strong> 75% refund of total amount</li>
                        <li><strong>7-14 days before travel:</strong> 50% refund of total amount</li>
                        <li><strong>Less than 7 days before travel:</strong> No refund</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-saffron pl-4">
                      <h3 className="text-foreground font-semibold mb-1">Taxi Services</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                        <li><strong>24+ hours before pickup:</strong> Full refund (minus processing fee)</li>
                        <li><strong>12-24 hours before pickup:</strong> 50% refund</li>
                        <li><strong>Less than 12 hours before pickup:</strong> No refund</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-saffron pl-4">
                      <h3 className="text-foreground font-semibold mb-1">Hotel Accommodations</h3>
                      <p className="text-muted-foreground text-sm">
                        Hotel cancellation policies vary by property and season. Specific cancellation terms will be
                        provided at the time of booking.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-4">
                      <h3 className="text-foreground font-semibold mb-2">Refund Processing</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Refunds are processed within 7-14 business days from the date of cancellation approval. The amount
                        will be credited to the original payment method used for booking.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-4">
                      <h3 className="text-foreground font-semibold mb-2">Force Majeure</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        In case of unforeseen circumstances beyond our control (natural disasters, political unrest,
                        pandemics, etc.), we will work with you to reschedule your trip or provide a credit note for
                        future travel. Refund decisions will be made on a case-by-case basis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traveler Responsibilities */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Traveler Responsibilities</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Valid Documents</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      All travelers must carry valid government-issued ID proof (Aadhaar card, passport, driving license,
                      etc.) during the trip. Foreign nationals must carry valid passports and visas. Failure to produce
                      valid documents may result in denial of services.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Health & Fitness</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Travelers should be in good health to participate in tour activities. For adventure activities,
                      treks, or high-altitude travel, ensure you are physically fit. Inform us of any medical conditions
                      or special requirements at the time of booking.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Code of Conduct</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Respect local customs, traditions, and environment. Do not litter, damage property, or engage in
                      illegal activities. We reserve the right to terminate services for travelers who violate this code
                      of conduct without any refund.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Punctuality</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Adhere to the scheduled itinerary and pickup times. Delays caused by travelers may result in
                      missed activities or additional charges. We cannot be held responsible for missed connections due
                      to traveler delays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Limitations */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Service Limitations</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Itinerary Changes</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        While we strive to follow the planned itinerary, changes may be necessary due to weather
                        conditions, road closures, safety concerns, or other unforeseen circumstances. We will inform you
                        of any changes and provide suitable alternatives.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Weather & Natural Conditions</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Himachal Pradesh experiences varied weather conditions. We are not responsible for trip delays,
                        cancellations, or modifications caused by adverse weather, landslides, snowfall, or other natural
                        phenomena. Travel insurance is highly recommended.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Third-Party Services</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We work with trusted partners for hotels, restaurants, and activities. While we select partners
                        carefully, we cannot guarantee third-party service quality. Issues with third-party services will
                        be addressed on a best-effort basis.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Personal Belongings</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We are not responsible for loss, theft, or damage to personal belongings during the trip.
                        Travelers are advised to secure their valuables and consider travel insurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxi Service Terms */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Taxi Service Terms</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Booking & Pickup</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Provide accurate pickup location and time. Our driver will wait for up to 30 minutes beyond the
                      scheduled pickup time. Additional waiting time may be charged. For airport pickups, provide flight
                      details for tracking delays.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Route & Stops</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The quoted fare is for the agreed route. Additional stops or deviations from the planned route may
                      incur extra charges. Discuss any route changes with the driver or our team in advance.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Vehicle & Driver</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We provide well-maintained vehicles with professional, licensed drivers. Drivers are familiar with
                      local routes and terrain. Treat drivers with respect and follow their guidance for safe travel.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Night Travel</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Night travel in mountainous areas carries additional risks. We recommend planning travel during
                      daylight hours. For unavoidable night travel, drivers will exercise additional caution, which may
                      extend travel time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Liability & Insurance */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Liability & Insurance</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Our Liability</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        TourToHimachal is liable for services directly provided by us. Our liability is limited to the
                        amount paid for the specific service in question. We are not liable for indirect, consequential,
                        or punitive damages.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Travel Insurance</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We strongly recommend all travelers purchase comprehensive travel insurance covering medical
                        emergencies, trip cancellation, lost baggage, and other travel-related risks. We can assist with
                        insurance recommendations upon request.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Indemnification</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        You agree to indemnify and hold TourToHimachal harmless from any claims, damages, or expenses
                        arising from your violation of these Terms or any unlawful activity during your trip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grievance Redressal */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Grievance Redressal</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Your satisfaction is important to us. If you have any concerns or grievances during your trip:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                    <li>Contact our support team immediately via phone or WhatsApp</li>
                    <li>We will address your concern within 24 hours</li>
                    <li>For unresolved issues, you may escalate to our management team</li>
                    <li>We maintain records of all complaints and their resolution</li>
                  </ul>
                </div>
              </div>

              {/* Modifications to Terms */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Modifications to Terms</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                    posting on our website. Your continued use of our services after changes constitutes acceptance of
                    the modified Terms. We will notify you of significant changes via email or WhatsApp.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Contact Us</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    For any questions about these Terms of Service or our services, please contact us:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-foreground font-semibold text-sm">Email:</p>
                      <a href="mailto:tourtohimachal231@gmail.com" className="text-saffron text-sm hover:underline">
                        tourtohimachal231@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Phone:</p>
                      <a href="tel:+918628839955" className="text-saffron text-sm hover:underline">
                        +91 8628839955
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Address:</p>
                      <p className="text-muted-foreground text-sm">
                        TourToHimachal<br />
                        Chintpurni, Himachal Pradesh<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-saffron/10 border border-saffron/20 rounded-2xl p-6">
                <h2 className="text-foreground font-serif text-xl font-bold mb-3">Your Agreement</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By booking with TourToHimachal or using our services, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms of Service. If you do not agree with any part of these Terms,
                  please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
