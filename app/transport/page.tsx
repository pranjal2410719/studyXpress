import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Card, CardContent } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import { Car } from "lucide-react"

export default function TransportPage() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />
        <div className="flex-1 bg-gray-50 min-h-screen p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Student <span className="text-red-500">Transport</span>
              </h1>
              <p className="text-gray-600">Find and share transportation options</p>
            </div>
            <Card>
              <CardContent className="p-12 text-center">
                <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Transport Hub</h2>
                <p className="text-gray-600">
                  Discover transportation options and carpooling opportunities. Coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
