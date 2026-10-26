"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Car,
  Hotel,
  CloudSnow,
  BadgePercent,
  FileCheck2,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface FairBookingPolicyProps {
  defaultTab?: "packages" | "taxi"
  compact?: boolean
  className?: string
}

export function FairBookingPolicy({
  defaultTab = "packages",
  compact = false,
  className = "",
}: FairBookingPolicyProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab)

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 md:p-10 ${className}`}
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Header */}
      <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-800 uppercase sm:text-sm">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          Transparent Booking & Payment Terms
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Clear Milestone Payments, Zero Hidden Charges
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Whether you need a complete holiday package with hotel reservations or simply dedicated cabs and fleets for
          your journey, our milestone-based schedules keep your funds secure every step of the way.
        </p>
      </div>

      {/* Service Mode Selector */}
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mx-auto w-full">
        <div className="mb-8 flex justify-center">
          <TabsList className="grid h-auto w-full max-w-xl grid-cols-1 gap-2 rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5 sm:grid-cols-2">
            <TabsTrigger
              value="packages"
              className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm sm:text-sm"
            >
              <Hotel className="h-4 w-4 text-amber-600" />
              <div className="text-left">
                <p className="leading-tight">Holiday Packages</p>
                <p className="text-[10px] font-normal text-slate-500">Hotels + Dedicated Cab</p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="taxi"
              className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm sm:text-sm"
            >
              <Car className="h-4 w-4 text-emerald-600" />
              <div className="text-left">
                <p className="leading-tight">Cab & Fleet Rental Only</p>
                <p className="text-[10px] font-normal text-slate-500">Transfers & Sightseeing (No Hotels)</p>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* ----------------- TAB 1: COMPLETE TOUR PACKAGES (WITH HOTELS) ----------------- */}
        <TabsContent value="packages" className="space-y-8 focus-visible:outline-none">
          {/* Service Clarification Notice */}
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 sm:text-sm">
            <p className="font-semibold text-amber-900">
              Applies to Complete Holiday Packages (Hotel Stays + Dedicated Cab + Sightseeing)
            </p>
            <p className="mt-1 text-xs text-amber-800">
              When booking a complete tour, hotel rooms in Shimla, Manali, Dharamshala, or Dalhousie are held in your name.
              Payment is divided across three milestones so you never pay 100% upfront.
            </p>
          </div>

          {/* 3 Milestone Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {/* Step 1 */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    1
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                    Booking Day
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  25% Confirmation Token
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Secures your hotel room reservations during peak hill seasons and allocates your dedicated vehicle and chauffeur.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Official stamped booking voucher issued within 24 hrs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Direct hotel confirmation voucher numbers provided</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    2
                  </span>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-900">
                    Day 1 Arrival
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  50% On Hotel Check-In
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Payable only after you reach Himachal, meet your assigned driver, inspect your vehicle, and check into your first destination hotel.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Inspect vehicle cleanliness and comfort firsthand</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Clears initial hotel check-in and route fuel funds</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    3
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-900">
                    Mid-Tour (Day 3/4)
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  25% Remaining Balance
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Payable midway through your itinerary once you are comfortably settled and experiencing your vacation.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Complete peace of mind throughout the initial days</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Official digital GST receipt issued upon settlement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellation Schedule for Packages */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-6">
            <h4 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900 sm:text-lg">
              <Clock className="h-4 w-4 text-amber-600" />
              Package Cancellation & Room Retention Schedule
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Hotels in Himachal enforce strict retention windows during busy seasons. We pass on maximum flexibility.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <th className="py-2.5 px-3 font-semibold">Notice Period</th>
                    <th className="py-2.5 px-3 font-semibold">Refund Policy</th>
                    <th className="py-2.5 px-3 font-semibold">Operational Terms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-3 font-medium text-slate-900">15+ Days before trip</td>
                    <td className="py-3 px-3 font-bold text-emerald-700">
                      90% Refund <span className="text-xs font-normal text-slate-500">or 100% Credit Voucher</span>
                    </td>
                    <td className="py-3 px-3 text-xs text-slate-500">
                      Nominal 10% (or ₹1,000 max) retained for payment gateway & hotel reservation overhead.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium text-slate-900">7 to 14 Days before trip</td>
                    <td className="py-3 px-3 font-bold text-amber-700">50% Refund</td>
                    <td className="py-3 px-3 text-xs text-slate-500">
                      Hotels charge partial retention for rooms released 2 weeks prior to arrival.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium text-slate-900">Less than 7 Days / No-show</td>
                    <td className="py-3 px-3 font-bold text-red-600">Advance Non-Refundable</td>
                    <td className="py-3 px-3 text-xs text-slate-500">
                      Hotels in hill stations enforce 100% retention on last-minute cancellations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ----------------- TAB 2: CAB & FLEET RENTAL ONLY (NO HOTELS) ----------------- */}
        <TabsContent value="taxi" className="space-y-8 focus-visible:outline-none">
          {/* Service Clarification Notice */}
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-4 text-xs text-emerald-950 sm:text-sm">
            <p className="font-semibold text-emerald-900">
              For Travelers Requiring Only Taxis, Airport Pickups, or Fleet Hire (No Hotel Bookings)
            </p>
            <p className="mt-1 text-xs text-emerald-800">
              Already booked your own stays or only need a one-way transfer, airport pickup, or private cab for local
              sightseeing? Fleet-only rentals have NO hotel retention penalties and offer maximum flexibility.
            </p>
          </div>

          {/* 3 Milestone Cards for Fleet */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {/* Fleet Step 1 */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    1
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-900">
                    Booking Confirmation
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  20% Advance Token
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Flat ₹1,000 or 20% to lock your exact vehicle category (Innova Crysta, Dzire, or Force Urbania) and assign a licensed mountain driver.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Guaranteed vehicle model with driver assigned</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Driver details and phone shared 12 hrs before pickup</span>
                </li>
              </ul>
            </div>

            {/* Fleet Step 2 */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    2
                  </span>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-900">
                    Boarding & Trip Start
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  50% On Boarding Cab
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Payable only after you board the cab at Chandigarh, Delhi, Kalka, or your pickup station, ensuring vehicle cleanliness meets your standards.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Inspect vehicle AC, cleanliness, and boot space first</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Covers highway tolls and onward hill route fuel</span>
                </li>
              </ul>
            </div>

            {/* Fleet Step 3 */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    3
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-900">
                    Final Destination Drop
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  30% Balance at Drop-off
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Pay the remaining 30% balance directly to the driver only when you reach your final hotel, airport, or railway station safely.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>No upfront payment anxiety on long mountain routes</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>Luggage assistance and courteous service until drop</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellation Schedule for Fleet Only */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-6">
            <h4 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900 sm:text-lg">
              <Clock className="h-4 w-4 text-emerald-600" />
              Fleet-Only Cancellation & Rescheduling Rules
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Because no hotel rooms are locked, taxi cancellations are straightforward and free of third-party penalties.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
                <p className="font-bold text-emerald-900">24+ Hours Before Pickup</p>
                <p className="mt-1 text-xs leading-relaxed text-emerald-800">
                  <strong>100% Token Refund</strong> or free date rescheduling with zero cancellation penalty.
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                <p className="font-bold text-amber-900">12 to 24 Hours Notice</p>
                <p className="mt-1 text-xs leading-relaxed text-amber-800">
                  <strong>50% Token Refund</strong> (nominal ₹500 retained to compensate driver for the blocked shift).
                </p>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50/60 p-4">
                <p className="font-bold text-red-900">Less than 12 Hours / Dispatched</p>
                <p className="mt-1 text-xs leading-relaxed text-red-800">
                  Token retained to cover empty kilometer fuel of the dispatched mountain vehicle.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Himalayan Weather & Road Safety Guarantee */}
      <div className="mt-8 rounded-2xl border border-amber-300/80 bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-amber-50/90 p-5 sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-white shadow-md">
            <CloudSnow className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-amber-950 sm:text-lg">
              Himachal Weather & Road Pass Protection
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-amber-900/90 sm:text-sm">
              If high-altitude passes (Atal Tunnel, Rohtang Pass, Spiti route) or national highways close due to heavy
              snowfall, landslides, or official administration weather advisories, <strong>your unutilized funds remain 100% protected</strong>.
              We provide an immediate safe scenic alternate route or a <strong>1-year credit voucher</strong> with zero rescheduling fees.
            </p>
          </div>
        </div>
      </div>

      {/* Transparent Pricing Inclusions Strip */}
      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 text-center">
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs font-semibold text-slate-900">State Border Taxes</p>
          <p className="mt-0.5 text-[11px] text-slate-500">HP entry permit included</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs font-semibold text-slate-900">Highway Tolls & FASTag</p>
          <p className="mt-0.5 text-[11px] text-slate-500">All expressway tolls covered</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs font-semibold text-slate-900">Driver Night Allowance</p>
          <p className="mt-0.5 text-[11px] text-slate-500">Zero extra roadside demands</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs font-semibold text-slate-900">Clean Hill Fleet</p>
          <p className="mt-0.5 text-[11px] text-slate-500">High ground clearance & inspected</p>
        </div>
      </div>
    </section>
  )
}
