"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow relative bg-white">
      <SidebarTrigger className="md:hidden" />

      {/* Centered Logo */}
      <div className="text-2xl font-bold mx-auto">
        <span className="text-black">Study</span>
        <span className="text-red-600">X</span>
        <span className="text-black">press</span>
      </div>

      {/* Profile Photo with Dropdown */}
      <div className="absolute right-6 top-3">
        <div className="relative">
          <Button variant="ghost" className="p-0 h-auto" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="bg-gray-300">P</AvatarFallback>
            </Avatar>
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                My Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100 text-sm">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
