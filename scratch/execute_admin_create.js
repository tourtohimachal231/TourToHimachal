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

async function createPackageAsAdmin() {
  console.log('1. Authenticating as Super Admin...');
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@tourtohimachal.in',
    password: 'AdminPassword123!',
  });

  if (authError || !authData?.session) {
    console.error('Authentication failed:', authError?.message);
    return;
  }
  console.log('Super Admin authenticated successfully! User ID:', authData.user.id);

  // Check if package already exists in Supabase
  console.log('2. Checking if package slug already exists in database...');
  const { data: existing, error: checkError } = await supabase
    .from('packages')
    .select('id, title, slug')
    .eq('slug', 'dalhousie-dharamshala-amritsar-tour')
    .maybeSingle();

  if (existing) {
    console.log('Package already exists in Supabase with ID:', existing.id);
  } else {
    console.log('Package does not exist in DB yet. Creating new package record...');
  }

  const packageData = {
    title: 'Dalhousie, Dharamshala & Amritsar Tour Package — 6 Days / 5 Nights',
    slug: 'dalhousie-dharamshala-amritsar-tour',
    short_description: 'Discover the scenic beauty of Dalhousie and Khajjiar, experience the Tibetan culture of Dharamshala and McLeod Ganj, and explore the spiritual and historical landmarks of Amritsar on a customizable six-day holiday with Tour To Himachal.',
    description: `Experience a memorable journey through Himachal Pradesh and Punjab, combining peaceful mountain landscapes, cultural experiences and historic landmarks.

Explore Dalhousie's charming hill-station surroundings, visit the meadow of Khajjiar, discover Dharamshala and McLeod Ganj, and spend time at the iconic Golden Temple in Amritsar.

This private tour is designed for families, couples and small groups who want a balanced holiday with accommodation options, planned sightseeing and the flexibility to customize arrangements according to their travel dates and preferences.

Final hotels, transport inclusions, pricing and optional activities will be confirmed in the quotation.`,
    price: 0,
    original_price: null,
    duration: '6 Days / 5 Nights',
    region: 'Himachal Pradesh & Punjab',
    min_persons: 2,
    category: 'family',
    is_active: true,
    is_featured: false,
    highlights: [
      'Explore Dalhousie and its local sightseeing attractions.',
      'Visit Khajjiar meadow and Khajji Nag temple.',
      'Discover Dharamshala and McLeod Ganj.',
      'Visit the Golden Temple and Jallianwala Bagh.',
      'Consider the Wagah–Attari border ceremony, subject to current operating arrangements.',
      'Enjoy a customizable private holiday with Tour To Himachal.'
    ],
    inclusions: [
      'Five nights of accommodation in the selected room category.',
      'Breakfast and dinner, only if included in the final confirmed hotel plan.',
      'Private transfers and sightseeing specified in the final itinerary.',
      'Driver charges, fuel, tolls and parking only as expressly included in the confirmed transport quotation.'
    ],
    exclusions: [
      'Flights, train tickets and travel to the starting point.',
      'Lunches and meals not specified in the final quotation.',
      'Entry tickets, guides and optional activities.',
      'Wagah–Attari arrangements unless explicitly included.',
      'Personal expenses and travel insurance.',
      'Services not specifically listed as inclusions.',
      'Applicable taxes unless included in the final quotation.'
    ],
    images: [
      '/Images/dalhousie-dharamshala-amritsar.jpg',
      '/Images/amritsar-golden-temple.jpg'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Amritsar to Dalhousie',
        description: 'Meet the driver at the agreed pickup point in Amritsar and travel towards Dalhousie. Check in to the hotel and enjoy a relaxed evening. Explore the local market or Mall Road area if arrival time permits.\n\nOvernight: Dalhousie.',
        activities: ['Driver pickup in Amritsar', 'Scenic transfer to Dalhousie', 'Hotel check-in', 'Evening walk at Mall Road']
      },
      {
        day: 2,
        title: 'Dalhousie and Khajjiar',
        description: 'Explore Dalhousie\'s main sightseeing areas before visiting Khajjiar meadow, Khajji Nag temple and the surrounding cedar forests. Optional local activities may be arranged separately. Visit Kalatop only if road access and available time permit.\n\nOvernight: Dalhousie.',
        activities: ['Dalhousie local sightseeing', 'Khajjiar meadow excursion', 'Khajji Nag temple', 'Cedar forest walk', 'Kalatop (road access permitting)']
      },
      {
        day: 3,
        title: 'Dalhousie to Dharamshala',
        description: 'Check out after breakfast and travel to Dharamshala. After arrival, explore McLeod Ganj, the Tibetan market area or a suitable local attraction, depending on available time.\n\nOvernight: Dharamshala or McLeod Ganj.',
        activities: ['Mountain drive to Dharamshala', 'Hotel check-in', 'McLeod Ganj exploration', 'Tibetan market visit']
      },
      {
        day: 4,
        title: 'Dharamshala to Amritsar',
        description: 'Visit selected Dharamshala attractions, potentially including the Dalai Lama Temple complex, subject to access and opening arrangements. Continue to Amritsar and check in to the hotel.\n\nOvernight: Amritsar.',
        activities: ['Dalai Lama Temple complex', 'Local cultural sights', 'Highway transfer to Amritsar', 'Hotel check-in in Amritsar']
      },
      {
        day: 5,
        title: 'Amritsar Sightseeing',
        description: 'Visit the Golden Temple and Jallianwala Bagh, subject to opening arrangements. Explore the old city or local markets. The Wagah–Attari border ceremony may be considered as an optional experience, subject to current schedules and operating conditions.\n\nOvernight: Amritsar.',
        activities: ['Golden Temple (Sri Harmandir Sahib)', 'Jallianwala Bagh', 'Heritage street & old city markets', 'Wagah–Attari border ceremony (optional)']
      },
      {
        day: 6,
        title: 'Departure from Amritsar',
        description: 'After breakfast, check out and transfer to Amritsar railway station or airport according to the confirmed departure schedule.\n\nTour concludes.',
        activities: ['Breakfast at hotel', 'Check-out', 'Transfer to Amritsar airport/railway station', 'Tour concludes']
      }
    ],
    seo_title: 'Dalhousie Dharamshala Amritsar Tour Package – 6 Days',
    seo_description: 'Explore Dalhousie, Khajjiar, Dharamshala and Amritsar on a customizable 6-day private tour with Tour To Himachal. Request your travel quote.'
  };

  let saveResult;
  if (existing) {
    console.log('3. Updating existing package...');
    saveResult = await supabase
      .from('packages')
      .update(packageData)
      .eq('id', existing.id)
      .select();
  } else {
    console.log('3. Inserting new package via authenticated Admin Client...');
    saveResult = await supabase
      .from('packages')
      .insert(packageData)
      .select();
  }

  if (saveResult.error) {
    console.error('Save failed:', saveResult.error);
    return;
  }

  console.log('4. SUCCESS! Package saved in Supabase database:');
  console.log(JSON.stringify(saveResult.data, null, 2));

  // Verify reload from database
  console.log('5. Verifying database reload...');
  const { data: reloaded, error: reloadError } = await supabase
    .from('packages')
    .select('*')
    .eq('slug', 'dalhousie-dharamshala-amritsar-tour')
    .single();

  if (reloadError) {
    console.error('Reload failed:', reloadError);
  } else {
    console.log('Reload successful! Verified saved package:');
    console.log({
      id: reloaded.id,
      title: reloaded.title,
      slug: reloaded.slug,
      price: reloaded.price,
      duration: reloaded.duration,
      region: reloaded.region,
      category: reloaded.category,
      is_active: reloaded.is_active,
      is_featured: reloaded.is_featured,
      images_count: reloaded.images?.length,
      itinerary_days: reloaded.itinerary?.length,
      highlights_count: reloaded.highlights?.length,
      inclusions_count: reloaded.inclusions?.length,
      exclusions_count: reloaded.exclusions?.length,
      seo_title: reloaded.seo_title,
      seo_description: reloaded.seo_description
    });
  }
}

createPackageAsAdmin();
