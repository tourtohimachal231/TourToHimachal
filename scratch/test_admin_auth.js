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

async function testAuth() {
  console.log('Testing auth with admin email...');
  const { data: signInData, error: signInErr } = await supabase.auth.signInWithPassword({
    email: env.ADMIN_NOTIFICATION_EMAIL || 'admin@tourtohimachal.in',
    password: 'test'
  });
  console.log('SignIn attempt:', signInData, signInErr ? signInErr.message : 'No error');
}

testAuth();
