import { notFound } from "next/navigation"
import { createPublicClient } from "@/lib/supabase/public"
import { DiaryDetailClient } from "./diary-detail-client"

const SITE_URL = "https://www.tourtohimachal.in"

interface DiaryDetailPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour for ISR caching

export async function generateMetadata({ params }: DiaryDetailPageProps) {
  const { slug } = await params
  const supabase = createPublicClient()

  const { data: diary } = await supabase
    .from("diaries")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (!diary) {
    return {
      title: "Diary Not Found",
    }
  }

  return {
    title: `${diary.title} | TourToHimachal Travel Diaries`,
    description: diary.excerpt,
    alternates: {
      canonical: `${SITE_URL}/diaries/${slug}`,
    },
    openGraph: {
      title: diary.title,
      description: diary.excerpt,
      images: diary.gallery && diary.gallery.length > 0 ? diary.gallery : [diary.cover_image].filter(Boolean),
      type: "article",
      url: `${SITE_URL}/diaries/${slug}`,
      siteName: "TourToHimachal",
      publishedTime: diary.travel_date || diary.published_at,
      authors: [diary.author_name],
    },
  }
}

export default async function DiaryDetailPage({ params }: DiaryDetailPageProps) {
  const { slug } = await params
  const supabase = createPublicClient()

  const { data: diary, error } = await supabase
    .from("diaries")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error || !diary) {
    notFound()
  }

  // Popular stories: latest published diaries
  const { data: popularDiaries } = await supabase
    .from("diaries")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(4)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: diary.title,
    description: diary.excerpt,
    image: diary.gallery?.[0] || diary.cover_image,
    datePublished: diary.travel_date || diary.published_at,
    author: {
      "@type": "Person",
      name: diary.author_name,
    },
    publisher: {
      "@type": "Organization",
      name: "TourToHimachal",
    },
  }

  const diaryUrl = `${SITE_URL}/diaries/${slug}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DiaryDetailClient
        diary={diary}
        popularDiaries={popularDiaries || []}
        url={diaryUrl}
      />
    </>
  )
}
