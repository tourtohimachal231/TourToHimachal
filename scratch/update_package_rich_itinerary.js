const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

let env = {};
if (fs.existsSync('.env.local')) {
  fs.readFileSync('.env.local', 'utf8').split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      env[parts[0].trim()] = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
    }
  });
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const richItinerary = [
  {
    day: 1,
    title: "Amritsar to Dalhousie",
    description: "Meet your driver at the agreed pickup point in Amritsar and travel towards Dalhousie. Check in to the hotel and enjoy a relaxed evening. Explore the local market or Mall Road area if arrival time permits.\n\nOvernight: Dalhousie.",
    activities: [
      "Driver pickup in Amritsar",
      "Scenic transfer to Dalhousie",
      "Hotel check-in & relaxation",
      "Evening walk at Mall Road"
    ],
    subtitles: [
      {
        title: "Pickup & Scenic Drive to the Himalayan Foothills",
        highlight: "Amritsar Airport / Station Pickup",
        description: "Meet your dedicated driver at Amritsar Airport (ATQ) or Amritsar Junction Railway Station (ASR). Begin your picturesque drive through the Punjab plains into the scenic Shivalik and Himalayan foothills toward Dalhousie with refreshment stops en route.",
        activities: ["Driver Pickup", "Scenic Foothills Drive", "En Route Refreshments"]
      },
      {
        title: "Hotel Check-In & Evening Mall Road Leisure",
        highlight: "Overnight Stay: Dalhousie",
        description: "Arrive at Dalhousie (approx. 6,500 ft) and complete check-in at your hotel. Spend a relaxed evening unwinding from the road journey or strolling through the charming colonial-era streets of Gandhi Chowk and Mall Road as time permits.",
        activities: ["Hotel Check-in", "Gandhi Chowk", "Mall Road Leisure Walk"]
      }
    ]
  },
  {
    day: 2,
    title: "Dalhousie and Khajjiar",
    description: "Explore Dalhousie's main sightseeing areas before visiting Khajjiar meadow, Khajji Nag temple and the surrounding cedar forests. Optional local activities may be arranged separately. Visit Kalatop only if road access and available time permit.\n\nOvernight: Dalhousie.",
    activities: [
      "Dalhousie local sightseeing",
      "Khajjiar meadow excursion",
      "Khajji Nag temple",
      "Cedar forest walk",
      "Kalatop (road access permitting)"
    ],
    subtitles: [
      {
        title: "Dalhousie Heritage & Viewpoints",
        highlight: "Colonial Architecture & Pine Trails",
        description: "After breakfast, discover the highlights of Dalhousie. Admire colonial-era landmarks, churches like St. John's, and picturesque forest paths flanked by towering deodar trees and views of the Pir Panjal range.",
        activities: ["St. John's Church", "Subhash Baoli View", "Pine Ridge Walk"]
      },
      {
        title: "Excursion to Khajjiar & Khajji Nag Temple",
        highlight: "Mini Switzerland of India",
        description: "Drive through dense cedar forests to the saucer-shaped meadow of Khajjiar. Walk around the tranquil glade, visit the 12th-century wooden Khajji Nag temple, and take in panoramic nature views. Kalatop Wildlife Sanctuary can be visited if road access permits.",
        activities: ["Khajjiar Meadow", "Khajji Nag Temple", "Cedar Trails", "Kalatop (Subject to Conditions)"]
      }
    ]
  },
  {
    day: 3,
    title: "Dalhousie to Dharamshala",
    description: "Check out after breakfast and travel to Dharamshala. After arrival, explore McLeod Ganj, the Tibetan market area or a suitable local attraction, depending on available time.\n\nOvernight: Dharamshala or McLeod Ganj.",
    activities: [
      "Mountain drive to Dharamshala",
      "Kangra Valley landscapes",
      "Hotel check-in",
      "McLeod Ganj exploration",
      "Tibetan market visit"
    ],
    subtitles: [
      {
        title: "Scenic Transfer Across Kangra Valley",
        highlight: "Dhauladhar Mountain Backdrops",
        description: "Check out after breakfast and embark on a picturesque journey descending into the Kangra Valley. Travel along mountain roads offering views of terraced fields and the snow-crested Dhauladhar peaks rising above Dharamshala.",
        activities: ["Kangra Valley Drive", "Photography Halts", "Mountain Panoramas"]
      },
      {
        title: "Arrival in McLeod Ganj & Tibetan Cultural Immersion",
        highlight: "Overnight Stay: Dharamshala / McLeod Ganj",
        description: "Check in to your hotel in Dharamshala / McLeod Ganj. In the afternoon, explore the lively streets of McLeod Ganj (Little Lhasa), browse traditional Tibetan handicrafts, prayer wheels, and experience the warm hospitality of local cafes.",
        activities: ["Hotel Check-in", "McLeod Ganj Town", "Tibetan Handicrafts", "Local Mountain Cafes"]
      }
    ]
  },
  {
    day: 4,
    title: "Dharamshala to Amritsar",
    description: "Visit selected Dharamshala attractions, potentially including the Dalai Lama Temple complex, subject to access and opening arrangements. Continue to Amritsar and check in to the hotel.\n\nOvernight: Amritsar.",
    activities: [
      "Dalai Lama Temple complex",
      "Tsuglagkhang Monastery",
      "Bhagsunag (optional)",
      "Highway transfer to Amritsar",
      "Hotel check-in in Amritsar"
    ],
    subtitles: [
      {
        title: "Tsuglagkhang Complex & Dalai Lama Temple",
        highlight: "Tibetan Spiritual Center",
        description: "Visit the revered Tsuglagkhang Complex, the spiritual residence of His Holiness the Dalai Lama. Spin the sacred prayer wheels, observe the monks, and absorb the serene Himalayan ambiance.",
        activities: ["Dalai Lama Temple", "Namgyal Monastery", "Prayer Wheels", "Bhagsunag (Optional)"]
      },
      {
        title: "Descent from Hills & Highway Drive to Amritsar",
        highlight: "Overnight Stay: Amritsar",
        description: "Conclude your mountain sightseeing and begin the drive down toward the plains of Punjab. Arrive in the holy city of Amritsar by late afternoon/evening and check in to your hotel for a restful night.",
        activities: ["Highway Transfer to Punjab", "Hotel Check-in in Amritsar", "Evening Relaxation"]
      }
    ]
  },
  {
    day: 5,
    title: "Amritsar Sightseeing",
    description: "Visit the Golden Temple and Jallianwala Bagh, subject to opening arrangements. Explore the old city or local markets. The Wagah–Attari border ceremony may be considered as an optional experience, subject to current schedules and operating conditions.\n\nOvernight: Amritsar.",
    activities: [
      "Golden Temple (Sri Harmandir Sahib)",
      "Amrit Sarovar holy pool",
      "Jallianwala Bagh memorial",
      "Heritage street & old city markets",
      "Wagah–Attari border ceremony (optional)"
    ],
    subtitles: [
      {
        title: "Sri Harmandir Sahib (Golden Temple) & Jallianwala Bagh",
        highlight: "Spiritual Sanctity & National Memorial",
        description: "Experience the profound tranquility of Sri Harmandir Sahib (The Golden Temple), shimmering in gold above the holy Amrit Sarovar. Experience the community kitchen (Langar) tradition, followed by a reflective visit to neighboring Jallianwala Bagh to honor history.",
        activities: ["Golden Temple Darshan", "Amrit Sarovar Walk", "Langar Experience", "Jallianwala Bagh Memorial"]
      },
      {
        title: "Heritage Bazaars & Optional Wagah Border Ceremony",
        highlight: "Overnight Stay: Amritsar",
        description: "Stroll along the pedestrian Heritage Street, browse Punjabi juttis and Phulkari embroidery, and savor authentic Amritsari kulchas. An excursion to the iconic Wagah–Attari border retreat ceremony can be arranged as an optional experience based on current timings.",
        activities: ["Heritage Street Bazaars", "Amritsari Street Food", "Wagah Border Ceremony (Optional)"]
      }
    ]
  },
  {
    day: 6,
    title: "Departure from Amritsar",
    description: "After breakfast, check out and transfer to Amritsar railway station or airport according to the confirmed departure schedule.\n\nTour concludes.",
    activities: [
      "Breakfast at hotel",
      "Check-out",
      "Transfer to Amritsar airport/railway station",
      "Tour concludes"
    ],
    subtitles: [
      {
        title: "Breakfast & Private Departure Transfer",
        highlight: "Tour Concludes with Cherished Memories",
        description: "Enjoy breakfast at your hotel before checking out. Your private vehicle will transfer you comfortably to Amritsar Airport (ATQ) or Amritsar Railway Station (ASR) in time for your scheduled return flight or train.",
        activities: ["Hotel Breakfast", "Check-out", "Airport / Railway Station Drop", "Farewell & Return Journey"]
      }
    ]
  }
];

async function updatePackageItinerary() {
  console.log('1. Authenticating as Super Admin...');
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@tourtohimachal.in',
    password: 'AdminPassword123!',
  });

  if (authError || !authData?.session) {
    console.error('Authentication failed:', authError?.message);
    return;
  }
  console.log('Authenticated! User ID:', authData.user.id);

  console.log('2. Updating package with rich professional itinerary...');
  const { data, error } = await supabase
    .from('packages')
    .update({
      itinerary: richItinerary,
      updated_at: new Date().toISOString()
    })
    .eq('slug', 'dalhousie-dharamshala-amritsar-tour')
    .select();

  if (error) {
    console.error('Update failed:', error);
    return;
  }

  console.log('3. SUCCESS! Updated package in Supabase database:');
  console.log('Days count:', data[0]?.itinerary?.length);
  data[0]?.itinerary?.forEach(d => {
    console.log(`- Day ${d.day}: ${d.title} | Subtitles: ${d.subtitles?.length || 0} | Activities: ${d.activities?.length || 0}`);
  });
}

updatePackageItinerary();
