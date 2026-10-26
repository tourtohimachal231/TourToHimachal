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

async function check() {
  const { data } = await supabase.from('packages').select('id, title, slug, price, is_active').order('created_at', { ascending: false });
  console.log('Total packages in Supabase:', data?.length);
  data?.forEach((p, idx) => {
    console.log(`${idx + 1}. [${p.slug}] ${p.title} (₹${p.price}, active: ${p.is_active})`);
  });
}

check();
