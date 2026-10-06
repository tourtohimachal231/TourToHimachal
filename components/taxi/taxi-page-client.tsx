"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Car, Calendar, Shield, Zap, Users, Gauge } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { ClockwiseSlideHero } from "@/components/ui/clockwise-slide-hero"
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
      "Yes, 100%! All our quoted taxi fares are fully all-inclusive. Himachal state entry permits, toll taxes, parking fees, and driver night bhatta are covered with zero hidden surprises on the road.",
  },
  {
    question: "Are your drivers trained for Himalayan mountain roads?",
    answer:
      "Yes, absolutely. All our drivers are Himachal-native mountain specialists with over 8 years of ghat driving and snow navigation experience, clean commercial driving licenses, and verified police backgrounds.",
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

  // Auto-scroll to "Choose Your Vehicle" section after hero renders
  useEffect(() => {
    const timer = setTimeout(() => {
      if (chooseVehicleRef.current) {
        chooseVehicleRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 1800) // Wait for hero section to render

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-background flex-grow pb-8 overflow-x-hidden safe-area-bottom">
      <Header />

      <ClockwiseSlideHero
        images={[
          {
            url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767794694/hiktlwjkvx7nfb57hnfz.webp",
            alt: "Mountain Roads",
          },
          {
            url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767796024/kmxibndk78rbidxmtef2.webp",
            alt: "Taxi Service",
          },
          {
            url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767796598/eytslyy1tjm58mjubjcg.webp",
            alt: "Car on Road",
          },
          {
            url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795334/cp0egvkhziyen6h57ffg.webp",
            alt: "River",
          },
          {
            url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795901/y1plr2wekvbv7g7yjyk0.webp",
            alt: "Landscape View",
          },
        ]}
        badge="Trusted by 10,000+ Happy Travelers"
        title="Your Mountain Journey, Our Priority"
        subtitle="Navigate the winding Himalayan roads with confidence! From Chandigarh airport pickups to remote hill station drop-offs, our experienced local drivers ensure safe, comfortable, and memorable journeys. No hidden charges, no surprises — just pure travel bliss."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 gap-2 text-white">
            <a
              href={`https://wa.me/${(settings.whatsapp_number || "919876543210").replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={`tel:${settings.contact_phone || ""}`}>
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </ClockwiseSlideHero>

      {/* Stats Section - Enhanced Design */}
      <section className="from-saffron/5 via-saffron/5 to-saffron/5 relative overflow-hidden bg-linear-to-br py-6 md:py-8 lg:py-10">
        {/* Decorative background elements */}
        <div className="from-saffron/10 absolute top-0 right-0 h-96 w-96 rounded-full bg-linear-to-bl to-transparent blur-3xl" />
        <div className="from-saffron/10 absolute bottom-0 left-0 h-96 w-96 rounded-full bg-linear-to-tr to-transparent blur-3xl" />

        <div className="relative container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6"
          >
            {[
              {
                value: "12+",
                label: "Years of Service",
                icon: Calendar,
                gradient: "from-saffron to-sunset-orange",
                bgGradient: "from-saffron/10 to-sunset-orange/10",
              },
              {
                value: "50+",
                label: "Expert Drivers",
                icon: Users,
                gradient: "from-saffron to-sunset-orange",
                bgGradient: "from-saffron/10 to-sunset-orange/10",
              },
              {
                value: "10K+",
                label: "Trips Completed",
                icon: Gauge,
                gradient: "from-saffron to-sunset-orange",
                bgGradient: "from-saffron/10 to-sunset-orange/10",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div key={index} variants={fadeInUp} className="group relative">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${stat.bgGradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div
                    className={`relative bg-linear-to-br ${stat.bgGradient} mx-auto max-w-xs rounded-2xl border border-white/20 p-2 text-center backdrop-blur-xl transition-all duration-300 group-hover:scale-105 hover:shadow-2xl sm:p-3 md:p-4`}
                  >
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-linear-to-r sm:h-0.5 sm:w-12 md:h-1 md:w-16 ${stat.gradient} rounded-full`}
                    />

                    {/* Icon */}
                    <div
                      className={`inline-flex h-8 w-8 items-center justify-center bg-linear-to-br sm:h-10 sm:w-10 md:h-12 md:w-12 ${stat.gradient} mb-2 transform rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-y-2 sm:mb-3`}
                    >
                      <IconComponent className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </div>

                    {/* Value */}
                    <p
                      className={`bg-linear-to-r text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ${stat.gradient} mb-1 bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>

                    {/* Label */}
                    <p className="text-foreground mb-1 text-[10px] font-semibold sm:text-xs md:text-sm">
                      {stat.label}
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
        <section id="choose-vehicle" ref={chooseVehicleRef} className="bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 text-center md:mb-10"
            >
              <h2 className="text-foreground mb-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Choose Your Vehicle</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Select from our fleet of well-maintained vehicles suited for every group size and budget
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  isSelected={selectedVehicle === vehicle.id}
                  onSelect={() => setSelectedVehicle(vehicle.id)}
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
                    { icon: <Car className="h-5 w-5" />, text: "Native Himachali mountain drivers (8+ yrs experience)" },
                    { icon: <Calendar className="h-5 w-5" />, text: "Only 20% token to lock • 100% weather reschedule" },
                    { icon: <Shield className="h-5 w-5" />, text: "All-inclusive quote (tolls, state permit, driver bhatta)" },
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

            <TaxiBookingForm />
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
          <Button asChild className="bg-saffron hover:bg-saffron/90 flex-1 gap-2 text-white">
            <a href="#book">
              <Car className="h-5 w-5" />
              Book a Ride
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a
              href={`https://wa.me/${(settings.whatsapp_number || "919876543210").replace(/[^0-9]/g, "")}`}
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
