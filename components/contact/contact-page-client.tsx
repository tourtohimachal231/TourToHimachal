"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { FAQSection } from "@/components/contact/faq-section"
import { MapSection } from "@/components/contact/map-section"
import { MobileContactBar } from "@/components/contact/mobile-contact-bar"

export function ContactPageClient() {
  const getInTouchRef = useRef<HTMLElement>(null)

  // Auto-scroll to "Get In Touch" section after hero renders
  useEffect(() => {
    const timer = setTimeout(() => {
      if (getInTouchRef.current) {
        getInTouchRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 1800) // Wait for hero section to render

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 md:pb-0 overflow-x-hidden">
        {/* Hero Section with Infinite Scroll */}
        <ContactHero />

        {/* Contact Form & Info Section */}
        <section id="get-in-touch" ref={getInTouchRef} className="py-6 md:py-8 lg:py-10 overflow-x-hidden">
          <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="mx-auto w-full min-w-0 grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 lg:grid-cols-5 lg:items-start">
              {/* Contact Info Sidebar */}
              <div className="order-1 flex flex-col lg:order-1 lg:col-span-2 w-full min-w-0">
                <div className="bg-card border-border flex flex-col w-full min-w-0 rounded-2xl border p-4 sm:p-5 md:p-6 box-border">
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Get in Touch</h2>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Call, WhatsApp, or email us — we typically respond within 12 hours.
                    </p>
                  </div>
                  <div className="min-w-0">
                    <ContactInfo />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="order-2 flex flex-col lg:order-2 lg:col-span-3 w-full min-w-0">
                <div className="bg-card border-border flex flex-col w-full min-w-0 rounded-2xl border p-4 sm:p-5 md:p-6 box-border">
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Fill out the form below and we'll get back to you within 12 hours.
                    </p>
                  </div>
                  <div className="min-w-0">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Map Section */}
        <MapSection />
      </main>
      <Footer />

      {/* Mobile Sticky Contact Bar */}
      <MobileContactBar />
    </>
  )
}
