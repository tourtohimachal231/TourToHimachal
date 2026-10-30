"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"
import { Compass, Heart, Mountain, Sparkles, Trees, ArrowRight, MapPin, Calendar } from "lucide-react"

function getImageUrl(url: string): string {
  if (!url) return "/placeholder.svg"
  const trimmed = url.trim()
  return trimmed.startsWith("/http") ? trimmed.slice(1) : trimmed
}

interface TravelTheme {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  duration: string
  image: string
  icon: typeof Compass
  href: string
  highlights: string[]
}

const themes: TravelTheme[] = [
  {
    id: "spiritual",
    title: "Spiritual & Devi Darshan",
    subtitle: "Sacred Temple Circuits",
    description: "Blessings at Mata Chintpurni, Jwala Ji, Kangra Devi, Chamunda Devi & Baglamukhi.",
    badge: "Most Revered",
    duration: "4 - 8 Days",
    image: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795732/qyc7j6ckdxwsx2taf1d9.webp",
    icon: Compass,
    href: "/packages?theme=spiritual",
    highlights: ["Temple Darshan Help", "Pilgrim Homestays", "Local Driver & Guide"],
  },
  {
    id: "honeymoon",
    title: "Honeymoon & Romantic Getaways",
    subtitle: "Misty Valleys & Cozy Stays",
    description: "Private cab, luxury valley-view suites, candlelight dinners in Shimla, Manali & Kullu.",
    badge: "Couples Choice",
    duration: "5 - 7 Days",
    image: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795334/cp0egvkhziyen6h57ffg.webp",
    icon: Heart,
    href: "/packages?theme=honeymoon",
    highlights: ["Valley View Cottages", "Flower Bed Decor", "Solang & Rohtang Drives"],
  },
  {
    id: "adventure",
    title: "High Altitude & Spiti Expeditions",
    subtitle: "Rugged Passes & Glacial Lakes",
    description: "Atal Tunnel, Chandratal Lake, Kunzum Pass, Kaza & Rohtang Pass 4x4 adventures.",
    badge: "Thrill Seekers",
    duration: "6 - 11 Days",
    image: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795291/bacq5glu6429fkmwvv6b.webp",
    icon: Mountain,
    href: "/packages?theme=adventure",
    highlights: ["Acclimatized Routes", "Experienced Hill Drivers", "Camps & Homestays"],
  },
  {
    id: "family",
    title: "Scenic Valleys & Hill Retreats",
    subtitle: "Dharamshala, Dalhousie & Khajjiar",
    description: "Lush cedar pine forests, tea gardens, serene monasteries, and Switzerland of India.",
    badge: "Family Favorite",
    duration: "5 - 8 Days",
    image: "/Images/about-hero.jpg",
    icon: Trees,
    href: "/packages?theme=family",
    highlights: ["Peaceful Hill Stations", "Gentle Sightseeing", "Comfortable Transfers"],
  },
]

export function TravelThemes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-12 md:py-16 lg:py-20">
      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 shadow-xs"
          >
            <Sparkles className="h-4 w-4 text-amber-700" />
            <span className="text-xs font-semibold tracking-wider text-amber-900 uppercase md:text-sm">
              Curated Travel Styles
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            Explore Himachal by{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
              Your Theme
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-3 text-base text-slate-600 md:text-lg">
            Every traveler experiences the mountains differently. Choose the journey style that speaks to your soul,
            from sacred temple yatras to high-altitude road trips.
          </motion.p>
        </motion.div>

        {/* Dynamic 4-Theme Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {themes.map((theme) => {
            const Icon = theme.icon
            return (
              <motion.div
                key={theme.id}
                variants={fadeInUp}
                className="group relative flex h-[440px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-xl"
              >
                <Link href={theme.href} className="absolute inset-0 z-10">
                  <span className="sr-only">Explore {theme.title}</span>
                </Link>

                {/* Background Image with crisp zoom */}
                <Image
                  src={getImageUrl(theme.image)}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />

                {/* Natural Dark Vignette (clean & readable, no muddy colors) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/0" />

                {/* Top Badges */}
                <div className="absolute top-4 right-4 left-4 z-20 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <Icon className="h-3.5 w-3.5 text-amber-400" />
                    {theme.badge}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-900 shadow-xs backdrop-blur-md">
                    <Calendar className="h-3 w-3 text-slate-700" />
                    {theme.duration}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="relative z-20 p-5 transition-transform duration-300">
                  <p className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
                    {theme.subtitle}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-bold text-white md:text-2xl">
                    {theme.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                    {theme.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {theme.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium text-slate-200 backdrop-blur-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Explore button indicator */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                    <span className="text-xs font-semibold text-white group-hover:text-amber-300">
                      View Tour Packages
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-500 group-hover:text-slate-950">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Multi-destination invitation bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xs sm:flex-row sm:px-6 md:mt-10"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Traveling Beyond Himachal Pradesh?
              </p>
              <p className="text-xs text-slate-600">
                We also craft seamless journeys to Kashmir & Srinagar, the Andaman Islands, and Thailand.
              </p>
            </div>
          </div>
          <Link
            href="/about#expanding-horizons"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            <span>See Other Destinations</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
