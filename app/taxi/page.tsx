import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { TaxiPageClient } from "@/components/taxi/taxi-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Himachal Taxi Service | Reliable Cabs & Transparent Fares – TourToHimachal",
  description:
    "Book safe, reliable taxi service across Himachal Pradesh. Airport pickups, inter-city rides, Chintpurni to Shimla, Manali & sightseeing tours with verified drivers. No hidden charges!",
  keywords:
    "himachal taxi service, taxi himachal pradesh, cab service himachal, chintpurni taxi, shimla taxi, manali taxi, airport pickup himachal, tempo traveller himachal",
  alternates: {
    canonical: `${SITE_URL}/taxi`,
  },
  openGraph: {
    title: "Himachal Taxi Service | Reliable Cabs & Transparent Fares",
    description:
      "Book safe taxi service across Himachal. Airport pickups, inter-city rides & sightseeing tours with verified drivers. No hidden charges!",
    type: "website",
    url: `${SITE_URL}/taxi`,
    siteName: "TourToHimachal",
    locale: "en_IN",
  },
}


export const revalidate = 0 // Always fetch fresh data

export default async function TaxiPage() {
  const supabase = createPublicClient()

  const [vehiclesResult, routesResult] = await Promise.all([
    supabase.from("vehicles").select("*").eq("is_available", true).order("capacity", { ascending: true }),
    supabase.from("taxi_routes").select("*").eq("is_active", true).order("base_fare", { ascending: true }),
  ])

  if (vehiclesResult.error) {
    console.error("Error fetching vehicles:", vehiclesResult.error)
  }
  if (routesResult.error) {
    console.error("Error fetching routes:", routesResult.error)
  }

  return <TaxiPageClient vehicles={vehiclesResult.data || []} routes={routesResult.data || []} />
}
