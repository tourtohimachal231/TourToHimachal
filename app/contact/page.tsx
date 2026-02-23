import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Contact TourToHimachal | Plan Your Himachal Trip Today",
  description:
    "Get in touch for tour packages, taxi bookings & custom itineraries. Located in Chintpurni, Himachal. Quick response within 12 hours. Start planning now!",
  keywords: "contact tourtohimachal, chintpurni travel agency, himachal tour booking, taxi service contact",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact TourToHimachal | Plan Your Himachal Trip Today",
    description:
      "Get in touch for tour packages, taxi bookings & custom itineraries. Located in Chintpurni, Himachal. Quick response within 12 hours. Start planning now!",
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: "TourToHimachal",
    locale: "en_IN",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
