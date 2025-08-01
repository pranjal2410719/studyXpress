import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Card, CardContent } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import { Heart } from "lucide-react"

export default function StudyXpressSevaPage() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />
        <div className="flex-1 bg-gray-50 min-h-screen p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                StudyXpress <span className="text-red-500">Seva</span>
              </h1>
              <p className="text-gray-600">Community service and social impact initiatives</p>
            </div>
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Community Service</h2>
                <p className="text-gray-600">
                  Join our community service initiatives and make a positive impact. Coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
