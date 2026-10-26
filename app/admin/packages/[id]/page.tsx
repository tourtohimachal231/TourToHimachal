import { notFound, redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { PackageForm } from "@/components/admin/package-form"

interface EditPackagePageProps {
  params: Promise<{ id: string }>
}

export default async function EditPackagePage({ params }: EditPackagePageProps) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/packages/new")
  }

  const supabase = await createClient()

  const { data: pkg, error } = await supabase.from("packages").select("*").eq("id", id).single()

  if (error || !pkg) {
    const { packages: fallbackPackages } = await import("@/data/packages")
    const fallback = fallbackPackages.find((p) => p.id === id || p.slug === id)
    if (fallback) {
      return (
        <div>
          <AdminHeader title="Edit Package" description={fallback.title} />
          <div className="p-6">
            <PackageForm
              initialData={{
                ...fallback,
                short_description: fallback.excerpt,
                is_active: true,
                is_featured: fallback.badge === "Popular",
              }}
            />
          </div>
        </div>
      )
    }
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Edit Package" description={pkg.title} />
      <div className="p-6">
        <PackageForm initialData={pkg} />
      </div>
    </div>
  )
}
