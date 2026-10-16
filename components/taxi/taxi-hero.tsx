"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/lib/settings-context"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795334/cp0egvkhziyen6h57ffg.webp"

function getOptimizedImageUrl(url: string): string {
  if (url.includes("cloudinary.com") || url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryDeliveryUrl(url, {
      width: 1920,
      quality: "auto",
      format: "auto",
      crop: "fill",
    })
  }
  return url
}

export function TaxiHero() {
  const { settings } = useSettings()

  const whatsappHref = `https://wa.me/${(settings.whatsapp_number || "919876543210").replace(/[^0-9]/g, "")}`
  const phoneHref = `tel:${settings.contact_phone || ""}`

  return (
    <section className="relative flex min-h-[72vh] sm:min-h-[78vh] md:min-h-[82vh] items-center justify-center overflow-hidden safe-area-top">
      {/* Background Image: Retaining the natural forest-and-river photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={getOptimizedImageUrl(HERO_IMAGE_URL)}
          alt="Pine forest and crystal river valley in Himachal Pradesh"
          className="h-full w-full object-cover object-center"
          crossOrigin="anonymous"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Uniform Atmospheric Scrim: Soft, luminous tint allowing natural scenery to shine */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-black/20"
      />

      {/* Gentle vertical gradient for top nav visibility and smooth transition to content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/30"
      />

      {/* Localized readability scrim centered behind text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0)_85%)]"
      />

      {/* Hero Content Architecture - Rendered immediately with zero entrance delay */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Clean Eyebrow: Professional uppercase without emojis or rounded pill wrappers */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#f59e0b] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] mb-3 sm:mb-4">
              PRIVATE TAXI SERVICES IN HIMACHAL PRADESH
            </p>

            {/* Headline: Clean modern sans-serif, restrained size, subtle amber accent */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.2] drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] mb-4 sm:mb-5">
              <span>Reliable Rides. </span>
              <span className="text-[#f59e0b]">Local Knowledge.</span>
            </h1>

            {/* Supporting text: Readable across age groups with balanced line-length */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/95 text-pretty drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)] mb-8 sm:mb-10">
              From airport pickups and intercity transfers to temple visits and mountain getaways, travel across Himachal Pradesh with a private taxi arranged around your plans.
            </p>

            {/* CTAs: Only functional icons (WhatsApp & Phone) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-saffron hover:bg-saffron/90 text-white font-medium gap-2 shadow-lg transition-all px-6 py-2.5 sm:py-3 h-auto text-base"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white/95 hover:bg-white text-gray-900 font-medium gap-2 shadow-md transition-all px-6 py-2.5 sm:py-3 h-auto text-base"
              >
                <a href={phoneHref}>
                  <Phone className="h-5 w-5 text-gray-700" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
