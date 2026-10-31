export interface FAQInternalLink {
  label: string
  href: string
}

export interface HomeFAQ {
  id: string
  question: string
  answer: string
  category: "destinations" | "taxis" | "hotels" | "yatra" | "safety"
  categoryLabel: string
  links?: FAQInternalLink[]
}

export const homeFaqCategories = [
  { id: "all", label: "All Questions" },
  { id: "destinations", label: "Places & Routes" },
  { id: "taxis", label: "Taxi Service & Fleet" },
  { id: "hotels", label: "Hotels & Custom Tours" },
  { id: "yatra", label: "Temple Darshan & Yatra" },
  { id: "safety", label: "Weather & Safety" },
] as const

export const homeFaqs: HomeFAQ[] = [
  {
    id: "dharamshala-dharamkot-triund",
    category: "destinations",
    categoryLabel: "Places & Routes",
    question: "Can taxis go up to Dharamkot, and how does Tour to Himachal organize the Triund Trek?",
    answer:
      "Yes, Tour to Himachal taxis can drop you directly at Upper Dharamkot and the Gallu Devi Temple starting point for the Triund Trek. Upper Dharamkot sits above McLeod Ganj with narrow, steep mountain curves where outside drivers often hesitate. Tour to Himachal operates native commercial Swift Dzire and Innova Crysta cabs with hill-licensed Pahadi drivers who navigate these curves easily. For the Triund day hike (2,828m, ~9 km), we arrange early morning drop-offs at Gallu Devi, organize verified local trekking guides, and schedule your return pickup at Bhagsu Waterfall. We also book verified valley-view cafe stays and cedar-wood cottages across Dharamkot and McLeod Ganj.",
    links: [
      { label: "Triund Trek Package", href: "/packages/triund-trek-dharamshala-escape" },
      { label: "Dalhousie & Dharamshala Tour", href: "/packages/dalhousie-dharamshala-amritsar-tour" },
      { label: "Dharamshala Taxi Service", href: "/taxi" },
    ],
  },
  {
    id: "manali-solang-atal-tunnel-rohtang",
    category: "destinations",
    categoryLabel: "Places & Routes",
    question: "How does Tour to Himachal manage Rohtang Pass NGT permits, Atal Tunnel, and Solang Valley snow travel?",
    answer:
      "Tour to Himachal procures all mandatory NGT (National Green Tribunal) environmental permits, hill green taxes, and Atal Tunnel transit permissions directly on your behalf. Rohtang Pass (3,978m) entry is strictly capped by the HP government with daily vehicle quotas. When you book a customized Manali package or private cab with Tour to Himachal, our local team reserves your permit in advance. In winter and spring, our vehicles carry verified snow chains for the slick Solang to Sissu (Lahaul Valley) stretch through the 9.02 km Atal Tunnel, ensuring 100% safe transit across icy mountain roads.",
    links: [
      { label: "Explore Manali Packages", href: "/packages" },
      { label: "Manali Taxi Rates & Booking", href: "/taxi" },
      { label: "Custom Itinerary on WhatsApp", href: "/contact" },
    ],
  },
  {
    id: "tosh-kasol-parvati-valley",
    category: "destinations",
    categoryLabel: "Places & Routes",
    question: "Can cabs drive all the way into Tosh village, and how does Tour to Himachal organize Parvati Valley trips?",
    answer:
      "Tour to Himachal taxis drive directly up to the Tosh parking barrier bridge; from that point, it is a scenic 10 to 15-minute stone-paved walk into the village. The drive from Bhuntar through Kasol, Manikaran Gurudwara, and Barshaini winds along steep cliffs above the roaring Parvati River. The final 3 km stretch from Barshaini to Tosh features sharp ascents where Tour to Himachal assigns high-ground-clearance Innova Crystas or sturdy sedans with experienced hill drivers. Our drivers ensure safe vehicle parking at the Tosh bridge and assist with luggage. We also organize customized Parvati Valley itineraries covering riverside cottages in Kasol, quiet walks to Chalal, and day trips to Kheerganga trailheads.",
    links: [
      { label: "Parvati Valley Packages", href: "/packages" },
      { label: "Chandigarh to Kasol Taxi", href: "/taxi" },
      { label: "Traveler Road Diaries", href: "/diaries" },
    ],
  },
  {
    id: "kullu-belt-naggar-rafting-orchards",
    category: "destinations",
    categoryLabel: "Places & Routes",
    question: "What makes the Kullu belt unique, and does Tour to Himachal arrange adventure activities and authentic stays?",
    answer:
      "Tour to Himachal curates complete Kullu Valley experiences featuring historic Naggar Castle, traditional Raison apple orchard homestays, and government-certified Beas River rafting. Most hurried commercial tour buses bypass Kullu along the right-bank highway. Tour to Himachal takes you along the tranquil left-bank road to explore the 500-year-old stone-and-timber Naggar Castle, the Nicholas Roerich Art Gallery, and authentic wood-carved temples. For thrill-seekers, we arrange Grade III white-water rafting in Raison and paragliding in Dobhi exclusively through Tourism Department-licensed operators. We also book heritage orchard retreats where you can pick fresh apples between August and October.",
    links: [
      { label: "Kullu Valley Packages", href: "/packages" },
      { label: "Private Taxi for Kullu", href: "/taxi" },
      { label: "Himachal Travel Blog Guide", href: "/blog" },
    ],
  },
  {
    id: "spiti-ghati-kaza-chandratal-ams",
    category: "destinations",
    categoryLabel: "Places & Routes",
    question: "What vehicle is required for Spiti Ghati, and how does Tour to Himachal manage altitude acclimatization (AMS)?",
    answer:
      "A high-ground-clearance SUV (such as Toyota Innova Crysta or 4x4) is mandatory for Spiti Ghati, and Tour to Himachal designs a gradual altitude ascent via Shimla-Kinnaur to prevent Acute Mountain Sickness (AMS). Spiti Valley sits at an average elevation exceeding 3,800 meters (12,500 feet), where rapid ascents from Manali frequently trigger severe mountain sickness. Tour to Himachal itineraries follow the medically recommended circuit: ascending gently via Narkanda, Sangla, Kalpa (2,960m), and Tabo before reaching Kaza (3,800m), Key Monastery, and Kunzum Pass (4,551m) en route to Chandratal. Our specialized Spiti drivers are vetted for water crossings (pagal nallahs) at Malling and Chhota Dhara, and carry emergency oxygen support.",
    links: [
      { label: "Spiti Valley Packages", href: "/packages" },
      { label: "Spiti SUV Taxi Hire", href: "/taxi" },
      { label: "Contact Route Specialist", href: "/contact" },
    ],
  },
  {
    id: "tour-to-himachal-taxi-service-advantage",
    category: "taxis",
    categoryLabel: "Taxi Service & Fleet",
    question: "Why should I book a private taxi directly with Tour to Himachal instead of metro cab aggregators?",
    answer:
      "Tour to Himachal is a registered Himachal-based transport operator with our own commercial fleet and licensed hill drivers, eliminating third-party broker markups and mid-journey vehicle swaps. When you book through metro-based booking apps or middleman agencies in Delhi or Mumbai, your booking is routinely auctioned off to unknown sub-operators who often demand unexpected extra cash for heaters, hill driving, tolls, or green taxes. Tour to Himachal owns and coordinates dedicated commercial yellow-plate vehicles — Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova Crysta, and luxury Force Urbania Tempo Travellers. You receive your driver's direct contact details 12 hours prior to pickup, transparent all-inclusive written agreements, and 24/7 hillside dispatch backup.",
    links: [
      { label: "View Taxi Fleet & Fares", href: "/taxi" },
      { label: "Instant Taxi Quote Form", href: "/taxi#booking-form" },
      { label: "Why Choose Tour to Himachal", href: "/about" },
    ],
  },
  {
    id: "hotel-bookings-verified-heating",
    category: "hotels",
    categoryLabel: "Hotels & Custom Tours",
    question: "How does Tour to Himachal ensure genuine hotel quality, mountain views, and guaranteed winter heating?",
    answer:
      "Every hotel, boutique cottage, and heritage homestay booked through Tour to Himachal is physically inspected by our on-ground team to guarantee real valley views, spotless hygiene, and reliable heating. Many generic booking platforms display wide-angle, outdated photos of mountain rooms that end up facing concrete alleyways or lack hot water in sub-zero winter temperatures. Tour to Himachal audits partner properties across Shimla, Manali, Dharamshala, Dalhousie, and Spiti. From November through March, we strictly contract rooms equipped with electric bed warmers, oil heaters, heavy thermal quilts, and 24-hour hot water running supply so your family remains warm and comfortable.",
    links: [
      { label: "Explore Holiday Packages", href: "/packages" },
      { label: "Custom Hotel Preference", href: "/contact" },
      { label: "Verified Reviews", href: "/#reviews" },
    ],
  },
  {
    id: "customized-trips-unhurried-pacing",
    category: "hotels",
    categoryLabel: "Hotels & Custom Tours",
    question: "How does Tour to Himachal customize trips for families, honeymoons, and senior citizens?",
    answer:
      "Tour to Himachal builds your day-wise itinerary completely from scratch based on your preferred waking hours, hotel style, and travel pace within 30 to 60 minutes on WhatsApp. We avoid exhausting checklist tours that force you to wake up at 5:00 AM to rush between towns. Whether you are planning a romantic honeymoon with private cedar-cottage jacuzzi stays in Old Manali, an adventure loop through Spiti with photography detours, or a peaceful temple darshan with minimal walking for elderly parents, our local coordinators adapt the daily driving times. You retain full control over daily start times and can stop at scenic river dhabas or apple orchards whenever you wish.",
    links: [
      { label: "Plan Custom Trip on WhatsApp", href: "/contact" },
      { label: "Browse Tour Packages", href: "/packages" },
      { label: "Read Travel Diaries", href: "/diaries" },
    ],
  },
  {
    id: "nau-devi-darshan-senior-citizens",
    category: "yatra",
    categoryLabel: "Temple Darshan & Yatra",
    question: "Does Tour to Himachal arrange Mata Chintpurni VIP Darshan and the complete Nau Devi circuit for elderly pilgrims?",
    answer:
      "Yes, Tour to Himachal specializes in dedicated Devi Darshan yatra circuits with special door-to-door assistance for senior citizens at Mata Chintpurni, Jwala Ji, Kangra Brajeshwari, Chamunda Devi, Naina Devi, and Maa Baglamukhi. Spiritual pilgrimage is our core heritage, with our primary coordination office located right in Chintpurni. For elderly yatris and families traveling with children, our drivers navigate to the nearest accessible vehicle drop-off points, arrange elevator and e-rickshaw passes where available, and schedule darshans around temple aarti times to avoid heavy crowds. We offer tailored packages including our signature 4 Shakti Peeth & 1 Siddh Peeth circuit, 4 Mahadev Darshan, and VIP Express Chintpurni Darshan with patient, courteous Pahadi drivers.",
    links: [
      { label: "4 Shakti Peeth Circuit", href: "/packages/4-shakti-peeth-1-siddh-peeth-darshan-chintpurni-circuit" },
      { label: "Divya Mandir Yatra", href: "/packages/divya-mandir-yatra-jwala-ji-baglamukhi-chintpurni" },
      { label: "4 Mahadev Darshan", href: "/packages/4-mahadev-darshan-1-shakti-peeth-chintpurni-spiritual-circuit" },
      { label: "Mata Chintpurni VIP Express", href: "/packages/mata-chintpurni-mandir-vip-express" },
    ],
  },
  {
    id: "winter-weather-snow-landslide-safety",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "What happens if a landslide or heavy snowfall blocks mountain passes during our trip with Tour to Himachal?",
    answer:
      "Tour to Himachal provides 100% free date rescheduling or safe real-time alternate sightseeing routes with zero cancellation penalties in the event of administrative road blockades. Safety in the Himalayas comes before everything else. Our on-ground coordinators in Chintpurni, Shimla, and Kullu maintain live contact with district police control rooms, the Border Roads Organisation (BRO), and local taxi unions. If extreme snowfall or landslide warnings temporarily close passes like Rohtang, Kunzum, or Jalori, your driver receives real-time detour routing to beautiful, accessible valley destinations (such as Naggar, Kasol, or Kangra Valley) so your vacation continues seamlessly without stranding your family.",
    links: [
      { label: "Safety Policies", href: "/about" },
      { label: "Himachal Packages", href: "/packages" },
      { label: "Contact Hill Dispatch", href: "/contact" },
    ],
  },
  {
    id: "hidden-costs-tolls-green-tax-transparency",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "Are state border entry taxes, hill green cess, toll plazas, and driver night allowances included in Tour to Himachal quotes?",
    answer:
      "Yes, every quotation from Tour to Himachal is 100% all-inclusive with zero hidden checkpoint surcharges, fuel levies, or surprise driver night fees. Outside booking brokers frequently advertise artificially low introductory rates, only for travelers to discover they must pay extra out-of-pocket for Himachal State Passenger Goods Tax (entry tax), Manali Green Tax, toll plaza charges, parking tickets, and Rs. 500 per night driver allowances at every mountain check-post. Tour to Himachal provides clear, upfront written quotes that explicitly cover vehicle hire, fuel, state permits, tolls, parking, and driver board in full. What we quote on WhatsApp is the exact final price you pay.",
    links: [
      { label: "Transparent Taxi Rates", href: "/taxi" },
      { label: "Compare Package Pricing", href: "/packages" },
      { label: "Request Written Quote", href: "/contact" },
    ],
  },
  {
    id: "best-time-to-visit-season-guide",
    category: "safety",
    categoryLabel: "Weather & Safety",
    question: "When is the best time to visit Himachal Pradesh for snowfall versus pleasant valley sightseeing?",
    answer:
      "Visit between late December and February for snow activities in Manali and Shimla, March to June for pleasant 15–25°C weather across Dharamshala and Parvati Valley, and September to November for crystal-clear Himalayan skies and apple harvests. If your goal is skiing, snowboarding, and snowmobiles in Solang Valley and Sissu, plan your holiday between December 20 and late February. If you want pleasant hiking temperatures, lush pine meadows, and outdoor valley exploration in Dharamkot, Kasol, and Kullu, April through June is prime season. For adventure travelers seeking high-altitude road trips to Spiti Ghati and Chandratal, the June to October window is optimal when Kunzum Pass is open.",
    links: [
      { label: "Seasonal Tour Packages", href: "/packages" },
      { label: "Read Road Trip Diaries", href: "/diaries" },
      { label: "Best Time to Visit Manali Blog", href: "/blog" },
    ],
  },
  {
    id: "luggage-capacity-vehicle-selection",
    category: "taxis",
    categoryLabel: "Taxi Service & Fleet",
    question: "Which vehicle should I choose for our group size and luggage when traveling on steep Himachal roads?",
    answer:
      "For 2 to 4 passengers with standard luggage, a Swift Dzire or Etios is ideal; for 4 to 6 passengers or Spiti/mountain routes, choose an Innova Crysta or Ertiga; for groups of 7+, book our luxury Tempo Traveller or Force Urbania. Mountain ghats require robust engines, ample ground clearance, and balanced suspension, especially on long climbs between Chandigarh and Manali or Shimla. Tour to Himachal outfits all our commercial vehicles with sturdy rooftop carrier racks so your bulky suitcases stay secured without cramping interior legroom. For corporate retreats, joint families, or pilgrimage groups of 8 to 16 members, our Force Urbania and luxury Tempo Travellers offer pushback seats, individual AC vents, and massive boot space.",
    links: [
      { label: "Taxi Fleet & Capacities", href: "/taxi" },
      { label: "Book Force Urbania / Tempo", href: "/taxi#booking-form" },
      { label: "Contact Fleet Manager", href: "/contact" },
    ],
  },
  {
    id: "advance-deposit-payment-cancellation-policy",
    category: "hotels",
    categoryLabel: "Hotels & Custom Tours",
    question: "What advance deposit is required to lock our Tour to Himachal package or cab, and what is your payment policy?",
    answer:
      "We require only a nominal 20% advance token for taxi hire and 25% for complete tour packages to lock your dedicated vehicle and hotels, with the remaining balance payable comfortably across your trip. Tour to Himachal accepts all major payment methods including UPI (Google Pay, PhonePe, Paytm), IMPS/NEFT bank transfers, and credit/debit cards. Once your token advance is received, our office issues an official PDF booking confirmation voucher detailing your day-wise itinerary, verified hotel check-in vouchers, and vehicle allocation. We provide a transparent cancellation policy: cancellations made 15+ days prior receive a 90% refund (or 100% date transfer credit), and road blockages due to official weather emergencies receive 100% free date rescheduling.",
    links: [
      { label: "Book With Tour to Himachal", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Justdial Rated Trust", href: "/about" },
    ],
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
