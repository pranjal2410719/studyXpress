"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Clock, Users, Star, Play, ArrowRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete NEET Biology Masterclass",
    instructor: "Dr. Priya Sharma",
    duration: "45 hours",
    students: "12.5K",
    rating: 4.9,
    price: "₹2,999",
    originalPrice: "₹4,999",
    thumbnail: "/biology-textbook-microscope.png",
    category: "NEET",
    level: "Advanced",
  },
  {
    id: 2,
    title: "JEE Physics - Mechanics & Waves",
    instructor: "Prof. Ankit Kumar",
    duration: "60 hours",
    students: "8.2K",
    rating: 4.8,
    price: "₹3,499",
    originalPrice: "₹5,999",
    thumbnail: "/physics-lab-equations.png",
    category: "JEE",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Class 12 Chemistry Complete Course",
    instructor: "Dr. Rajesh Verma",
    duration: "50 hours",
    students: "15.3K",
    rating: 4.7,
    price: "₹2,499",
    originalPrice: "₹3,999",
    thumbnail: "/chemistry-lab.png",
    category: "CBSE",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Mathematics for Competitive Exams",
    instructor: "Prof. Sanjay Singh",
    duration: "70 hours",
    students: "20.1K",
    rating: 4.9,
    price: "₹3,999",
    originalPrice: "₹6,999",
    thumbnail: "/blackboard-math.png",
    category: "JEE",
    level: "Advanced",
  },
]

export function TrendingCourses() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, courses.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, courses.length - 2)) % Math.max(1, courses.length - 2))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending <span className="text-red-500">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses designed by expert educators to help you excel in your studies
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-red-50 hover:border-red-200"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-red-50 hover:border-red-200"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Courses Grid */}
          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-1/2 flex-shrink-0 px-3">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                          <Play className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">{course.category}</Badge>
                      <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90">
                        {course.level}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">by {course.instructor}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                          <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                        </div>
                        <Button className="bg-red-500 hover:bg-red-600 text-white">Enroll Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
