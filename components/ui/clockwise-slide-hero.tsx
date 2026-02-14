"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

interface HeroImage {
  url: string
  alt: string
}

interface ClockwiseSlideHeroProps {
  images: HeroImage[]
  title: string
  subtitle: string
  badge?: string
  children?: React.ReactNode
  autoPlayInterval?: number // Time between transitions in milliseconds (default: 4000)
}

// Always slide from right to left
const getSlideDirection = (index: number) => {
  return { initial: { y: 0, x: "100%" } } // Right to left
}

// Helper function to ensure Cloudinary images work directly
function getImageUrl(url: string): string {
  // If it's already a Cloudinary URL, use it directly
  if (url.includes("cloudinary.com") || url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryDeliveryUrl(url, { width: 1920, quality: "auto", format: "auto", crop: "fill" })
  }
  // Otherwise return as-is (for local images or placeholders)
  return url || "/placeholder.svg"
}

export function ClockwiseSlideHero({
  images,
  title,
  subtitle,
  badge,
  children,
  autoPlayInterval = 4000,
}: ClockwiseSlideHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance the slider
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  const direction = getSlideDirection(currentIndex)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden safe-area-top">
      {/* Full-width Clockwise Slide Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, ...direction.initial }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={getImageUrl(images[currentIndex]?.url) || "/placeholder.svg"}
              alt={images[currentIndex]?.alt || "Hero image"}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="from-saffron/20 to-saffron/20 absolute inset-0 z-10 bg-gradient-to-r via-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-4xl text-center"
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="from-saffron/40 to-sunset-orange/40 mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
              >
                <span className="font-semibold text-white">{badge}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 font-serif text-3xl font-bold text-balance text-white md:text-5xl lg:text-6xl"
            >
              <span className="block text-[#fc9700]">{title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-pretty text-white/90 md:text-xl"
            >
              {subtitle}
            </motion.p>

            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
