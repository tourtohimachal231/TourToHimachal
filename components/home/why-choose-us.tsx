"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

const trustPillars = [
  {
    icon: Compass,
    title: "Born & Rooted in Himachal",
    tag: "Direct Local Team",
    description:
      "Unlike metro-based travel brokers who resell packages to unknown sub-agents, we are born and based in Himachal Pradesh. You speak directly to the local team managing your vehicle and stays.",
    stat: "10+ Years",
    statLabel: "Local Hill Experience",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparent Mountain Pricing",
    tag: "Zero Hidden Surcharges",
    description:
      "State road permits, highway tolls, hill green cess, and driver night stay allowances are clearly stated upfront. What we quote on WhatsApp is the exact final price you pay.",
    stat: "₹0",
    statLabel: "Hidden Checkpoint Fees",
  },
  {
    icon: Sparkles,
    title: "Customized, Unhurried Itineraries",
    tag: "Crafted for Your Pace",
    description:
      "We avoid exhausting checklist tours. Whether traveling with elderly parents needing gentle temple access or couples seeking private cedar retreats, we personalize every day.",
    stat: "100%",
    statLabel: "Flexible Adjustments",
  },
  {
    icon: Clock,
    title: "24/7 Hillside On-Ground Care",
    tag: "Direct Live Helpdesk",
    description:
      "Himalayan weather and mountain roads require real-time attention. Our local coordinators stay connected with your driver throughout the journey to navigate detours effortlessly.",
    stat: "15 Mins",
    statLabel: "Average Response Time",
  },
]

const credentials = [
  { title: "Justdial Top Rated", desc: "Certificate of Excellence Winner" },
  { title: "1,200+ Happy Pilgrims", desc: "Families, couples & group yatris" },
  { title: "Commercial Taxi Fleet", desc: "Insured & hill-licensed vehicles" },
  { title: "Weather Guarantee", desc: "Free rescheduling on pass closures" },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white py-14 md:py-20 lg:py-24">
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 shadow-xs"
          >
            <Award className="h-4 w-4 text-amber-700" />
            <span className="text-xs font-semibold tracking-wider text-amber-900 uppercase md:text-sm">
              Local Trust & Accountability
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            The Difference of Traveling with{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
              True Himachal Insiders
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-3 text-base text-slate-600 md:text-lg">
            We don&apos;t just sell mountain holidays from an air-conditioned call center. We live in Himachal, know the
            roads firsthand, and treat every guest with authentic Pahadi hospitality.
          </motion.p>
        </motion.div>

        {/* 4 Rich Pillars (2x2 Grid) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg sm:p-8"
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="mt-5 font-serif text-xl font-bold text-slate-900 group-hover:text-amber-800 md:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 md:text-base">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Highlight Stat */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                      {pillar.stat}
                    </span>
                    <span className="ml-2 text-xs text-slate-500">{pillar.statLabel}</span>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors group-hover:bg-amber-100 group-hover:text-amber-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Credentials / Trust Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-md sm:p-8 md:mt-12"
        >
          <div className="grid grid-cols-2 gap-4 divide-y divide-slate-800 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {credentials.map((cred, idx) => (
              <div
                key={cred.title}
                className={`flex flex-col justify-center ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                  <p className="font-serif text-base font-bold text-white sm:text-lg">{cred.title}</p>
                </div>
                <p className="mt-1 text-xs text-slate-400 sm:pl-6">{cred.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 sm:flex-row">
            <p className="text-xs text-slate-400">
              Want to speak with someone who actually lives here? Our Chintpurni office is open daily.
            </p>
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>Learn More About Our Team & Story</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
