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

async function testRLS() {
  // Test if anon client can insert or if RLS is enabled/disabled on packages
  // We can test selecting one, or checking if auth is required
  console.log('Testing anon client...');
  const { data, error } = await supabase.from('packages').select('id, title').limit(1);
  console.log('Select result:', { data, error });
}

testRLS();
