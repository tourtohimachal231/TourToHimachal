import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { PackagesPageClient } from "@/components/packages/packages-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Himachal Tour Packages | Spiritual, Family & Adventure Trips – TourToHimachal",
  description:
    "Explore curated tour packages to Himachal Pradesh. Chintpurni yatra, Shimla-Manali tours, temple circuits, family & honeymoon trips. Custom itineraries available. Book your Himachal adventure today!",
  keywords:
    "himachal tour packages, tour packages himachal pradesh, manali tour package, shimla tour package, chintpurni yatra package, spiritual tour himachal, family trip himachal, honeymoon package himachal",
  alternates: {
    canonical: `${SITE_URL}/packages`,
  },
  openGraph: {
    title: "Himachal Tour Packages | Spiritual, Family & Adventure Trips",
    description:
      "Curated Himachal packages: Chintpurni yatra, temple circuits, family trips & honeymoon tours. Custom itineraries available. Book today!",
    type: "website",
    url: `${SITE_URL}/packages`,
    siteName: "TourToHimachal",
    locale: "en_IN",
  },
}


export const revalidate = 0 // Always fetch fresh data

export default async function PackagesPage() {
  const supabase = createPublicClient()

  const { data: packages, error } = await supabase
    .from("packages")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching packages:", error)
  }

  return <PackagesPageClient packages={packages || []} />
}
