"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarInset } from "@/components/ui/sidebar"
import {
  Search,
  Plus,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
  Users,
  Award,
  Eye,
  ThumbsUp,
  Filter,
} from "lucide-react"

const forumPosts = [
  {
    id: 1,
    title: "How to approach Organic Chemistry for NEET?",
    content: "I'm struggling with organic chemistry reactions. Can someone share effective study strategies?",
    author: {
      name: "Arjun Patel",
      avatar: "/placeholder.svg",
      badge: "NEET Aspirant",
      reputation: 120,
    },
    category: "NEET",
    tags: ["Chemistry", "Organic", "Study Tips"],
    votes: 23,
    replies: 15,
    views: 234,
    timeAgo: "2 hours ago",
    isAnswered: true,
    isPinned: false,
  },
  {
    id: 2,
    title: "Physics Doubt: Work-Energy Theorem",
    content: "Can someone explain the work-energy theorem with a practical example?",
    author: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg",
      badge: "JEE Candidate",
      reputation: 89,
    },
    category: "JEE",
    tags: ["Physics", "Mechanics", "Doubt"],
    votes: 18,
    replies: 8,
    views: 156,
    timeAgo: "4 hours ago",
    isAnswered: false,
    isPinned: true,
  },
  {
    id: 3,
    title: "Study Schedule for Board Exams",
    content: "Looking for advice on creating an effective study schedule for Class 12 boards.",
    author: {
      name: "Rohit Kumar",
      avatar: "/placeholder.svg",
      badge: "Class 12",
      reputation: 45,
    },
    category: "CBSE",
    tags: ["Study Plan", "Time Management", "Boards"],
    votes: 31,
    replies: 22,
    views: 478,
    timeAgo: "1 day ago",
    isAnswered: true,
    isPinned: false,
  },
]

const categories = ["All", "NEET", "JEE", "CBSE", "ICSE", "Doubts", "Study Tips", "Motivation"]
const sortOptions = ["Latest", "Most Popular", "Most Replied", "Unanswered"]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Latest")
  const [activeTab, setActiveTab] = useState("discussions")

  const filteredPosts = forumPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
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
                Study <span className="text-red-500">Community</span>
              </h1>
              <p className="text-gray-600">Connect with fellow students, ask questions, and share knowledge</p>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </Card>
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2.3K</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </Card>
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1.8K</div>
                <div className="text-sm text-gray-600">Solved Doubts</div>
              </Card>
              <Card className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                      <TabsTrigger value="discussions">Discussions</TabsTrigger>
                      <TabsTrigger value="questions">Questions</TabsTrigger>
                      <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
                    </TabsList>

                    <Button className="bg-red-500 hover:bg-red-600 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </div>

                  {/* Search and Filters */}
                  <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search discussions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>

                      <div className="flex gap-2">
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-3 py-2 border rounded-lg text-sm"
                        >
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>

                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="px-3 py-2 border rounded-lg text-sm"
                        >
                          {sortOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <TabsContent value="discussions" className="space-y-4">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                              <AvatarFallback>
                                {post.author.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  {post.isPinned && (
                                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">Pinned</Badge>
                                  )}
                                  {post.isAnswered && (
                                    <Badge className="bg-green-100 text-green-800 text-xs">Answered</Badge>
                                  )}
                                  <Badge variant="outline" className="text-xs">
                                    {post.category}
                                  </Badge>
                                </div>
                                <span className="text-sm text-gray-500">{post.timeAgo}</span>
                              </div>

                              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors">
                                {post.title}
                              </h3>

                              <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <span className="text-sm font-medium">{post.author.name}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {post.author.badge}
                                  </Badge>
                                  <span className="text-xs text-gray-500">• {post.author.reputation} rep</span>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{post.votes}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>{post.replies}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{post.views}</span>
                                  </div>
                                  <Button variant="ghost" size="sm" className="p-1">
                                    <Bookmark className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="p-1">
                                    <Share2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="questions" className="space-y-4">
                    <div className="text-center py-12">
                      <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Yet</h3>
                      <p className="text-gray-600 mb-4">Be the first to ask a question in this category</p>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Ask Question
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="study-groups" className="space-y-4">
                    <div className="text-center py-12">
                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Study Groups Coming Soon</h3>
                      <p className="text-gray-600 mb-4">Join study groups to collaborate with peers</p>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Group
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Top Contributors */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Top Contributors</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="/placeholder.svg" alt="Contributor" />
                            <AvatarFallback>U{i}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-medium text-sm">User {i}</div>
                            <div className="text-xs text-gray-500">{500 - i * 100} points</div>
                          </div>
                          <Award className="h-4 w-4 text-yellow-500" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-sm">
                          <div className="font-medium">New answer posted</div>
                          <div className="text-gray-500 text-xs">
                            {i} hour{i !== 1 ? "s" : ""} ago
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Physics", "Chemistry", "Mathematics", "Biology", "NEET", "JEE", "Study Tips"].map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs cursor-pointer hover:bg-red-100">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
