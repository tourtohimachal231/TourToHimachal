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

async function updatePackageImages() {
  console.log('1. Authenticating as Super Admin...');
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@tourtohimachal.in',
    password: 'AdminPassword123!',
  });

  if (authError || !authData?.session) {
    console.error('Authentication failed:', authError?.message);
    return;
  }
  console.log('Authenticated! Admin ID:', authData.user.id);

  console.log('2. Updating 4 Mahadev package images in Supabase...');
  const images = [
    '/Images/4-mahadev-chintpurni-circuit.jpg',
    'https://res.cloudinary.com/dabqqymqe/image/upload/v1769758831/himachal-yatra/packages/qeuhjwongdwnbwfwnobz.jpg'
  ];

  const { data, error } = await supabase
    .from('packages')
    .update({
      images,
      updated_at: new Date().toISOString()
    })
    .eq('slug', '4-mahadev-darshan-1-shakti-peeth-chintpurni-spiritual-circuit')
    .select();

  if (error) {
    console.error('Update failed:', error);
    return;
  }

  console.log('3. SUCCESS! Updated package in Supabase:');
  console.log('Title:', data[0]?.title);
  console.log('Slug:', data[0]?.slug);
  console.log('Images:', data[0]?.images);
}

updatePackageImages();
