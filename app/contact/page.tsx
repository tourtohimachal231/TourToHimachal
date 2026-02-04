import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Us | TourToHimachal - Tours, Packages & Taxi Services",
  description:
    "Get in touch with TourToHimachal for tour packages, taxi bookings, and custom itineraries. Located in Chintpurni, Himachal Pradesh. We respond within 12 hours.",
  keywords: "contact tourtohimachal, chintpurni travel agency, himachal tour booking, taxi service contact",
  openGraph: {
    title: "Contact Us | TourToHimachal",
    description:
      "Plan your perfect Himachal trip with us. Contact our travel experts for personalized assistance.",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
