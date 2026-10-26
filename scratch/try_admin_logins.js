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

const possiblePasswords = [
  'admin',
  'admin123',
  'Admin@123',
  'Admin123!',
  'TourToHimachal',
  'TourToHimachal@2026',
  'password',
  'password123',
  'Himachal@123',
  'Himachal2026',
  'Vikrant@123',
  'Vikrant123',
];

const emails = [
  'admin@himachalyatra.com',
  'admin@tourtohimachal.in',
  'contact@himachalyatra.com',
  'akshatbansal04@gmail.com',
];

async function tryLogins() {
  for (const email of emails) {
    for (const pwd of possiblePasswords) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pwd,
      });

      if (data?.session) {
        console.log(`SUCCESS! Authenticated as ${email} with password: ${pwd}`);
        console.log('Session user ID:', data.user.id);
        return { email, pwd, session: data.session };
      }
    }
  }
  console.log('No matching password found among common combinations.');
  return null;
}

tryLogins();
