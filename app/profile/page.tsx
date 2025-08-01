import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { SidebarInset } from "@/components/ui/sidebar"

export default function ProfilePage() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />
        <div className="flex-1 space-y-4 p-4 md:p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <p className="text-muted-foreground">Profile settings and information coming soon...</p>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
