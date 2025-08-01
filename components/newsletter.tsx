"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with <span className="text-red-500">StudyXpress</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get the latest study materials, exam updates, and exclusive tips delivered to your inbox
              </p>
            </div>

            {isSubscribed ? (
              <div className="flex items-center justify-center text-green-600 text-lg font-medium">
                <CheckCircle className="h-6 w-6 mr-2" />
                Successfully subscribed! Check your email.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  required
                />
                <Button type="submit" size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 h-12">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
