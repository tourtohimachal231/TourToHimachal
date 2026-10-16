import { notFound } from "next/navigation"
import { createPublicClient } from "@/lib/supabase/public"
import { blogPosts as fallbackBlogPosts } from "@/data/blogs"
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

  const fallback =
    !post || Array.isArray(post) || !post.title
      ? fallbackBlogPosts.find((b) => b.slug === slug)
      : null

  const postData =
    post && !Array.isArray(post) && post.title
      ? post
      : fallback
      ? {
          title: fallback.title,
          excerpt: fallback.excerpt,
          cover_image: fallback.featuredImage,
          gallery: [fallback.featuredImage],
          published_at: fallback.date,
          author: fallback.author,
        }
      : null

  if (!postData) {
    return {
      title: "Post Not Found",
    }
  }

  const normalizedAuthor = (postData.author ?? "").trim()
  const displayAuthor =
    !normalizedAuthor || normalizedAuthor.toLowerCase() === "himachal yatra"
      ? "TourToHimachal"
      : normalizedAuthor

  return {
    title: `${postData.title} | TourToHimachal Blog`,
    description: postData.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      images:
        postData.gallery && postData.gallery.length > 0
          ? postData.gallery
          : postData.cover_image
          ? [postData.cover_image]
          : [],
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "TourToHimachal",
      publishedTime: postData.published_at,
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

  const fallback =
    error || !post || Array.isArray(post) || !post.title
      ? fallbackBlogPosts.find((b) => b.slug === slug)
      : null

  const postData =
    post && !Array.isArray(post) && post.title
      ? post
      : fallback
      ? {
          id: fallback.slug,
          title: fallback.title,
          slug: fallback.slug,
          excerpt: fallback.excerpt,
          content: fallback.markdownContent,
          cover_image: fallback.featuredImage,
          gallery: [fallback.featuredImage],
          published_at: fallback.date,
          author: fallback.author,
          category: fallback.category,
          tags: fallback.tags,
        }
      : null

  if (!postData) {
    notFound()
  }

  const normalizedAuthor = (postData.author ?? "").trim()
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

  const resolvedPopularPosts =
    popularPosts && Array.isArray(popularPosts) && popularPosts.length > 0
      ? popularPosts
      : fallbackBlogPosts
          .filter((b) => b.slug !== slug)
          .slice(0, 4)
          .map((b) => ({
            id: b.slug,
            title: b.title,
            slug: b.slug,
            excerpt: b.excerpt,
            cover_image: b.featuredImage,
          }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: postData.title,
    description: postData.excerpt,
    image: postData.cover_image || "",
    datePublished: postData.published_at,
    author: {
      "@type": "Person",
      name: displayAuthor,
    },
    publisher: {
      "@type": "Organization",
      name: "TourToHimachal",
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Blogs",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: postData.title,
        item: `${SITE_URL}/blog/${postData.slug || slug}`,
      },
    ],
  }

  const blogUrl = `${SITE_URL}/blog/${slug}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogDetailClient post={postData} popularPosts={resolvedPopularPosts || []} url={blogUrl} />
    </>
  )
}
