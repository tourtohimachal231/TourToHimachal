export interface HomeFAQ {
  id: string
  number: string
  question: string
  answer: string
  category: "booking" | "taxi" | "yatra" | "safety"
  categoryLabel: string
  highlight?: string
}

export const homeFaqCategories = [
  { id: "all", label: "All Topics" },
  { id: "booking", label: "Packages & Booking" },
  { id: "taxi", label: "Cabs & Drivers" },
  { id: "yatra", label: "Temple Darshan" },
  { id: "safety", label: "Weather & Safety" },
] as const

export const homeFaqs: HomeFAQ[] = [
  {
    id: "booking-process",
    number: "01",
    category: "booking",
    categoryLabel: "Packages & Booking",
    question: "How does booking with TourToHimachal work, and what advance deposit is required?",
    answer:
      "Booking is handled directly by our local Himachal team — not through outsourced brokers or call centers. You share your dates, group size, and preferred destinations on WhatsApp or by phone. Within 30 to 60 minutes, we provide a transparent, all-inclusive day-wise itinerary with vehicle allocation. To confirm and lock your dedicated vehicle and hotel rooms, we collect a modest token advance (20% for taxi hire, 25% for tour packages). The remaining balance is payable comfortably across your trip.",
    highlight: "Token advance: 20–25% • Direct local coordinator • Zero booking fees",
  },
  {
    id: "customization",
    number: "02",
    category: "booking",
    categoryLabel: "Packages & Booking",
    question: "Can we customize the itinerary, change hotels, or adjust the daily pace?",
    answer:
      "Every single journey we run is private and 100% bespoke. Whether you prefer boutique cedar-wood cottages, 4-star luxury resorts, heritage homestays in apple orchards, or leisurely cafe days in Old Manali, we build around your tempo. If you want later morning starts or relaxed multi-night stays in one valley instead of rushing between towns, we adjust the schedule to fit your family.",
    highlight: "100% private tours • Flexible daily start times • Handpicked stays",
  },
  {
    id: "mountain-drivers",
    number: "03",
    category: "taxi",
    categoryLabel: "Cabs & Drivers",
    question: "Are your taxi drivers native to Himachal, and how do they handle mountain & snow routes?",
    answer:
      "All our drivers are native Himachal residents who grew up driving these mountain valleys. Each holds an official commercial hill-driving license with documented experience across steep ghats, sharp hairpins, fog, black ice, and snow routes including Atal Tunnel, Rohtang Pass, Jalori Pass, and the Spiti circuit. Our cabs carry snow chains during winter months, and your driver remains dedicated to your group for the entirety of the trip.",
    highlight: "Verified hill-licensed drivers • Snow chains equipped • Polite local guides",
  },
  {
    id: "pickup-locations",
    number: "04",
    category: "taxi",
    categoryLabel: "Cabs & Drivers",
    question: "Which pickup and drop locations do you serve across North India?",
    answer:
      "We provide seamless, door-to-door hill transfers directly from your arrival point: Chandigarh Airport (IXC) & Railway Station, Delhi (IGI Airport & New Delhi Railway Station), Kalka Railway Station, Una Himachal Railway Station, Amritsar Airport (ATQ), and Pathankot. We also operate inter-city transfers and local sightseeing across Shimla, Manali, Dharamshala, Dalhousie, Kasol, Jibhi, and Spiti Valley.",
    highlight: "Chandigarh • Delhi • Kalka • Una • Amritsar • Pathankot",
  },
  {
    id: "nau-devi-darshan",
    number: "05",
    category: "yatra",
    categoryLabel: "Temple Darshan",
    question: "Do you provide special assistance for Nau Devi Darshan and senior citizens?",
    answer:
      "Pilgrimage is where our roots began. We run specialized Devi Darshan circuits covering Mata Chintpurni, Jwala Ji, Kangra Brajeshwari, Chamunda Devi, Naina Devi, and Maa Baglamukhi. For senior yatris and families with children, our drivers navigate to the closest accessible drop-off points, assist with ropeways, golf-carts, or elevator permits where available, and schedule darshans around temple aarti times to avoid peak crowds.",
    highlight: "Closest temple drops • Elevator & golf-cart guidance • Senior-paced tempo",
  },
  {
    id: "road-closure-weather",
    number: "06",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "What is your policy if roads or mountain passes close due to snow or landslides?",
    answer:
      "Safety in the Himalayas comes before everything else. If local administration issues road advisories or passes like Rohtang or Atal Tunnel are temporarily closed, our on-ground team coordinates safe alternate routes and equivalent sightseeing immediately. If your entire journey is blocked by official road closures, we provide 100% free date rescheduling or full credit notes with zero cancellation penalties.",
    highlight: "100% free weather rescheduling • Zero penalty guarantee • Live on-ground route tracking",
  },
  {
    id: "pricing-transparency",
    number: "07",
    category: "booking",
    categoryLabel: "Packages & Booking",
    question: "Are toll taxes, state border permits, and driver food/stay charges included?",
    answer:
      "Yes. Our quotation is completely transparent and final. It explicitly covers private vehicle hire, fuel, Himachal state entry taxes, green cess, highway tolls, parking tickets, and the driver's night stay and food allowance. What we quote on WhatsApp is the exact amount you pay — no surprise checkpoint surcharges or awkward negotiations at the end of the day.",
    highlight: "All state taxes & permits included • Tolls & parking covered • Zero hidden fees",
  },
  {
    id: "best-time-to-visit",
    number: "08",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "What is the best time of year to visit Himachal for snowfall versus pleasant sightseeing?",
    answer:
      "For fresh snowfall, winter sports, and snowcapped landscapes in Manali, Solang Valley, and Shimla, visit between late December and late February. For pleasant mountain weather (15°C to 25°C), apple blossoms, and clear river valleys, the spring and summer window from March to June is ideal. For golden autumn leaves, apple harvest season, and ultra-clear Himalayan peaks, September to November is unmatched.",
    highlight: "Snow: Dec–Feb • Pleasant: Mar–Jun • Clear Views: Sep–Nov",
  },
  {
    id: "flexible-stops",
    number: "09",
    category: "taxi",
    categoryLabel: "Cabs & Drivers",
    question: "Can we make unscheduled stops for tea, viewpoints, or photos along the route?",
    answer:
      "Yes, absolutely. Because your cab is 100% private to your family, you set the rhythm of the journey. You can pull over whenever you spot a picturesque riverbank, a roadside waterfall, an apple orchard, or an authentic roadside dhaba for hot chai and siddu. Our drivers are happy to accommodate relaxed photography stops.",
    highlight: "100% private vehicle • Unlimited photo & tea stops • No rush",
  },
  {
    id: "winter-heating",
    number: "10",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "Are room heaters and running hot water guaranteed during winter bookings?",
    answer:
      "Yes. For all winter itineraries from November through March, we exclusively partner with hotels and boutique cottages that guarantee reliable heating (room heaters or electric bed warmers), heavy down quilts, and 24-hour hot water running supply. We inspect and verify heating standards before assigning properties.",
    highlight: "Verified winter heating • Electric bed warmers • 24/7 hot water guaranteed",
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
