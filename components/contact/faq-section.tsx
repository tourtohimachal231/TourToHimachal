"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

const faqs = [
  {
    question: "How do I book a tour package?",
    answer:
      "You can book a tour package by filling out the contact form above, calling us directly, or messaging us on WhatsApp. We'll get back to you within 12 hours with a customized itinerary and quote.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 15+ days before the trip get a full refund. 7-14 days before: 50% refund. Less than 7 days: No refund. We recommend travel insurance for added protection.",
  },
  {
    question: "Are your taxi services available 24/7?",
    answer:
      "Yes, our taxi services are available round the clock. For early morning pickups (before 6 AM) or late-night travel (after 10 PM), please book at least 6 hours in advance to ensure availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, UPI (GPay, PhonePe, Paytm), credit/debit cards, and cash. A 30% advance is required to confirm bookings, with the balance payable before the trip starts.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "We can arrange comprehensive travel insurance through our partner providers. This covers trip cancellation, medical emergencies, and baggage loss. Let us know your requirements when booking.",
  },
  {
    question: "What is the best time to visit Himachal Pradesh?",
    answer:
      "The best time depends on your interests. Summer (April-June) is ideal for trekking and sightseeing with pleasant weather. Winter (December-February) is perfect for snow activities in Manali, Shimla, and Dalhousie. Monsoon (July-September) offers lush greenery but some roads may be affected.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-muted/30 py-6 md:py-8 lg:py-10 overflow-x-hidden">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto w-full"
        >
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8 lg:mb-10 text-center">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">Quick answers to common queries about our services</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-background border-border w-full rounded-xl border px-4 sm:px-6 transition-shadow data-[state=open]:shadow-md box-border"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem
                  key={index + Math.ceil(faqs.length / 2)}
                  value={`faq-${index + Math.ceil(faqs.length / 2)}`}
                  className="bg-background border-border w-full rounded-xl border px-4 sm:px-6 transition-shadow data-[state=open]:shadow-md box-border"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
