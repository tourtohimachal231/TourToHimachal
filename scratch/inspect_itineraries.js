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

async function run() {
  const { data } = await supabase.from('packages').select('id, title, slug, itinerary').limit(5);
  for (const p of data) {
    console.log('=== Package:', p.title, '===');
    const itin = typeof p.itinerary === 'string' ? JSON.parse(p.itinerary) : p.itinerary;
    if (itin && itin.length > 0) {
      console.log('Day 1 keys:', Object.keys(itin[0]));
      console.log('Has subtitles?:', !!itin[0].subtitles, itin[0].subtitles?.length);
      console.log('Has description?:', !!itin[0].description, itin[0].description?.substring(0, 80));
      console.log('Has activities?:', !!itin[0].activities, itin[0].activities);
      if (itin[0].subtitles && itin[0].subtitles.length > 0) {
        console.log('Subtitle 1:', JSON.stringify(itin[0].subtitles[0], null, 2));
      }
    }
  }
}

run();
