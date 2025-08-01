"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, CreditCard, MessageSquare, Calculator, Home, Car, Heart, User, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation items matching the HTML version
const navigationItems = [
  {
    title: "Notes Feed",
    url: "/",
    icon: BookOpen,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "StudyXpert Chat",
    url: "/studyxpert",
    icon: MessageSquare,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: BookOpen,
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
  },
  {
    title: "Routine Planner",
    url: "/routine-planner",
    icon: Calendar,
  },
  {
    title: "Expense Tracker",
    url: "/expense-tracker",
    icon: CreditCard,
  },
  {
    title: "Period Calculator",
    url: "/period-calculator",
    icon: Calculator,
  },
  {
    title: "PG Accommodation",
    url: "/pg-accommodation",
    icon: Home,
  },
  {
    title: "Transport",
    url: "/transport",
    icon: Car,
  },
  {
    title: "StudyXpress Seva",
    url: "/studyxpress-seva",
    icon: Heart,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="w-60" {...props}>
      <SidebarContent className="p-4">
        {/* Dashboard Header */}
        <div className="font-semibold text-lg mb-4">{""}</div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {navigationItems.map((item) => {
                const isActive = pathname === item.url || (item.url === "/" && pathname === "/")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 text-base"
                    >
                      <Link
                        href={item.url}
                        className={`flex items-center gap-3 ${isActive ? "font-bold text-red-600" : ""}`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title === "StudyXpert Chat" ? "StudyXpert" : item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
