"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, MapPin, ArrowRight, Image as ImageIcon } from "lucide-react"
import { cardHover, fadeInUp } from "@/lib/animation-variants"

interface Package {
  id: string
  title: string
  slug: string
  description?: string
  short_description?: string
  price: number
  original_price?: number
  duration: string
  highlights?: string[]
  inclusions?: string[]
  exclusions?: string[]
  category?: string
  images?: string[]
  is_active: boolean
  is_featured: boolean
  region?: string
}

function stripEmojis(text?: string | null): string {
  if (!text) return ""
  return text
    .replace(/[\p{Extended_Pictographic}\uFE0E\uFE0F\u200D]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
}

function cleanPackageCardDescription(text?: string | null): string {
  if (!text) return ""
  return text
    // Remove image markdown: ![alt](url)
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
    // Preserve link text: [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // Remove horizontal rules (---, ***, ___)
    .replace(/^(\s*[-*_]\s*){3,}$/gm, "")
    // Remove heading markers (### text -> text)
    .replace(/^\s*#{1,6}\s+/gm, "")
    // Remove bold and italics while strictly preserving text content
    .replace(/\*\*\*([^*]+)\*\*\*/g, "$1")
    .replace(/___([^_]+)___/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    // Remove bullet lists and numbered lists at line starts
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    // Remove blockquote markers
    .replace(/^\s*>\s*/gm, "")
    // Remove code fences or inline backticks
    .replace(/`([^`]+)`/g, "$1")
    // Remove emojis (Extended_Pictographic, variation selectors, zero-width joiners)
    .replace(/[\p{Extended_Pictographic}\uFE0E\uFE0F\u200D]/gu, "")
    // Remove any leftover standalone formatting characters
    .replace(/[*_~`#]/g, "")
    // Normalize whitespace (replace newlines and multiple spaces with a single space)
    .replace(/\s+/g, " ")
    .trim()
}

interface PackageCardProps {
  pkg: Package
}

export function PackageCard({ pkg }: PackageCardProps) {
  const [imageError, setImageError] = useState(false)

  // Get image source with fallback
  const imageSrc = imageError || !pkg.images?.[0]
    ? `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(pkg.title)}`
    : pkg.images[0]

  // Priority 1: Category (or Featured fallback)
  const categoryBadge = pkg.category
    ? pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)
    : pkg.is_featured
      ? "Featured"
      : null

  // Priority 2: Duration
  const durationBadge = pkg.duration ? pkg.duration.trim() : null

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
    >
      <Link
        href={`/packages/${pkg.slug}`}
        className="focus-visible:ring-mountain-blue focus-visible:ring-offset-background flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <motion.div variants={cardHover} className="flex h-full flex-col">
          {/* Destination Photography with max 2 corner badges */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
            {imageError || !pkg.images?.[0] ? (
              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                <ImageIcon className="h-12 w-12" />
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt={pkg.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onError={() => setImageError(true)}
                unoptimized={imageSrc.includes("cloudinary.com") ? false : undefined}
              />
            )}

            {/* Subtle top scrim to guarantee badge legibility without darkening scenery */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/25 to-transparent"
            />

            {/* Max Two Badges: Prioritising Category and Duration */}
            <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-2">
              {categoryBadge ? (
                <span className="inline-flex items-center rounded-full border border-white/60 bg-white/95 px-2.5 py-1 text-xs font-semibold tracking-wide text-slate-800 shadow-xs backdrop-blur-md">
                  {categoryBadge}
                </span>
              ) : (
                <span />
              )}

              {durationBadge && (
                <span className="inline-flex items-center rounded-full border border-white/60 bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs backdrop-blur-md ml-auto">
                  <Clock className="mr-1 h-3 w-3 text-mountain-blue shrink-0" />
                  {durationBadge}
                </span>
              )}
            </div>
          </div>

          {/* Card Content & Hierarchy */}
          <div className="flex flex-1 flex-col p-4 sm:p-5">
            {/* Region Location Indicator (if present) */}
            {pkg.region && (
              <div className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-600">
                <MapPin className="h-3 w-3 text-mountain-blue shrink-0" />
                <span>{stripEmojis(pkg.region)}</span>
              </div>
            )}

            {/* Package Title */}
            <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-mountain-blue transition-colors line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem] break-words">
              {stripEmojis(pkg.title)}
            </h3>

            {/* Clean Short Description */}
            <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed min-h-[2.5rem] break-words">
              {cleanPackageCardDescription(pkg.short_description || pkg.description)}
            </p>

            {/* Price & Action Footer */}
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] font-medium tracking-wide uppercase text-slate-600">
                  Package Price
                </span>
                <div className="flex items-baseline gap-1.5">
                  {pkg.price && pkg.price > 0 ? (
                    <>
                      <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                      {pkg.original_price && pkg.original_price > pkg.price && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{pkg.original_price.toLocaleString("en-IN")}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-sm sm:text-base font-bold text-amber-900 tracking-tight">
                      Price on Request
                    </span>
                  )}
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-200 group-hover:bg-mountain-blue group-hover:shadow-sm shrink-0">
                View Details
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
