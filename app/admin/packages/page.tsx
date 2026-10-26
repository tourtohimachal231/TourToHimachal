import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { PackagesTable } from "@/components/admin/packages-table"

export default async function PackagesPage() {
  const supabase = await createClient()

  const { data: packages, error } = await supabase
    .from("packages")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching packages:", error)
  }

  const { packages: fallbackPackages } = await import("@/data/packages")
  const dbSlugs = new Set((packages || []).map((p) => p.slug))
  const formattedFallback = fallbackPackages
    .filter((p) => !dbSlugs.has(p.slug))
    .map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      price: p.price,
      original_price: p.originalPrice,
      duration: p.duration,
      category: p.theme?.[0]?.toLowerCase() || "custom",
      is_active: true,
      is_featured: p.badge === "Popular",
      created_at: new Date().toISOString(),
    }))

  const allPackages = [...(packages || []), ...formattedFallback]

  return (
    <div>
      <AdminHeader title="Packages Management" description="Create and manage tour packages" />

      <div className="space-y-6 p-6">
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/admin/packages/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Package
            </Link>
          </Button>
        </div>

        <PackagesTable packages={allPackages} />
      </div>
    </div>
  )
}
