"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Car, MapPin } from "lucide-react"
import { ClockwiseSlideHero } from "@/components/ui/clockwise-slide-hero"

export interface HeroImage {
  url: string
  alt: string
}

interface HeroClientProps {
  images?: HeroImage[]
}

const defaultHeroImages: HeroImage[] = [
  {
    url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795277/v7svtjhbjhj6cyadgfhz.webp",
    alt: "Majestic Himalayan Mountains",
  },
  {
    url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795334/cp0egvkhziyen6h57ffg.webp",
    alt: "Himalayan Rivers and Waterfalls",
  },
  {
    url: "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795291/bacq5glu6429fkmwvv6b.webp",
    alt: "Trekking in Himalayas",
  },
]

export function HeroClient({ images }: HeroClientProps) {
  const heroImages = images && images.length > 0 ? images : defaultHeroImages

  return (
    <ClockwiseSlideHero
      images={heroImages}
      badge="Discover Magic of Himachal"
      title="Your Gateway to Himalayan Adventures"
      subtitle="Experience breathtaking mountains, sacred temples, thrilling adventures, and seamless travel with our curated tour packages and reliable taxi services."
    >
      <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row md:gap-4">
        <Button
          asChild
          variant="gradient"
          size="lg"
          className="h-10 w-full px-4 text-xs sm:h-11 sm:w-auto sm:px-6 sm:text-sm md:h-12 md:px-10 md:text-lg"
        >
          <Link href="/packages">
            <MapPin className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            Explore Packages
            <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className="text-saffron h-10 w-full bg-white/95 px-4 text-xs shadow-xl hover:bg-white sm:h-11 sm:w-auto sm:px-6 sm:text-sm md:h-12 md:px-10 md:text-lg"
        >
          <Link href="/taxi">
            <Car className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            Taxi Booking
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-2 justify-center gap-3 px-2 sm:mt-10 sm:gap-4 sm:px-4 md:mt-16 md:flex md:flex-wrap md:gap-8 lg:gap-16">
        {[
          { value: "500+", label: "Happy Travelers" },
          { value: "50+", label: "Tour Packages" },
          { value: "100+", label: "Destinations" },
          { value: "24/7", label: "Support" },
        ].map((stat, index) => (
          <div
            key={index}
            className="rounded-xl bg-white/5 p-2 text-center backdrop-blur-sm sm:p-3 md:bg-transparent md:p-0 md:backdrop-blur-none"
          >
            <div className="xs:text-xl text-golden-yellow text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              {stat.value}
            </div>
            <div className="mt-0.5 text-[10px] text-white/70 sm:mt-1 sm:text-xs md:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </ClockwiseSlideHero>
  )
}
