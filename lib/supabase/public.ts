import { createClient as createSupabaseClient } from "@supabase/supabase-js"

export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"

  return createSupabaseClient(
    url,
    anonKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: {
        fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
          if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
            return new Response(JSON.stringify([]), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            })
          }
          return fetch(input, init)
        },
      },
    },
  )
}
