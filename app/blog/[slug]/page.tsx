import { notFound } from "next/navigation"
import { createPublicClient } from "@/lib/supabase/public"
import { BlogDetailClient } from "./blog-detail-client"

const SITE_URL = "https://www.tourtohimachal.in"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour for ISR caching

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const supabase = createPublicClient()

  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const normalizedAuthor = (post.author ?? "").trim()
  const displayAuthor =
    !normalizedAuthor || normalizedAuthor.toLowerCase() === "himachal yatra"
      ? "TourToHimachal"
      : normalizedAuthor

  return {
    title: `${post.title} | TourToHimachal Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.gallery && post.gallery.length > 0 ? post.gallery : post.cover_image ? [post.cover_image] : [],
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "TourToHimachal",
      publishedTime: post.published_at,
      authors: [displayAuthor],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const supabase = createPublicClient()

  const { data: post, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error || !post) {
    notFound()
  }

  const normalizedAuthor = (post.author ?? "").trim()
  const displayAuthor =
    !normalizedAuthor || normalizedAuthor.toLowerCase() === "himachal yatra"
      ? "TourToHimachal"
      : normalizedAuthor

  // Fetch popular posts (most recent published posts)
  const { data: popularPosts } = await supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .neq("slug", slug)
    .order("published_at", { ascending: false })
    .limit(4)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image || "",
    datePublished: post.published_at,
    author: {
      "@type": "Person",
      name: displayAuthor,
    },
    publisher: {
      "@type": "Organization",
      name: "TourToHimachal",
    },
  }

  const blogUrl = `${SITE_URL}/blog/${slug}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogDetailClient post={post} popularPosts={popularPosts || []} url={blogUrl} />
    </>
  )
}
