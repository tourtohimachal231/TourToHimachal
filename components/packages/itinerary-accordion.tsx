"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"
import { MarkdownRenderer } from "@/lib/markdown-renderer"
import { accordionContent } from "@/lib/animation-variants"

interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
  subtitles?: Array<{
    title: string;
    highlight?: string;
    description: string;
    activities: string[];
    image?: string;
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

  return (
    <div className="space-y-3 sm:space-y-4">
      {itinerary.map((item) => (
        <div
          key={item.day}
          className="border-saffron/20 to-saffron/5 hover:border-saffron/40 overflow-hidden rounded-2xl border-2 bg-linear-to-br from-white shadow-sm transition-all duration-300 hover:shadow-lg"
        >
          <button
            onClick={() => toggleDay(item.day)}
            className="hover:bg-saffron/5 flex w-full items-center justify-between py-2.5 px-3 text-left transition-colors sm:py-3 sm:px-4 md:py-3.5 md:px-5"
            aria-expanded={openDay === item.day}
          >
            <div className="flex items-center gap-4">
              <div className="from-saffron to-sunset-orange flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br shadow-md sm:h-14 sm:w-14">
                <span className="text-base font-bold text-white">D{item.day}</span>
              </div>
              <div>
                <p className="text-foreground text-base font-bold md:text-lg">{item.title}</p>
                <p className="text-muted-foreground text-sm font-medium md:text-base">Day {item.day} of your journey</p>
              </div>
            </div>
            <ChevronDown
              className={`text-saffron h-5 w-5 transition-transform duration-300 sm:h-6 sm:w-6 ${openDay === item.day ? "rotate-180" : ""
                }`}
            />
          </button>

          <AnimatePresence>
            {openDay === item.day && (
              <motion.div
                variants={accordionContent}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-hidden"
              >
                <div className="px-3 pt-1 pb-5 sm:px-5 md:px-6">
                  {/* Subtitles Section */}
                  {item.subtitles && item.subtitles.length > 0 ? (
                    <div className="space-y-6">
                      {item.subtitles.map((subtitle, subtitleIndex) => {
                        const isEvenIndex = subtitleIndex % 2 === 0
                        return (
                          <div
                            key={subtitleIndex}
                            className={`py-3 px-4 md:py-4 md:px-5`}
                          >
                            <div className={`flex flex-col gap-4 ${isEvenIndex ? 'md:flex-row' : 'md:flex-row-reverse'
                              }`}
                            >
                              {/* Image Section - Only show if image exists */}
                              {subtitle.image && (
                                <div className="md:w-[25%] flex-shrink-0">
                                  <img
                                    src={subtitle.image}
                                    alt={subtitle.title || `Sub-section ${subtitleIndex + 1}`}
                                    className="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
                                  />
                                </div>
                              )}

                              {/* Content Section */}
                              <div className={`flex-1 ${subtitle.image ? 'md:w-[75%]' : 'md:w-full'}`}>
                                <h5 className="text-foreground mb-2.5 flex items-center gap-2 text-sm font-bold md:text-base">
                                  <div className="from-saffron to-sunset-orange h-2 w-2 rounded-full bg-linear-to-br" />
                                  {subtitle.title}
                                </h5>
                                {subtitle.highlight && (
                                  <div className="mb-3 inline-flex max-w-full items-start rounded-xl border-2 border-yellow-400/50 bg-linear-to-r from-yellow-50 to-yellow-100 px-3 py-2 shadow-lg shadow-yellow-200/60">
                                    <span className="inline-flex items-start gap-2 text-xs font-semibold text-yellow-900 whitespace-normal">
                                      <span className="text-base leading-none">⚠️</span>
                                      <span>{subtitle.highlight}</span>
                                    </span>
                                  </div>
                                )}
                                <MarkdownRenderer content={subtitle.description} className="mb-3 text-sm md:text-base" />
                                {subtitle.activities && subtitle.activities.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {subtitle.activities.map((activity, actIndex) => (
                                      <span
                                        key={actIndex}
                                        className="border-saffron/30 text-saffron hover:bg-saffron/5 hover:border-saffron/50 inline-flex items-center gap-1 rounded-full border bg-white px-2.5 py-1 text-[10px] font-medium transition-all sm:text-[11px]"
                                      >
                                        <MapPin className="h-3 w-3" />
                                        {activity}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="text-muted-foreground py-3 text-sm italic md:text-base">
                      No sub-sections added.
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
