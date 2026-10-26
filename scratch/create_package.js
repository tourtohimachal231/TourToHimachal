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

const packageData = {
  title: "Dalhousie, Dharamshala & Amritsar Tour Package — 6 Days / 5 Nights",
  slug: "dalhousie-dharamshala-amritsar-tour",
  short_description: "Discover the scenic beauty of Dalhousie and Khajjiar, experience the Tibetan culture of Dharamshala and McLeod Ganj, and explore the spiritual and historical landmarks of Amritsar on a customizable six-day holiday with Tour To Himachal.",
  description: `Experience a memorable journey through Himachal Pradesh and Punjab, combining peaceful mountain landscapes, cultural experiences and historic landmarks.

Explore Dalhousie's charming hill-station surroundings, visit the meadow of Khajjiar, discover Dharamshala and McLeod Ganj, and spend time at the iconic Golden Temple in Amritsar.

This private tour is designed for families, couples and small groups who want a balanced holiday with comfortable accommodation options, planned sightseeing and the flexibility to customize arrangements according to their travel dates and preferences.

Final hotels, transport inclusions, pricing and optional activities will be confirmed in the quotation.

### Accommodation Plan
* **Dalhousie:** 2 nights in your selected hotel category.
* **Dharamshala or McLeod Ganj:** 1 night in your selected hotel category.
* **Amritsar:** 2 nights in your selected hotel category.

*Note: Accommodation will be selected according to your preferred category, budget and travel dates. Final hotel names and room categories will be confirmed subject to availability.*`,
  price: 0,
  original_price: null,
  duration: "6 Days / 5 Nights",
  region: "Dalhousie & Dharamshala",
  category: "family",
  min_persons: 2,
  is_active: true,
  is_featured: true,
  seo_title: "Dalhousie Dharamshala Amritsar Tour Package – 6 Days",
  seo_description: "Explore Dalhousie, Khajjiar, Dharamshala and Amritsar on a customizable 6-day private tour with Tour To Himachal. Request your travel quote.",
  highlights: [
    "Explore Dalhousie and its local sightseeing attractions.",
    "Visit Khajjiar meadow and Khajji Nag temple.",
    "Discover Dharamshala and McLeod Ganj.",
    "Visit the Golden Temple and Jallianwala Bagh.",
    "Consider the Wagah–Attari border ceremony, subject to current operating arrangements.",
    "Enjoy a customizable private holiday with Tour To Himachal."
  ],
  inclusions: [
    "Five nights of accommodation in the selected room category (2N Dalhousie, 1N Dharamshala/McLeod Ganj, 2N Amritsar).",
    "Breakfast and dinner, only if included in the final confirmed hotel plan.",
    "Private transfers and sightseeing specified in the final itinerary.",
    "Driver charges, fuel, tolls and parking only as expressly included in the confirmed transport quotation."
  ],
  exclusions: [
    "Flights, train tickets and travel to the starting point.",
    "Lunches and meals not specified in the final quotation.",
    "Entry tickets, guides and optional activities.",
    "Wagah–Attari arrangements unless explicitly included.",
    "Personal expenses and travel insurance.",
    "Services not specifically listed as inclusions.",
    "Applicable taxes unless included in the final quotation."
  ],
  images: [
    "/Images/dalhousie-dharamshala-amritsar.jpg",
    "/Images/amritsar-golden-temple.jpg"
  ],
  itinerary: [
    {
      day: 1,
      title: "Amritsar to Dalhousie",
      description: "Meet the driver at the agreed pickup point in Amritsar and travel towards Dalhousie. Check in to the hotel and enjoy a relaxed evening. Explore the local market or Mall Road area if arrival time permits.\n\nOvernight stay: Dalhousie.",
      activities: [
        "Pickup from Amritsar Airport / Railway Station",
        "Scenic hill ascent to Dalhousie",
        "Hotel check-in & leisure evening",
        "Overnight stay in Dalhousie"
      ],
      subtitles: [
        {
          title: "Scenic Drive from Punjab Plains to Pine Valleys",
          highlight: "Amritsar to Dalhousie Transfer",
          description: "Meet your driver at the agreed pickup point in Amritsar and journey across the scenic foothills towards Dalhousie. Check in to the hotel and enjoy a relaxed evening. Explore the local market or Mall Road area if arrival time permits.",
          activities: [
            "Pickup from Amritsar Airport / Railway Station",
            "Scenic hill ascent to Dalhousie",
            "Hotel check-in & leisure evening",
            "Overnight stay in Dalhousie"
          ]
        }
      ]
    },
    {
      day: 2,
      title: "Dalhousie and Khajjiar",
      description: "After breakfast, explore Dalhousie's main sightseeing areas. Continue to Khajjiar to enjoy its meadow, surrounding cedar forests and Khajji Nag temple. Optional local activities may be arranged separately. Visit Kalatop only if the route, access conditions and available time permit.\n\nOvernight stay: Dalhousie.",
      activities: [
        "Breakfast at hotel",
        "Khajjiar meadow walk & pine forest views",
        "Visit 12th-century Khajji Nag Temple",
        "Kalatop wildlife route (subject to road conditions)",
        "Overnight stay in Dalhousie"
      ],
      subtitles: [
        {
          title: "Exploring the Switzerland of India & Cedar Groves",
          highlight: "Khajjiar Meadow & Dalhousie Heritage",
          description: "After breakfast, explore Dalhousie's main sightseeing areas. Continue to Khajjiar to enjoy its saucer-shaped meadow, surrounding cedar forests and Khajji Nag temple. Optional local activities may be arranged separately. Visit Kalatop only if the route, access conditions and available time permit.",
          activities: [
            "Breakfast at hotel",
            "Khajjiar meadow walk & pine forest views",
            "Visit 12th-century Khajji Nag Temple",
            "Kalatop wildlife route (subject to road conditions)",
            "Overnight stay in Dalhousie"
          ]
        }
      ]
    },
    {
      day: 3,
      title: "Dalhousie to Dharamshala",
      description: "Check out after breakfast and travel to Dharamshala. After arrival, explore McLeod Ganj, the Tibetan market area or a suitable local attraction, depending on the arrival time.\n\nOvernight stay: Dharamshala or McLeod Ganj.",
      activities: [
        "Breakfast and hotel check-out",
        "Scenic hill drive to Dharamshala",
        "Explore McLeod Ganj Tibetan market",
        "Overnight stay in Dharamshala or McLeod Ganj"
      ],
      subtitles: [
        {
          title: "Transition to the Seat of Tibetan Culture",
          highlight: "Dhauladhar Mountain Foothills",
          description: "Check out after breakfast and travel to Dharamshala. After arrival, explore McLeod Ganj, the Tibetan market area or a suitable local attraction, depending on the arrival time.",
          "activities": [
            "Breakfast and hotel check-out",
            "Scenic hill drive to Dharamshala",
            "Explore McLeod Ganj Tibetan market",
            "Overnight stay in Dharamshala or McLeod Ganj"
          ]
        }
      ]
    },
    {
      day: 4,
      title: "Dharamshala sightseeing and transfer to Amritsar",
      description: "Visit selected Dharamshala attractions, potentially including the Dalai Lama Temple complex, subject to access and opening arrangements. Add other attractions only if time permits. Proceed to Amritsar and check in to the hotel.\n\nOvernight stay: Amritsar.",
      activities: [
        "Visit Tsuglagkhang Dalai Lama Temple Complex",
        "Scenic descent to Amritsar",
        "Hotel check-in and evening rest",
        "Overnight stay in Amritsar"
      ],
      subtitles: [
        {
          title: "Spiritual Blessings & Descent to Punjab",
          highlight: "Dalai Lama Temple & Amritsar Arrival",
          description: "Visit selected Dharamshala attractions, potentially including the Dalai Lama Temple complex, subject to access and opening arrangements. Add other attractions only if time permits. Proceed to Amritsar and check in to the hotel.",
          "activities": [
            "Visit Tsuglagkhang Dalai Lama Temple Complex",
            "Scenic descent to Amritsar",
            "Hotel check-in and evening rest",
            "Overnight stay in Amritsar"
          ]
        }
      ]
    },
    {
      day: 5,
      title: "Amritsar sightseeing",
      description: "Visit the Golden Temple and Jallianwala Bagh, subject to opening arrangements. Explore the old city or local markets. The Wagah–Attari border ceremony may be offered as an optional experience, subject to current schedules, security rules and transport arrangements.\n\nOvernight stay: Amritsar.",
      activities: [
        "Darshan at Sri Harmandir Sahib (Golden Temple)",
        "Historical visit to Jallianwala Bagh Memorial",
        "Taste authentic Amritsari kulcha and street cuisine",
        "Optional Wagah–Attari border flag ceremony",
        "Overnight stay in Amritsar"
      ],
      subtitles: [
        {
          title: "Sacred Reflections & Historic Landmarks",
          highlight: "Harmandir Sahib & Jallianwala Bagh",
          description: "Visit the Golden Temple and Jallianwala Bagh, subject to opening arrangements. Explore the old city or local markets. The Wagah–Attari border ceremony may be offered as an optional experience, subject to current schedules, security rules and transport arrangements.",
          "activities": [
            "Darshan at Sri Harmandir Sahib (Golden Temple)",
            "Historical visit to Jallianwala Bagh Memorial",
            "Taste authentic Amritsari kulcha and street cuisine",
            "Optional Wagah–Attari border flag ceremony",
            "Overnight stay in Amritsar"
          ]
        }
      ]
    },
    {
      day: 6,
      title: "Departure",
      description: "After breakfast, check out and transfer to Amritsar railway station or airport according to the confirmed departure schedule. Tour concludes.",
      activities: [
        "Breakfast at hotel",
        "Check-out and transfer to Amritsar Airport (ATQ) / Railway Station",
        "Tour concludes with Tour To Himachal"
      ],
      subtitles: [
        {
          title: "Farewell & Onward Journey",
          highlight: "Departure Transfer",
          description: "After breakfast, check out and transfer to Amritsar railway station or airport according to the confirmed departure schedule. Tour concludes.",
          "activities": [
            "Breakfast at hotel",
            "Check-out and transfer to Amritsar Airport (ATQ) / Railway Station",
            "Tour concludes with Tour To Himachal"
          ]
        }
      ]
    }
  ]
};

async function createOrUpdatePackage() {
  console.log('Checking if package already exists with slug:', packageData.slug);
  const { data: existing } = await supabase
    .from('packages')
    .select('id, slug, title')
    .eq('slug', packageData.slug)
    .single();

  if (existing) {
    console.log('Package already exists (id: ' + existing.id + '), updating...');
    const { data, error } = await supabase
      .from('packages')
      .update(packageData)
      .eq('id', existing.id)
      .select();
    
    if (error) {
      console.error('Update error:', error);
    } else {
      console.log('Updated package successfully:', data[0]?.id);
    }
  } else {
    console.log('Inserting new package...');
    const { data, error } = await supabase
      .from('packages')
      .insert(packageData)
      .select();

    if (error) {
      console.error('Insert error:', error);
    } else {
      console.log('Inserted package successfully:', data[0]?.id);
    }
  }
}

createOrUpdatePackage();
