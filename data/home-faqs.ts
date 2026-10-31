export interface HomeFAQ {
  id: string
  question: string
  answer: string
  category: "booking" | "taxi" | "yatra" | "safety"
  categoryLabel: string
}

export const homeFaqCategories = [
  { id: "all", label: "All Questions" },
  { id: "booking", label: "Tour Packages & Booking" },
  { id: "taxi", label: "Taxi & Hill Transfers" },
  { id: "yatra", label: "Temple Darshan & Yatra" },
  { id: "safety", label: "Weather & Safety" },
] as const

export const homeFaqs: HomeFAQ[] = [
  {
    id: "booking-process",
    category: "booking",
    categoryLabel: "Tour Packages & Booking",
    question: "How do I book a tour package or hire a taxi with TourToHimachal?",
    answer:
      "Booking is straightforward and hassle-free. You can connect with us directly on WhatsApp (+91 8628839955), call our hill travel desk, or submit an enquiry on our website. Our local Himachal travel experts will understand your requirements and share a customized day-by-day itinerary and transparent quote within 1 hour. We only require a nominal advance token (20% for cabs, 25% for tour packages) to lock your vehicle and dates.",
  },
  {
    id: "customization",
    category: "booking",
    categoryLabel: "Tour Packages & Booking",
    question: "Can we fully customize our itinerary, hotel category, and travel pace?",
    answer:
      "Yes, 100%! We believe every traveler has unique preferences. Whether you are planning a relaxed romantic honeymoon, an adventurous expedition, or a gentle spiritual tour with elderly family members, we customize every single detail. You can select your preferred stay category (cozy 3-star cottages, premium 4-star mountain resorts, or heritage homestays) and adjust daily sightseeing schedules as you like.",
  },
  {
    id: "mountain-drivers",
    category: "taxi",
    categoryLabel: "Taxi & Hill Transfers",
    question: "Are your taxi drivers experienced in steep mountain roads and winter snow?",
    answer:
      "Yes, absolutely. All our drivers are Himachal natives holding official commercial hill-driving endorsements and years of mountain experience. They are thoroughly trained in handling steep ghats, sharp hairpins, fog, winter black ice, and snow routes like Atal Tunnel, Rohtang Pass, and Jalori Pass. Our commercial vehicles are fully inspected, and our drivers also serve as courteous, friendly local guides throughout your journey.",
  },
  {
    id: "pickup-locations",
    category: "taxi",
    categoryLabel: "Taxi & Hill Transfers",
    question: "Which pickup and drop locations do you serve?",
    answer:
      "We offer door-to-door hill transfers from all major transit hubs including Chandigarh Airport & Railway Station, Delhi (IGI Airport & New Delhi Railway Station), Kalka Railway Station, Una Himachal Railway Station, Amritsar Airport, and Pathankot. We also provide inter-city cabs across Shimla, Manali, Dharamshala, Dalhousie, Kasol, Jibhi, and Spiti Valley.",
  },
  {
    id: "nau-devi-darshan",
    category: "yatra",
    categoryLabel: "Temple Darshan & Yatra",
    question: "Do you organize Nau Devi Darshan and temple tours for elderly family members?",
    answer:
      "Spiritual pilgrimage is our core heritage. We arrange dedicated Devi Darshan circuits covering Mata Chintpurni, Jwala Ji, Kangra Brajeshwari, Chamunda Devi, Naina Devi, and Maa Baglamukhi. For senior yatris, our local drivers arrange the nearest possible vehicle drop-offs, assist with temple elevator/golf-cart access where available, and schedule gentle darshan timings to avoid heavy rush.",
  },
  {
    id: "road-closure-weather",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "What happens if a mountain pass or road is closed due to snowfall or landslides?",
    answer:
      "Your safety is always our first priority. In the rare event of extreme weather alerts, sudden heavy snowfall, or landslide advisories issued by local authorities, our on-ground team coordinates real-time detours and safe alternative sightseeing spots. If your trip cannot proceed due to government road blockages, we offer 100% free date rescheduling or transferable credit vouchers without cancellation penalties.",
  },
  {
    id: "pricing-transparency",
    category: "booking",
    categoryLabel: "Tour Packages & Booking",
    question: "Are there any hidden costs like hill permits, green tax, toll charges, or driver allowances?",
    answer:
      "Never. What we quote on WhatsApp or email is the exact final price you pay. Our quotes explicitly cover private dedicated vehicle hire, fuel, state border taxes, green tax / hill cess, highway toll plazas, parking charges, and the driver's food and night stay allowance. You will never encounter unexpected checkpoint fees during your holiday.",
  },
  {
    id: "best-time-to-visit",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "When is the best time to visit Himachal Pradesh for snowfall vs pleasant weather?",
    answer:
      "For snow lovers and winter activities (skiing, snowmobiling, and snowcapped peaks in Manali, Solang Valley, and Shimla), the best time is late December through February. For pleasant cool weather, blossoming valleys, and outdoor adventures, March through June is ideal. For crisp autumn skies, golden apple orchards, and panoramic Himalayan visibility, September to November is unmatched.",
  },
  {
    id: "flexible-stops",
    category: "taxi",
    categoryLabel: "Taxi & Hill Transfers",
    question: "Can we make spontaneous sightseeing stops for photos, tea, or views along the way?",
    answer:
      "Of course! Because your taxi is 100% private and dedicated exclusively to your group, you have complete freedom to pull over at scenic riverbeds, panoramic viewpoints, authentic roadside dhabas, and pine trails for photographs and refreshments at your own leisure.",
  },
  {
    id: "winter-heating",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "Are heaters and hot water guaranteed in hotels during winter months?",
    answer:
      "Yes. For winter tours (November through March), all our partner hotels and cottages in high-altitude destinations such as Manali, Shimla, and Dharamshala are equipped with room heaters or electric bed warmers, heavy winter quilts, and 24-hour hot water running supply so you stay warm and comfortable even in sub-zero weather.",
  },
]

export function generateFaqSchema(faqs: HomeFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

