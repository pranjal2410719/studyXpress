"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    role: "NEET Aspirant",
    avatar: "/placeholder-15ool.png",
    rating: 5,
    content:
      "StudyXpress transformed my preparation strategy. The live doubt solving sessions with experts helped me clear my concepts instantly. Scored 680+ in NEET!",
    exam: "NEET 2024",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "JEE Advanced Qualifier",
    avatar: "/confident-indian-student.png",
    rating: 5,
    content:
      "The quality of courses and the interactive community made all the difference. I could access resources anytime and get help from both teachers and peers.",
    exam: "JEE Advanced 2024",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    role: "Class 12 Student",
    avatar: "/happy-indian-student.png",
    rating: 5,
    content:
      "Amazing platform! The structured courses and regular assessments kept me on track. Achieved 95% in my board exams with StudyXpress guidance.",
    exam: "CBSE 2024",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-red-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who achieved their dreams with StudyXpress
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-red-500 font-medium">{testimonial.exam}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
