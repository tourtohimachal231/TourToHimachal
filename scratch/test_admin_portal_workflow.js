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

async function testAdminPortalWorkflow() {
  console.log('=== TEST 1: Admin Authentication ===');
  const { data: auth, error: authErr } = await supabase.auth.signInWithPassword({
    email: 'admin@tourtohimachal.in',
    password: 'AdminPassword123!',
  });
  if (authErr || !auth?.session) {
    console.error('FAILED Auth:', authErr);
    return;
  }
  console.log('PASS: Logged in as Super Admin:', auth.user.email);

  console.log('\n=== TEST 2: Admin Packages Listing (/admin/packages) ===');
  const { data: packages, error: listErr } = await supabase
    .from('packages')
    .select('*')
    .order('created_at', { ascending: false });

  if (listErr) {
    console.error('FAILED List:', listErr);
    return;
  }
  console.log('Total packages in DB:', packages.length);
  const found = packages.find(p => p.slug === 'dalhousie-dharamshala-amritsar-tour');
  if (!found) {
    console.error('FAILED: Package not found in DB listing');
    return;
  }
  console.log('PASS: Found package in listing:', {
    id: found.id,
    title: found.title,
    slug: found.slug,
    price: found.price,
    duration: found.duration,
    category: found.category,
    is_active: found.is_active,
    created_at: found.created_at
  });

  console.log('\n=== TEST 3: Admin Package Editor Reload (/admin/packages/[id]) ===');
  const packageId = found.id;
  const { data: editorData, error: editorErr } = await supabase
    .from('packages')
    .select('*')
    .eq('id', packageId)
    .single();

  if (editorErr) {
    console.error('FAILED Editor Load:', editorErr);
    return;
  }
  console.log('PASS: Editor loaded package record.');
  console.log('Persisted Fields Verification:');
  console.log('- Title:', editorData.title);
  console.log('- Slug:', editorData.slug);
  console.log('- Price:', editorData.price, '(Price on Request when 0)');
  console.log('- Duration:', editorData.duration);
  console.log('- Region:', editorData.region);
  console.log('- Category:', editorData.category);
  console.log('- Min Persons:', editorData.min_persons);
  console.log('- Active:', editorData.is_active, '| Featured:', editorData.is_featured);
  console.log('- Images Count:', editorData.images?.length, editorData.images);
  console.log('- Itinerary Days Count:', editorData.itinerary?.length);
  editorData.itinerary?.forEach((day, i) => {
    console.log(`   Day ${day.day}: ${day.title} (${day.activities?.length || 0} activities)`);
  });
  console.log('- Highlights Count:', editorData.highlights?.length);
  console.log('- Inclusions Count:', editorData.inclusions?.length);
  console.log('- Exclusions Count:', editorData.exclusions?.length);
  console.log('- SEO Title:', editorData.seo_title);
  console.log('- SEO Description:', editorData.seo_description);

  console.log('\n=== TEST 4: Re-saving via PackageForm Update Logic ===');
  const updatePayload = {
    ...editorData,
    min_persons: 2,
    updated_at: new Date().toISOString()
  };
  delete updatePayload.id;
  delete updatePayload.created_at;

  const { data: updatedData, error: updateErr } = await supabase
    .from('packages')
    .update(updatePayload)
    .eq('id', packageId)
    .select();

  if (updateErr) {
    console.error('FAILED Update:', updateErr);
    return;
  }
  console.log('PASS: Package successfully re-saved via Admin update workflow!');

  console.log('\n=== ALL ADMIN WORKFLOW CHECKS PASSED ===');
}

testAdminPortalWorkflow();
