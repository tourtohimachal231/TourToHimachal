"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MapPin, AlertTriangle, Compass } from "lucide-react"
import { MarkdownRenderer } from "@/lib/markdown-renderer"
import { accordionContent } from "@/lib/animation-variants"

interface ItineraryDay {
  day: number
  title: string
  description?: string
  activities?: string[]
  subtitles?: Array<{
    title: string
    highlight?: string
    description: string
    activities?: string[]
    image?: string
  }>
}

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[]
}

export function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
  const [openDay, setOpenDay] = useState<number | null>(1)

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day)
  }

  if (!itinerary || !Array.isArray(itinerary) || itinerary.length === 0) {
    return null
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {itinerary.map((item) => {
        const isOpen = openDay === item.day
        const hasSubtitles = item.subtitles && item.subtitles.length > 0
        const hasDescription = !!item.description?.trim()
        const hasActivities = item.activities && item.activities.length > 0

        // Extract overnight info if present in description
        const overnightMatch = item.description?.match(/Overnight(?:\s+stay)?:\s*([^\n\.]+)/i)
        const overnightText = overnightMatch ? overnightMatch[1].trim() : null

        return (
          <div
            key={item.day}
            className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              isOpen
                ? "border-saffron/40 bg-linear-to-br from-white via-white to-amber-50/20 shadow-md ring-1 ring-saffron/20"
                : "border-saffron/15 bg-white hover:border-saffron/30 hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleDay(item.day)}
              className="flex w-full items-center justify-between py-3 px-3.5 text-left transition-colors sm:py-3.5 sm:px-5 hover:bg-saffron/5"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold text-white shadow-sm transition-transform sm:h-12 sm:w-12 ${
                    isOpen
                      ? "bg-linear-to-br from-saffron to-sunset-orange scale-105"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >
                  <span className="text-sm sm:text-base">D{item.day}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-foreground text-base font-bold md:text-lg tracking-tight">
                      {item.title}
                    </p>
                    {overnightText && (
                      <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-slate-100 border border-slate-200/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                        Stay: {overnightText}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm font-medium">
                    Day {item.day} of your journey
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`text-saffron h-5 w-5 shrink-0 transition-transform duration-300 sm:h-6 sm:w-6 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={accordionContent}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="overflow-hidden border-t border-saffron/15"
                >
                  <div className="px-4 pt-4 pb-5 sm:px-6 space-y-4">
                    {/* Primary Day Description */}
                    {hasDescription && (
                      <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed">
                        <MarkdownRenderer
                          content={item.description!}
                          className="[&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:text-slate-900"
                        />
                      </div>
                    )}

                    {/* Subtitles / Rich Itinerary Blocks */}
                    {hasSubtitles && (
                      <div className="space-y-4 pt-2">
                        {item.subtitles!.map((subtitle, subIndex) => (
                          <div
                            key={subIndex}
                            className="rounded-xl border border-slate-200/80 bg-white/80 p-3.5 sm:p-4 shadow-2xs hover:border-saffron/30 transition-colors"
                          >
                            <div className="flex flex-col gap-3 md:flex-row md:items-start">
                              {subtitle.image && (
                                <div className="md:w-36 shrink-0 overflow-hidden rounded-lg border border-slate-100">
                                  <img
                                    src={subtitle.image}
                                    alt={subtitle.title || `Day ${item.day} sightseeing`}
                                    className="h-28 w-full object-cover transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  <h5 className="text-slate-900 text-sm sm:text-base font-semibold flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-saffron shrink-0" />
                                    {subtitle.title}
                                  </h5>
                                  {subtitle.highlight && (
                                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 border border-amber-200/80 px-2 py-0.5 text-[11px] font-medium text-amber-800">
                                      <AlertTriangle className="h-3 w-3 text-amber-600 shrink-0" />
                                      {subtitle.highlight}
                                    </span>
                                  )}
                                </div>
                                <MarkdownRenderer
                                  content={subtitle.description}
                                  className="text-xs sm:text-sm text-slate-600 [&_p]:mb-1.5 [&_p:last-child]:mb-0"
                                />
                                {subtitle.activities && subtitle.activities.length > 0 && (
                                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                                    {subtitle.activities.map((act, actIdx) => (
                                      <span
                                        key={actIdx}
                                        className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                                      >
                                        <MapPin className="h-2.5 w-2.5 text-saffron shrink-0" />
                                        {act}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Day Activities / Sightseeing Chips */}
                    {hasActivities && (
                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Compass className="h-3.5 w-3.5 text-saffron" />
                          Key Day Highlights & Transfers
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.activities!.map((activity, actIndex) => (
                            <span
                              key={actIndex}
                              className="inline-flex items-center gap-1.5 rounded-full border border-saffron/25 bg-amber-50/50 px-3 py-1 text-xs font-medium text-slate-800 transition-colors hover:bg-saffron/10 hover:border-saffron/40"
                            >
                              <MapPin className="h-3 w-3 text-saffron shrink-0" />
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Graceful fallback if completely empty */}
                    {!hasDescription && !hasSubtitles && !hasActivities && (
                      <p className="text-xs text-muted-foreground italic py-2">
                        Sightseeing and private transfer details available upon booking customization.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
