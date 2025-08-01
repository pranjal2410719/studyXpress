"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { SidebarInset } from "@/components/ui/sidebar"
import {
  Play,
  Clock,
  Users,
  Star,
  Share2,
  Bookmark,
  CheckCircle,
  Lock,
  FileText,
  Video,
  Award,
  Globe,
} from "lucide-react"

const courseData = {
  id: 1,
  title: "Complete NEET Biology Masterclass",
  instructor: {
    name: "Dr. Priya Sharma",
    avatar: "/placeholder.svg",
    bio: "15+ years experience in NEET coaching with 95% success rate",
    rating: 4.9,
    students: 25000,
  },
  rating: 4.9,
  totalStudents: 12500,
  duration: "45 hours",
  lessons: 180,
  price: 2999,
  originalPrice: 4999,
  level: "Advanced",
  category: "NEET",
  thumbnail: "/biology-textbook-microscope.png",
  description:
    "Master NEET Biology with comprehensive coverage of all topics, practical examples, and expert guidance. This course includes live doubt sessions, practice tests, and downloadable resources.",
  whatYouWillLearn: [
    "Complete NEET Biology syllabus coverage",
    "Advanced problem-solving techniques",
    "Time management strategies",
    "Mock tests and assessments",
    "Live doubt clearing sessions",
    "Downloadable study materials",
  ],
  requirements: [
    "Basic understanding of Class 11 Biology",
    "Dedication to study 2-3 hours daily",
    "Access to stable internet connection",
  ],
  curriculum: [
    {
      title: "Cell Biology and Biomolecules",
      lessons: 25,
      duration: "6 hours",
      completed: 25,
      topics: [
        { title: "Introduction to Cell Biology", duration: "15 min", type: "video", completed: true },
        { title: "Cell Structure and Functions", duration: "20 min", type: "video", completed: true },
        { title: "Biomolecules Overview", duration: "18 min", type: "video", completed: true },
        { title: "Practice Quiz 1", duration: "10 min", type: "quiz", completed: false },
      ],
    },
    {
      title: "Genetics and Evolution",
      lessons: 30,
      duration: "8 hours",
      completed: 15,
      topics: [
        { title: "Principles of Genetics", duration: "25 min", type: "video", completed: true },
        { title: "DNA and RNA Structure", duration: "22 min", type: "video", completed: false },
        { title: "Genetic Disorders", duration: "20 min", type: "video", completed: false },
        { title: "Evolution Theories", duration: "18 min", type: "video", completed: false },
      ],
    },
    {
      title: "Human Physiology",
      lessons: 35,
      duration: "10 hours",
      completed: 0,
      topics: [
        { title: "Digestive System", duration: "30 min", type: "video", completed: false },
        { title: "Respiratory System", duration: "28 min", type: "video", completed: false },
        { title: "Circulatory System", duration: "32 min", type: "video", completed: false },
        { title: "Nervous System", duration: "35 min", type: "video", completed: false },
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      student: "Arjun Patel",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! Dr. Sharma's teaching method is outstanding. Helped me score 680+ in NEET.",
    },
    {
      id: 2,
      student: "Priya Singh",
      rating: 5,
      date: "1 month ago",
      comment: "Very comprehensive course with great examples. The live sessions are incredibly helpful.",
    },
  ],
}

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(0)

  const totalProgress = Math.round(
    (courseData.curriculum.reduce((acc, section) => acc + section.completed, 0) /
      courseData.curriculum.reduce((acc, section) => acc + section.lessons, 0)) *
      100,
  )

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <TopHeader />

        <div className="flex-1 bg-gray-50 min-h-screen">
          {/* Hero Section */}
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-red-500 hover:bg-red-600">{courseData.category}</Badge>
                    <Badge variant="outline">{courseData.level}</Badge>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{courseData.title}</h1>

                  <p className="text-xl text-gray-600 mb-6">{courseData.description}</p>

                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{courseData.rating}</span>
                      <span className="text-gray-600">({courseData.totalStudents.toLocaleString()} students)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{courseData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{courseData.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">English</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={courseData.instructor.avatar || "/placeholder.svg"}
                      alt={courseData.instructor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{courseData.instructor.name}</h3>
                      <p className="text-gray-600">{courseData.instructor.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Course Preview Card */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-6">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={courseData.thumbnail || "/placeholder.svg"}
                          alt={courseData.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-white text-gray-900">
                          <Play className="h-6 w-6 ml-1" />
                        </Button>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-3xl font-bold text-gray-900">
                              ₹{courseData.price.toLocaleString()}
                            </span>
                            <span className="text-lg text-gray-500 line-through ml-2">
                              ₹{courseData.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% OFF
                          </Badge>
                        </div>

                        {isEnrolled ? (
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Course Progress</span>
                                <span>{totalProgress}%</span>
                              </div>
                              <Progress value={totalProgress} className="mb-4" />
                            </div>
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                              <Play className="h-4 w-4 mr-2" />
                              Continue Learning
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="w-full bg-red-500 hover:bg-red-600 text-white mb-4"
                            onClick={() => setIsEnrolled(true)}
                          >
                            Enroll Now
                          </Button>
                        )}

                        <div className="flex gap-2 mb-6">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Lifetime access</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Mobile and desktop access</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Certificate of completion</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Live doubt sessions</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-4 w-full mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-4">What you'll learn</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {courseData.whatYouWillLearn.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Requirements</h3>
                        <ul className="space-y-2">
                          {courseData.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="curriculum" className="space-y-4">
                    {courseData.curriculum.map((section, sectionIndex) => (
                      <Card key={sectionIndex}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg">{section.title}</h3>
                            <div className="text-sm text-gray-600">
                              {section.lessons} lessons • {section.duration}
                            </div>
                          </div>

                          <div className="mb-4">
                            <Progress value={(section.completed / section.lessons) * 100} className="mb-2" />
                            <div className="text-sm text-gray-600">
                              {section.completed} of {section.lessons} lessons completed
                            </div>
                          </div>

                          <div className="space-y-2">
                            {section.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  {topic.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : topic.type === "video" ? (
                                    isEnrolled ? (
                                      <Play className="h-5 w-5 text-gray-400" />
                                    ) : (
                                      <Lock className="h-5 w-5 text-gray-400" />
                                    )
                                  ) : topic.type === "quiz" ? (
                                    <Award className="h-5 w-5 text-yellow-500" />
                                  ) : (
                                    <FileText className="h-5 w-5 text-blue-500" />
                                  )}
                                  <div>
                                    <div className="font-medium">{topic.title}</div>
                                    <div className="text-sm text-gray-500">{topic.duration}</div>
                                  </div>
                                </div>
                                {topic.type === "video" && <Video className="h-4 w-4 text-gray-400" />}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="instructor">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-6">
                          <img
                            src={courseData.instructor.avatar || "/placeholder.svg"}
                            alt={courseData.instructor.name}
                            className="w-20 h-20 rounded-full"
                          />
                          <div>
                            <h3 className="font-semibold text-xl">{courseData.instructor.name}</h3>
                            <p className="text-gray-600 mb-2">{courseData.instructor.bio}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{courseData.instructor.rating} rating</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4 text-gray-400" />
                                <span>{courseData.instructor.students.toLocaleString()} students</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="reviews" className="space-y-4">
                    {courseData.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{review.student}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar with related courses */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Related Courses</h3>
                    <div className="space-y-4">
                      {/* Related course items would go here */}
                      <div className="flex gap-3">
                        <img
                          src="/chemistry-lab.png"
                          alt="Related course"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">Chemistry Complete Course</h4>
                          <p className="text-xs text-gray-600">Dr. Rajesh Verma</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">4.7</span>
                          </div>
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
