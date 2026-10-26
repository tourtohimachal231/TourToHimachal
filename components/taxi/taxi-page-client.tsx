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
      "We only take a small 20% token advance (minimum ₹1,000 for local rides) to lock your cab model and assign a verified mountain driver. 50% is payable when you board the car on Day 1, and the remaining 30% only when you reach your final drop safely.",
  },
  {
    question: "What if roads are blocked by landslides or heavy snowfall?",
    answer:
      "Your safety comes first. If routes like Atal Tunnel, Rohtang, or national highways are closed by authorities, we do not deduct cancellation fees. We either offer a safe scenic alternate route or provide a 100% credit voucher valid for up to 1 year.",
  },
  {
    question: "Are toll taxes, state border permits, and driver allowance included?",
    answer:
      "Yes! Our quoted taxi fares clearly cover standard Himachal state entry permits, toll taxes, and driver night allowance with no hidden surprises on the road.",
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
                description: "Sedans, MPVs, SUVs & Tempo Travellers ready for hills",
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
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
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
              <h2 className="text-foreground mb-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Popular Routes & Fares</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Check out our most booked routes with transparent pricing
              </p>
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
              className="flex flex-col gap-6 lg:gap-8"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-xl sm:h-64 md:h-72">
                <Image
                  src="https://res.cloudinary.com/dabqqymqe/image/upload/v1768495300/sciyr6mjjjj2uwb7p5bw.jpg"
                  alt="Mountain taxi ride"
                  fill
                  className=" object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="from-saffron/25 to-saffron/20 absolute inset-0 bg-linear-to-tr via-transparent" />
              </div>

              <div className="lg:mt-auto">
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:mb-4">Get Your Quote</h2>
                <p className="text-muted-foreground mb-5 lg:mb-6">
                  Transparent, Win-Win Mountain Travel. Only 20% token (min ₹1,000) to confirm your vehicle & hill driver. Pay 50% on pickup, balance 30% only on safe drop. 100% weather & landslide protection.
                </p>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { icon: <Car className="h-5 w-5" />, text: "Native Himachali mountain drivers with hill driving experience" },
                    { icon: <Calendar className="h-5 w-5" />, text: "Only 20% token to lock • 100% weather reschedule" },
                    { icon: <Shield className="h-5 w-5" />, text: "Clear quote covering standard toll taxes, state permits & driver allowance" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                        {item.icon}
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
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
