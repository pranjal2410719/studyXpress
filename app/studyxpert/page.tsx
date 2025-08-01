"use client"

import { useState, useRef, useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarInset } from "@/components/ui/sidebar"
import {
  Send,
  Mic,
  MicOff,
  ImageIcon,
  Paperclip,
  ThumbsUp,
  ThumbsDown,
  Copy,
  BookOpen,
  Calculator,
  Clock,
  Zap,
  Search,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  MessageSquare,
  ExternalLink,
  Calendar,
  Target,
  Star,
  MapPin,
  Filter,
  ChevronLeft,
  ChevronRight,
  Play,
  FileText,
  Globe,
} from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  attachments?: string[]
  feedback?: "up" | "down"
}

const quickActions = [
  { icon: BookOpen, label: "Explain Concept", action: "explain" },
  { icon: Calculator, label: "Solve Problem", action: "solve" },
  { icon: Clock, label: "Study Schedule", action: "schedule" },
  { icon: Zap, label: "Quick Quiz", action: "quiz" },
]

const jobListings = [
  {
    id: 1,
    title: "Content Writer Intern",
    company: "EduTech Solutions",
    type: "Internship",
    category: "Writing",
    location: "Remote",
    deadline: "2024-12-20",
    description: "Create educational content and blog posts for our learning platform.",
    skills: ["Content Writing", "Research", "SEO"],
    stipend: "₹15,000/month",
    duration: "3 months",
    image: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 2,
    title: "UI/UX Design Freelancer",
    company: "StudyApp Inc",
    type: "Freelance",
    category: "Design",
    location: "Bangalore",
    deadline: "2024-12-25",
    description: "Design user interfaces for educational mobile applications.",
    skills: ["Figma", "Adobe XD", "User Research"],
    stipend: "₹25,000/project",
    duration: "2 months",
    image: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Analytics Pro",
    type: "Internship",
    category: "Technology",
    location: "Mumbai",
    deadline: "2024-12-30",
    description: "Work on machine learning projects and data analysis for educational insights.",
    skills: ["Python", "Machine Learning", "Statistics"],
    stipend: "₹20,000/month",
    duration: "6 months",
    image: "/placeholder.svg?height=120&width=160",
  },
]

const resources = [
  {
    title: "NEET 2025 Complete Guide",
    type: "PDF",
    category: "Medical",
    downloads: "12K",
    rating: 4.8,
    url: "#",
  },
  {
    title: "JEE Mathematics Formula Sheet",
    type: "PDF",
    category: "Engineering",
    downloads: "8K",
    rating: 4.9,
    url: "#",
  },
  {
    title: "Physics Video Lectures",
    type: "Video",
    category: "Science",
    downloads: "15K",
    rating: 4.7,
    url: "#",
  },
  {
    title: "Chemistry Lab Manual",
    type: "PDF",
    category: "Science",
    downloads: "6K",
    rating: 4.6,
    url: "#",
  },
]

const forumPosts = [
  {
    id: 1,
    title: "How to crack NEET in first attempt?",
    author: "Priya Sharma",
    replies: 23,
    views: 456,
    timeAgo: "2 hours ago",
    category: "NEET",
  },
  {
    id: 2,
    title: "Best books for JEE Mathematics",
    author: "Arjun Patel",
    replies: 15,
    views: 234,
    timeAgo: "5 hours ago",
    category: "JEE",
  },
  {
    id: 3,
    title: "Study schedule for board exams",
    author: "Rohit Kumar",
    replies: 31,
    views: 678,
    timeAgo: "1 day ago",
    category: "CBSE",
  },
]

export default function StudyXpertPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello! I'm StudyXpert, your AI learning companion. I can help you with doubts, explain concepts, find career opportunities, and connect you with resources. What would you like to explore today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [jobFilter, setJobFilter] = useState("All Types")
  const [categoryFilter, setCategoryFilter] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: `I understand you're asking about "${input}". Let me help you with that. This is a detailed explanation that would include relevant information, step-by-step solutions, and additional resources to help you understand the concept better.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleQuickAction = (action: string) => {
    const prompts = {
      explain: "Can you explain a concept I'm struggling with?",
      solve: "Help me solve this problem step by step",
      schedule: "Create a study schedule for my upcoming exams",
      quiz: "Give me a quick quiz on my recent topics",
    }
    setInput(prompts[action as keyof typeof prompts] || "")
  }

  const handleFeedback = (messageId: string, feedback: "up" | "down") => {
    setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, feedback } : msg)))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const filteredJobs = jobListings.filter((job) => {
    const matchesType = jobFilter === "All Types" || job.type === jobFilter
    const matchesCategory = categoryFilter === "All Categories" || job.category === categoryFilter
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesCategory && matchesSearch
  })

  const studyProgress = {
    totalHours: 145,
    weeklyGoal: 25,
    currentWeek: 18,
    streak: 12,
    completedCourses: 3,
    totalCourses: 8,
  }

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />

        <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-50">
          {/* StudyXpert Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">StudyXpert Hub</h1>
                  <p className="text-red-100">Your AI-powered learning and career companion</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{studyProgress.streak}</div>
                    <div className="text-xs text-red-100">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{studyProgress.totalHours}h</div>
                    <div className="text-xs text-red-100">Study Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white border-b px-6">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-5 w-full max-w-2xl">
                  <TabsTrigger value="chat" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    AI Chat
                  </TabsTrigger>
                  <TabsTrigger value="opportunities" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Opportunities
                  </TabsTrigger>
                  <TabsTrigger value="progress" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Progress
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger value="community" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Community
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* AI Chat Tab */}
              <TabsContent value="chat" className="h-full flex flex-col m-0">
                <div className="flex-1 flex flex-col">
                  {/* Quick Actions */}
                  <div className="bg-white border-b px-6 py-3">
                    <div className="max-w-7xl mx-auto">
                      <div className="flex gap-2 overflow-x-auto">
                        {quickActions.map((action) => (
                          <Button
                            key={action.action}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickAction(action.action)}
                            className="flex items-center gap-2 whitespace-nowrap hover:bg-red-50 hover:border-red-200"
                          >
                            <action.icon className="h-4 w-4" />
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div className={`max-w-[70%] ${message.type === "user" ? "order-2" : "order-1"}`}>
                            <Card
                              className={`${message.type === "user" ? "bg-red-500 text-white" : "bg-white border shadow-sm"}`}
                            >
                              <CardContent className="p-4">
                                <p className="text-sm leading-relaxed">{message.content}</p>
                                <div className="flex items-center justify-between mt-3">
                                  <span
                                    className={`text-xs ${message.type === "user" ? "text-red-100" : "text-gray-500"}`}
                                  >
                                    {message.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </span>

                                  {message.type === "ai" && (
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyToClipboard(message.content)}
                                        className="h-6 w-6 p-0 hover:bg-gray-100"
                                      >
                                        <Copy className="h-3 w-3" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleFeedback(message.id, "up")}
                                        className={`h-6 w-6 p-0 hover:bg-gray-100 ${
                                          message.feedback === "up" ? "text-green-600" : ""
                                        }`}
                                      >
                                        <ThumbsUp className="h-3 w-3" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleFeedback(message.id, "down")}
                                        className={`h-6 w-6 p-0 hover:bg-gray-100 ${
                                          message.feedback === "down" ? "text-red-600" : ""
                                        }`}
                                      >
                                        <ThumbsDown className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <Card className="bg-white border shadow-sm">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                                <span className="text-sm text-gray-500">StudyXpert is typing...</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="bg-white border-t p-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-end gap-3">
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="icon" className="hover:bg-gray-100 bg-transparent">
                            <Paperclip className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="hover:bg-gray-100 bg-transparent">
                            <ImageIcon className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex-1">
                          <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything about your studies..."
                            className="min-h-[3rem] resize-none bg-gray-50 border-gray-200 focus:bg-white"
                            onKeyPress={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                handleSendMessage()
                              }
                            }}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIsRecording(!isRecording)}
                            className={`hover:bg-gray-100 ${isRecording ? "bg-red-100 text-red-600" : ""}`}
                          >
                            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          </Button>
                          <Button
                            onClick={handleSendMessage}
                            disabled={!input.trim()}
                            className="bg-red-500 hover:bg-red-600 text-white"
                            size="icon"
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Opportunities Tab */}
              <TabsContent value="opportunities" className="h-full overflow-y-auto m-0">
                <div className="max-w-7xl mx-auto p-6">
                  {/* Search and Filters */}
                  <div className="mb-6">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search for jobs or internships..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 h-12 text-lg"
                      />
                    </div>

                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-4">
                        <Select value={jobFilter} onValueChange={setJobFilter}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="All Types">All Types</SelectItem>
                            <SelectItem value="Internship">Internship</SelectItem>
                            <SelectItem value="Freelance">Freelance</SelectItem>
                          </SelectContent>
                        </Select>

                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="All Categories">All Categories</SelectItem>
                            <SelectItem value="Writing">Writing</SelectItem>
                            <SelectItem value="Design">Design</SelectItem>
                            <SelectItem value="Technology">Technology</SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          More Filters
                        </Button>
                      </div>

                      <Button className="bg-red-500 hover:bg-red-600 text-white">Post a Job</Button>
                    </div>
                  </div>

                  {/* Job Categories */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <Card className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer border-red-100 hover:border-red-200">
                      <Briefcase className="h-8 w-8 text-red-500 mx-auto mb-2" />
                      <h3 className="font-semibold text-red-600">Internships</h3>
                    </Card>
                    <Card className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer border-blue-100 hover:border-blue-200">
                      <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-semibold text-blue-600">Freelance</h3>
                    </Card>
                    <Card className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer border-green-100 hover:border-green-200">
                      <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <h3 className="font-semibold text-green-600">Full-time</h3>
                    </Card>
                  </div>

                  {/* Job Listings */}
                  <div className="space-y-6">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <img
                              src={job.image || "/placeholder.svg"}
                              alt={job.title}
                              className="w-32 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                                  <p className="text-gray-600 mb-2">{job.company}</p>
                                </div>
                                <div className="flex gap-2">
                                  <Badge
                                    className={
                                      job.type === "Internship"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-green-100 text-green-800"
                                    }
                                  >
                                    {job.type}
                                  </Badge>
                                  <Badge variant="outline">{job.category}</Badge>
                                </div>
                              </div>

                              <p className="text-gray-700 mb-4">{job.description}</p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {job.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    Deadline: {job.deadline}
                                  </div>
                                  <div className="font-semibold text-green-600">{job.stipend}</div>
                                </div>
                                <Button className="bg-red-500 hover:bg-red-600 text-white">Apply Now</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button className="bg-red-500 text-white" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress" className="h-full overflow-y-auto m-0">
                <div className="max-w-7xl mx-auto p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Progress Overview */}
                    <div className="lg:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-red-500" />
                            Learning Progress
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Weekly Study Goal</span>
                                <span>
                                  {studyProgress.currentWeek}/{studyProgress.weeklyGoal} hours
                                </span>
                              </div>
                              <Progress
                                value={(studyProgress.currentWeek / studyProgress.weeklyGoal) * 100}
                                className="mb-2"
                              />
                              <div className="text-xs text-gray-500">
                                {studyProgress.weeklyGoal - studyProgress.currentWeek} hours remaining this week
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Course Completion</span>
                                <span>
                                  {studyProgress.completedCourses}/{studyProgress.totalCourses} courses
                                </span>
                              </div>
                              <Progress
                                value={(studyProgress.completedCourses / studyProgress.totalCourses) * 100}
                                className="mb-2"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="text-2xl font-bold text-red-500">{studyProgress.totalHours}h</div>
                                <div className="text-sm text-gray-600">Total Study Time</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-green-500">{studyProgress.streak}</div>
                                <div className="text-sm text-gray-600">Day Streak</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-blue-500">87%</div>
                                <div className="text-sm text-gray-600">Average Score</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Recent Achievements</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {[
                              {
                                title: "Completed NEET Biology Chapter 5",
                                time: "2 hours ago",
                                icon: Award,
                                color: "text-yellow-500",
                              },
                              { title: "7-day Study Streak", time: "Today", icon: Target, color: "text-green-500" },
                              {
                                title: "Scored 95% in Physics Quiz",
                                time: "Yesterday",
                                icon: Star,
                                color: "text-blue-500",
                              },
                            ].map((achievement, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{achievement.title}</div>
                                  <div className="text-xs text-gray-500">{achievement.time}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Goals & Targets */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-blue-500" />
                            Current Goals
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">Complete NEET Biology</h4>
                              <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">Target: End of December</div>
                            <Progress value={75} className="mb-2" />
                            <div className="text-xs text-gray-500">75% complete</div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">Study 25 hours/week</h4>
                              <Badge className="bg-green-100 text-green-800">On Track</Badge>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">This week: 18/25 hours</div>
                            <Progress value={72} className="mb-2" />
                            <div className="text-xs text-gray-500">72% complete</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Study Analytics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Study time chart</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <div className="font-medium">Most Active Day</div>
                                <div className="text-gray-600">Wednesday</div>
                              </div>
                              <div>
                                <div className="font-medium">Peak Study Time</div>
                                <div className="text-gray-600">6-8 PM</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Resources Tab */}
              <TabsContent value="resources" className="h-full overflow-y-auto m-0">
                <div className="max-w-7xl mx-auto p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="mb-6">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input placeholder="Search resources..." className="pl-10 h-12" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {resources.map((resource, index) => (
                          <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  {resource.type === "PDF" ? (
                                    <FileText className="h-8 w-8 text-red-500" />
                                  ) : (
                                    <Play className="h-8 w-8 text-blue-500" />
                                  )}
                                  <div>
                                    <h3 className="font-semibold">{resource.title}</h3>
                                    <Badge variant="outline" className="mt-1">
                                      {resource.category}
                                    </Badge>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>

                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-4">
                                  <span>{resource.downloads} downloads</span>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>{resource.rating}</span>
                                  </div>
                                </div>
                                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                                  Access
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Popular Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {["Medical", "Engineering", "Science", "Mathematics", "Literature"].map((category) => (
                              <Button key={category} variant="ghost" className="w-full justify-start text-sm">
                                {category}
                              </Button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Globe className="h-4 w-4 mr-2" />
                              Online Libraries
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Study Guides
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Play className="h-4 w-4 mr-2" />
                              Video Lectures
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Community Tab */}
              <TabsContent value="community" className="h-full overflow-y-auto m-0">
                <div className="max-w-7xl mx-auto p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-blue-500" />
                            Recent Discussions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {forumPosts.map((post) => (
                              <div key={post.id} className="border-b pb-4 last:border-b-0">
                                <h4 className="font-medium text-gray-900 mb-2 hover:text-red-600 cursor-pointer">
                                  {post.title}
                                </h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span>by {post.author}</span>
                                  <span>{post.replies} replies</span>
                                  <span>{post.views} views</span>
                                  <span>{post.timeAgo}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {post.category}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Study Groups</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center py-8">
                            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Join Study Groups</h3>
                            <p className="text-gray-600 mb-4">Connect with peers and study together</p>
                            <Button className="bg-red-500 hover:bg-red-600 text-white">Find Groups</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Community Stats</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-500">15K+</div>
                              <div className="text-sm text-gray-600">Active Members</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-500">2.3K</div>
                              <div className="text-sm text-gray-600">Discussions</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-500">95%</div>
                              <div className="text-sm text-gray-600">Response Rate</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Top Contributors</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
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

                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Ask Question</Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            Join Discussion
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            Create Study Group
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
