import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { PackageDetailClient } from "./package-detail-client"

const SITE_URL = "https://www.tourtohimachal.in"

interface PageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour for ISR caching

async function getPackage(slug: string) {
  const supabase = createPublicClient()

  const { data: pkg, error } = await supabase
    .from("packages")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single()

  if (error || !pkg) {
    return null
  }

  return pkg
}

async function getAllPackages() {
  const supabase = createPublicClient()

  const { data: packages } = await supabase
    .from("packages")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  return packages || []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pkg = await getPackage(slug)

  if (!pkg) {
    return { title: "Package Not Found" }
  }

  return {
    title: `${pkg.title} | TourToHimachal`,
    description: pkg.short_description || pkg.description,
    alternates: {
      canonical: `${SITE_URL}/packages/${slug}`,
    },
    openGraph: {
      title: pkg.title,
      description: pkg.short_description || pkg.description,
      images: pkg.images?.[0] ? [pkg.images[0]] : [],
      type: "website",
      url: `${SITE_URL}/packages/${slug}`,
      siteName: "TourToHimachal",
    },
  }
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params
  const pkg = await getPackage(slug)

  if (!pkg) {
    notFound()
  }

  const allPackages = await getAllPackages()

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    image: pkg.images,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "INR",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PackageDetailClient pkg={pkg} allPackages={allPackages} />
    </>
  )
}
