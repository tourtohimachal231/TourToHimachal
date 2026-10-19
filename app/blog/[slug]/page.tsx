import { notFound } from "next/navigation"
import { createPublicClient } from "@/lib/supabase/public"
import { blogPosts as fallbackBlogPosts } from "@/data/blogs"
import { BlogDetailClient } from "./blog-detail-client"

const SITE_URL = "https://www.tourtohimachal.in"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour for ISR caching

function sanitizeBlogDescription(rawText: string | null | undefined, maxLength: number = 158): string {
  if (!rawText) return ""

  const text = rawText
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^(\s*[-*_]\s*){3,}$/gm, "")
    .replace(/^\s*#{1,6}\s*/gm, "")
    .replace(/^(=+|-+)\s*$/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/[`~>]/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/[*_]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (text.length <= maxLength) {
    return text
  }

  const cut = text.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(" ")
  const trimmed = (lastSpace > maxLength * 0.65 ? cut.slice(0, lastSpace) : cut).trim()
  return trimmed.replace(/[,;:\-\s]+$/, "") + "..."
}

function isValidBlogDescription(s: string | null | undefined): boolean {
  if (!s || typeof s !== "string") return false
  const trimmed = s.trim()
  return trimmed.length >= 25 && /[a-zA-Z0-9]/.test(trimmed)
}

function getSafeBlogDescription(
  postData: { title?: string; excerpt?: string | null; content?: string | null },
  slug: string,
): string {
  const fromExcerpt = sanitizeBlogDescription(postData.excerpt, 158)
  if (isValidBlogDescription(fromExcerpt)) {
    return fromExcerpt
  }

  if (postData.content) {
    const fromContent = sanitizeBlogDescription(postData.content, 158)
    if (isValidBlogDescription(fromContent)) {
      return fromContent
    }
  }

  if (slug === "chintpurni-mata-temple-himachal-history-travel-guide") {
    return "Complete history, spiritual significance, and travel guide for Mata Chintpurni Temple in Una, Himachal Pradesh—one of the sacred Shakti Peethas."
  }

  return `Read our practical Himachal travel guide on ${postData.title || "this destination"} by TourToHimachal.`
}

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
          content: fallback.markdownContent,
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

  const description = getSafeBlogDescription(postData, slug)

  return {
    title: `${postData.title} | TourToHimachal Blog`,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: postData.title,
      description,
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
    description: getSafeBlogDescription(postData, slug),
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
