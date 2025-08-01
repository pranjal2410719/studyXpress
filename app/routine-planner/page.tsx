"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarInset } from "@/components/ui/sidebar"
import {
  Calendar,
  Clock,
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Coffee,
  Dumbbell,
  Moon,
  MenuIcon as Meal,
  AlertCircle,
} from "lucide-react"

const timeSlots = [
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
]

const activityTypes = [
  { type: "study", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
  { type: "break", icon: Coffee, color: "bg-yellow-100 text-yellow-800" },
  { type: "exercise", icon: Dumbbell, color: "bg-green-100 text-green-800" },
  { type: "meal", icon: Meal, color: "bg-orange-100 text-orange-800" },
  { type: "sleep", icon: Moon, color: "bg-purple-100 text-purple-800" },
]

const defaultRoutine = [
  { time: "6:00 AM", activity: "Morning Exercise", type: "exercise", duration: 60 },
  { time: "7:00 AM", activity: "Breakfast", type: "meal", duration: 30 },
  { time: "8:00 AM", activity: "Physics Study", type: "study", duration: 120 },
  { time: "10:00 AM", activity: "Short Break", type: "break", duration: 15 },
  { time: "10:15 AM", activity: "Chemistry Study", type: "study", duration: 120 },
  { time: "12:15 PM", activity: "Lunch", type: "meal", duration: 45 },
  { time: "1:00 PM", activity: "Biology Study", type: "study", duration: 120 },
  { time: "3:00 PM", activity: "Break", type: "break", duration: 30 },
  { time: "3:30 PM", activity: "Mathematics Study", type: "study", duration: 120 },
  { time: "5:30 PM", activity: "Evening Snack", type: "meal", duration: 15 },
  { time: "6:00 PM", activity: "Revision", type: "study", duration: 90 },
  { time: "7:30 PM", activity: "Dinner", type: "meal", duration: 30 },
  { time: "8:00 PM", activity: "Free Time", type: "break", duration: 60 },
  { time: "9:00 PM", activity: "Light Study", type: "study", duration: 60 },
  { time: "10:00 PM", activity: "Sleep", type: "sleep", duration: 480 },
]

export default function RoutinePlannerPage() {
  const [routine, setRoutine] = useState(defaultRoutine)
  const [isAddingActivity, setIsAddingActivity] = useState(false)
  const [selectedDay, setSelectedDay] = useState("Monday")

  const getActivityIcon = (type: string) => {
    const activity = activityTypes.find((a) => a.type === type)
    return activity ? activity.icon : BookOpen
  }

  const getActivityColor = (type: string) => {
    const activity = activityTypes.find((a) => a.type === type)
    return activity ? activity.color : "bg-gray-100 text-gray-800"
  }

  const totalStudyTime = routine
    .filter((item) => item.type === "study")
    .reduce((total, item) => total + item.duration, 0)

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />

        <div className="flex-1 bg-gray-50 min-h-screen p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Routine <span className="text-red-500">Planner</span>
              </h1>
              <p className="text-gray-600">Plan and organize your daily study schedule for maximum productivity</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Day Selection & Stats */}
              <div className="lg:col-span-1 space-y-6">
                {/* Day Selector */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-red-500" />
                      Select Day
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {days.map((day) => (
                        <Button
                          key={day}
                          variant={selectedDay === day ? "default" : "outline"}
                          className={`w-full justify-start ${selectedDay === day ? "bg-red-500 hover:bg-red-600" : ""}`}
                          onClick={() => setSelectedDay(day)}
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-500">{Math.round(totalStudyTime / 60)}h</div>
                      <div className="text-sm text-gray-600">Total Study Time</div>
                    </div>

                    <div className="space-y-3">
                      {activityTypes.map(({ type, icon: Icon, color }) => {
                        const count = routine.filter((item) => item.type === type).length
                        const totalTime = routine
                          .filter((item) => item.type === type)
                          .reduce((total, item) => total + item.duration, 0)

                        return (
                          <div key={type} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              <span className="capitalize text-sm">{type}</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {count} • {Math.round(totalTime / 60)}h {totalTime % 60}m
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => setIsAddingActivity(true)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Activity
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Copy to Tomorrow
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Apply to All Days
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Main Schedule */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        {selectedDay} Schedule
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">{routine.length} activities</Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          {Math.round(totalStudyTime / 60)}h study time
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {routine.map((item, index) => {
                        const Icon = getActivityIcon(item.type)
                        const colorClass = getActivityColor(item.type)

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-sm transition-shadow"
                          >
                            <div className="text-sm font-mono text-gray-600 w-20">{item.time}</div>

                            <div className={`p-2 rounded-lg ${colorClass}`}>
                              <Icon className="h-4 w-4" />
                            </div>

                            <div className="flex-1">
                              <div className="font-medium">{item.activity}</div>
                              <div className="text-sm text-gray-500">
                                {Math.floor(item.duration / 60)}h {item.duration % 60}m
                                {item.type === "study" && <span className="ml-2 text-blue-600">• Study Session</span>}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {item.type}
                              </Badge>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Productivity Tips */}
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900 mb-2">Productivity Tips</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Take a 15-minute break every 2 hours of study</li>
                            <li>• Schedule your most challenging subjects when you're most alert</li>
                            <li>• Keep your study sessions between 90-120 minutes for optimal focus</li>
                            <li>• Include physical activity to boost concentration</li>
                          </ul>
                        </div>
                      </div>
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
