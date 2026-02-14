"use client"

import type React from "react"

import { motion } from "framer-motion"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

interface StaticHeroProps {
  image: string
  title: string
  subtitle: string
  badge?: string
  children?: React.ReactNode
}

// Helper function to ensure Cloudinary images work directly
function getImageUrl(url: string): string {
  if (url.includes("cloudinary.com") || url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryDeliveryUrl(url, { width: 1600, quality: "auto", format: "auto", crop: "limit" })
  }
  return url || "/placeholder.svg"
}

export function StaticHero({ image, title, subtitle, badge, children }: StaticHeroProps) {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] max-h-[700px] items-center overflow-hidden safe-area-top">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={getImageUrl(image) || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover blur-[1px]"
          crossOrigin="anonymous"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/80" />
      <div className="from-saffron/20 to-saffron/20 absolute inset-0 bg-linear-to-r via-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-full max-w-7xl text-center"
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="from-saffron/40 to-sunset-orange/40 mt-6 mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-linear-to-r px-4 py-2 text-sm font-medium text-white backdrop-blur-md sm:mt-0"
              >
                <span className="text-xs font-semibold text-white md:text-sm">{badge}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-3 font-serif text-xl leading-tight font-bold tracking-tight [text-wrap:balance] break-words text-white sm:text-2xl md:mb-4 md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span className="text-[#fc9700]">{title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mt-2 max-w-3xl text-xs leading-relaxed text-pretty text-white/90 sm:mt-0 sm:text-sm md:text-base lg:text-lg"
            >
              {subtitle}
            </motion.p>

            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-4 md:mt-6"
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
