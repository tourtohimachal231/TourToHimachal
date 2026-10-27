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
  const { data, error } = await supabase
    .from('packages')
    .select('*')
    .ilike('slug', '%4-mahadev%')
    .single();

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('ID:', data.id);
  console.log('Title:', data.title);
  console.log('Slug:', data.slug);
  console.log('Category:', data.category);
  console.log('Region:', data.region);
  console.log('Duration:', data.duration);
  console.log('Price:', data.price);
  console.log('Images:', data.images);
  console.log('Short description:', data.short_description);
  console.log('Description:\n', data.description);
  console.log('Highlights:', data.highlights);
  console.log('Inclusions:', data.inclusions);
  console.log('Exclusions:', data.exclusions);
  console.log('Itinerary:\n', JSON.stringify(data.itinerary, null, 2));
}

run();
