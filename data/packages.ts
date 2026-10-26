export interface Package {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  region: string
  duration: string
  durationDays: number
  price: number
  originalPrice: number
  rating: number
  reviewsCount: number
  badge?: string
  theme: string[]
  images: string[]
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  pdfUrl: string
  seo_title?: string
  seo_description?: string
}

// All packages are managed dynamically via Supabase database and Admin Portal
export const packages: Package[] = []

export const regions = ["All", "Himachal", "Shimla", "Manali", "Dharamshala", "Spiti", "Chintpurni"]
export const durations = ["All", "1-2 Days", "3-5 Days", "5+ Days"]
export const themes = ["All", "Adventure", "Spiritual", "Leisure"]
export const priceRanges = ["All", "Under ₹10,000", "₹10,000 - ₹25,000", "₹25,000 - ₹50,000", "Above ₹50,000"]
