"use client"

import type React from "react"

import { motion } from "framer-motion"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

interface StaticHeroProps {
  image: string
  title: string | React.ReactNode
  subtitle: string
  badge?: string | React.ReactNode
  children?: React.ReactNode
  heightClassName?: string
  titleClassName?: string
}

// Helper function to ensure Cloudinary images work directly
function getImageUrl(url: string): string {
  if (!url) return "/placeholder.svg"
  if (url.includes("cloudinary.com") || url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryDeliveryUrl(url, { width: 1600, quality: "auto", format: "auto", crop: "limit" })
  }
  return url.startsWith("http") || url.startsWith("/") ? url : `/${url}`
}

export function StaticHero({
  image,
  title,
  subtitle,
  badge,
  children,
  heightClassName = "min-h-[480px] sm:min-h-[520px] md:min-h-[560px]",
  titleClassName,
}: StaticHeroProps) {
  const altText = typeof title === "string" ? title : "TourToHimachal - Tours & Travel"

  return (
    <section
      className={`relative flex ${heightClassName} items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-12 md:pb-16`}
    >
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={getImageUrl(image) || "/placeholder.svg"}
          alt={altText}
          className="h-full w-full object-cover object-[center_35%]"
          crossOrigin="anonymous"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Cinematic Dark Gradient Scrim for Flawless Text Legibility */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/85 via-slate-900/65 to-slate-950/90" />
      <div className="from-saffron/15 to-saffron/15 absolute inset-0 bg-linear-to-r via-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <div className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto w-full"
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm backdrop-blur-md"
              >
                <span className="font-semibold tracking-wide text-white drop-shadow-xs">{badge}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className={
                titleClassName ||
                "mb-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
              }
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-3 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-100 font-normal [text-wrap:balance]"
            >
              {subtitle}
            </motion.p>

            {children && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 sm:mt-8"
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

