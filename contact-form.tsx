"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, MessageSquare, Clock, Target, CheckCircle, MessageCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    fitnessGoal: "",
    experience: "",
    newsletter: false,
  })

  const [focusedField, setFocusedField] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateWhatsAppMessage = (data: typeof formData) => {
    const fitnessGoalLabels: { [key: string]: string } = {
      "weight-loss": "Weight Loss",
      "muscle-gain": "Muscle Gain",
      "general-fitness": "General Fitness",
      bodybuilding: "Bodybuilding",
    }

    const experienceLabels: { [key: string]: string } = {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
    }

    const timeSlotLabels: { [key: string]: string } = {
      morning: "6:00 AM - 10:00 AM",
      afternoon: "10:00 AM - 4:00 PM",
      evening: "4:00 PM - 8:00 PM",
      night: "8:00 PM - 10:30 PM",
    }

    let message = "🏋️ *IRON KING FITNESS - Free Consultation Request*\n\n"

    if (data.name) {
      message += `👤 *Name:* ${data.name}\n`
    }

    if (data.email) {
      message += `📧 *Email:* ${data.email}\n`
    }

    if (data.phone) {
      message += `📱 *Phone:* ${data.phone}\n`
    }

    if (data.fitnessGoal) {
      message += `🎯 *Fitness Goal:* ${fitnessGoalLabels[data.fitnessGoal]}\n`
    }

    if (data.experience) {
      message += `💪 *Experience Level:* ${experienceLabels[data.experience]}\n`
    }

    if (data.preferredTime) {
      message += `⏰ *Preferred Time:* ${timeSlotLabels[data.preferredTime]}\n`
    }

    if (data.message) {
      message += `💬 *Message:* ${data.message}\n`
    }

    message += `\n📍 *Location:* Nehru Nagar, Kurla East\n`
    message += `🔥 Ready to start my fitness journey with IRON KING FITNESS!`

    return message
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate brief processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate WhatsApp message with user data
    const whatsappMessage = generateWhatsAppMessage(formData)

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919152074475?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        fitnessGoal: "",
        experience: "",
        newsletter: false,
      })
    }, 3000)
  }

  const fitnessGoals = [
    { id: "weight-loss", label: "Weight Loss", icon: Target },
    { id: "muscle-gain", label: "Muscle Gain", icon: Target },
    { id: "general-fitness", label: "General Fitness", icon: Target },
    { id: "bodybuilding", label: "Bodybuilding", icon: Target },
  ]

  const experienceLevels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ]

  const timeSlots = [
    { id: "morning", label: "6:00 AM - 10:00 AM" },
    { id: "afternoon", label: "10:00 AM - 4:00 PM" },
    { id: "evening", label: "4:00 PM - 8:00 PM" },
    { id: "night", label: "8:00 PM - 10:30 PM" },
  ]

  if (isSubmitted) {
    return (
      <Card className="bg-gray-900 border-green-500/50 max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="animate-bounce mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Opened!</h3>
          <p className="text-gray-300">Your consultation request has been sent via WhatsApp. We'll respond shortly!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900 border-red-500/20 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-red-500">GET YOUR FREE CONSULTATION</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative group">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === "name" ? "opacity-100" : ""}`}
            ></div>
            <div className="relative">
              <User
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${focusedField === "name" ? "text-red-500 scale-110" : "text-gray-400"}`}
              />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-12 pr-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                  focusedField === "name"
                    ? "border-red-500 shadow-lg shadow-red-500/20 bg-black/70"
                    : "border-gray-600 hover:border-gray-500"
                }`}
                required
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 ${
                  focusedField === "name" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === "email" ? "opacity-100" : ""}`}
            ></div>
            <div className="relative">
              <Mail
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${focusedField === "email" ? "text-red-500 scale-110" : "text-gray-400"}`}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-12 pr-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                  focusedField === "email"
                    ? "border-red-500 shadow-lg shadow-red-500/20 bg-black/70"
                    : "border-gray-600 hover:border-gray-500"
                }`}
                required
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 ${
                  focusedField === "email" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Phone Input */}
          <div className="relative group">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === "phone" ? "opacity-100" : ""}`}
            ></div>
            <div className="relative">
              <Phone
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${focusedField === "phone" ? "text-red-500 scale-110" : "text-gray-400"}`}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-12 pr-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                  focusedField === "phone"
                    ? "border-red-500 shadow-lg shadow-red-500/20 bg-black/70"
                    : "border-gray-600 hover:border-gray-500"
                }`}
                required
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 ${
                  focusedField === "phone" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Fitness Goals */}
          <div className="space-y-3">
            <label className="block text-white font-semibold mb-3">Fitness Goals</label>
            <div className="grid grid-cols-2 gap-3">
              {fitnessGoals.map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => handleInputChange("fitnessGoal", goal.id)}
                  className={`relative p-3 rounded-lg border transition-all duration-300 group overflow-hidden ${
                    formData.fitnessGoal === goal.id
                      ? "border-red-500 bg-red-500/20 text-red-400"
                      : "border-gray-600 bg-black/30 text-gray-300 hover:border-gray-500 hover:bg-black/50"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      formData.fitnessGoal === goal.id ? "scale-x-100" : ""
                    }`}
                  ></div>
                  <div className="relative flex items-center space-x-2">
                    <goal.icon
                      className={`w-4 h-4 transition-all duration-300 ${
                        formData.fitnessGoal === goal.id ? "text-red-500 scale-110" : "group-hover:scale-105"
                      }`}
                    />
                    <span className="text-sm font-medium">{goal.label}</span>
                  </div>
                  {formData.fitnessGoal === goal.id && (
                    <div className="absolute top-1 right-1">
                      <CheckCircle className="w-4 h-4 text-red-500 animate-bounce" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-3">
            <label className="block text-white font-semibold mb-3">Experience Level</label>
            <div className="flex space-x-2">
              {experienceLevels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => handleInputChange("experience", level.id)}
                  className={`relative flex-1 p-3 rounded-lg border transition-all duration-300 group overflow-hidden ${
                    formData.experience === level.id
                      ? "border-red-500 bg-red-500/20 text-red-400 transform scale-105"
                      : "border-gray-600 bg-black/30 text-gray-300 hover:border-gray-500 hover:bg-black/50 hover:scale-102"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                      formData.experience === level.id ? "scale-x-100" : ""
                    }`}
                  ></div>
                  <span className="relative text-sm font-medium">{level.label}</span>
                  {formData.experience === level.id && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Time */}
          <div className="space-y-3">
            <label className="block text-white font-semibold mb-3">
              <Clock className="inline w-4 h-4 mr-2" />
              Preferred Training Time
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => handleInputChange("preferredTime", slot.id)}
                  className={`relative p-3 rounded-lg border transition-all duration-300 group overflow-hidden ${
                    formData.preferredTime === slot.id
                      ? "border-red-500 bg-red-500/20 text-red-400"
                      : "border-gray-600 bg-black/30 text-gray-300 hover:border-gray-500 hover:bg-black/50"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom ${
                      formData.preferredTime === slot.id ? "scale-y-100" : ""
                    }`}
                  ></div>
                  <span className="relative text-sm font-medium">{slot.label}</span>
                  {formData.preferredTime === slot.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === "message" ? "opacity-100" : ""}`}
            ></div>
            <div className="relative">
              <MessageSquare
                className={`absolute left-3 top-4 w-5 h-5 transition-all duration-300 ${focusedField === "message" ? "text-red-500 scale-110" : "text-gray-400"}`}
              />
              <textarea
                placeholder="Tell us about your fitness goals..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
                rows={4}
                className={`w-full pl-12 pr-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${
                  focusedField === "message"
                    ? "border-red-500 shadow-lg shadow-red-500/20 bg-black/70"
                    : "border-gray-600 hover:border-gray-500"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 ${
                  focusedField === "message" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Newsletter Toggle */}
          <div className="flex items-center space-x-3 group">
            <button
              type="button"
              onClick={() => handleInputChange("newsletter", !formData.newsletter)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${
                formData.newsletter ? "bg-red-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 transform ${
                  formData.newsletter ? "translate-x-6" : "translate-x-0.5"
                }`}
              >
                {formData.newsletter && (
                  <CheckCircle className="w-3 h-3 text-red-500 absolute top-1 left-1 animate-bounce" />
                )}
              </div>
              <div
                className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${
                  formData.newsletter ? "bg-red-400 opacity-20 animate-pulse" : ""
                }`}
              ></div>
            </button>
            <label className="text-gray-300 cursor-pointer group-hover:text-white transition-colors duration-300">
              Subscribe to our newsletter for fitness tips
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Get Free Consultation via WhatsApp
                </>
              )}
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
