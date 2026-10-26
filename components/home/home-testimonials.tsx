import { createPublicClient } from "@/lib/supabase/public"
import { Testimonials } from "./testimonials"

export async function HomeTestimonials() {
  const supabase = createPublicClient()

  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("id, name, city, image_url, rating, review_text, created_at")
    .eq("is_approved", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching reviews for homepage:", error)
  }

  return <Testimonials initialReviews={reviews || []} />
}
