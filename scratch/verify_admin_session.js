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

async function checkAdmin() {
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@tourtohimachal.in',
    password: 'AdminPassword123!',
  });

  if (authError) {
    console.error('Auth error:', authError.message);
    return;
  }

  console.log('Signed in successfully as:', authData.user.email, 'ID:', authData.user.id);
  console.log('Session access token present:', !!authData.session.access_token);

  // Check admin_profiles
  const { data: profile, error: profileErr } = await supabase
    .from('admin_profiles')
    .select('*')
    .eq('id', authData.user.id)
    .single();

  console.log('Admin profile:', profile, 'Profile error:', profileErr ? profileErr.message : null);
}

checkAdmin();
