"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Phone, MessageSquare, Compass, ShieldCheck } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { useSettings } from "@/lib/settings-context"
import { homeFaqs, homeFaqCategories, type HomeFAQ } from "@/data/home-faqs"

export function HomeFAQs() {
  const { settings } = useSettings()
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [openId, setOpenId] = useState<string | null>("booking-process")

  const whatsappRaw = (settings.whatsapp_number || "918628839955").replace(/[^0-9]/g, "") || "918628839955"
  const phone = settings.contact_phone || "+91 8628839955"

  const filteredFaqs =
    activeCategory === "all"
      ? homeFaqs
      : homeFaqs.filter((faq) => faq.category === activeCategory)

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className="relative bg-[#faf9f6] text-slate-900 py-16 sm:py-24 lg:py-28 border-t border-stone-200/80 overflow-hidden"
    >
      {/* Subtle organic light wash */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-amber-100/25 via-emerald-100/15 to-transparent blur-3xl pointer-events-none rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-stone-200/30 to-transparent blur-3xl pointer-events-none rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Sticky Dossier Header & Index               */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/80 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-stone-700 backdrop-blur-xs shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Field Guide & FAQs</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 leading-[1.12]">
                Everything you need to know before climbing into the hills.
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                Mountain journeys involve weather shifts, pass permits, high altitudes, and sacred temple customs. Here are straightforward, unvarnished answers from our local Himachal team.
              </p>
            </div>

            {/* Category Filter Rail */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                Filter by Subject
              </p>
              <div className="flex flex-wrap lg:flex-col gap-1.5 sm:gap-2">
                {homeFaqCategories.map((category) => {
                  const isActive = activeCategory === category.id
                  const count =
                    category.id === "all"
                      ? homeFaqs.length
                      : homeFaqs.filter((f) => f.category === category.id).length

                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        // Auto open first item of category if current is hidden
                        const firstMatch =
                          category.id === "all"
                            ? homeFaqs[0]?.id
                            : homeFaqs.find((f) => f.category === category.id)?.id
                        if (firstMatch) setOpenId(firstMatch)
                      }}
                      type="button"
                      className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-white text-slate-900 shadow-xs border border-stone-300/80"
                          : "text-stone-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            isActive ? "bg-emerald-600" : "bg-stone-300 group-hover:bg-stone-400"
                          }`}
                        />
                        <span>{category.label}</span>
                      </span>
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isActive ? "text-stone-900 font-semibold" : "text-stone-400"
                        }`}
                      >
                        {count.toString().padStart(2, "0")}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quiet Concierge Note */}
            <div className="rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-2xs backdrop-blur-xs space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Direct Local Helpdesk
                </span>
                <span>Chintpurni, HP</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-normal">
                Traveling with elderly pilgrims or planning a custom multi-valley circuit? Ask our mountain coordinators directly.
              </p>
              <div className="flex items-center gap-4 pt-1 text-xs font-medium">
                <a
                  href={`https://wa.me/${whatsappRaw}?text=${encodeURIComponent(
                    "Hi TourToHimachal! I have a specific question about road conditions, custom route, or elderly darshan.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp road team</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-stone-300">•</span>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-1 text-stone-700 hover:text-slate-900 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-stone-500" />
                  <span>{phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: The Editorial Q&A Dossier                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-stone-200/90 border-y border-stone-200/90">
              <AnimatePresence initial={false}>
                {filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id

                  return (
                    <div
                      key={faq.id}
                      className={`transition-colors duration-200 ${
                        isOpen ? "bg-white/80" : "hover:bg-white/40"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        type="button"
                        aria-expanded={isOpen}
                        className="w-full py-5 sm:py-6 px-3 sm:px-4 text-left flex items-start justify-between gap-4 cursor-pointer group"
                      >
                        <div className="flex items-start gap-4 sm:gap-6 pr-2">
                          <span className="font-mono text-xs sm:text-sm text-stone-400 pt-1 shrink-0 select-none">
                            {faq.number}
                          </span>
                          <div className="space-y-1">
                            <h3 className="font-serif text-lg sm:text-xl font-normal text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                              {faq.question}
                            </h3>
                            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-stone-400">
                              {faq.categoryLabel}
                            </span>
                          </div>
                        </div>

                        {/* Architectural Plus / Minus Toggle */}
                        <div
                          className={`shrink-0 mt-1 h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "border-slate-900 bg-slate-900 text-white rotate-45"
                              : "border-stone-300 bg-white text-stone-600 group-hover:border-stone-400 group-hover:text-slate-900"
                          }`}
                        >
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 sm:px-4 pb-6 sm:pb-7 pt-1 pl-12 sm:pl-16 pr-4 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                              <p>{faq.answer}</p>

                              {faq.highlight && (
                                <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/80 bg-emerald-50/70 px-3 py-1.5 text-xs text-emerald-900 font-medium">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                                  <span>{faq.highlight}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
