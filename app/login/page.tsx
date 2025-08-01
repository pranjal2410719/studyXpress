"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const countries = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
]

export default function LoginPage() {
  const [currentForm, setCurrentForm] = useState<"login" | "register" | "forgot-password">("login")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [dialCode, setDialCode] = useState("+1")

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode)
    const country = countries.find((c) => c.code === countryCode)
    if (country) {
      setDialCode(country.dialCode)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/01/06/84/75/360_F_106847582_7JcRyHVy0xsp9qIDvuccmdl5oz3jorbm.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Login Form */}
      {currentForm === "login" && (
        <Card className="relative z-10 w-full max-w-sm mx-4 mb-5 bg-white/85 backdrop-blur-md border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <img
              src="https://i.ibb.co/jkRpMFSm/Untitled-5-6.png"
              alt="StudyXpress Logo"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome Back</h2>

            <form className="space-y-4">
              <div className="text-left">
                <Label htmlFor="login-username" className="text-gray-600 font-medium">
                  Username
                </Label>
                <Input
                  id="login-username"
                  type="text"
                  placeholder="Enter username"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="text-left">
                <Label htmlFor="login-password" className="text-gray-600 font-medium">
                  Password
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Enter password"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium py-3 transition-all duration-300"
              >
                Login
              </Button>

              <div className="flex flex-col gap-2 mt-4 text-sm">
                <button
                  type="button"
                  onClick={() => setCurrentForm("forgot-password")}
                  className="text-gray-700 hover:underline"
                >
                  🔒 Forgot Password?
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentForm("register")}
                  className="text-gray-700 hover:underline"
                >
                  📝 Create Account
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Forgot Password Form */}
      {currentForm === "forgot-password" && (
        <Card className="relative z-10 w-full max-w-sm mx-4 mb-5 bg-white/85 backdrop-blur-md border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Forgot Password</h2>

            <form className="space-y-4">
              <div className="text-left">
                <Label htmlFor="forgot-email" className="text-gray-600 font-medium">
                  Email
                </Label>
                <Input
                  id="forgot-email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium py-3 transition-all duration-300"
              >
                Reset Password
              </Button>

              <div className="mt-4 text-sm">
                <button type="button" onClick={() => setCurrentForm("login")} className="text-gray-700 hover:underline">
                  🔙 Back to Login
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Register Form */}
      {currentForm === "register" && (
        <Card className="relative z-10 w-full max-w-sm mx-4 mb-5 bg-white/85 backdrop-blur-md border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <img
              src="https://i.ibb.co/jkRpMFSm/Untitled-5-6.png"
              alt="StudyXpress Logo"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover animate-fadeIn"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Account</h2>

            <form className="space-y-4">
              <div className="text-left">
                <Label htmlFor="reg-fullname" className="text-gray-600 font-medium">
                  Full Name
                </Label>
                <Input
                  id="reg-fullname"
                  type="text"
                  placeholder="Enter full name"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="text-left">
                <Label htmlFor="reg-email" className="text-gray-600 font-medium">
                  Email
                </Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="Enter email"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="text-left">
                <Label htmlFor="reg-country" className="text-gray-600 font-medium">
                  Country
                </Label>
                <Select value={selectedCountry} onValueChange={handleCountryChange}>
                  <SelectTrigger className="mt-1 bg-white border-gray-300">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name} ({country.dialCode})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="text-left">
                <Label htmlFor="reg-phone" className="text-gray-600 font-medium">
                  Phone Number
                </Label>
                <div className="flex gap-2 mt-1">
                  <Input type="text" value={dialCode} readOnly className="w-20 text-center bg-white border-gray-300" />
                  <Input
                    id="reg-phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="flex-1 bg-white border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="text-left">
                <Label htmlFor="reg-username" className="text-gray-600 font-medium">
                  Username
                </Label>
                <Input
                  id="reg-username"
                  type="text"
                  placeholder="Choose username"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="text-left">
                <Label htmlFor="reg-password" className="text-gray-600 font-medium">
                  Password
                </Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Create password"
                  className="mt-1 bg-white border-gray-300"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium py-3 transition-all duration-300"
              >
                Register
              </Button>

              <div className="mt-4 text-sm">
                <button type="button" onClick={() => setCurrentForm("login")} className="text-gray-700 hover:underline">
                  🔙 Already have an account? Login
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-white text-sm text-center">© 2025 StudyXpress. All rights reserved.</footer>
    </div>
  )
}
