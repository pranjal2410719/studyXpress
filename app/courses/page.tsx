"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarInset } from "@/components/ui/sidebar"
import { Search, Filter, Star, Clock, Users, Play, BookOpen, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Complete NEET Biology Masterclass",
    instructor: "Dr. Priya Sharma",
    rating: 4.9,
    students: 12500,
    duration: "45 hours",
    lessons: 180,
    price: 2999,
    originalPrice: 4999,
    level: "Advanced",
    category: "NEET",
    thumbnail: "/biology-textbook-microscope.png",
    description: "Comprehensive biology course covering all NEET syllabus with live doubt sessions.",
    skills: ["Cell Biology", "Genetics", "Ecology", "Human Physiology"],
    progress: 0,
    isEnrolled: false,
  },
  {
    id: 2,
    title: "JEE Physics - Mechanics & Waves",
    instructor: "Prof. Ankit Kumar",
    rating: 4.8,
    students: 8200,
    duration: "60 hours",
    lessons: 240,
    price: 3499,
    originalPrice: 5999,
    level: "Intermediate",
    category: "JEE",
    thumbnail: "/physics-lab-equations.png",
    description: "Master physics fundamentals with advanced problem-solving techniques.",
    skills: ["Mechanics", "Waves", "Thermodynamics", "Optics"],
    progress: 25,
    isEnrolled: true,
  },
  {
    id: 3,
    title: "Class 12 Chemistry Complete Course",
    instructor: "Dr. Rajesh Verma",
    rating: 4.7,
    students: 15300,
    duration: "50 hours",
    lessons: 200,
    price: 2499,
    originalPrice: 3999,
    level: "Beginner",
    category: "CBSE",
    thumbnail: "/chemistry-lab.png",
    description: "Complete chemistry syllabus with practical experiments and theory.",
    skills: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
    progress: 0,
    isEnrolled: false,
  },
]

const categories = ["All", "NEET", "JEE", "CBSE", "ICSE", "Engineering", "Medical"]
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]
const sortOptions = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Rating"]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [sortBy, setSortBy] = useState("Popular")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />

        <div className="flex-1 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Explore <span className="text-red-500">Courses</span>
              </h1>
              <p className="text-gray-600">
                Master your subjects with expert-led courses designed for academic excellence
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="hover:bg-red-50 hover:border-red-200"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Total Courses</div>
              </Card>
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </Card>
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </Card>
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </Card>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative">
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
                    {course.isEnrolled && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-white/90 rounded-lg p-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-3">by {course.instructor}</p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{course.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          className={`${
                            course.isEnrolled ? "bg-green-600 hover:bg-green-700" : "bg-red-500 hover:bg-red-600"
                          } text-white`}
                        >
                          {course.isEnrolled ? "Continue" : "Enroll Now"}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Load More Courses
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
