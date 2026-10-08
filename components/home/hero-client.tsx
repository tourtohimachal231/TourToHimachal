"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Compass, Car, MapPin, Headphones } from "lucide-react"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

export interface HeroImage {
  url: string
  alt: string
}

interface HeroClientProps {
  images?: HeroImage[]
}

const serviceItems = [
  { label: "CUSTOM TRIPS", icon: Compass },
  { label: "PRIVATE TAXIS", icon: Car },
  { label: "LOCAL GUIDES", icon: MapPin },
  { label: "TRIP SUPPORT", icon: Headphones },
]

const defaultHeroImages: HeroImage[] = [
  {
    url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795277/v7svtjhbjhj6cyadgfhz.webp",
    alt: "Serene Himalayan Mountain Peaks in Himachal Pradesh",
  },
  {
    url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795334/cp0egvkhziyen6h57ffg.webp",
    alt: "Himalayan Rivers and Valleys in Himachal",
  },
  {
    url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795291/bacq5glu6429fkmwvv6b.webp",
    alt: "Pine Forest and Mountain Trails in Himachal Pradesh",
  },
]

function getImageUrl(url: string): string {
  if (url.includes("cloudinary.com") || url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryDeliveryUrl(url, {
      width: 1920,
      quality: "auto",
      format: "auto",
      crop: "fill",
    })
  }
  return url || "/placeholder.svg"
}

export function HeroClient({ images }: HeroClientProps) {
  const heroImages = images && images.length > 0 ? images : defaultHeroImages
  const [currentIndex, setCurrentIndex] = useState(0)

  // Gentle, slow ambient image transition (7.5s)
  useEffect(() => {
    if (heroImages.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 7500)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative flex min-h-[82vh] sm:min-h-[88vh] lg:min-h-screen items-center justify-center overflow-hidden safe-area-top">
      {/* Background Image Layer: Bright, Natural, Photographic Daylight */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentIndex}
            src={getImageUrl(heroImages[currentIndex]?.url)}
            alt={heroImages[currentIndex]?.alt || "Himachal Travel Vista"}
            className="h-full w-full object-cover object-center"
            crossOrigin="anonymous"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Mild Blackish Shield: Soft uniform tint to prevent glare and protect text legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-black/25"
      />

      {/* Gentle Atmospheric Scrim: Soft top for navbar legibility and smooth bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/35"
      />

      {/* Localized Readability Shield: Feathered radial scrim centered behind core text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_75%_80%_at_50%_48%,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.20)_52%,rgba(0,0,0,0)_85%)]"
      />

      {/* Hero Content Architecture */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-18 md:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">

            {/* Main H1: Warm Soft-White + Sophisticated Honey/Amber Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f8fafc] leading-[1.08] sm:leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
            >
              <span className="block font-semibold sm:font-bold text-[#f8fafc]">
                You Dream It.
              </span>
              <span className="block mt-1 sm:mt-2 text-[#f8fafc] font-bold sm:font-extrabold">
                We <span className="text-[#f59e0b]">Plan It.</span>
              </span>
            </motion.h1>

            {/* Prominent Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mx-auto mt-4 sm:mt-5 max-w-2xl text-lg sm:text-xl md:text-2xl font-semibold sm:font-medium text-white/95 leading-snug tracking-tight text-pretty drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
            >
              Your time. Your pace. Your choices. We build the journey around you.
            </motion.p>

            {/* Concise Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mx-auto mt-3 sm:mt-3.5 max-w-xl text-sm sm:text-base md:text-[15px] font-normal text-zinc-200/90 leading-relaxed text-pretty drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
            >
              From pilgrimages and honeymoons to family holidays and mountain adventures, travel with private taxis, local guides and support whenever you need it.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46 }}
              className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="h-11 sm:h-12 w-full sm:w-auto px-8 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#c2410c] hover:to-[#d97706] shadow-md shadow-black/25 rounded-xl transition-all"
              >
                <Link href="/packages">
                  Plan My Trip
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-11 sm:h-12 w-full sm:w-auto px-7 text-sm sm:text-base font-medium text-white border border-white/35 bg-black/25 hover:bg-white/20 backdrop-blur-md rounded-xl transition-all shadow-sm"
              >
                <Link href="/contact">
                  Talk to Us
                </Link>
              </Button>
            </motion.div>

            {/* Premium Service / Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="mt-7 sm:mt-9 flex justify-center"
            >
              <div className="inline-flex rounded-2xl sm:rounded-full bg-white/[0.10] backdrop-blur-md border border-white/15 px-4 py-3 sm:px-6 sm:py-2.5 shadow-lg shadow-black/20 max-w-full">
                <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 sm:flex sm:items-center sm:gap-5 md:gap-7">
                  {serviceItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={item.label} className="flex items-center">
                        <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] md:text-[14px] font-semibold tracking-wider text-zinc-100 uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                          <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#f59e0b] shrink-0" aria-hidden="true" />
                          <span>{item.label}</span>
                        </span>
                        {index < serviceItems.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="hidden sm:inline-block ml-5 md:ml-7 h-3 w-px bg-white/25"
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
