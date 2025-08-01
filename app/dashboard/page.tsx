"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarInset } from "@/components/ui/sidebar"
import {
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  Award,
  Calendar,
  MessageSquare,
  Download,
  Play,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const studyStats = {
    totalStudyHours: 145,
    coursesEnrolled: 8,
    coursesCompleted: 3,
    averageScore: 87,
    streak: 12,
    weeklyGoal: 25,
    weeklyProgress: 18,
  }

  const recentActivity = [
    {
      type: "course",
      title: "Completed: Organic Chemistry - Chapter 5",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-500",
    },
    { type: "quiz", title: "Scored 95% in Physics Quiz", time: "5 hours ago", icon: Award, color: "text-yellow-500" },
    {
      type: "download",
      title: "Downloaded: NEET Biology Notes",
      time: "1 day ago",
      icon: Download,
      color: "text-blue-500",
    },
    {
      type: "discussion",
      title: "Posted in Community Forum",
      time: "2 days ago",
      icon: MessageSquare,
      color: "text-purple-500",
    },
  ]

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete NEET Biology",
      instructor: "Dr. Priya Sharma",
      progress: 75,
      nextLesson: "Genetics - Mendel's Laws",
      thumbnail: "/biology-textbook-microscope.png",
      timeSpent: "32h 15m",
      lastAccessed: "Today",
    },
    {
      id: 2,
      title: "JEE Physics - Mechanics",
      instructor: "Prof. Ankit Kumar",
      progress: 45,
      nextLesson: "Work-Energy Theorem",
      thumbnail: "/physics-lab-equations.png",
      timeSpent: "18h 30m",
      lastAccessed: "Yesterday",
    },
    {
      id: 3,
      title: "Chemistry Complete Course",
      instructor: "Dr. Rajesh Verma",
      progress: 60,
      nextLesson: "Chemical Bonding",
      thumbnail: "/chemistry-lab.png",
      timeSpent: "24h 45m",
      lastAccessed: "2 days ago",
    },
  ]

  const upcomingTasks = [
    { title: "Physics Assignment Due", date: "Tomorrow", priority: "high", type: "assignment" },
    { title: "Biology Mock Test", date: "Dec 15", priority: "medium", type: "test" },
    { title: "Chemistry Lab Report", date: "Dec 18", priority: "low", type: "report" },
    { title: "Live Doubt Session", date: "Today 6 PM", priority: "high", type: "session" },
  ]

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />

        <div className="flex-1 bg-gray-50 min-h-screen p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, <span className="text-red-500">Student!</span>
              </h1>
              <p className="text-gray-600">Here's your learning progress and upcoming tasks</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full max-w-md mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{studyStats.coursesEnrolled}</div>
                      <div className="text-sm text-gray-600">Courses Enrolled</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{studyStats.coursesCompleted}</div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-3">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{studyStats.totalStudyHours}h</div>
                      <div className="text-sm text-gray-600">Total Study Time</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mx-auto mb-3">
                        <Target className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{studyStats.averageScore}%</div>
                      <div className="text-sm text-gray-600">Average Score</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Weekly Progress */}
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-red-500" />
                        Weekly Study Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>This Week's Goal: {studyStats.weeklyGoal} hours</span>
                          <span>
                            {studyStats.weeklyProgress}/{studyStats.weeklyGoal} hours
                          </span>
                        </div>
                        <Progress value={(studyStats.weeklyProgress / studyStats.weeklyGoal) * 100} className="mb-2" />
                        <div className="text-xs text-gray-500">
                          {studyStats.weeklyGoal - studyStats.weeklyProgress} hours remaining to reach your goal
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm font-medium">{studyStats.streak} day streak!</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">On Track</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Tasks */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        Upcoming Tasks
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {upcomingTasks.slice(0, 4).map((task, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-sm">{task.title}</div>
                              <div className="text-xs text-gray-500">{task.date}</div>
                            </div>
                            <Badge
                              variant={task.priority === "high" ? "default" : "secondary"}
                              className={task.priority === "high" ? "bg-red-100 text-red-800" : ""}
                            >
                              {task.priority}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-purple-500" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <activity.icon className={`h-5 w-5 ${activity.color}`} />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{activity.title}</div>
                            <div className="text-xs text-gray-500">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <div className="grid gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">{course.title}</h3>
                                <p className="text-gray-600">by {course.instructor}</p>
                              </div>
                              <Button className="bg-red-500 hover:bg-red-600 text-white">
                                <Play className="h-4 w-4 mr-2" />
                                Continue
                              </Button>
                            </div>

                            <div className="mb-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="mb-2" />
                              <div className="text-sm text-gray-500">Next: {course.nextLesson}</div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>Time spent: {course.timeSpent}</span>
                              <span>Last accessed: {course.lastAccessed}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-blue-500" />
                        Study Time Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Chart visualization would go here</span>
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

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-green-500" />
                        Subject Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Pie chart would go here</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Biology</span>
                            <span>40%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Physics</span>
                            <span>35%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Chemistry</span>
                            <span>25%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="goals" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Goals</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Complete NEET Biology Course</h4>
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
                      <CardTitle>Set New Goal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Goal Title</label>
                          <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter goal title" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Target Date</label>
                          <input type="date" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Category</label>
                          <select className="w-full p-2 border rounded-lg">
                            <option>Study Hours</option>
                            <option>Course Completion</option>
                            <option>Test Score</option>
                            <option>Custom</option>
                          </select>
                        </div>
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Create Goal</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
