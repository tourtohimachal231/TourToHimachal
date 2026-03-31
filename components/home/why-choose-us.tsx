"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MapPin, Wallet, Shield, ClipboardList, BadgeCheck, Award } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

const features = [
  {
    icon: "mapPin",
    title: "Local Himachal Expertise",
    description: "Deep knowledge of hidden gems and best routes across state.",
  },
  {
    icon: "wallet",
    title: "Affordable Packages",
    description: "Best value for money with no hidden costs or surprises.",
  },
  {
    icon: "shield",
    title: "Safe Taxi Service",
    description: "Well-maintained vehicles with experienced, verified drivers.",
  },
  {
    icon: "whatsAppIcon",
    title: "WhatsApp Instant Booking",
    description: "Quick and easy bookings directly via WhatsApp chat.",
  },
  {
    icon: "clipboardList",
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored to your preferences.",
  },
  {
    icon: "badgeCheck",
    title: "Verified Drivers",
    description: "Background-checked, courteous, and professional drivers.",
  },
]

const iconMap: Record<string, React.ReactNode> = {
  mapPin: <MapPin className="h-6 w-6" />,
  wallet: <Wallet className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  whatsAppIcon: <WhatsAppIcon className="h-6 w-6" />,
  clipboardList: <ClipboardList className="h-6 w-6" />,
  badgeCheck: <BadgeCheck className="h-6 w-6" />,
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.97_0.035_85)] via-[oklch(0.98_0.02_75)] to-[oklch(0.96_0.03_65)] py-6 md:py-8 lg:py-10">
      {/* Decorative patterns */}
      <div className="pattern-dots absolute inset-0 opacity-20" />
      <div className="via-saffron absolute top-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-6 text-center md:mb-8 lg:mb-10"
        >
          <motion.div
            variants={fadeInUp}
            className="from-saffron/20 to-sunset-orange/20 mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1.5 md:mb-4 md:px-4 md:py-2"
          >
            <Award className="text-saffron h-3 w-3 md:h-4 md:w-4" />
            <span className="text-saffron text-xs font-semibold tracking-wider uppercase md:text-sm">
              Why Travelers Trust Us
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-foreground mt-2 mb-3 font-serif text-2xl font-bold sm:text-3xl md:mt-3 md:mb-4 md:text-4xl lg:text-5xl"
          >
            Why Choose{" "}
            <span className="from-saffron via-sunset-orange to-temple-red bg-gradient-to-r bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mx-auto max-w-2xl px-4 text-base md:text-lg"
          >
            We combine local expertise, quality service, and customer-first approach to make your Himachal
            journey memorable.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-card border-border rounded-xl border p-4 text-center transition-shadow hover:shadow-md"
            >
              <div className="bg-primary/10 text-primary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-foreground mb-1 text-sm font-medium md:text-base">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
