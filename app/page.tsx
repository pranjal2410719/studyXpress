"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    thumbnail: "/placeholder.svg?height=200&width=400",
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
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "NEET Biology Quick Revision",
    author: "Priya Verma",
    size: "1.8MB",
    pages: 15,
    views: "8K",
    timeAgo: "5 days ago",
    category: "NEET",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "NEET Biology Quick Revision",
    author: "Mc",
    size: "1.8MB",
    pages: 15,
    views: "8K",
    timeAgo: "5 days ago",
    category: "NEET",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "NEET Biology Quick Revision",
    author: "BKl",
    size: "1.8MB",
    pages: 15,
    views: "8K",
    timeAgo: "5 days ago",
    category: "NEET",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "NEET Biology Quick Revision",
    author: "Dubey Ji",
    size: "1.8MB",
    pages: 15,
    views: "8K",
    timeAgo: "5 days ago",
    category: "NEET",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
]

const categories = ["All", "CBSE", "ICSE", "NEET", "JEE", "Class 9-12", "Trending Notes", "Handwritten PDFs"]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex bg-white text-gray-900">
      <AppSidebar />
      <div className="flex-1">
        <TopHeader />

        {/* Notes Feed Main Content */}
        <main className="flex-1 p-6">
          {/* Search and Upload Controls */}
          <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <Input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border px-4 py-2 rounded-lg w-full sm:w-64"
              />
              <Button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Upload</Button>
            </div>

            {/* Filter Dropdowns */}
            <div className="flex space-x-2 text-sm">
              <Select defaultValue="sort">
                <SelectTrigger className="border rounded px-3 py-2">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sort">Sort By</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="viewed">Most Viewed</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="filetype">
                <SelectTrigger className="border rounded px-3 py-2">
                  <SelectValue placeholder="File Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="filetype">File Type</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="docx">DOCX</SelectItem>
                  <SelectItem value="images">Images</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex space-x-3 overflow-x-auto pb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full whitespace-nowrap ${
                  selectedCategory === category ? "bg-red-100 text-red-600" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="border rounded-lg overflow-hidden shadow-sm">
                <img
                  src={resource.thumbnail || "/placeholder.svg"}
                  alt="Thumbnail"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h2 className="font-semibold text-lg mb-2">{resource.title}</h2>
                  <p className="text-sm text-gray-500 mb-1">
                    By {resource.author} · {resource.size} · {resource.pages} pages
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    {resource.views} views · {resource.timeAgo}
                  </p>
                  <Button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
