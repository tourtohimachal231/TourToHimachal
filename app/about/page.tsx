import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about/about-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "About TourToHimachal | Your Trusted Himachal Travel Partner",
  description:
    "Discover TourToHimachal - your local Himachal travel experts. Honest pricing, on-ground support & curated packages. Experience authentic Himalayan journeys!",
  keywords:
    "about tourtohimachal, himachal travel agency, himachal tour packages, chintpurni taxi service, spiritual tour himachal",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About TourToHimachal | Your Trusted Himachal Travel Partner",
    description:
      "Discover TourToHimachal - your local Himachal travel experts. Honest pricing, on-ground support & curated packages. Experience authentic Himalayan journeys!",
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "TourToHimachal",
    locale: "en_IN",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
