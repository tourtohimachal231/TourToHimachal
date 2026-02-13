import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about/about-page-client"

export const metadata: Metadata = {
  title: "About TourToHimachal | Your Trusted Himachal Travel Partner",
  description:
    "Discover TourToHimachal - your local Himachal travel experts. Honest pricing, on-ground support & curated packages. Experience authentic Himalayan journeys!",
  keywords:
    "about tourtohimachal, himachal travel agency, himachal tour packages, chintpurni taxi service, spiritual tour himachal",
  openGraph: {
    title: "About TourToHimachal | Your Trusted Himachal Travel Partner",
    description:
      "Discover TourToHimachal - your local Himachal travel experts. Honest pricing, on-ground support & curated packages. Experience authentic Himalayan journeys!",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
