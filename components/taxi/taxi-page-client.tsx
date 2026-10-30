"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Car, Calendar, Shield, Zap, Users, Gauge } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { TaxiHero } from "@/components/taxi/taxi-hero"
import { Button } from "@/components/ui/button"
import { VehicleCard } from "@/components/taxi/vehicle-card"
import { RouteCard } from "@/components/taxi/route-card"
import { TaxiBookingForm } from "@/components/taxi/taxi-booking-form"
import { SafetyFeatures } from "@/components/taxi/safety-features"
import { Testimonials } from "@/components/home/testimonials"
import { PackageFAQ } from "@/components/packages/package-faq"
import { FairBookingPolicy } from "@/components/common/fair-booking-policy"
import { useSettings } from "@/lib/settings-context"
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animation-variants"

interface Vehicle {
  id: string
  name: string
  type: string
  capacity: number
  luggage_capacity?: number
  base_fare: number
  per_km_rate: number
  features?: string[]
  image_url?: string
  is_available: boolean
}

interface Route {
  id: string
  from_location: string
  to_location: string
  distance_km: number
  estimated_time: string
  base_fare: number
  is_active: boolean
}

interface TaxiPageClientProps {
  vehicles: Vehicle[]
  routes: Route[]
}

const taxiFaqs = [
  {
    question: "How much advance payment is required for taxi booking?",
    answer:
      "We require a 25% token advance (minimum ₹1,000) to confirm your cab category and assign a verified mountain chauffeur. 50% is payable when you inspect and board the car on Day 1, and the remaining 25% balance is cleared upon reaching your destination hotel on Day 1.",
  },
  {
    question: "Are Rohtang Pass and Atal Tunnel permits included in taxi fares?",
    answer:
      "No. High-altitude passes such as Rohtang Pass (NGT Green Permit) and special beyond-tunnel transit passes are strictly excluded from base taxi rates because they depend on daily government vehicle quotas and seasonal weather openings. If open during your travel dates and requested, permit fees are payable as per actuals.",
  },
  {
    question: "What if roads are blocked by landslides or heavy snowfall?",
    answer:
      "Your safety comes first. If routes like Atal Tunnel, Rohtang, or national highways are closed by authorities, we do not deduct cancellation fees. We either offer a safe scenic alternate route or provide a 100% credit voucher valid for up to 1 year.",
  },
  {
    question: "Are toll taxes, state border permits, and driver allowance included?",
    answer:
      "Yes! Our quoted taxi fares clearly cover standard Himachal state entry permits, FASTag toll taxes, and driver night allowance (bhatta) with zero hidden roadside surcharges.",
  },
  {
    question: "Are your drivers trained for Himalayan mountain roads?",
    answer:
      "Yes, absolutely. All our drivers are Himachal-native mountain specialists with extensive ghat driving and hill navigation experience, holding valid commercial driving licenses.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes! You can cancel or reschedule for free up to 24 hours before your scheduled pickup time with 100% token refund.",
  },
]

export function TaxiPageClient({ vehicles, routes }: TaxiPageClientProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const { settings } = useSettings()
  const chooseVehicleRef = useRef<HTMLElement>(null)

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle.name)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-background flex-grow pb-8 overflow-x-hidden safe-area-bottom">
      <Header />

      <TaxiHero />

      {/* Operational Highlights - Batch 3A Tokens & Verified Grounding */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30 py-8 md:py-10 border-b border-slate-100">
        <div className="relative container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6"
          >
            {[
              {
                value: "Native",
                label: "Himachal Route Specialists",
                icon: Shield,
                description: "Deep route familiarity on mountain ghats and bypasses",
              },
              {
                value: "Local",
                label: "Experienced Hill Drivers",
                icon: Users,
                description: "Courteous drivers holding valid commercial licenses",
              },
              {
                value: "Clean",
                label: "Well-Maintained Fleet",
                icon: Car,
                description: "Sedans, MPVs, SUVs, Tempo Travellers & Luxury Urbania ready for hills",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div key={index} variants={fadeInUp} className="group relative">
                  <div className="relative mx-auto max-w-sm rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                    <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-mountain-blue shadow-xs">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </p>

                    <p className="text-sm font-semibold text-slate-800 mb-1">
                      {stat.label}
                    </p>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Vehicle Types */}
      {vehicles.length > 0 && (
        <section id="choose-vehicle" ref={chooseVehicleRef} className="bg-slate-50/50 py-10 sm:py-12 border-b border-slate-100">
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 text-center md:mb-10"
            >
              <h2 className="text-foreground mb-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Choose Your Vehicle</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
                Select your preferred cab model to automatically populate your booking enquiry
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            >
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  isSelected={selectedVehicle === vehicle.name || selectedVehicle === vehicle.id}
                  onSelect={() => handleVehicleSelect(vehicle)}
                />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Popular Routes */}
      {routes.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-foreground mb-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Popular Routes & Fares</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
                Transparent one-way cab fares for top Himachal sectors. Prices shown are for one-way drops — round-trip & return rates differ.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1 text-xs sm:text-sm font-medium text-amber-900 shadow-2xs">
                <span>All listed fares are for <strong>one-way drop</strong> only. Round trip and local sightseeing fares differ based on itinerary.</span>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {routes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Fair Booking & Payment Promise Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <FairBookingPolicy defaultTab="taxi" />
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-muted/30 py-16" id="book">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                <Image
                  src="/Images/mountain-drive.jpg"
                  alt="Himachal mountain cab journey with scenic Himalayan peaks"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>

              <div>
                <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-mountain-blue border border-sky-200/80 mb-3">
                  Verified Local Fleet & Native Drivers
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                  Direct Cab Booking with Native Hill Drivers
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                  From airport pickups to multi-day hill journeys, our local dispatch team in Chintpurni pairs you with vetted, commercial mountain drivers who know every ghat road, weather condition, and scenic bypass.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: "Native Hill Road Specialists",
                      description: "Courteous drivers native to Himachal mountain routes with commercial hill permits.",
                      icon: Shield,
                    },
                    {
                      title: "Fixed Upfront Pricing",
                      description: "Toll taxes, state entry permits, fuel, and driver night allowances all pre-calculated.",
                      icon: Car,
                    },
                    {
                      title: "100% Weather Rescheduling",
                      description: "Zero cancellation fees if mountain passes or highways are closed by local authorities.",
                      icon: Calendar,
                    },
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs transition-colors hover:border-slate-300"
                      >
                        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-mountain-blue">
                          <IconComponent className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 mb-0.5">{item.title}</p>
                          <p className="text-xs text-slate-500 leading-normal">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            <TaxiBookingForm
              selectedVehicle={selectedVehicle}
              onVehicleChange={(name) => setSelectedVehicle(name)}
              availableVehicles={vehicles.map((v) => ({ id: v.id, name: v.name, capacity: v.capacity }))}
            />
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">Safety & Features</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Your safety is our priority. Here is what we offer with every ride.
            </p>
          </motion.div>
          <SafetyFeatures />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-foreground mb-8 text-center font-serif text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <PackageFAQ faqs={taxiFaqs} />
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="bg-background border-border fixed right-0 bottom-0 left-0 z-40 border-t p-4 lg:hidden safe-area-bottom">
        <div className="flex gap-3">
          <Button asChild className="bg-slate-900 hover:bg-slate-800 flex-1 gap-2 text-white">
            <a href="#book">
              <Car className="h-5 w-5" />
              Book a Ride
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-slate-300">
            <a
              href={`https://wa.me/${(settings.whatsapp_number || "918628839955").replace(/[^0-9]/g, "")}?text=Hi,%20I%20want%20to%20enquire%20about%20taxi%20services`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="sr-only">Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="pb-20 lg:pb-0">
        <Footer />
      </div>
    </main>
    </div>
  )
}
