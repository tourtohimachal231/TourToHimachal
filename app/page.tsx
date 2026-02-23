import type { Metadata } from "next"
import { Suspense } from "react"
import Script from "next/script"
import dynamic from "next/dynamic"

export const revalidate = 0 // Always fetch fresh data

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Tour to Himachal Pradesh | Best Tour Packages & Taxi Services – TourToHimachal",
  description:
    "Plan your tour to Himachal Pradesh with TourToHimachal. Affordable tour packages, taxi services, spiritual journeys, honeymoon trips & adventure getaways from Shimla, Manali, Chintpurni & more. Book today!",
  keywords:
    "tour to himachal, tour to himachal pradesh, himachal tour packages, manali tour package, shimla tour, chintpurni taxi, himachal taxi service, spiritual tour himachal, honeymoon packages himachal, adventure trip himachal, tourtohimachal",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Tour to Himachal Pradesh | Best Tour Packages & Taxi Services",
    description:
      "Plan your tour to Himachal Pradesh with TourToHimachal. Curated packages, reliable taxi, spiritual & adventure tours. Book your dream Himalayan trip today!",
    type: "website",
    url: SITE_URL,
    siteName: "TourToHimachal",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Tour to Himachal Pradesh – TourToHimachal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour to Himachal Pradesh | TourToHimachal",
    description:
      "Curated Himachal tour packages, taxi services & spiritual journeys. Book your trip with TourToHimachal today!",
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

// Dynamic import for Hero component (client component with animation)
const Hero = dynamic(
  () => import("@/components/home/hero").then((mod) => ({ default: mod.Hero })),
  {
    loading: () => (
      <div className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-black/70 via-black/40 to-black/80">
        <div className="text-white text-center">Loading...</div>
      </div>
    )
  }
)

// Dynamic imports for non-critical components
const Header = dynamic(
  () => import("@/components/home/header").then((mod) => ({ default: mod.Header })),
  { loading: () => null }
)

const PopularDestinations = dynamic(
  () => import("@/components/home/popular-destinations").then((mod) => ({ default: mod.PopularDestinations })),
  { loading: () => null }
)

const TaxiService = dynamic(
  () => import("@/components/home/taxi-service").then((mod) => ({ default: mod.TaxiService })),
  { loading: () => null }
)

const DeferredHomeSections = dynamic(
  () => import("@/components/home/deferred-home-sections").then((mod) => ({ default: mod.DeferredHomeSections })),
  { loading: () => null }
)

const TravelDiaries = dynamic(
  () => import("@/components/home/travel-diaries").then((mod) => ({ default: mod.TravelDiaries })),
  { loading: () => null }
)

const DeferredCTABanner = dynamic(
  () => import("@/components/home/deferred-cta-banner").then((mod) => ({ default: mod.DeferredCTABanner })),
  { loading: () => null }
)

const Footer = dynamic(
  () => import("@/components/home/footer").then((mod) => ({ default: mod.Footer })),
  { loading: () => null }
)

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-background grow safe-area-bottom">
        {/* TravelAgency + LocalBusiness structured data */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["TravelAgency", "LocalBusiness"],
              name: "TourToHimachal",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/icon.png`,
              image: `${SITE_URL}/og-image.jpg`,
              description:
                "TourToHimachal offers curated tour packages, reliable taxi services, spiritual journeys, and adventure travel across Himachal Pradesh.",
              telephone: "+91-8628839955",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chintpurni",
                addressLocality: "Una",
                addressRegion: "Himachal Pradesh",
                postalCode: "177110",
                addressCountry: "IN",
              },
              areaServed: [
                "Himachal Pradesh",
                "Shimla",
                "Manali",
                "Dharamshala",
                "Chintpurni",
                "Kullu",
                "Spiti Valley",
              ],
              priceRange: "₹₹",
              sameAs: [],
            }),
          }}
        />
        {/* WebSite structured data with SearchAction */}
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TourToHimachal",
              url: `${SITE_URL}/`,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/packages?search={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Header />
        <Hero />
        <TaxiService />
        <Suspense fallback={null}>
          <PopularDestinations />
        </Suspense>

        <DeferredHomeSections />

        <Suspense fallback={null}>
          <TravelDiaries />
        </Suspense>

        <DeferredCTABanner />
        <Footer />
      </main>
    </div>
  )
}


