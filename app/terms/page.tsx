import type { Metadata } from "next"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { StaticHero } from "@/components/ui/static-hero"
import { FairBookingPolicy } from "@/components/common/fair-booking-policy"
import {
  FileText,
  Calendar,
  AlertCircle,
  CreditCard,
  Users,
  MapPin,
  Clock,
  XCircle,
  ShieldCheck,
  Car,
  Compass,
  Info,
} from "lucide-react"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Terms of Service, Payment Milestones & Booking Policy | TourToHimachal",
  description:
    "Official terms of service, 3-stage milestone payments (25-50-25), Rohtang Pass permit exclusions, cancellation rules, and taxi guidelines for travel across Himachal Pradesh.",
  keywords:
    "Himachal tour booking terms, TourToHimachal terms of service, payment milestones himachal, manali tour cancellation policy, rohtang pass permit policy, atal tunnel rules, shimla taxi booking terms",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: "Terms of Service & Booking Policy | TourToHimachal",
    description:
      "Review our transparent 3-stage milestone payment schedules, Rohtang Pass & Atal Tunnel permit terms, cancellation guidelines, and mountain travel rules.",
    type: "website",
    url: `${SITE_URL}/terms`,
    siteName: "TourToHimachal",
    images: [
      {
        url: `${SITE_URL}/Images/about-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "TourToHimachal Terms of Service and Booking Policy",
      },
    ],
  },
}

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tourtohimachal.in/terms",
      "url": "https://www.tourtohimachal.in/terms",
      "name": "Terms of Service & Booking Policy | TourToHimachal",
      "description":
        "Official terms of service, 3-stage milestone payment schedules, Rohtang Pass permit exclusions, and cancellation guidelines for tour packages and taxi services in Himachal Pradesh.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tourtohimachal.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms of Service",
            "item": "https://www.tourtohimachal.in/terms",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do milestone payments work for TourToHimachal packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Holiday packages are divided across three transparent milestones: a 25% confirmation token at booking to secure hotel rooms and vehicle, 50% upon boarding the vehicle on Day 1 pickup, and the remaining 25% balance cleared upon reaching your destination hotel on Day 1. 100% of the tour payment is cleared upon destination hotel arrival to ensure seamless hospitality and prevent on-ground billing disputes.",
          },
        },
        {
          "@type": "Question",
          "name": "Are Rohtang Pass and Atal Tunnel permits included in package quotes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. High-altitude passes such as Rohtang Pass (NGT Green Permit) and special beyond-tunnel transit passes are strictly excluded from standard tour package and taxi quotations because they depend on dynamic government quotas and seasonal weather openings. If open during travel dates and requested by the guest, permit fees are payable as per actuals.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the cancellation and refund policy for tour packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "For cancellations made 15 or more days prior to travel, a 90% refund (or 100% 1-year travel credit note) is provided. Between 7 and 14 days prior, a 50% refund is issued. Within 7 days of arrival, advance payments are retained to cover locked hotel inventory.",
          },
        },
        {
          "@type": "Question",
          "name": "How does TourToHimachal handle route changes due to road closures or severe weather?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "If high mountain passes or national highways face official administrative closures due to adverse weather or landslides, our local team coordinates safe alternate itineraries or provides a travel credit for unutilized package portions with zero rescheduling fees.",
          },
        },
        {
          "@type": "Question",
          "name": "What is included in taxi service fares?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "All taxi fares quoted by TourToHimachal include Himachal Pradesh state road entry tax, FASTag expressway tolls, parking fees, fuel, and driver night allowances with no hidden roadside surcharges.",
          },
        },
      ],
    },
  ],
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Schema Injection for SEO & AEO Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <main className="flex-grow pb-8 overflow-x-hidden safe-area-bottom">
        {/* Hero Section */}
        <StaticHero
          image="/Images/about-hero.jpg"
          badge="Official Booking Standards • TourToHimachal"
          title="Transparent Booking Policies & Milestone Terms"
          titleClassName="mb-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-sm"
          subtitle="Plan your Himachal journey with genuine confidence. Review our 3-stage milestone payment schedule, Rohtang & high-pass permit exclusions, cancellation rules, and mountain travel guidelines."
          heightClassName="min-h-[460px] sm:min-h-[500px] md:min-h-[540px]"
        >
          {/* Quick-Jump Section Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <a
              href="#payment-terms"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <CreditCard className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Payment Milestones</span>
            </a>
            <a
              href="#permits-policy"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <Compass className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Rohtang & Permits</span>
            </a>
            <a
              href="#cancellation-policy"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <XCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Cancellation & Refunds</span>
            </a>
            <a
              href="#booking-reservations"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <Calendar className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Booking Guidelines</span>
            </a>
            <a
              href="#taxi-terms"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <Car className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Taxi Service Terms</span>
            </a>
            <a
              href="#weather-policy"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Road Closures & Safety</span>
            </a>
          </div>
        </StaticHero>

        {/* Main Content */}
        <section className="py-8 md:py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Introduction */}
              <div id="introduction" className="mb-8 md:mb-10 lg:mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Introduction</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to TourToHimachal. These Terms of Service ("Terms") govern your use of our website, booking
                  platform, and travel services including holiday tour packages, private taxi services, and mountain travel planning.
                  By accessing our services or confirming a booking, you agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  TourToHimachal is a registered Himachal Pradesh travel operator committed to delivering safe, reliable, and authentic
                  Himalayan travel experiences. We operate with complete commercial transparency, clear financial milestones, and customer-first integrity.
                </p>
              </div>

              {/* Booking & Reservations */}
              <div id="booking-reservations" className="mb-8 md:mb-10 lg:mb-12 scroll-mt-24">
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
                      Bookings can be initiated through our website, WhatsApp inquiry, phone, or email. All bookings are subject to
                      room and vehicle availability. A booking is considered officially confirmed only after you receive a stamped confirmation
                      voucher from TourToHimachal along with payment acknowledgment.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Information Accuracy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You agree to provide accurate, complete, and current information during the booking process. This
                      includes names as per government IDs, contact numbers, exact travel dates, traveler count, and special requirements (such as infant seats or elder assistance).
                      Incorrect information may affect hotel check-ins or vehicle allocations.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Booking Confirmation & Vouchers</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Upon confirmation, you receive a detailed digital package voucher via email and WhatsApp. This document includes hotel reservation voucher numbers,
                      vehicle class, driver allocation schedule, detailed day-wise itinerary, and clear milestone payment receipts.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Third-Party & Hotel Partner Policies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      For services provided by partner hotels or activity operators (such as standard check-in at 12:00 PM and check-out at 11:00 AM),
                      their specific property regulations apply. We will communicate all relevant property policies clearly in your travel voucher.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Booking Policy Component */}
              <div className="mb-12">
                <FairBookingPolicy />
              </div>

              {/* Payment Terms & Milestones */}
              <div id="payment-terms" className="mb-8 md:mb-10 lg:mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Payment Terms & Milestones</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6 space-y-6">
                  {/* Package Milestones */}
                  <div>
                    <h3 className="text-foreground font-semibold text-base mb-2">1. Complete Holiday Packages (Hotels + Dedicated Cab)</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      When booking an all-inclusive holiday package with hotel stays (Shimla, Manali, Dharamshala, Dalhousie, Spiti, etc.), payments are phased across three clear milestones:
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2.5 list-disc list-inside bg-muted/20 p-4 rounded-xl">
                      <li><strong>Confirmation Token (25%):</strong> Paid at the time of booking to confirm your package and issue official stamped vouchers. Locks hotel room inventory across hill stations and reserves your dedicated commercial vehicle and mountain chauffeur.</li>
                      <li><strong>On Boarding Vehicle (50%):</strong> Payable upon boarding your vehicle on Day 1 at your pickup hub (Chandigarh, Kalka, Delhi, or airport/railway station) after you inspect the cab's cleanliness, luggage space, and AC comfort.</li>
                      <li><strong>Destination Hotel Arrival (Remaining 25%):</strong> Payable immediately upon reaching your destination hotel on Day 1 before room check-in. <strong>100% of the tour package payment is cleared upon destination hotel arrival on Day 1</strong> before onward local sightseeing transfers begin.</li>
                    </ul>

                    {/* Operational Transparency Box */}
                    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs sm:text-sm text-slate-800">
                      <div className="flex items-start gap-2.5">
                        <Info className="mt-0.5 h-4 w-4 text-amber-700 shrink-0" />
                        <div>
                          <strong className="text-amber-950 font-semibold">
                            Operational Notice: Why 100% Payment is Cleared on Destination Hotel Arrival:
                          </strong>
                          <p className="mt-1 text-slate-700 leading-relaxed">
                            TourToHimachal operates across diverse Himalayan valleys where our local drivers and partner hotel staff are dedicated strictly to passenger driving safety and hospitality. Our on-ground chauffeurs and hotel front-desk teams are not authorized to handle billing collections, payment disputes, or collection follow-ups midway through the tour or at checkout. Settling the remaining balance upon arrival at your destination hotel on Day 1 eliminates payment friction, ensures seamless room check-ins, and guarantees an undisturbed vacation for the remainder of your trip.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cab & Fleet Rental */}
                  <div>
                    <h3 className="text-foreground font-semibold text-base mb-2">2. Cab & Fleet Rental Only (No Hotels Required)</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      For travelers who have already booked accommodations or require transfers, one-way drops, or private sightseeing cabs:
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside bg-muted/20 p-4 rounded-xl">
                      <li><strong>Advance Token (25% or ₹1,000 min):</strong> Confirms your vehicle category (Innova Crysta, Dzire, Ertiga, Force Urbania) and allocates a licensed mountain chauffeur. Driver details and vehicle number are shared 12 hours prior to pickup.</li>
                      <li><strong>Trip Start & Boarding (50%):</strong> Payable after you meet your chauffeur at pickup point, inspect the cab, and start your journey on Day 1.</li>
                      <li><strong>Destination Arrival / Drop (Remaining 25%):</strong> Payable upon reaching your destination hotel or final drop on Day 1, clearing 100% of the cab fare so chauffeur and traveler have zero roadside payment disputes.</li>
                    </ul>
                  </div>

                  {/* Inclusions */}
                  <div>
                    <h3 className="text-foreground font-semibold text-base mb-2">3. Standard Pricing Inclusions</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Every standard quotation provided by TourToHimachal includes vehicle fuel, Himachal Pradesh state border road entry permits, FASTag highway toll taxes, municipal parking fees, and driver night allowances (bhatta). There are zero hidden hill-climb surcharges or unexpected roadside demands.
                    </p>
                  </div>

                  {/* Special Permits & Rohtang Pass Policy */}
                  <div id="permits-policy" className="scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-slate-900">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-600/15 text-amber-900 ring-1 ring-amber-600/30">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                          4. Special High-Pass Permits & Exclusions (Rohtang Pass & Atal Tunnel Beyond-Routes)
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          Certain high-altitude mountain locations — specifically <strong>Rohtang Pass</strong> (which requires an NGT Green Permit issued by the District Administration) and special transit routes beyond <strong>Atal Tunnel</strong> (towards Sissu, Koksar, or Keylong) — are strictly regulated by the Himachal Pradesh Government and Border Roads Organisation (BRO).
                        </p>
                        <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                          <li><strong>Excluded from Standard Quotes:</strong> Due to daily government vehicle quotas and seasonal weather dependencies, Rohtang Pass NGT permits and special beyond-tunnel transit passes are strictly excluded from standard tour package and taxi base quotes.</li>
                          <li><strong>Subject to Weather & Road Status:</strong> High passes are frequently opened or closed depending on real-time snowfall, ice accumulation, and official administrative advisories.</li>
                          <li><strong>Advance Notification & Actuals Billing:</strong> If the pass is officially open during your travel dates and you wish to visit, our team clearly informs you in your itinerary. The official permit fee, green tax, and union charges are payable directly as per actual government rates without agency markups.</li>
                          <li><strong>Other Exclusions:</strong> Monument entrance tickets, adventure activities (paragliding, river rafting, skiing, snow scooters), room heater charges at hotels, and personal laundry/food expenses outside the agreed meal plan.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accepted Payment Methods */}
                  <div>
                    <h3 className="text-foreground font-semibold text-base mb-2">5. Accepted Payment Methods</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We accept UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS/NEFT bank transfers, debit/credit cards, and cash payments to our verified accounts. Official digital GST receipts and transaction acknowledgments are provided for every milestone payment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellation & Refund Policy */}
              <div id="cancellation-policy" className="mb-8 md:mb-10 lg:mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Cancellation & Refund Policy</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6 space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We understand that travel plans in the mountains can change unexpectedly. Our cancellation policy is designed to be completely fair and practical:
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-saffron pl-4">
                      <h3 className="text-foreground font-semibold mb-1">Tour Package Cancellations</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                        <li><strong>15+ days before travel:</strong> 90% refund of advance paid (nominal 10% or max ₹1,000 retained to cover bank gateway fees & hotel reservation overhead), OR a <strong>100% credit voucher</strong> valid for 1 year.</li>
                        <li><strong>7 to 14 days before travel:</strong> 50% refund of advance paid, as hill hotels lock room inventory 14 days prior.</li>
                        <li><strong>Less than 7 days / No-show:</strong> Advance is non-refundable due to 100% retention charged by Himachal hotels during peak and seasonal windows.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-saffron pl-4">
                      <h3 className="text-foreground font-semibold mb-1">Taxi Service Cancellations</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                        <li><strong>24+ hours before pickup:</strong> 100% refund of token advance, or free date change with zero penalty.</li>
                        <li><strong>12 to 24 hours before pickup:</strong> 50% refund of token advance (₹500 retained to compensate driver for blocking the slot).</li>
                        <li><strong>Less than 12 hours before pickup:</strong> Token advance retained to cover empty kilometer fuel of dispatched mountain cab.</li>
                      </ul>
                    </div>

                    <div id="weather-policy" className="scroll-mt-24 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-slate-800">
                      <h3 className="font-semibold text-sm mb-1 text-slate-900">Road Closures & Adverse Weather Route Adjustments</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Mountain journeys in Himachal Pradesh can occasionally be affected by severe seasonal weather, heavy snowfall, or administrative road advisories. If a scheduled pass (such as Rohtang Pass, Atal Tunnel, or Spiti Valley routes) is officially closed for traveler safety, our local operations team coordinates safe alternate routes or issues a travel credit valid for 12 months for any unutilized package portions with zero rescheduling fees.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-4">
                      <h3 className="text-foreground font-semibold mb-2">Refund Processing Timeline</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        All approved refunds are initiated within 48 to 72 hours and credited back to the original bank account or UPI handle within 5 to 7 business days.
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
                      All travelers must carry valid government-issued ID proof (Aadhaar card, passport, voter ID, driving license) during the trip. Foreign nationals must carry valid passports and Indian visas. Required for hotel check-ins and state border transit.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Health & Mountain Fitness</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      High-altitude destinations (such as Manali, Rohtang, Spiti, and Kinnaur) involve varying altitudes. Travelers with cardiac conditions, high blood pressure, or respiratory issues should consult a physician and inform us in advance.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Code of Conduct & Environmental Care</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Himachal Pradesh strictly enforces anti-littering and plastic ban regulations. Respect local mountain customs, shrines, and nature. We reserve the right to terminate services for travelers engaging in unlawful conduct without any refund.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Punctuality</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Please adhere to the scheduled morning departure and sightseeing pickup times. Mountain driving before sunset is safer and more scenic. Delays caused by travelers may lead to truncated sightseeing.
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
                      <h3 className="text-foreground font-semibold mb-2">Itinerary Adjustments</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        While we strive to adhere strictly to the agreed itinerary, modifications may become necessary due to weather, landslides, snow blockades, or local traffic advisories. Our operations team will provide suitable, safe alternatives.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Weather & Natural Conditions</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Himachal Pradesh is a mountainous region where natural phenomena occur. We are not liable for delays or itinerary modifications caused by force majeure events such as extreme snowfall, cloudbursts, or official road restrictions. Comprehensive travel insurance is recommended.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Personal Belongings</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Travelers are responsible for their personal luggage, electronic equipment, and valuables. Please ensure items are securely packed during transit and room check-outs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxi Service Terms */}
              <div id="taxi-terms" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Taxi Service Terms</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Pickup & Waiting Time</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Please provide precise pickup location and flight/train details. Our chauffeur waits up to 30 minutes free of charge beyond scheduled pickup. For airport pickups, delays due to rescheduled flights are accommodated without penalty when informed in advance.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Agreed Routes & Sightseeing Limits</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Quoted taxi fares cover the itinerary points agreed upon at booking. Additional off-route detours, extra valley excursions, or vehicle usage beyond scheduled daily sightseeing hours will be billed at standard per-kilometer rates.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Mountain-Certified Chauffeurs</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      All vehicles are driven by verified, licensed commercial hill drivers with years of experience navigating hairpins, snow, and steep mountain passes. Drivers follow safety speed limits and road discipline strictly.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Night Driving Advisory</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Due to steep terrain and sudden fog/snow conditions, non-essential late-night driving is strongly discouraged across high passes. Travel is scheduled during daylight hours for passenger safety and scenic enjoyment.
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
                        TourToHimachal is liable strictly for services directly confirmed and contracted through our platform. Our maximum liability is limited to the total amount paid by the customer for the specific booked service.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Travel Insurance</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We strongly advise all mountain travelers to obtain comprehensive personal travel and health insurance covering medical evacuation, high-altitude illness, and baggage protection.
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
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Grievance Redressal & Support</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Your satisfaction is paramount. If you face any difficulty during your journey:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                    <li>Contact our dedicated operational trip coordinator immediately via phone or WhatsApp.</li>
                    <li>Operational vehicle or hotel concerns are addressed on priority within 1 to 2 hours.</li>
                    <li>If an issue cannot be resolved on-ground, our management reviews and coordinates alternate arrangements promptly.</li>
                  </ul>
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
                    For any questions regarding our terms, payment milestones, or high-pass permits, please contact our support desk:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-foreground font-semibold text-sm">Email:</p>
                      <a href="mailto:contact@tourtohimachal.in" className="text-saffron text-sm hover:underline">
                        contact@tourtohimachal.in
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Phone / WhatsApp:</p>
                      <a href="tel:+918628839955" className="text-saffron text-sm hover:underline">
                        +91 8628839955
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Registered Office:</p>
                      <p className="text-muted-foreground text-sm">
                        TourToHimachal<br />
                        Chintpurni, Himachal Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-saffron/10 border border-saffron/20 rounded-2xl p-6">
                <h2 className="text-foreground font-serif text-xl font-bold mb-3">Your Agreement</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By confirming a booking with TourToHimachal or utilizing our travel services, you acknowledge that you have read, understood,
                  and agreed to these Terms of Service, milestone payment schedules, and permit guidelines.
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
