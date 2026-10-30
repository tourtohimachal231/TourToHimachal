"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Car,
  Hotel,
  FileText,
  Sparkles,
  CalendarCheck,
  Receipt,
  UserCheck,
  Mountain,
  Compass,
  Info,
} from "lucide-react"

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
  const [activeTab, setActiveTab] = useState<"packages" | "taxi">(defaultTab)

  return (
    <section
      aria-label="Transparent Booking, Milestone Payments & High-Pass Permit Terms"
      className={`relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
    >
      {/* Refined Header */}
      <div className="relative mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Transparent Milestone Terms</span>
        </div>

        <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Zero 100% Upfront Stress. Pay as Your Trip Unfolds.
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          We believe genuine mountain hospitality begins with mutual trust. Your funds stay safe with phased milestone payments tied directly to your travel progress, with full clearance upon reaching your destination hotel.
        </p>
      </div>

      {/* Modern Segmented Tab Switcher */}
      <div className="mb-8 flex justify-center sm:mb-10">
        <div className="inline-flex max-w-full items-center rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("packages")}
            className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${
              activeTab === "packages"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Hotel className="h-4 w-4 text-amber-600 shrink-0" />
            <span>Complete Holiday Packages</span>
            <span
              className={`hidden rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-wide sm:inline-block ${
                activeTab === "packages"
                  ? "bg-amber-50 text-amber-800 border border-amber-200/60"
                  : "bg-slate-200/60 text-slate-600"
              }`}
            >
              Hotels + Cab
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("taxi")}
            className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${
              activeTab === "taxi"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Car className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Cab & Fleet Rental Only</span>
            <span
              className={`hidden rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-wide sm:inline-block ${
                activeTab === "taxi"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                  : "bg-slate-200/60 text-slate-600"
              }`}
            >
              Transfers Only
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "packages" ? (
          <motion.div
            key="packages-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Visual Milestone Progress Track */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
              <div className="mb-3 flex flex-col justify-between gap-1 text-xs sm:flex-row sm:items-center">
                <span className="font-semibold text-slate-800">
                  Holiday Package Milestone Schedule
                </span>
                <span className="text-slate-600">
                  <strong className="text-slate-900 font-semibold">100%</strong> of tour payment is cleared upon destination hotel arrival on Day 1
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5">
                <div
                  className="h-full rounded-l-full bg-amber-500 transition-all duration-500"
                  style={{ width: "25%" }}
                  title="25% Confirmation Token"
                />
                <div
                  className="h-full bg-sky-600 transition-all duration-500"
                  style={{ width: "50%" }}
                  title="50% On Boarding Vehicle"
                />
                <div
                  className="h-full rounded-r-full bg-emerald-600 transition-all duration-500"
                  style={{ width: "25%" }}
                  title="25% Upon Destination Hotel Arrival"
                />
              </div>

              {/* Step Keyline Summary */}
              <div className="mt-2.5 grid grid-cols-3 text-center text-[11px] font-medium text-slate-600">
                <div className="flex items-center justify-start gap-1">
                  <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                  <span>25% at Booking</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-sky-600 shrink-0" />
                  <span>50% on Boarding (Day 1)</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>25% at Destination Hotel</span>
                </div>
              </div>
            </div>

            {/* 3 Connected Milestone Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
              {/* Milestone 1 */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Milestone 01
                    </span>
                    <span className="rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                      Booking Day
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      25%
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-amber-700">
                      Confirmation Token
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    Room & Vehicle Reservation
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Locks your hotel room reservations across hill stations during peak demand and allocates your dedicated vehicle and commercial hill chauffeur.
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                    <span>Official stamped booking voucher issued within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                    <span>Direct hotel confirmation voucher numbers provided for verification</span>
                  </div>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Milestone 02
                    </span>
                    <span className="rounded-full border border-sky-200/80 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900">
                      Day 1 Pickup
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      50%
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-sky-700">
                      On Boarding Vehicle
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    Inspect, Board & Depart
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Payable when your assigned driver arrives at your pickup hub (Chandigarh, Kalka, Delhi, or airport/station) and you inspect and board your vehicle on Day 1.
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Car className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                    <span>Verify vehicle cleanliness, luggage space, and AC firsthand</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hotel className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                    <span>Clears onward route fuel, expressway FASTag tolls, and driver transit</span>
                  </div>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Milestone 03
                    </span>
                    <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-900">
                      Destination Hotel
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      25%
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-emerald-700">
                      Full Tour Clearance
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    Cleared on Destination Arrival
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Payable immediately upon reaching your destination hotel on Day 1 to complete room check-in and clear 100% of tour payment before onward sightseeing transfers begin.
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>100% tour payment is cleared upon destination hotel arrival on Day 1</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Receipt className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>Enables smooth room check-ins and undisturbed onward sightseeing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Transparency Note */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Why 100% Payment is Cleared Upon Reaching the Destination Hotel:
                  </h4>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    Our operations team coordinates travel across multiple mountain valleys, where local chauffeurs and partner hotel staff are dedicated strictly to passenger safety and hospitality. Our on-ground drivers and hotel reception teams are not authorized to manage payment collections or resolve billing disputes during the tour or upon final checkout. Clearing the remaining balance upon reaching your destination hotel on Day 1 guarantees zero roadside friction, prevents misunderstandings, and ensures that the rest of your vacation proceeds with uninterrupted comfort.
                  </p>
                </div>
              </div>
            </div>

            {/* Cancellation & Flexibility Tiers */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 md:p-7">
              <div className="mb-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900 sm:text-lg">
                    <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                    Fair Cancellation & Rescheduling Terms
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Clear notice windows designed to pass on maximum flexibility while respecting hotel block reservations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
                {/* 15+ Days */}
                <div className="flex flex-col justify-between rounded-xl border border-emerald-200/80 bg-white p-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">15+ Days Prior</span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                        Max Flexibility
                      </span>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-bold text-emerald-700">
                        90% Refund
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        or 100% 1-Year Credit Voucher
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-500">
                    Nominal 10% (max ₹1,000) retained for payment gateway and hotel reservation admin costs.
                  </p>
                </div>

                {/* 7 to 14 Days */}
                <div className="flex flex-col justify-between rounded-xl border border-amber-200/80 bg-white p-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">7 to 14 Days Prior</span>
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 border border-amber-200/60">
                        Partial Retention
                      </span>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-bold text-amber-800">
                        50% Refund
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        Immediate balance return
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-500">
                    Hotels in Himachal hill stations enforce partial retention for rooms released 2 weeks before arrival.
                  </p>
                </div>

                {/* Under 7 Days */}
                <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Under 7 Days</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border border-slate-200">
                        Standard Terms
                      </span>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-bold text-slate-800">
                        Advance Retained
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        100% room commitment
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-500">
                    Hill destination properties enforce 100% room retention on last-minute releases.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="taxi-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Visual Milestone Progress Track for Fleet */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
              <div className="mb-3 flex flex-col justify-between gap-1 text-xs sm:flex-row sm:items-center">
                <span className="font-semibold text-slate-800">
                  Cab & Fleet Rental Milestone Schedule
                </span>
                <span className="text-slate-600">
                  <strong className="text-slate-900 font-semibold">100%</strong> of cab fare is cleared upon destination hotel arrival / station drop
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5">
                <div
                  className="h-full rounded-l-full bg-amber-500 transition-all duration-500"
                  style={{ width: "25%" }}
                  title="25% Advance Token"
                />
                <div
                  className="h-full bg-sky-600 transition-all duration-500"
                  style={{ width: "50%" }}
                  title="50% On Boarding Cab"
                />
                <div
                  className="h-full rounded-r-full bg-emerald-600 transition-all duration-500"
                  style={{ width: "25%" }}
                  title="25% Upon Destination Hotel Arrival"
                />
              </div>

              {/* Step Keyline Summary */}
              <div className="mt-2.5 grid grid-cols-3 text-center text-[11px] font-medium text-slate-600">
                <div className="flex items-center justify-start gap-1">
                  <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                  <span>25% at Booking</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-sky-600 shrink-0" />
                  <span>50% when Boarding (Day 1)</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>25% at Destination Hotel</span>
                </div>
              </div>
            </div>

            {/* 3 Connected Milestone Cards for Fleet */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
              {/* Step 1 */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Milestone 01
                    </span>
                    <span className="rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                      Booking Day
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      25%
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-amber-700">
                      Advance Token (or ₹1,000)
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    Vehicle & Chauffeur Reservation
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Guarantees your selected vehicle category (Innova Crysta, Dzire, Ertiga, or Force Urbania) and allocates an experienced mountain chauffeur.
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Car className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>Guaranteed vehicle model with clean commercial registration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <UserCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>Driver details & direct phone shared 12 hrs before pickup</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Milestone 02
                    </span>
                    <span className="rounded-full border border-sky-200/80 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900">
                      Pickup Hub
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      50%
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-sky-700">
                      On Boarding Cab
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    Board, Verify, Then Depart
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Payable only after you meet your chauffeur at Chandigarh, Delhi, Kalka, or your pickup station, inspect vehicle cleanliness, and start your journey.
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                    <span>Inspect vehicle AC, boot capacity, and cleanliness firsthand</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Receipt className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                    <span>Covers expressway highway tolls and hill route fuel</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Milestone 03
                    </span>
                    <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-900">
                      Destination Arrival
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      25%
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-emerald-700">
                      Full Fare Clearance
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    Cleared on Destination Arrival
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Payable upon reaching your destination hotel or final drop on Day 1, clearing 100% of the cab fare so chauffeur and traveler have zero payment disputes.
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>100% cab fare cleared upon reaching destination hotel / drop point</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>Zero roadside payment friction for remaining days or transfers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fleet Cancellation Rules */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 md:p-7">
              <div className="mb-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900 sm:text-lg">
                    <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                    Fleet-Only Cancellation & Rescheduling Terms
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Because no hotel rooms are locked, taxi bookings enjoy maximum date flexibility and straightforward cancellation rules.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
                <div className="flex flex-col justify-between rounded-xl border border-emerald-200/80 bg-white p-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">24+ Hours Prior</span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                        100% Protected
                      </span>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-bold text-emerald-700">
                        100% Full Refund
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        or Free Date Reschedule
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-500">
                    Cancel or change your travel date without any cancellation fee or deduction.
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-amber-200/80 bg-white p-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">12 to 24 Hours</span>
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 border border-amber-200/60">
                        Partial Notice
                      </span>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-bold text-amber-800">
                        50% Refund
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        Driver slot protection
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-500">
                    Nominal ₹500 retained to compensate driver for their allocated mountain slot.
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Under 12 Hours</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border border-slate-200">
                        Dispatched
                      </span>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-bold text-slate-800">
                        Token Retained
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        Empty km fuel cost
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-500">
                    Advance token covers empty vehicle dead-mileage fuel once vehicle is en route.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Special Permits & Road Closures Advisory Section */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 sm:mt-10">
        {/* Special Permits Card (Rohtang Pass & Atal Tunnel Beyond-Routes) */}
        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-slate-900 shadow-2xs sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 ring-1 ring-amber-500/30">
              <Compass className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                  Special High-Pass Permits
                </h3>
                <span className="rounded-full bg-amber-200/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
                  Rohtang & Atal Tunnel
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
                Certain high-altitude mountain locations — specifically <strong>Rohtang Pass</strong> (which requires an NGT Green Permit issued by the District Administration) and special transit routes beyond <strong>Atal Tunnel</strong> (towards Sissu, Koksar, or Keylong) — are strictly regulated by the Himachal Pradesh Government and Border Roads Organisation (BRO).
              </p>

              <div className="mt-3 space-y-1.5 border-t border-amber-200/60 pt-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span><strong>Excluded from Standard Quotes:</strong> High-pass permit fees are excluded from base package and taxi rates due to dynamic government quotas and seasonal weather.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span><strong>Subject to Route Status:</strong> These passes open or close dynamically based on snowfall and official clearance. If open, we detail the permit in your itinerary and charge strictly as per actuals.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Road Closures & Adverse Weather Route Adjustments */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-2xs sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400 ring-1 ring-white/20">
              <Mountain className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-base font-bold text-white sm:text-lg">
                  Road Closures & Safety
                </h3>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  Safety First Policy
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                High-altitude mountain highways (such as Rohtang Pass, Atal Tunnel, Kunzum Pass, or Spiti Valley routes) can occasionally face temporary closure due to heavy snowfall, landslides, or official administrative travel advisories.
              </p>

              <div className="mt-3 space-y-1.5 border-t border-slate-800 pt-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span><strong>Safe Alternate Routing:</strong> Our operations team promptly coordinates safe alternate itineraries with zero rescheduling penalties.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span><strong>Travel Credit Protection:</strong> Any unutilized package components are preserved as a 12-month travel credit voucher.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zero Hidden Charges Trust Strip */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-center">
        <div className="flex flex-col justify-center rounded-xl border border-slate-200/90 bg-slate-50/60 p-3.5 transition-colors hover:bg-slate-50">
          <p className="text-xs font-bold text-slate-900">HP State Border Taxes</p>
          <p className="mt-1 text-[11px] text-slate-600">State entry permits fully included</p>
        </div>

        <div className="flex flex-col justify-center rounded-xl border border-slate-200/90 bg-slate-50/60 p-3.5 transition-colors hover:bg-slate-50">
          <p className="text-xs font-bold text-slate-900">Highway Tolls & FASTag</p>
          <p className="mt-1 text-[11px] text-slate-600">All expressway tolls covered</p>
        </div>

        <div className="flex flex-col justify-center rounded-xl border border-slate-200/90 bg-slate-50/60 p-3.5 transition-colors hover:bg-slate-50">
          <p className="text-xs font-bold text-slate-900">Driver Allowance & Stays</p>
          <p className="mt-1 text-[11px] text-slate-600">Night bhatta included in quote</p>
        </div>

        <div className="flex flex-col justify-center rounded-xl border border-amber-200/80 bg-amber-50/50 p-3.5 transition-colors hover:bg-amber-50">
          <p className="text-xs font-bold text-amber-950">Rohtang NGT Permits</p>
          <p className="mt-1 text-[11px] text-amber-800">Excluded; payable at actuals if open</p>
        </div>
      </div>
    </section>
  )
}
