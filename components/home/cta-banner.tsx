"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/lib/settings-context"
import { Phone, ArrowUpRight, ShieldCheck, Clock, CalendarCheck } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import Image from "next/image"
import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

export function CTABanner() {
  const { settings } = useSettings()

  function getImageUrl(url: string): string {
    if (!url) return "/placeholder.svg"
    const trimmed = url.trim()
    const normalized = trimmed.startsWith("/http") ? trimmed.slice(1) : trimmed
    if (normalized.includes("res.cloudinary.com") || normalized.includes("cloudinary.com")) {
      return optimizeCloudinaryDeliveryUrl(normalized, {
        width: 1920,
        quality: "auto",
        format: "auto",
        crop: "limit",
      })
    }
    return normalized
  }

  const whatsappRaw = (settings.whatsapp_number || "918628839955").replace(/[^0-9]/g, "") || "918628839955"
  const phone = settings.contact_phone || "+91 8628839955"

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-slate-950 text-white">
      {/* Background panoramic landscape */}
      <Image
        src={getImageUrl("https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795901/y1plr2wekvbv7g7yjyk0.webp")}
        alt="Panoramic Himalayan mountain landscape"
        fill
        className="object-cover opacity-35"
        sizes="100vw"
        priority={false}
      />

      {/* Cinematic dark mountain gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Restrained Editorial Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-emerald-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Direct Local Team • Based in Himachal</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Ready to journey into the Himalayas?{" "}
            <span className="italic font-normal text-amber-200/90 font-serif">
              Plan your route with locals.
            </span>
          </h2>

          {/* Authentic Description */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300/90 font-light leading-relaxed">
            No brokers, no metro sub-agents reselling packages. We design your day-wise itinerary, assign our own vetted native hill drivers, and coordinate your stays directly from Himachal Pradesh.
          </p>

          {/* Cohesive Trust Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs font-mono tracking-wider text-slate-300/80">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>20% Token to Reserve</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>100% Free Weather Rescheduling</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-amber-300" />
              <span>Direct Hillside Dispatch</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto h-13 px-8 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-semibold text-sm sm:text-base shadow-xl shadow-emerald-950/30 transition-all hover:scale-[1.02] cursor-pointer"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappRaw}?text=${encodeURIComponent(
                  "Hi TourToHimachal! I want to plan my Himachal trip. Please share options and taxi rates.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 mr-2" />
                <span>Plan on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-13 px-8 rounded-full border-white/25 bg-white/5 hover:bg-white/15 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all cursor-pointer"
              asChild
            >
              <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>
                <Phone className="h-4 w-4 mr-2 text-slate-300" />
                <span>Call {phone}</span>
              </a>
            </Button>
          </div>

          {/* Reassurance text */}
          <p className="text-[11px] font-mono tracking-wider text-slate-400 pt-2">
            Direct mountain coordination • Transparent quotes • Zero hidden check-post surcharges
          </p>
        </motion.div>
      </div>
    </section>
  )
}
