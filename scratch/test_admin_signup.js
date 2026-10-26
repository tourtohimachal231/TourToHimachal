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

async function checkAdminLogin() {
  console.log('Testing admin signup/login capability...');
  // Check if admin user can be signed in or created
  const testEmail = 'admin@tourtohimachal.in';
  const testPassword = 'AdminPassword123!';

  // Try signing in first
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email: testEmail,
    password: testPassword,
  });

  if (signInData?.user) {
    console.log('Admin already exists! User ID:', signInData.user.id);
    return signInData;
  }

  console.log('Sign-in failed (as expected if not created yet):', signInError?.message);

  // Try signing up with is_admin: true
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: testEmail,
    password: testPassword,
    options: {
      data: {
        is_admin: 'true',
        full_name: 'TourToHimachal Admin',
        role: 'super_admin'
      }
    }
  });

  console.log('Sign-up result:', {
    user: signUpData?.user?.id,
    session: !!signUpData?.session,
    error: signUpError?.message
  });

  return signUpData;
}

checkAdminLogin();
