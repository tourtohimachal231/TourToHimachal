import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about/about-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "About Tour to Himachal | Premier Travel Agency & Native Mountain Specialists",
  description:
    "Plan your authentic Tour to Himachal with TourToHimachal — the leading native Himachal Pradesh travel agency headquartered in Chintpurni. Custom tour packages, verified hill drivers, transparent pricing, and 24/7 mountain support across Shimla, Manali, Dharamshala, Spiti & Dalhousie.",
  keywords:
    "tour to himachal, tourtohimachal, about tourtohimachal, himachal travel agency, himachal tour operator, himachal tour packages, best travel agency in himachal, native himachal drivers, chintpurni taxi service, spiti valley tour operator, shimla manali travel partner",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Tour to Himachal | Premier Travel Agency & Native Mountain Specialists",
    description:
      "Plan your authentic Tour to Himachal with TourToHimachal — native Himachal travel agency based in Chintpurni. Curated tour packages, verified hill drivers & transparent pricing across Shimla, Manali, Spiti & Dharamshala.",
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "TourToHimachal",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/Images/about-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Tour to Himachal - Authentic Himalayan Travel Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tour to Himachal | Premier Travel Agency & Native Mountain Specialists",
    description:
      "Native Himachal Pradesh travel agency headquartered in Chintpurni. Bespoke holiday packages, verified hill fleet & 24/7 mountain support.",
    images: [`${SITE_URL}/Images/about-hero.jpg`],
  },
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "TourToHimachal",
    alternateName: [
      "Tour to Himachal",
      "TourToHimachal Travel Agency",
      "Tour To Himachal Pradesh",
      "TourToHimachal.in",
    ],
    slogan: "Peace | Pride | Living",
    url: SITE_URL,
    logo: `${SITE_URL}/Images/logo.webp`,
    image: [
      `${SITE_URL}/Images/about-hero.jpg`,
      `${SITE_URL}/Images/about-team.jpg`,
      `${SITE_URL}/Images/justdial-award-2026.png`,
    ],
    description:
      "TourToHimachal is a premier, native Himachal Pradesh travel agency and tour operator headquartered in Chintpurni, Himachal Pradesh. Founded by native Himalayan mountain travel specialists, TourToHimachal organizes customized holiday packages, honeymoon trips, pilgrimage yatra circuits, and private taxi services across Shimla, Manali, Dharamshala, Dalhousie, Spiti Valley, and Kinnaur. Expanding beyond the hills, TourToHimachal also curates bespoke vacations across Kashmir, Srinagar, the Andaman Islands, and international getaways to Thailand with upfront transparent pricing and 24/7 dedicated support.",
    telephone: "+91-8628839955",
    email: "contact@tourtohimachal.in",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Chintpurni Temple, Main Bazaar",
      addressLocality: "Chintpurni, Una",
      addressRegion: "Himachal Pradesh",
      postalCode: "177110",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.8083",
      longitude: "76.1367",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
      { "@type": "City", name: "Shimla" },
      { "@type": "City", name: "Manali" },
      { "@type": "City", name: "Dharamshala" },
      { "@type": "City", name: "Dalhousie" },
      { "@type": "AdministrativeArea", name: "Spiti Valley" },
      { "@type": "AdministrativeArea", name: "Kinnaur" },
      { "@type": "City", name: "Chintpurni" },
      { "@type": "City", name: "Kullu" },
      { "@type": "AdministrativeArea", name: "Kashmir" },
      { "@type": "City", name: "Srinagar" },
      { "@type": "AdministrativeArea", name: "Andaman and Nicobar Islands" },
      { "@type": "Country", name: "Thailand" },
      { "@type": "City", name: "Chandigarh" },
      { "@type": "City", name: "Delhi" },
    ],
    award: "Justdial Customer Choice Award 2026",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    knowsAbout: [
      "Himachal Pradesh Tourism",
      "Tour to Himachal Itinerary Planning",
      "Spiti Valley Road Trips",
      "Shimla Manali Honeymoon Packages",
      "Chintpurni Devi Darshan Yatra",
      "Kashmir Srinagar Houseboat & Gulmarg Packages",
      "Andaman Havelock Island Beach Holidays",
      "Thailand International Leisure Trips",
      "Commercial Hill Driving in Western Himalayas",
      "Himachal Taxi Service Fares",
    ],
    sameAs: [
      "https://www.instagram.com/tourtohimachal",
      "https://www.facebook.com/tourtohimachal",
    ],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: "About Tour to Himachal | Premier Travel Agency & Native Mountain Specialists",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "TourToHimachal",
      url: SITE_URL,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/about#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is TourToHimachal and why book your tour to Himachal with us?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TourToHimachal is an authentic, locally established Himachal Pradesh travel agency headquartered in Chintpurni, Himachal Pradesh. Unlike remote booking portals or metro aggregators who outsource ground operations, our native mountain team plans, drives, and supports every journey directly. We provide verified commercial hill drivers, curated stays, and 24/7 mountain assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Where is TourToHimachal located in Himachal Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TourToHimachal is headquartered in Chintpurni (Una/Kangra region), Himachal Pradesh, near the sacred Chintpurni Temple. We maintain operational coordinators and fleet bases across Shimla, Manali, Dharamshala, and Chandigarh to ensure seamless pickups, drop-offs, and 24/7 route support.",
        },
      },
      {
        "@type": "Question",
        name: "What tour packages does TourToHimachal offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TourToHimachal provides customized Himachal holiday packages including Shimla-Manali honeymoons, Dharamshala-Dalhousie family vacations, high-altitude Spiti and Kinnaur expeditions, sacred Devi Yatra pilgrimage circuits (Chintpurni, Jwala Ji, Kangra Devi, Baglamukhi), and adventure trekking circuits across the Western Himalayas.",
        },
      },
      {
        "@type": "Question",
        name: "Does TourToHimachal provide taxi services and verified hill drivers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TourToHimachal operates a dedicated mountain fleet comprising hatchbacks (Wagon R), sedans (Swift Dzire), MPVs (Maruti Ertiga), SUVs (Toyota Innova Crysta), Tempo Travellers (12-seaters), and Force Urbania luxury vans. Every vehicle is steered by a native commercial mountain driver trained for steep hill ghats, high passes, and snow terrain.",
        },
      },
      {
        "@type": "Question",
        name: "What is TourToHimachal's weather and road closure cancellation policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Safety in the Himalayas is our highest priority. In the event of unforeseen mountain road closures, heavy snow, or landslides verified by local authorities, TourToHimachal provides 100% free date rescheduling and transparent alternate itinerary routing with zero cancellation penalty on advance tokens.",
        },
      },
      {
        "@type": "Question",
        name: "How does payment and booking confirmation work with TourToHimachal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TourToHimachal operates on a transparent, customer-friendly payment structure. You secure your vehicle and hill driver with only a 20% to 25% confirmation token. 50% is payable upon boarding on Day 1, and the final balance is payable upon safe drop-off at your destination.",
        },
      },
      {
        "@type": "Question",
        name: "Does TourToHimachal only offer Himachal tours, or do you cover other domestic and international destinations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While Himachal Pradesh is our founding home and flagship specialty, TourToHimachal has expanded its trusted travel management model to cover other iconic destinations across India and abroad. We curate customized vacations to the paradise of Kashmir & Srinagar (luxury Dal Lake houseboats, Gulmarg & Pahalgam), the tropical Andaman Islands (Havelock, Radhanagar Beach, scuba diving), and international getaways to Thailand (Bangkok, Phuket, Krabi), all backed by verified on-ground partner networks and 24/7 human coordination.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
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
        name: "About Tour to Himachal",
        item: `${SITE_URL}/about`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AboutPageClient />
    </>
  )
}
