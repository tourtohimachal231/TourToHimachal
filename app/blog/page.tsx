import type { Metadata } from "next"
import { createPublicClient } from "@/lib/supabase/public"
import { BlogPageClient } from "@/components/blog/blog-page-client"

const SITE_URL = "https://www.tourtohimachal.in"

export const metadata: Metadata = {
  title: "Himachal Travel Blog | Tips, Guides & Travel Stories – TourToHimachal",
  description:
    "Expert travel tips, temple guides, road trip advice & stories from across Himachal Pradesh. Plan your tour to Himachal with insider knowledge & local insights!",
  keywords:
    "himachal travel blog, himachal pradesh travel guide, shimla travel tips, manali travel guide, chintpurni temple guide, himachal road trip",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Himachal Travel Blog | Tips, Guides & Travel Stories",
    description:
      "Expert travel tips, temple guides & road trip advice from across Himachal Pradesh. Plan your journey with local insights!",
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "TourToHimachal",
    locale: "en_IN",
  },
}


export const revalidate = 0 // Always fetch fresh data

export default async function BlogPage() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anon) {
    console.error(
      "Supabase environment variables missing: NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    )
    return <BlogPageClient blogs={[]} categories={[]} />
  }

  const supabase = createPublicClient()

  let blogs: any[] = []
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching blogs:", error?.message ?? JSON.stringify(error))
    } else {
      blogs = data ?? []
    }
  } catch (err: any) {
    console.error("Unexpected blogs fetch error:", err?.message ?? err)
  }

  // Extract unique categories from blogs
  const categories = [...new Set(blogs.map((blog) => blog.category).filter(Boolean))]

  return <BlogPageClient blogs={blogs} categories={categories} />
}
