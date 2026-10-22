import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { packages as fallbackPackages } from "@/data/packages"
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

  if (error || !pkg || Array.isArray(pkg) || !pkg.title) {
    const fallback = fallbackPackages.find((p) => p.slug === slug)
    return fallback || null
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

  if (!packages || !Array.isArray(packages) || packages.length === 0) {
    return fallbackPackages
  }

  return packages
}

function sanitizePackageMetaDescription(rawText: string | null | undefined, maxLength: number = 158): string {
  if (!rawText) return ""

  const text = rawText
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^(\s*[-*_]\s*){3,}$/gm, "")
    .replace(/^\s*#{1,6}\s*/gm, "")
    .replace(/^(=+|-+)\s*$/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/[`~>]/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/[*_]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (text.length <= maxLength) {
    return text
  }

  const cut = text.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(" ")
  const trimmed = (lastSpace > maxLength * 0.65 ? cut.slice(0, lastSpace) : cut).trim()
  return trimmed.replace(/[,;:\-\s]+$/, "") + "..."
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pkg = await getPackage(slug)

  if (!pkg) {
    return { title: "Package Not Found" }
  }

  const rawDescription = pkg.short_description || pkg.description
  const sanitized = sanitizePackageMetaDescription(rawDescription, 158)
  const description =
    sanitized.length >= 25
      ? sanitized
      : `Explore ${pkg.title} with TourToHimachal. Handcrafted travel itinerary across Himachal Pradesh.`

  return {
    title: `${pkg.title} | TourToHimachal`,
    description,
    alternates: {
      canonical: `${SITE_URL}/packages/${slug}`,
    },
    openGraph: {
      title: pkg.title,
      description,
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
    description:
      (() => {
        const s = sanitizePackageMetaDescription(pkg.description || pkg.short_description, 300)
        return s.length >= 25
          ? s
          : `Explore ${pkg.title} with TourToHimachal. Handcrafted travel itinerary across Himachal Pradesh.`
      })(),
    image: pkg.images,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "INR",
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tour Packages",
        item: `${SITE_URL}/packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.title,
        item: `${SITE_URL}/packages/${pkg.slug || slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PackageDetailClient pkg={pkg} allPackages={allPackages} />
    </>
  )
}
