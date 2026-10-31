"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  HelpCircle,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
} from "lucide-react"
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
  const phone = settings.contact_phone || "+918628839955"

  const filteredFaqs =
    activeCategory === "all"
      ? homeFaqs
      : homeFaqs.filter((faq) => faq.category === activeCategory)

  // Split into 2 columns for a balanced layout on large screens
  const midPoint = Math.ceil(filteredFaqs.length / 2)
  const leftColumnFaqs = filteredFaqs.slice(0, midPoint)
  const rightColumnFaqs = filteredFaqs.slice(midPoint)

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-14 sm:py-18 md:py-24 border-t border-slate-100"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-100/30 via-sky-100/20 to-amber-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-4 shadow-2xs">
              <HelpCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>Got Questions? We Have Answers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Everything you need to know about planning your Himachal tour, hiring local taxis, temple darshan, and safe mountain travel.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/15 ring-2 ring-slate-900"
                      : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* Accordion Columns */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start"
            >
              {/* Left Column */}
              <div className="space-y-3.5 sm:space-y-4">
                <Accordion type="single" collapsible className="space-y-3.5 sm:space-y-4">
                  {leftColumnFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="rounded-2xl border border-slate-200/90 bg-white/95 px-5 sm:px-6 py-1 transition-all duration-200 shadow-xs hover:border-slate-300 hover:shadow-md data-[state=open]:border-emerald-300 data-[state=open]:ring-2 data-[state=open]:ring-emerald-500/10 data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-900 text-base sm:text-lg hover:no-underline py-4 group">
                        <div className="flex flex-col gap-1.5 pr-2">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {faq.categoryLabel}
                          </span>
                          <span className="text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed pb-5 pt-1 border-t border-slate-100">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right Column */}
              <div className="space-y-3.5 sm:space-y-4">
                <Accordion type="single" collapsible className="space-y-3.5 sm:space-y-4">
                  {rightColumnFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="rounded-2xl border border-slate-200/90 bg-white/95 px-5 sm:px-6 py-1 transition-all duration-200 shadow-xs hover:border-slate-300 hover:shadow-md data-[state=open]:border-emerald-300 data-[state=open]:ring-2 data-[state=open]:ring-emerald-500/10 data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-900 text-base sm:text-lg hover:no-underline py-4 group">
                        <div className="flex flex-col gap-1.5 pr-2">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {faq.categoryLabel}
                          </span>
                          <span className="text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed pb-5 pt-1 border-t border-slate-100">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Support / Quick Help Card */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 sm:mt-16 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-900/10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>24/7 Local Hill Travel Desk</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Still have questions about your Himachal trip?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our local tour coordinators and drivers are born and rooted in Himachal. Call or message us anytime for live road conditions, custom stops, hotel options, or temple accessibility advice.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    100% Free Consultation
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Instant WhatsApp Quotes
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarCheck className="h-4 w-4 text-emerald-400" />
                    Zero Obligation
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg shadow-emerald-950/20 rounded-full font-semibold h-12 px-6"
                >
                  <a
                    href={`https://wa.me/${whatsappRaw}?text=${encodeURIComponent(
                      "Hi TourToHimachal! I have a question about planning my Himachal trip / booking a taxi.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold h-12 px-6"
                >
                  <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us: {phone}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

