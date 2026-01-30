import { HeroClient } from "./hero-client"
import type { HeroImage } from "./hero-client"

interface HeroProps {
  images?: HeroImage[]
}

export function Hero({ images }: HeroProps) {
  const heroImages = images && images.length > 0 ? images : undefined

  return <HeroClient images={heroImages} />
}
