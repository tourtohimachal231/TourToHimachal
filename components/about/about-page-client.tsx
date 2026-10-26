"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MapPin,
  Shield,
  CheckCircle2,
  Award,
  Users,
  Car,
  Calendar,
  Phone,
  ArrowRight,
  Compass,
  ShieldCheck,
  HeartHandshake,
  Building,
  Mountain,
  Clock,
  Star,
  Check,
  Plane,
  Globe,
  Waves,
} from "lucide-react"

import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

export function AboutPageClient() {
  const contentRef = useRef<HTMLElement>(null)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow pb-12 overflow-x-hidden">
        {/* ========================================================
            1. HERO SECTION (High impact, authentic imagery, clean H1)
        ======================================================== */}
        <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/Images/about-hero.jpg"
              alt="Majestic Himachal Pradesh mountain valley with traditional Himachali cottage and Himalayan snow peaks"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark contrast gradient - natural cinematic vignette without orange wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/60 to-slate-950/90" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-24">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-4xl text-center"
            >
              {/* Trust Badge */}
              <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md shadow-xs">
                <Mountain className="h-4 w-4 text-sky-300" />
                <span>Native Himachal Travel Agency • Headquartered in Chintpurni</span>
              </motion.div>

              {/* Single Clear H1 Tag - Target: "Tour to Himachal" */}
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight"
              >
                Tour to Himachal — Authentic Journeys Curated by Native Himalayan Experts
              </motion.h1>

              {/* Direct Entity Description */}
              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-5 max-w-3xl text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed text-balance"
              >
                We are born in the valleys of Himachal Pradesh. Since 2018, <strong className="text-white font-semibold">TourToHimachal</strong> has connected travelers directly with verified native hill drivers, curated valley stays, and personalized holiday itineraries across Shimla, Manali, Spiti, Dharamshala, and sacred Devi Yatra circuits — with zero middleman markups and 100% transparent pricing.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 rounded-xl bg-mountain-blue hover:bg-mountain-blue/90 text-white font-semibold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Link href="/packages">
                    Explore Tour Packages <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 rounded-xl border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <Link href="/contact">Speak with Our Local Team</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            2. KEY TRUST STATS STRIP
        ======================================================== */}
        <section className="relative z-20 -mt-8 sm:-mt-10 container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-md">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:divide-x md:divide-slate-100">
              <div className="text-center px-2">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">10,000+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">Happy Guests Hosted</p>
              </div>
              <div className="text-center px-2">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">100%</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">Native Hill Drivers</p>
              </div>
              <div className="text-center px-2">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">4.9 / 5.0</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">Verified Traveler Rating</p>
              </div>
              <div className="text-center px-2">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Award 2026</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">Justdial Customer Choice</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. "BORN IN THE VALLEYS" AUTHENTIC STORY SECTION
        ======================================================== */}
        <section ref={contentRef} className="py-14 sm:py-18 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-mountain-blue border border-sky-200/80 mb-3">
                  Our Roots & Operating Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                  Why A Real Native Himachal Agency Makes All the Difference
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Most travel portals advertising a <strong>tour to Himachal</strong> sit in distant metro offices in Delhi, Mumbai, or Bangalore. When you book through them, your trip is packaged and re-sold to unverified third-party operators, leaving you with unfamiliar drivers who may never have driven steep Himalayan ghats or handled snow terrain.
                  </p>
                  <p>
                    <strong>TourToHimachal</strong> was founded on a simple principle: <em>the best travel experiences in the mountains are planned and operated by the people who call them home.</em> Our central operations hub is headquartered in Chintpurni (Una/Kangra region), with on-ground coordinators stationed across Shimla, Manali, Dharamshala, and Chandigarh.
                  </p>
                  <p>
                    We know that mountain travel is nuanced. Google Maps cannot tell you when a high mountain pass is iced over, which scenic bypass skips tourist gridlock at Kufri, or which secluded riverside retreat in the Parvati Valley offers authentic Himachali Dham cuisine. Our local team monitors road passes, mountain weather updates, and ghat traffic in real time.
                  </p>
                  <p>
                    While Himachal Pradesh is our founding flagship and top priority, our travelers repeatedly asked us to bring the same honest pricing, vetted hotels, and 24/7 human care to their other vacations. Today, TourToHimachal curates bespoke trips to the paradise of <strong>Kashmir & Srinagar</strong>, the tropical <strong>Andaman Islands</strong>, and vibrant international getaways to <strong>Thailand</strong> — backed by the exact same zero-compromise service standard.
                  </p>
                </div>

                {/* Slogan Quote Card */}
                <div className="mt-6 rounded-2xl border-l-4 border-l-mountain-blue bg-slate-50 p-4 sm:p-5 border border-slate-200/70">
                  <p className="font-serif text-sm sm:text-base italic text-slate-800">
                    &ldquo;Peace | Pride | Living — We do not just book your hotel or cab; we welcome you to our mountain homeland with the ancient Himachali ethos of Atithi Devo Bhava.&rdquo;
                  </p>
                  <p className="text-xs font-semibold text-slate-500 mt-2">
                    — The TourToHimachal Native Dispatch Team
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <Image
                    src="/Images/about-team.jpg"
                    alt="TourToHimachal native mountain team in traditional Kullu cap standing in scenic Himachal valley"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>

                {/* Floating Credential Pill */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white rounded-xl border border-slate-200 p-3.5 shadow-lg max-w-[260px]">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">100% On-Ground Team</p>
                      <p className="text-[11px] text-slate-500">Zero outsourcing to middlemen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. CORE OPERATING PILLARS (The TourToHimachal Distinction)
        ======================================================== */}
        <section className="bg-slate-50/70 py-14 sm:py-18 border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-mountain-blue border border-sky-200/80 mb-3">
                The TourToHimachal Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Built on Trust, Local Knowledge & Transparency
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2.5">
                Every tour package and taxi booking follows our non-negotiable operational commitments.
              </p>
            </div>

            <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-md flex flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-mountain-blue mb-4">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  Native Hill Drivers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Commercial drivers born and raised on Himachal mountain roads. Trained for steep ghats, hairpin bends, snow, and fog with calm confidence. Non-smoking, courteous, and respectful.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-md flex flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  Upfront Fixed Pricing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All state border taxes, toll plaza fees, green cess, fuel charges, and driver lodging allowances are pre-calculated. Zero surprise costs or mid-trip haggling on the highway.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-md flex flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  Weather & Landslide Safety
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mountain safety comes first. If severe weather, heavy snow, or landslides cause official highway closures, your dates are rescheduled 100% free with zero cancellation fee.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-md flex flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                  <Building className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  Handpicked Stays
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every boutique hotel, apple orchard homestay, and valley resort is personally inspected by our team for verified hygiene, reliable hot water, and panoramic mountain balconies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. EXPANDING HORIZONS: BEYOND THE HILLS (Kashmir, Andaman, Thailand)
        ======================================================== */}
        <section className="py-14 sm:py-18">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-mountain-blue border border-sky-200/80 mb-3">
                Expanding Horizons Beyond Himachal
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                From Our Himalayan Homeland to Across India & International Shores
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                While Himachal Pradesh remains our top priority, founding home, and daily dispatch hub, our travelers asked us to bring the same honest pricing, vetted stays, and dedicated human coordination to their other dream vacations. Today, TourToHimachal curates bespoke travel experiences across the crown of Kashmir, the pristine beaches of Andaman, and vibrant international gateways like Thailand.
              </p>
            </div>

            <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1: Himachal Pradesh */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Images/about-hero.jpg"
                    alt="Himachal Pradesh mountain tour packages"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-slate-950/80 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                      Flagship Homeland
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                    Himachal Pradesh
                  </h3>
                  <p className="text-xs font-semibold text-mountain-blue mb-2.5">
                    Shimla, Manali, Spiti & Devi Yatra
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                    Our heart and primary specialty. 100% native hill drivers, dedicated Chintpurni dispatch, curated homestays, and high mountain passes.
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Native Fleet</span>
                    <Link href="/packages" className="font-semibold text-mountain-blue hover:underline inline-flex items-center gap-1">
                      Explore <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Kashmir & Srinagar */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Images/kashmir-srinagar.jpg"
                    alt="Kashmir Srinagar Dal Lake Shikara boat and snow peaks"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-sky-900/85 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                      Himalayan Sibling
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                    Kashmir & Srinagar
                  </h3>
                  <p className="text-xs font-semibold text-mountain-blue mb-2.5">
                    Dal Lake, Gulmarg, Pahalgam & Sonamarg
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                    Luxury handpicked houseboats, private Shikara rides, Gulmarg Gondola transfers, and snow meadow excursions with verified local partners.
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">All Seasons</span>
                    <Link href="/contact" className="font-semibold text-mountain-blue hover:underline inline-flex items-center gap-1">
                      Inquire <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: Andaman Islands */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Images/andaman-islands.jpg"
                    alt="Andaman Islands Radhanagar beach Havelock turquoise sea"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-emerald-900/85 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                      Tropical Islands
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                    Andaman Islands
                  </h3>
                  <p className="text-xs font-semibold text-mountain-blue mb-2.5">
                    Port Blair, Havelock & Neil Islands
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                    Powder-white beaches, Makruzz private ferry coordination, scuba diving over living coral reefs, and beachfront luxury resort bookings.
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Island Retreat</span>
                    <Link href="/contact" className="font-semibold text-mountain-blue hover:underline inline-flex items-center gap-1">
                      Inquire <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 4: Thailand */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Images/thailand-escape.jpg"
                    alt="Thailand tropical island Krabi Phuket limestone cliffs"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-amber-900/85 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                      International
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                    Thailand Escapes
                  </h3>
                  <p className="text-xs font-semibold text-mountain-blue mb-2.5">
                    Bangkok, Phuket, Krabi & Pattaya
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                    Complete international coordination: visa guidance, private airport transfers, premium beachside villas, island-hopping tours, and family holidays.
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Overseas Gateways</span>
                    <Link href="/contact" className="font-semibold text-mountain-blue hover:underline inline-flex items-center gap-1">
                      Inquire <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. VERIFIED INDUSTRY RECOGNITION (Justdial Award 2026)
        ======================================================== */}
        <section className="py-14 sm:py-18">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-xl">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-semibold text-amber-300 mb-3">
                    <Award className="h-3.5 w-3.5" />
                    <span>Official Industry Recognition</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
                    Awarded the Justdial Customer Choice Award 2026
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    Recognized as one of the most reliable regional tour operators and cab service providers in Himachal Pradesh. With over 10,000 travelers hosted and an exceptional 4.9-star satisfaction score, our commitment to transparent hill tourism continues to earn the trust of families, couples, and solo explorers nationwide.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Verified Commercial Hill Permits</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>100% Himachal Road Compliant</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>24/7 Mountain Route Assistance</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 flex items-center justify-center">
                  <div className="relative aspect-square w-48 sm:w-56 overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 p-4 backdrop-blur-md shadow-lg">
                    <Image
                      src="/Images/justdial-award-2026.png"
                      alt="Justdial Customer Choice Award 2026 presented to TourToHimachal"
                      fill
                      className="object-contain p-2"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. HIMALAYAN CIRCUITS WE MASTER (AEO / GEO Entity Authority)
        ======================================================== */}
        <section className="bg-slate-50/60 py-14 sm:py-18 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-mountain-blue border border-sky-200/80 mb-3">
                Complete Regional Authority
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Himachal Circuits & Destinations We Master
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2.5">
                From snow-capped high passes to ancient temple shrines, our local team operates across every major sector of Devbhoomi Himachal.
              </p>
            </div>

            <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Shimla & British Heritage Circuit",
                  sub: "The Ridge, Kufri, Narkanda, Mashobra & Chail",
                  desc: "Colonial walking heritage, panoramic Himalayan viewpoints, cedar pine forests, and high-elevation apple orchard trails.",
                  tag: "Family & Leisure",
                },
                {
                  title: "Kullu & Manali Valley",
                  sub: "Solang Valley, Atal Tunnel, Rohtang Pass, Kasol & Naggar",
                  desc: "Year-round snow activities, adrenaline sports, scenic river valleys, hot springs, and vibrant mountain cafes.",
                  tag: "Adventure & Couples",
                },
                {
                  title: "Dharamshala & Kangra Valley",
                  sub: "McLeodGanj, Triund, Kangra Fort & Tea Gardens",
                  desc: "Tibetan monastery culture, the seat of His Holiness Dalai Lama, scenic tea estates, and paragliding at Bir Billing.",
                  tag: "Spiritual & Nature",
                },
                {
                  title: "Spiti & Kinnaur High-Altitude",
                  sub: "Kaza, Chandratal, Tabo, Key Monastery, Kalpa & Sangla",
                  desc: "Dramatic cold desert landscapes, ancient cliffside Buddhist monasteries, and high mountain passes for rugged road trips.",
                  tag: "Road Trip & Expedition",
                },
                {
                  title: "Sacred Devi Darshan Yatra",
                  sub: "Chintpurni, Jwala Ji, Kangra Devi, Baglamukhi & Naina Devi",
                  desc: "Blessed pilgrimage circuits across the revered Shaktipeeths of Himachal Pradesh with priority darshan guidance.",
                  tag: "Spiritual Yatra",
                },
                {
                  title: "Dalhousie & Chamba Heritage",
                  sub: "Dalhousie, Khajjiar (Mini Switzerland) & Kalatop Sanctuary",
                  desc: "Lush rolling meadows ringed by dense deodar forests, colonial architecture, and serene lakes away from crowds.",
                  tag: "Honeymoon & Retreat",
                },
              ].map((circuit, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                        {circuit.tag}
                      </span>
                      <MapPin className="h-4 w-4 text-mountain-blue" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                      {circuit.title}
                    </h3>
                    <p className="text-xs font-semibold text-mountain-blue mb-2.5">
                      {circuit.sub}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {circuit.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/packages"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-mountain-blue transition-colors"
                    >
                      <span>Explore circuit itineraries</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. AEO / GEO FAQ ACCORDION (Search Engine Question Answering)
        ======================================================== */}
        <section className="py-14 sm:py-18">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
              <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-mountain-blue border border-sky-200/80 mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Everything You Need to Know About TourToHimachal
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2.5">
                Clear, transparent answers about our regional roots, bookings, taxi fleet, and safety policies.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                {[
                  {
                    q: "Who is TourToHimachal and why book your tour to Himachal with us?",
                    a: "TourToHimachal is an authentic, locally established Himachal Pradesh travel agency headquartered in Chintpurni, Himachal Pradesh. Unlike remote booking portals or metro aggregators who outsource ground operations, our native mountain team plans, drives, and supports every journey directly. We provide verified commercial hill drivers, curated stays, and 24/7 mountain assistance.",
                  },
                  {
                    q: "Where is TourToHimachal located in Himachal Pradesh?",
                    a: "TourToHimachal is headquartered in Chintpurni (Una/Kangra region), Himachal Pradesh, near the sacred Chintpurni Temple. We maintain operational coordinators and fleet bases across Shimla, Manali, Dharamshala, and Chandigarh to ensure seamless pickups, drop-offs, and 24/7 route support.",
                  },
                  {
                    q: "What tour packages does TourToHimachal offer?",
                    a: "TourToHimachal provides customized Himachal holiday packages including Shimla-Manali honeymoons, Dharamshala-Dalhousie family vacations, high-altitude Spiti and Kinnaur expeditions, sacred Devi Yatra pilgrimage circuits (Chintpurni, Jwala Ji, Kangra Devi, Baglamukhi), and adventure trekking circuits across the Western Himalayas.",
                  },
                  {
                    q: "Does TourToHimachal provide taxi services and verified hill drivers?",
                    a: "Yes. TourToHimachal operates a dedicated mountain fleet comprising hatchbacks (Wagon R), sedans (Swift Dzire), MPVs (Maruti Ertiga), SUVs (Toyota Innova Crysta), Tempo Travellers (12-seaters), and Force Urbania luxury vans. Every vehicle is steered by a native commercial mountain driver trained for steep hill ghats, high passes, and snow terrain.",
                  },
                  {
                    q: "What is TourToHimachal's weather and road closure cancellation policy?",
                    a: "Safety in the Himalayas is our highest priority. In the event of unforeseen mountain road closures, heavy snow, or landslides verified by local authorities, TourToHimachal provides 100% free date rescheduling and transparent alternate itinerary routing with zero cancellation penalty on advance tokens.",
                  },
                  {
                    q: "How does payment and booking confirmation work with TourToHimachal?",
                    a: "TourToHimachal operates on a transparent, customer-friendly payment structure. You secure your vehicle and hill driver with only a 20% to 25% confirmation token. 50% is payable upon boarding on Day 1, and the final balance is payable upon safe drop-off at your destination.",
                  },
                  {
                    q: "Does TourToHimachal only offer Himachal tours, or do you cover other domestic and international destinations?",
                    a: "While Himachal Pradesh is our founding home and flagship specialty, TourToHimachal has expanded its trusted travel management model to cover other iconic destinations across India and abroad. We curate customized vacations to the paradise of Kashmir & Srinagar (luxury Dal Lake houseboats, Gulmarg & Pahalgam), the tropical Andaman Islands (Havelock, Radhanagar Beach, scuba diving), and international getaways to Thailand (Bangkok, Phuket, Krabi), all backed by verified on-ground partner networks and 24/7 human coordination.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl border border-slate-200/90 bg-white px-5 shadow-2xs hover:border-slate-300"
                  >
                    <AccordionTrigger className="font-serif text-left font-semibold text-slate-900 py-4 hover:no-underline hover:text-mountain-blue">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 pt-1">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. CLOSING EDITORIAL CTA BANNER
        ======================================================== */}
        <section className="container mx-auto px-4 mt-6">
          <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Subtle background ambient effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-slate-950 to-slate-950" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-sky-200 backdrop-blur-md mb-4 border border-white/15">
                Real Local Support • 24/7 Mountain Assistance
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
                Ready to Experience the Real Himachal Pradesh?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                Speak directly with our native Chintpurni travel specialists. We will craft a customized itinerary based on your travel dates, family requirements, and budget with zero pressure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 rounded-xl bg-mountain-blue hover:bg-mountain-blue/90 text-white font-semibold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Link href="/contact">
                    Plan Your Custom Trip <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 rounded-xl border-white/20 bg-white/5 hover:bg-white/15 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <a href="tel:+918628839955">
                    <Phone className="h-4 w-4 text-emerald-400" />
                    Call: +91 8628839955
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  100% Native Hill Drivers
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-mountain-blue" />
                  Zero Hidden Charges
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-amber-400" />
                  Weather Reschedule Guarantee
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
