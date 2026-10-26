"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Briefcase, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cardHover, fadeInUp } from "@/lib/animation-variants"

interface Vehicle {
  id: string
  name: string
  type: string
  capacity: number
  luggage_capacity?: number
  per_km_rate: number
  features?: string[]
  image_url?: string
  is_available: boolean
}

interface VehicleCardProps {
  vehicle: Vehicle
  isSelected: boolean
  onSelect: () => void
}

export function VehicleCard({ vehicle, isSelected, onSelect }: VehicleCardProps) {
  const isLuxury =
    vehicle.name.toLowerCase().includes("urbania") ||
    vehicle.type?.toLowerCase().includes("luxury")

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Select ${vehicle.name} (${vehicle.capacity} passenger capacity)`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect()
        }
      }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white text-left transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-blue focus-visible:ring-offset-2 ${
        isSelected
          ? "border-mountain-blue shadow-md ring-2 ring-mountain-blue/20"
          : isLuxury
            ? "border-amber-200/90 shadow-xs hover:border-amber-300 hover:shadow-md"
            : "border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md"
      }`}
    >
      <motion.div variants={cardHover} className="flex h-full flex-col">
        {/* Vehicle Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={vehicle.image_url || `/placeholder.svg?height=200&width=320&query=${encodeURIComponent(vehicle.name)} car`}
            alt={vehicle.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Selected Badge */}
          {isSelected && (
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-mountain-blue px-3 py-1 text-xs font-semibold text-white shadow-md">
              <Check className="h-3.5 w-3.5" />
              <span>Selected</span>
            </div>
          )}

          {/* Vehicle Type Pill */}
          {vehicle.type && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider shadow-xs backdrop-blur-md ${
                  isLuxury
                    ? "border border-amber-300 bg-amber-50/95 font-semibold text-amber-900"
                    : "border border-white/60 bg-white/95 text-slate-800"
                }`}
              >
                {vehicle.type}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-center justify-between gap-1.5">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-mountain-blue transition-colors">
              {vehicle.name}
            </h3>
            {isLuxury && (
              <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 shrink-0">
                Luxury Side
              </span>
            )}
          </div>

          {isLuxury && (
            <p className="mt-1 text-xs font-medium text-amber-800">
              Premium luxury travel with superior reclining comfort
            </p>
          )}

          <div className="mt-2 mb-3 flex items-center gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <Users className="h-4 w-4 text-mountain-blue shrink-0" />
              <span>{vehicle.capacity} Passengers</span>
            </div>
            {vehicle.luggage_capacity && (
              <div className="flex items-center gap-1.5 font-medium">
                <Briefcase className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{vehicle.luggage_capacity} Luggage</span>
              </div>
            )}
          </div>

          {vehicle.features && vehicle.features.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {vehicle.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${
                    isLuxury
                      ? "bg-amber-50 text-amber-900 border border-amber-200/50"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Explicit Select Button */}
          <div className="mt-auto pt-3 border-t border-slate-100">
            <Button
              type="button"
              variant={isSelected ? "default" : "outline"}
              className={`w-full rounded-xl font-semibold text-xs sm:text-sm h-10 transition-all ${
                isSelected
                  ? "bg-slate-900 hover:bg-slate-800 text-white shadow-xs"
                  : isLuxury
                    ? "border-amber-300 text-amber-900 hover:bg-amber-50 hover:border-amber-400"
                    : "border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400"
              }`}
              onClick={(e) => {
                e.stopPropagation()
                onSelect()
              }}
            >
              {isSelected ? (
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Selected for Booking
                </span>
              ) : (
                "Select Vehicle"
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
