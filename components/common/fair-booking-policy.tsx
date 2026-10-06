"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Compass,
  CreditCard,
  CloudSnow,
  MapPin,
  Clock,
  Sparkles,
  Car,
  Palmtree,
  HelpCircle,
  ArrowRight,
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

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
    <section className={`relative overflow-hidden rounded-3xl border border-saffron/20 bg-linear-to-b from-white via-amber-50/20 to-white p-5 sm:p-8 md:p-10 shadow-xl ${className}`}>
      {/* Decorative hill background subtle gradients */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-saffron/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-forest-green/10 blur-3xl" />

      {/* Header & Badges */}
      <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1 text-xs sm:text-sm font-semibold text-saffron mb-3">
          <ShieldCheck className="h-4 w-4" />
          The TourToHimachal Win-Win Promise
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Transparent Booking & Payment Terms
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          No 100% upfront traps. No hidden hill charges. We believe in fair travel where you feel completely safe with your hard-earned money, and our local drivers & hotels get guaranteed dates.
        </p>
      </div>

      {/* Tabs Switcher: Packages vs Taxi */}
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full mx-auto"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md h-12 p-1 bg-muted/60 rounded-2xl border border-border">
            <TabsTrigger
              value="packages"
              className="rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-saffron data-[state=active]:shadow-sm"
            >
              <Palmtree className="h-4 w-4" />
              Tour Packages (25:50:25)
            </TabsTrigger>
            <TabsTrigger
              value="taxi"
              className="rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-saffron data-[state=active]:shadow-sm"
            >
              <Car className="h-4 w-4" />
              Taxi Services (20:50:30)
            </TabsTrigger>
          </TabsList>
        </div>

        {/* PACKAGE TERMS CONTENT */}
        <TabsContent value="packages" className="space-y-8 focus-visible:outline-none">
          {/* 3 Step Milestone Progress Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Step 1 */}
            <div className="relative rounded-2xl border-2 border-saffron/30 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-saffron/60">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-saffron text-white font-bold text-sm">
                  1
                </span>
                <Badge variant="outline" className="border-saffron/40 text-saffron font-bold text-xs">
                  Booking Day
                </Badge>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                25% Token Advance
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Locks your hotel rooms, vehicle, and itinerary. You receive official stamped booking vouchers within 24 hours.
              </p>
              <div className="rounded-xl bg-amber-50/70 p-2.5 text-[11px] text-amber-900 border border-amber-200/50 space-y-1">
                <p><strong>Customer Win:</strong> Low initial commitment. You don't hand over 50–100% upfront.</p>
                <p><strong>Our Win:</strong> Gives us the advance needed to hold your hotel rooms in busy season.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border-2 border-primary/20 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                  2
                </span>
                <Badge variant="outline" className="border-primary/40 text-primary font-bold text-xs">
                  Day 1 Arrival
                </Badge>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                50% On Hotel Check-In
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Payable only after you reach Himachal, meet your dedicated driver, inspect your vehicle, and check into your first hotel.
              </p>
              <div className="rounded-xl bg-primary/5 p-2.5 text-[11px] text-primary-foreground/90 border border-primary/10 space-y-1">
                <p className="text-foreground"><strong>Customer Win:</strong> You see everything first before making the major payment.</p>
                <p className="text-foreground"><strong>Our Win:</strong> Clears hotel check-in bills and provides fuel & operational funds.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border-2 border-forest-green/30 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-forest-green/60">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-green text-white font-bold text-sm">
                  3
                </span>
                <Badge variant="outline" className="border-forest-green/40 text-forest-green font-bold text-xs">
                  Mid-Journey
                </Badge>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                Remaining 25% Balance
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Payable on Day 3 or mid-way through your vacation, once you are fully comfortable and enjoying your tour.
              </p>
              <div className="rounded-xl bg-green-50/70 p-2.5 text-[11px] text-green-900 border border-green-200/50 space-y-1">
                <p><strong>Customer Win:</strong> Complete peace of mind and leverage throughout your journey.</p>
                <p><strong>Our Win:</strong> Clean, timely wrap-up with a happy, delighted traveler.</p>
              </div>
            </div>
          </div>

          {/* Cancellation Table for Packages */}
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm">
            <h4 className="font-serif text-base sm:text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-saffron" />
              Package Cancellation & Refund Schedule
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Cancellation Notice</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Customer Refund</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Why This Is Fair</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">15+ Days before trip</td>
                    <td className="py-2.5 px-3 text-forest-green font-bold">90% Refund <span className="text-[11px] font-normal text-muted-foreground">(or 100% Credit Note)</span></td>
                    <td className="py-2.5 px-3 text-muted-foreground">Only a flat 10% (or ₹1,000 max) retained for bank gateway & staff reservation charges.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">7 to 14 Days before trip</td>
                    <td className="py-2.5 px-3 text-saffron font-bold">50% Refund</td>
                    <td className="py-2.5 px-3 text-muted-foreground">Hotels lock reservations 2 weeks in advance; we absorb half and recover half.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Less than 7 Days / No-show</td>
                    <td className="py-2.5 px-3 text-destructive font-bold">Non-refundable</td>
                    <td className="py-2.5 px-3 text-muted-foreground">Himachal hotels charge 100% retention on last-minute cancellations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* TAXI TERMS CONTENT */}
        <TabsContent value="taxi" className="space-y-8 focus-visible:outline-none">
          {/* 3 Step Milestone Progress Visualizer for Taxi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Taxi Step 1 */}
            <div className="relative rounded-2xl border-2 border-saffron/30 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-saffron/60">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-saffron text-white font-bold text-sm">
                  1
                </span>
                <Badge variant="outline" className="border-saffron/40 text-saffron font-bold text-xs">
                  Booking Confirmation
                </Badge>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                20% Advance Token
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Min. ₹1,000 or 20% to lock the vehicle model and allocate a verified mountain driver.
              </p>
              <div className="rounded-xl bg-amber-50/70 p-2.5 text-[11px] text-amber-900 border border-amber-200/50 space-y-1">
                <p><strong>Customer Win:</strong> Cab is guaranteed. Driver details & phone shared 12 hrs before pickup.</p>
                <p><strong>Our Win:</strong> Driver doesn't reject other trips only to suffer a no-show cancellation.</p>
              </div>
            </div>

            {/* Taxi Step 2 */}
            <div className="relative rounded-2xl border-2 border-primary/20 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                  2
                </span>
                <Badge variant="outline" className="border-primary/40 text-primary font-bold text-xs">
                  Pickup & Boarding
                </Badge>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                50% On Starting Trip
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Payable only after you board the cab at Chandigarh, Delhi, Kalka, or your pickup station and start moving.
              </p>
              <div className="rounded-xl bg-primary/5 p-2.5 text-[11px] text-primary-foreground/90 border border-primary/10 space-y-1">
                <p className="text-foreground"><strong>Customer Win:</strong> You inspect vehicle cleanliness, AC, and driver documents first.</p>
                <p className="text-foreground"><strong>Our Win:</strong> Covers route diesel/petrol and interstate highway FASTag tolls.</p>
              </div>
            </div>

            {/* Taxi Step 3 */}
            <div className="relative rounded-2xl border-2 border-forest-green/30 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-forest-green/60">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-green text-white font-bold text-sm">
                  3
                </span>
                <Badge variant="outline" className="border-forest-green/40 text-forest-green font-bold text-xs">
                  Safe Drop-off
                </Badge>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                Remaining 30% At Final Drop
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Pay the final 30% balance after you safely reach your destination hotel or return drop airport/station.
              </p>
              <div className="rounded-xl bg-green-50/70 p-2.5 text-[11px] text-green-900 border border-green-200/50 space-y-1">
                <p><strong>Customer Win:</strong> Driver stays courteous and helpful with luggage till the very last minute.</p>
                <p><strong>Our Win:</strong> Seamless payment settlement with 100% happy feedback.</p>
              </div>
            </div>
          </div>

          {/* Cancellation for Taxi */}
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm">
            <h4 className="font-serif text-base sm:text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-saffron" />
              Taxi Cancellation & Modification Rules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-green-50 border border-green-200/60">
                <p className="font-bold text-green-800 mb-1">24+ Hours Before Pickup</p>
                <p className="text-green-700">100% Token Refund or free date change without any penalty.</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                <p className="font-bold text-amber-800 mb-1">12 to 24 Hours Notice</p>
                <p className="text-amber-700">50% Token Refund (retains ₹500 to compensate driver for blocked slot).</p>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200/60">
                <p className="font-bold text-red-800 mb-1">Less than 12 Hours / Car Dispatched</p>
                <p className="text-red-700">Token retained to cover empty kilometer fuel of dispatched vehicle.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* WHY WE ARE DIFFERENT - THE HONEST COMPARISON */}
      <div className="mt-10 sm:mt-12 pt-8 border-t border-border/80">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <Badge className="bg-forest-green/10 text-forest-green border border-forest-green/20 mb-2">
            Clear Differentiation
          </Badge>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
            Why Booking With Us Is Different
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Compare our direct hill hospitality against generic aggregators and unverified roadside operators.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="py-3 px-3 sm:px-4 font-semibold text-foreground">What You Get</th>
                <th className="py-3 px-3 sm:px-4 font-semibold text-muted-foreground">Big Online Portals & Middlemen</th>
                <th className="py-3 px-3 sm:px-4 font-semibold text-saffron bg-saffron/10">TourToHimachal (Direct Hill Hosts)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="py-3 px-3 sm:px-4 font-medium text-foreground">Advance Payment</td>
                <td className="py-3 px-3 sm:px-4 text-muted-foreground flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-destructive shrink-0" />
                  Demand 50% to 100% upfront lock-in
                </td>
                <td className="py-3 px-3 sm:px-4 font-semibold text-foreground bg-saffron/5">
                  <div className="flex items-center gap-1.5 text-forest-green">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Just 20–25% token. Balance as you travel.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-3 px-3 sm:px-4 font-medium text-foreground">Hidden Road Charges</td>
                <td className="py-3 px-3 sm:px-4 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="h-4 w-4 text-destructive shrink-0" />
                    Surprise "hill climb charge", "night driver bhatta" on road
                  </div>
                </td>
                <td className="py-3 px-3 sm:px-4 font-semibold text-foreground bg-saffron/5">
                  <div className="flex items-center gap-1.5 text-forest-green">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>100% All-inclusive quote. Toll, fuel & driver included.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-3 px-3 sm:px-4 font-medium text-foreground">Landslide / Snow Disruption</td>
                <td className="py-3 px-3 sm:px-4 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="h-4 w-4 text-destructive shrink-0" />
                    "Strict policy: Non-refundable, contact hotel yourself"
                  </div>
                </td>
                <td className="py-3 px-3 sm:px-4 font-semibold text-foreground bg-saffron/5">
                  <div className="flex items-center gap-1.5 text-forest-green">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>100% Free date reschedule or scenic route switch.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-3 px-3 sm:px-4 font-medium text-foreground">Driver Quality & Terrain Safety</td>
                <td className="py-3 px-3 sm:px-4 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                    Plain city drivers struggling on steep ghats & snow
                  </div>
                </td>
                <td className="py-3 px-3 sm:px-4 font-semibold text-foreground bg-saffron/5">
                  <div className="flex items-center gap-1.5 text-forest-green">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Native Himachali mountain drivers (8+ yrs hill experience).</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-3 px-3 sm:px-4 font-medium text-foreground">On-Ground Support</td>
                <td className="py-3 px-3 sm:px-4 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="h-4 w-4 text-destructive shrink-0" />
                    Call center bot sitting thousands of kilometers away
                  </div>
                </td>
                <td className="py-3 px-3 sm:px-4 font-semibold text-foreground bg-saffron/5">
                  <div className="flex items-center gap-1.5 text-forest-green">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Local ground team in Himachal ready with backup vehicles.</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* HIMACHAL WEATHER & NATURE GUARANTEE CARD */}
      <div className="mt-8 rounded-2xl border-2 border-amber-300/60 bg-linear-to-r from-amber-50 via-orange-50 to-amber-50 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-saffron text-white shadow-md">
            <CloudSnow className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-950">
              The "Himachal Weather & Road Safety" Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              Mountains can be unpredictable. If high passes (Atal Tunnel, Rohtang, Spiti) or national highways get closed due to heavy snow, landslides, or red weather alerts by the HP administration:
              <strong> We never withhold your unutilized funds.</strong> We will either offer a safe scenic alternate route or provide a <strong>100% credit voucher valid for up to 1 year</strong> with ZERO rescheduling penalties.
            </p>
          </div>
        </div>
      </div>

      {/* ALL-INCLUSIVE ZERO-HIDDEN COST BADGES */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
        <div className="rounded-xl border border-border bg-white/80 p-2.5">
          <p className="text-xs font-semibold text-foreground">✓ State Border Taxes</p>
          <p className="text-[10px] text-muted-foreground">HP entry permit included</p>
        </div>
        <div className="rounded-xl border border-border bg-white/80 p-2.5">
          <p className="text-xs font-semibold text-foreground">✓ Tolls & FASTag</p>
          <p className="text-[10px] text-muted-foreground">All highway tolls covered</p>
        </div>
        <div className="rounded-xl border border-border bg-white/80 p-2.5">
          <p className="text-xs font-semibold text-foreground">✓ Driver Bhatta / Night</p>
          <p className="text-[10px] text-muted-foreground">No extra food/stay fee asked</p>
        </div>
        <div className="rounded-xl border border-border bg-white/80 p-2.5">
          <p className="text-xs font-semibold text-foreground">✓ Clean Hill-Grade Fleet</p>
          <p className="text-[10px] text-muted-foreground">High clearance & sanitized</p>
        </div>
      </div>
    </section>
  )
}
