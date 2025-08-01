import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Card, CardContent } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import { Calculator } from "lucide-react"

export default function PeriodCalculatorPage() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />
        <div className="flex-1 bg-gray-50 min-h-screen p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Period <span className="text-red-500">Calculator</span>
              </h1>
              <p className="text-gray-600">Calculate your academic periods and track important dates</p>
            </div>
            <Card>
              <CardContent className="p-12 text-center">
                <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Period Calculator</h2>
                <p className="text-gray-600">
                  This feature is coming soon. Track your academic calendar and important dates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
