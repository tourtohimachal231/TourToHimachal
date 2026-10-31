"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  HelpCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  ArrowUpRight,
  Compass,
} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { useSettings } from "@/lib/settings-context"
import { homeFaqs, homeFaqCategories, type HomeFAQ } from "@/data/home-faqs"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

export function HomeFAQs() {
  const { settings } = useSettings()
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const whatsappRaw = (settings.whatsapp_number || "918628839955").replace(/[^0-9]/g, "") || "918628839955"
  const phone = settings.contact_phone || "+91 8628839955"

  const filteredFaqs =
    activeCategory === "all"
      ? homeFaqs
      : homeFaqs.filter((faq) => faq.category === activeCategory)

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions by Tour to Himachal"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-slate-50/40 to-emerald-50/50 py-16 sm:py-20 md:py-24 border-t border-emerald-100/90"
    >
      {/* Decorative mountain-mist green background glow */}
      <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-gradient-to-br from-emerald-200/40 via-teal-100/25 to-transparent blur-3xl pointer-events-none rounded-full -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/30 via-green-100/20 to-transparent blur-3xl pointer-events-none rounded-full translate-y-1/3" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* ========================================================= */}
          {/* LEFT COLUMN: Heading, Description & Category Selector      */}
          {/* ========================================================= */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-100/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-900 uppercase shadow-2xs backdrop-blur-xs">
              <HelpCircle className="h-3.5 w-3.5 text-emerald-700" />
              <span>Got Questions? We Have Answers</span>
            </div>

            {/* Main Section Heading */}
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.14]">
                Frequently Asked <span className="text-emerald-800">Questions</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Everything you need to know about planning your Himachal tour, hiring local taxis, temple darshan, and safe mountain travel across Dharamshala, Manali, Kullu, Tosh, and Spiti Ghati.
              </p>
            </div>

            {/* Category Filter Pills (Stacked in Left Column) */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-900/70 font-semibold">
                Filter by Category
              </p>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {homeFaqCategories.map((category) => {
                  const count =
                    category.id === "all"
                      ? homeFaqs.length
                      : homeFaqs.filter((f) => f.category === category.id).length
                  const isActive = activeCategory === category.id

                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      type="button"
                      className={`group flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20 ring-1 ring-emerald-700"
                          : "bg-white/90 text-slate-700 border border-emerald-100/90 hover:bg-emerald-50/80 hover:border-emerald-200 hover:text-emerald-950"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`h-2 w-2 rounded-full transition-colors ${
                            isActive ? "bg-white" : "bg-emerald-500 group-hover:bg-emerald-600"
                          }`}
                        />
                        <span>{category.label}</span>
                      </span>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-white/20 text-white font-semibold"
                            : "bg-emerald-50 text-emerald-800 font-medium"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Concierge Support Card (Left Column) */}
            <div className="rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-white via-emerald-50/40 to-white p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    24/7 Local Hill Travel Desk
                  </h3>
                  <p className="text-[11px] text-emerald-800 font-mono">
                    Chintpurni, Himachal Pradesh
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Traveling with elderly parents or planning a custom route? Call or message our local team directly for live road and weather updates.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full font-semibold h-10 shadow-sm"
                >
                  <a
                    href={`https://wa.me/${whatsappRaw}?text=${encodeURIComponent(
                      "Hi Tour to Himachal! I have a question about planning my trip / booking a taxi.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4 mr-1.5" />
                    Chat on WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-emerald-200 bg-white hover:bg-emerald-50 text-slate-800 rounded-full font-medium h-10"
                >
                  <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>
                    <Phone className="h-3.5 w-3.5 mr-1.5 text-emerald-700" />
                    Call: {phone}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: The FAQ Accordion List                      */}
          {/* ========================================================= */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="dharamshala-dharamkot-triund"
                  className="space-y-3 sm:space-y-3.5"
                >
                  {filteredFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="rounded-2xl border border-emerald-100/90 bg-white/95 px-5 sm:px-6 py-1 transition-all duration-200 shadow-xs hover:border-emerald-200 hover:shadow-md data-[state=open]:border-emerald-300 data-[state=open]:ring-2 data-[state=open]:ring-emerald-500/10 data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-900 text-base sm:text-lg hover:no-underline py-4 group">
                        <div className="flex flex-col gap-1.5 pr-2">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {faq.categoryLabel}
                          </span>
                          <span className="text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed pb-5 pt-1 border-t border-emerald-50 space-y-3">
                        <p>{faq.answer}</p>

                        {faq.links && faq.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                            {faq.links.map((link, idx) => (
                              <Link
                                key={idx}
                                href={link.href}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-950 hover:underline"
                              >
                                <span>{link.label}</span>
                                <ArrowUpRight className="h-3 w-3 text-emerald-600" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
