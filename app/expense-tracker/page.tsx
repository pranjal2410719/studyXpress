"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TopHeader } from "@/components/top-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarInset } from "@/components/ui/sidebar"
import {
  Wallet,
  Plus,
  TrendingDown,
  TrendingUp,
  BookOpen,
  Utensils,
  Bus,
  Home,
  ShoppingCart,
  Smartphone,
  Calendar,
  PieChart,
  BarChart3,
  Download,
  Filter,
} from "lucide-react"

const expenseCategories = [
  { name: "Education", icon: BookOpen, color: "bg-blue-100 text-blue-800", budget: 15000 },
  { name: "Food", icon: Utensils, color: "bg-green-100 text-green-800", budget: 8000 },
  { name: "Transport", icon: Bus, color: "bg-yellow-100 text-yellow-800", budget: 3000 },
  { name: "Accommodation", icon: Home, color: "bg-purple-100 text-purple-800", budget: 12000 },
  { name: "Personal", icon: ShoppingCart, color: "bg-pink-100 text-pink-800", budget: 4000 },
  { name: "Technology", icon: Smartphone, color: "bg-indigo-100 text-indigo-800", budget: 2000 },
]

const recentExpenses = [
  {
    id: 1,
    description: "NEET Biology Course",
    category: "Education",
    amount: 2999,
    date: "2024-12-01",
    type: "expense",
  },
  { id: 2, description: "Monthly Mess Fee", category: "Food", amount: 6000, date: "2024-12-01", type: "expense" },
  { id: 3, description: "Bus Pass", category: "Transport", amount: 1200, date: "2024-11-30", type: "expense" },
  {
    id: 4,
    description: "Scholarship Amount",
    category: "Education",
    amount: 10000,
    date: "2024-11-28",
    type: "income",
  },
  { id: 5, description: "Study Materials", category: "Education", amount: 850, date: "2024-11-27", type: "expense" },
  { id: 6, description: "Lunch Outside", category: "Food", amount: 250, date: "2024-11-27", type: "expense" },
  { id: 7, description: "Mobile Recharge", category: "Technology", amount: 399, date: "2024-11-26", type: "expense" },
  { id: 8, description: "Hostel Fee", category: "Accommodation", amount: 8000, date: "2024-11-25", type: "expense" },
]

export default function ExpenseTrackerPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Month")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [isAddingExpense, setIsAddingExpense] = useState(false)

  const totalExpenses = recentExpenses
    .filter((expense) => expense.type === "expense")
    .reduce((total, expense) => total + expense.amount, 0)

  const totalIncome = recentExpenses
    .filter((expense) => expense.type === "income")
    .reduce((total, expense) => total + expense.amount, 0)

  const totalBudget = expenseCategories.reduce((total, category) => total + category.budget, 0)

  const getCategoryIcon = (categoryName: string) => {
    const category = expenseCategories.find((cat) => cat.name === categoryName)
    return category ? category.icon : ShoppingCart
  }

  const getCategoryColor = (categoryName: string) => {
    const category = expenseCategories.find((cat) => cat.name === categoryName)
    return category ? category.color : "bg-gray-100 text-gray-800"
  }

  const getCategoryExpenses = (categoryName: string) => {
    return recentExpenses
      .filter((expense) => expense.category === categoryName && expense.type === "expense")
      .reduce((total, expense) => total + expense.amount, 0)
  }

  const filteredExpenses =
    selectedCategory === "All Categories"
      ? recentExpenses
      : recentExpenses.filter((expense) => expense.category === selectedCategory)

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
                Expense <span className="text-red-500">Tracker</span>
              </h1>
              <p className="text-gray-600">Monitor your spending and manage your student budget effectively</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹{totalIncome.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Income</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mx-auto mb-3">
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹{totalExpenses.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Expenses</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <Wallet className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₹{(totalIncome - totalExpenses).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Balance</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                    <PieChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹{totalBudget.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Monthly Budget</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Category Budgets */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      Category Budgets
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {expenseCategories.map((category) => {
                      const spent = getCategoryExpenses(category.name)
                      const percentage = Math.round((spent / category.budget) * 100)
                      const Icon = category.icon

                      return (
                        <div key={category.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <span className="text-sm text-gray-600">
                              ₹{spent.toLocaleString()} / ₹{category.budget.toLocaleString()}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                percentage > 100 ? "bg-red-500" : percentage > 80 ? "bg-yellow-500" : "bg-green-500"
                              }`}
                              style={{ width: `${Math.min(percentage, 100)}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {percentage}% used
                            {percentage > 100 && <span className="text-red-500 ml-2">Over budget!</span>}
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => setIsAddingExpense(true)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Expense
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Set Budget
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Transaction History */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Transactions</CardTitle>
                      <div className="flex items-center gap-2">
                        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="This Week">This Week</SelectItem>
                            <SelectItem value="This Month">This Month</SelectItem>
                            <SelectItem value="Last 3 Months">Last 3 Months</SelectItem>
                          </SelectContent>
                        </Select>

                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="All Categories">All Categories</SelectItem>
                            {expenseCategories.map((category) => (
                              <SelectItem key={category.name} value={category.name}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {filteredExpenses.map((expense) => {
                        const Icon = getCategoryIcon(expense.category)
                        const colorClass = getCategoryColor(expense.category)

                        return (
                          <div
                            key={expense.id}
                            className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-sm transition-shadow"
                          >
                            <div className={`p-2 rounded-lg ${colorClass}`}>
                              <Icon className="h-4 w-4" />
                            </div>

                            <div className="flex-1">
                              <div className="font-medium">{expense.description}</div>
                              <div className="text-sm text-gray-500">
                                {expense.category} • {expense.date}
                              </div>
                            </div>

                            <div className="text-right">
                              <div
                                className={`font-semibold ${
                                  expense.type === "income" ? "text-green-600" : "text-red-600"
                                }`}
                              >
                                {expense.type === "income" ? "+" : "-"}₹{expense.amount.toLocaleString()}
                              </div>
                              <Badge
                                variant="outline"
                                className={`text-xs ${expense.type === "income" ? "border-green-200 text-green-700" : "border-red-200 text-red-700"}`}
                              >
                                {expense.type}
                              </Badge>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Summary */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-sm text-gray-600">This Month</div>
                          <div className="font-semibold">₹{totalExpenses.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Daily Average</div>
                          <div className="font-semibold">₹{Math.round(totalExpenses / 30).toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Budget Left</div>
                          <div className="font-semibold text-green-600">
                            ₹{(totalBudget - totalExpenses).toLocaleString()}
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
