import { Card, CardContent } from "@/components/ui/card"

const partners = [
  { name: "NCERT", logo: "/ncert-logo.png" },
  { name: "CBSE", logo: "/generic-educational-logo.png" },
  { name: "ICSE", logo: "/placeholder.svg?height=60&width=120" },
  { name: "NTA", logo: "/placeholder.svg?height=60&width=120" },
  { name: "IIT", logo: "/placeholder.svg?height=60&width=120" },
  { name: "AIIMS", logo: "/placeholder.svg?height=60&width=120" },
]

export function Partnerships() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted <span className="text-red-500">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600">Collaborating with leading educational institutions and boards</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
