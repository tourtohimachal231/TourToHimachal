"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/lib/settings-context"
import { fadeInUp } from "@/lib/animation-variants"
import { generateWhatsAppLink } from "@/lib/whatsapp"

interface Route {
  id: string
  from_location: string
  to_location: string
  distance_km: number
  estimated_time: string
  base_fare: number
  is_active: boolean
}

interface RouteCardProps {
  route: Route
}

export function RouteCard({ route }: RouteCardProps) {
  const { settings } = useSettings()
  const whatsappLink = generateWhatsAppLink(
    {
      route: `${route.from_location} to ${route.to_location}`,
      serviceType: "One-Way Drop (Round trip rate differs)",
    },
    settings.whatsapp_number,
  )

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-card border-border rounded-xl border p-5 transition-shadow hover:shadow-md flex flex-col justify-between"
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="text-foreground flex items-center gap-1.5">
              <MapPin className="text-primary h-4 w-4 shrink-0" />
              <span className="font-medium text-sm sm:text-base">{route.from_location}</span>
            </div>
            <ArrowRight className="text-muted-foreground h-4 w-4 shrink-0" />
            <div className="text-foreground flex items-center gap-1.5">
              <MapPin className="text-saffron h-4 w-4 shrink-0" />
              <span className="font-medium text-sm sm:text-base">{route.to_location}</span>
            </div>
          </div>
          <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-mountain-blue border border-sky-200/80 shrink-0">
            One-Way Drop
          </span>
        </div>

        <div className="text-muted-foreground mb-4 flex items-center gap-4 text-xs sm:text-sm">
          <span>{route.distance_km} km</span>
          <span className="text-border">|</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{route.estimated_time}</span>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-3 pt-3 border-t border-slate-100">
        <div>
          <span className="text-muted-foreground text-xs">One-Way Starting from</span>
          <p className="text-primary text-xl font-bold md:text-2xl leading-tight">
            ₹{route.base_fare?.toLocaleString()}{" "}
            <span className="text-xs font-normal text-muted-foreground">/ one-way</span>
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">Round trip rates differ</p>
        </div>
        <Button asChild className="bg-saffron hover:bg-saffron/90 text-white shrink-0">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Book This Route
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
