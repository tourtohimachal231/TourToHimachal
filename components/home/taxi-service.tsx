"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClientOnly } from "@/components/ui/client-only"
import { useSettings } from "@/lib/settings-context"
import {
  Car,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Fuel,
  BadgePercent,
  PhoneCall,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from "@/lib/animation-variants"

const fleetOptions = [
  {
    name: "Innova Crysta",
    category: "SUV • Mountain King",
    capacity: "6-7 Pax",
    luggage: "4 Large Bags",
    bestFor: "Families, rough roads & long hill circuits",
    tag: "Most Popular",
  },
  {
    name: "Swift Dzire / Etios",
    category: "Sedan • Fuel Efficient",
    capacity: "1-4 Pax",
    luggage: "2 Medium Bags",
    bestFor: "Couples, small families & budget transfers",
    tag: "Best Value",
  },
  {
    name: "Force Urbania / Tempo",
    category: "Luxury Mini • Executive",
    capacity: "9-17 Pax",
    luggage: "10+ Bags",
    bestFor: "Pilgrimage groups, corporate & extended family",
    tag: "Luxury Group",
  },
]

const popularRoutes = [
  { name: "Chandigarh ⇄ Manali", duration: "6-7 hrs", note: "Via new 4-lane expressway" },
  { name: "Delhi ⇄ Shimla", duration: "7-8 hrs", note: "Scenic Himalayan expressway" },
  { name: "Chandigarh ⇄ Dharamshala", duration: "5-6 hrs", note: "Direct valley transit" },
  { name: "Una / Amb ⇄ Chintpurni", duration: "45 mins", note: "Dedicated temple darshan" },
  { name: "Kalka ⇄ Shimla Transfer", duration: "3-4 hrs", note: "Toy train station pickup" },
  { name: "Manali ⇄ Atal Tunnel & Sissu", duration: "Day Tour", note: "Snow pass expedition" },
]

export function TaxiService() {
  const { settings } = useSettings()
  const [selectedFleet, setSelectedFleet] = useState(0)

  const activeFleet = fleetOptions[selectedFleet]
  const whatsappNumber = (settings.whatsapp_number || "918628839955").replace(/[^0-9]/g, "") || "918628839955"
  const phone = settings.contact_phone || "+918628839955"

  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white md:py-20 lg:py-24">
      {/* Subtle background ambient lights */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

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
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md"
          >
            <Car className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase md:text-sm">
              Himachal Certified Cab Fleet
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Himalayan Road Travel,{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Engineered for Peace of Mind
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-3 text-base text-slate-300 md:text-lg">
            No haggling, no unexpected hill surcharges. Travel with seasoned local drivers who know every hairpin curve,
            monsoon detour, and winter pass route across Himachal Pradesh.
          </motion.p>
        </motion.div>

        {/* 2-Column Showcase */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Visual Showcase & Fleet Switcher */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="lg:col-span-6"
          >
            {/* Visual Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src="/Images/mountain-drive.jpg"
                  alt="Tour to Himachal Premium Taxi Drive in Mountains"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badge on image */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>100% Hill-Licensed Commercial Cabs</span>
                </div>

                {/* Floating bottom card */}
                <div className="absolute right-4 bottom-4 left-4 z-10 rounded-xl border border-white/10 bg-slate-950/80 p-3.5 backdrop-blur-md sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-amber-400 uppercase">Featured Vehicle</p>
                      <p className="font-serif text-lg font-bold text-white sm:text-xl">{activeFleet.name}</p>
                    </div>
                    <span className="rounded-md bg-amber-500/20 px-2.5 py-1 text-xs font-semibold text-amber-300">
                      {activeFleet.tag}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                      {activeFleet.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Fuel className="h-3.5 w-3.5 text-slate-400" />
                      {activeFleet.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fleet Selection Tabs */}
              <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 bg-slate-900/90">
                {fleetOptions.map((fleet, idx) => (
                  <button
                    key={fleet.name}
                    onClick={() => setSelectedFleet(idx)}
                    type="button"
                    className={`p-3 text-left transition-all ${
                      selectedFleet === idx
                        ? "bg-amber-500/10 border-b-2 border-amber-400"
                        : "hover:bg-slate-800/50"
                    }`}
                  >
                    <p className={`text-xs font-bold ${selectedFleet === idx ? "text-amber-400" : "text-white"}`}>
                      {fleet.name.split(" ")[0]}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">{fleet.capacity}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Guarantees bar */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-2.5">
                <p className="text-xs font-bold text-white">All Tolls Included</p>
                <p className="text-[10px] text-slate-400">Zero hidden checkpoints</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-2.5">
                <p className="text-xs font-bold text-white">Weather Guarantee</p>
                <p className="text-[10px] text-slate-400">Free date adjustment</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-2.5">
                <p className="text-xs font-bold text-white">20% Token Only</p>
                <p className="text-[10px] text-slate-400">Balance on arrival</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Our Cabs & Popular Routes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-6"
          >
            {/* 4 Pillars of Mountain Cab Service */}
            <div className="space-y-3.5">
              <div className="flex gap-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 transition-colors hover:border-slate-700">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Mountain-Vetted Local Drivers</h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Himachali born chauffeurs with 10+ years mastering hairpin turns, fog, snow chains, and safe mountain driving.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 transition-colors hover:border-slate-700">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <BadgePercent className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fixed, Transparent Pricing</h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Fuel, interstate road permits, green cess, and driver night allowances are stated upfront.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 transition-colors hover:border-slate-700">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Punctual Airport & Railway Pickups</h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Live flight/train tracking at Chandigarh (IXC), Delhi (DEL), Gaggal (DHM), and Kalka railway station.
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Routes Chips */}
            <div className="mt-6">
              <div className="mb-2.5 flex items-center justify-between">
                <h4 className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  Popular One-Way & Round Routes
                </h4>
                <span className="text-[11px] text-slate-400">Custom drop anywhere in HP</span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {popularRoutes.map((route) => (
                  <div
                    key={route.name}
                    className="group rounded-lg border border-slate-800 bg-slate-900/70 p-2 transition-all hover:border-amber-400/50 hover:bg-slate-800/80"
                  >
                    <p className="truncate text-xs font-semibold text-white group-hover:text-amber-300">
                      {route.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{route.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action Row */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ClientOnly
                fallback={
                  <Button
                    size="lg"
                    className="h-12 w-full gap-2 rounded-xl bg-emerald-600 font-semibold text-white shadow-lg hover:bg-emerald-500 sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://wa.me/918628839955?text=Hi,%20I%20want%20to%20get%20a%20taxi%20fare%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Get WhatsApp Fare Quote
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                }
              >
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-xl bg-emerald-600 font-semibold text-white shadow-lg hover:bg-emerald-500 sm:w-auto"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20get%20a%20taxi%20fare%20quote`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Get WhatsApp Fare Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </ClientOnly>

              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full gap-2 rounded-xl border-slate-700 bg-slate-900 font-semibold text-white hover:bg-slate-800 hover:text-white sm:w-auto"
                asChild
              >
                <Link href="/taxi">
                  View Vehicles & Rates
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
