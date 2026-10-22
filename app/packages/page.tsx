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


export const revalidate = 3600 // Revalidate every hour for ISR caching

export default async function PackagesPage() {
  const isDevWithoutSupabase = process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_SUPABASE_URL

  if (isDevWithoutSupabase) {
    const { packages: staticPackages } = await import("@/data/packages")
    const fallbackPackages = staticPackages.map((pkg) => ({
      id: pkg.id,
      title: pkg.title,
      slug: pkg.slug,
      description: pkg.description,
      short_description: pkg.excerpt,
      price: pkg.price,
      original_price: pkg.originalPrice,
      duration: pkg.duration,
      highlights: pkg.highlights,
      inclusions: pkg.inclusions,
      exclusions: pkg.exclusions,
      category: pkg.theme?.[0] || "Tour",
      images: pkg.images,
      is_active: true,
      is_featured: pkg.badge === "Popular",
      region: pkg.region,
    }))
    return <PackagesPageClient packages={fallbackPackages} />
  }

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
