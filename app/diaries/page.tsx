import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { DiariesPageClient } from "@/components/diaries/diaries-page-client"

export const metadata: Metadata = {
  title: "Travel Diaries | Real Himachal Trips & Travel Stories",
  description:
    "Explore real travel diaries from Himachal: itineraries, photos & tips from recent journeys. Get authentic insights to plan your perfect trip!",
  openGraph: {
    title: "Travel Diaries | Real Himachal Trips & Travel Stories",
    description:
      "Explore real travel diaries from Himachal: itineraries, photos & tips from recent journeys. Get authentic insights to plan your perfect trip!",
    type: "website",
  },
}

export const revalidate = 0 // Always fetch fresh data

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
