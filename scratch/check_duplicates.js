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
  const { data } = await supabase.from('packages').select('id, title, slug').eq('slug', 'dalhousie-dharamshala-amritsar-tour');
  console.log('Database rows for slug:', data?.length);

  const res = await fetch('http://localhost:3008/packages');
  const html = await res.text();
  const occurrences = (html.match(/dalhousie-dharamshala-amritsar-tour/g) || []).length;
  console.log('Occurrences of slug on /packages:', occurrences);
}

run();
