import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { PackagesPageClient } from "@/components/packages/packages-page-client"

export const metadata: Metadata = {
  title: "Himachal Tour Packages | Spiritual, Family & Adventure Trips",
  description:
    "Explore curated Himachal packages: Chintpurni yatra, temple circuits, family trips & honeymoon tours. Custom itineraries available. Book your adventure!",
  openGraph: {
    title: "Himachal Tour Packages | Spiritual, Family & Adventure Trips",
    description:
      "Explore curated Himachal packages: Chintpurni yatra, temple circuits, family trips & honeymoon tours. Custom itineraries available. Book your adventure!",
    type: "website",
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
