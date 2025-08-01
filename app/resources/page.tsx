"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Upload, Download, Eye, Bookmark, Grid, List } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Class 12 Physics Notes – Chapter 1",
    author: "Ankit Sharma",
    size: "2.3MB",
    pages: 23,
    views: "12K",
    timeAgo: "1 week ago",
    category: "CBSE",
    type: "PDF",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    title: "NEET Biology Quick Revision",
    author: "Priya Verma",
    size: "1.8MB",
    pages: 15,
    views: "8K",
    timeAgo: "5 days ago",
    category: "NEET",
    type: "PDF",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    title: "JEE Mathematics Formula Sheet",
    author: "Rajesh Kumar",
    size: "950KB",
    pages: 8,
    views: "15K",
    timeAgo: "3 days ago",
    category: "JEE",
    type: "PDF",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 4,
    title: "Chemistry Lab Manual Class 11",
    author: "Dr. Sanjay Singh",
    size: "4.2MB",
    pages: 45,
    views: "6K",
    timeAgo: "2 weeks ago",
    category: "CBSE",
    type: "PDF",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 5,
    title: "English Literature Notes",
    author: "Meera Patel",
    size: "1.5MB",
    pages: 20,
    views: "9K",
    timeAgo: "1 week ago",
    category: "CBSE",
    type: "PDF",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 6,
    title: "History Important Dates",
    author: "Amit Gupta",
    size: "800KB",
    pages: 12,
    views: "4K",
    timeAgo: "4 days ago",
    category: "CBSE",
    type: "PDF",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
]

const categories = ["All", "CBSE", "ICSE", "NEET", "JEE", "Class 9-12", "Trending Notes", "Handwritten PDFs"]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Study <span className="text-red-500">Resources</span>
          </h1>
          <p className="text-gray-600">
            Access comprehensive study materials, notes, and resources for your academic success
          </p>
        </div>

        {/* Search and Upload */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white h-12 px-6">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-red-500 hover:bg-red-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="author">Author</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="File Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="doc">DOC</SelectItem>
                <SelectItem value="ppt">PPT</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-red-500 hover:bg-red-600" : ""}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-red-500 hover:bg-red-600" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Resources Grid/List */}
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              {viewMode === "grid" ? (
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">{resource.category}</Badge>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">By {resource.author}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>
                        {resource.size} • {resource.pages} pages
                      </span>
                      <span>
                        {resource.views} views • {resource.timeAgo}
                      </span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              ) : (
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-gray-600">By {resource.author}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                            <span>
                              {resource.size} • {resource.pages} pages
                            </span>
                            <span>
                              {resource.views} views • {resource.timeAgo}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{resource.category}</Badge>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
            Load More Resources
          </Button>
        </div>
      </div>
    </div>
  )
}
