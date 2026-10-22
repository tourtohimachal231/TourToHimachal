import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { DiariesPageClient } from "@/components/diaries/diaries-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Himachal Travel Diaries | Real Trip Stories & Itineraries – TourToHimachal",
  description:
    "Read real travel diaries from Himachal: actual itineraries, photos & tips from recent journeys. Get authentic insights to plan your tour to Himachal Pradesh!",
  keywords:
    "himachal travel diary, himachal trip story, himachal itinerary, manali trip diary, shimla travel story, chintpurni yatra diary",
  alternates: {
    canonical: `${SITE_URL}/diaries`,
  },
  openGraph: {
    title: "Himachal Travel Diaries | Real Trip Stories & Itineraries",
    description:
      "Real travel diaries from Himachal: itineraries, photos & tips from recent journeys. Authentic insights for your Himachal trip!",
    type: "website",
    url: `${SITE_URL}/diaries`,
    siteName: "TourToHimachal",
    locale: "en_IN",
  },
}

export const revalidate = 3600 // Revalidate every hour for ISR caching

export default async function DiariesPage() {
  const supabase = createPublicClient()

  const { data: diaries, error } = await supabase
    .from("diaries")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching diaries:", error)
  }

  return <DiariesPageClient diaries={diaries || []} />
}
