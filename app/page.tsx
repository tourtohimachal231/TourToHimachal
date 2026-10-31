import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"

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

import { Header } from "@/components/home/header"
import { RecognitionTrust } from "@/components/home/recognition-trust"
import { PopularDestinations } from "@/components/home/popular-destinations"
import { TravelThemes } from "@/components/home/travel-themes"
import { TaxiService } from "@/components/home/taxi-service"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { HomeTestimonials } from "@/components/home/home-testimonials"
import { TravelDiaries } from "@/components/home/travel-diaries"
import { CTABanner } from "@/components/home/cta-banner"
import { Footer } from "@/components/home/footer"
import { HomeFAQs } from "@/components/home/home-faqs"
import { homeFaqs, generateFaqSchema } from "@/data/home-faqs"

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
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
  }

  const faqSchema = generateFaqSchema(homeFaqs)

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "TourToHimachal",
    url: `${SITE_URL}/`,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/packages?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-background grow safe-area-bottom">
        {/* TravelAgency + LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* WebSite structured data with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* FAQPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {/* 1. Header and navigation */}
        <Header />

        {/* 2. Hero with clear description and actions: explore packages and customise trip */}
        <Hero />

        {/* 3. Genuine Justdial recognition and verified local-business information */}
        <RecognitionTrust />

        {/* 4. Featured tour packages loaded from Supabase */}
        <PopularDestinations />

        {/* 5. Travel themes */}
        <TravelThemes />

        {/* 6. Taxi and transfer services */}
        <TaxiService />

        {/* 7. Why choose TourToHimachal */}
        <WhyChooseUs />

        {/* 8. Genuine customer reviews (Supabase approved reviews) */}
        <HomeTestimonials />

        {/* 9. Travel guides and diaries */}
        <TravelDiaries />

        {/* 10. Frequently Asked Questions */}
        <HomeFAQs />

        {/* 11. Final enquiry CTA */}
        <CTABanner />

        {/* 11. Footer */}
        <Footer />
      </main>
    </div>
  )
}


