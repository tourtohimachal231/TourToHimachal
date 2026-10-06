"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Users, User, Phone, Mail, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fadeInUp } from "@/lib/animation-variants"
import { generateWhatsAppLink } from "@/lib/whatsapp"
import {
  validateName as sharedValidateName,
  validatePhone as sharedValidatePhone,
  validateDate as sharedValidateDate,
  validateNoSpecialCharsText,
} from "@/lib/form-validators"
import { useSettings } from "@/lib/settings-context"
import { TrustPaymentBadge } from "@/components/common/trust-payment-badge"

const HOW_FOUND_OPTIONS = [
  "Google Search",
  "Instagram",
  "Facebook",
  "Friends/Family",
  "Online Ads",
  "Previous Customer",
]

interface PackageBookingFormProps {
  packageName: string
  packagePrice: number
  onSuccess?: () => void
}

// Get today's date in YYYY-MM-DD format for min date attribute
const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function PackageBookingForm({ packageName, packagePrice, onSuccess }: PackageBookingFormProps) {
  const { settings } = useSettings()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    travelers: "",
    message: "",
    howFound: "",
    referralCode: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null)
  const todayDate = getTodayDate()

  const validateName = sharedValidateName
  const validatePhone = sharedValidatePhone
  const validateDate = sharedValidateDate

  // Handle input change with real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // For phone field, only allow numeric input
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '')
      setFormData(prev => ({ ...prev, [name]: numericValue }))

      // Real-time validation if field has been touched
      if (touched[name]) {
        const error = validatePhone(numericValue)
        setErrors(prev => {
          const newErrors = { ...prev }
          if (error) {
            newErrors[name] = error
          } else {
            delete newErrors[name]
          }
          return newErrors
        })
      }
    } else if (name === 'name') {
      // For name field, allow only letters and spaces
      const sanitizedValue = value.replace(/[^A-Za-z\s]/g, '')
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }))

      // Real-time validation if field has been touched
      if (touched[name]) {
        const error = validateName(sanitizedValue)
        setErrors(prev => {
          const newErrors = { ...prev }
          if (error) {
            newErrors[name] = error
          } else {
            delete newErrors[name]
          }
          return newErrors
        })
      }
    } else if (name === 'date') {
      setFormData(prev => ({ ...prev, [name]: value }))

      // Real-time validation if field has been touched
      if (touched[name]) {
        const error = validateDate(value)
        setErrors(prev => {
          const newErrors = { ...prev }
          if (error) {
            newErrors[name] = error
          } else {
            delete newErrors[name]
          }
          return newErrors
        })
      }
    } else if (name === 'message') {
      // Allow only letters, numbers, and spaces
      const sanitizedValue = value.replace(/[^A-Za-z0-9\s]/g, '')
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }))

      const err = validateNoSpecialCharsText(sanitizedValue)
      setErrors(prev => {
        const newErrors = { ...prev }
        if (err) {
          newErrors[name] = err
        } else {
          delete newErrors[name]
        }
        return newErrors
      })
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  // Handle blur event for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))

    let error: string | null = null
    if (name === 'name') {
      error = validateName(value)
    } else if (name === 'phone') {
      error = validatePhone(value)
    } else if (name === 'date') {
      error = validateDate(value)
    }

    setErrors(prev => {
      const newErrors = { ...prev }
      if (error) {
        newErrors[name] = error
      } else {
        delete newErrors[name]
      }
      return newErrors
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name) {
      newErrors.name = "Name is required"
    } else {
      const nameError = validateName(formData.name)
      if (nameError) newErrors.name = nameError
      else if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters"
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else {
      const phoneError = validatePhone(formData.phone)
      if (phoneError) newErrors.phone = phoneError
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required"
    }
    if (!formData.date) {
      newErrors.date = "Preferred date is required"
    } else {
      const dateError = validateDate(formData.date)
      if (dateError) newErrors.date = dateError
    }
    const msgSpecialErr = validateNoSpecialCharsText(formData.message)
    if (msgSpecialErr) newErrors.message = msgSpecialErr
    if (!formData.howFound) newErrors.howFound = "Please tell us how you found us"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "booking@tourtohimachal.in",
          subject: `Package Booking: ${packageName}`,
          message: `Package: ${packageName}\nPrice: ₹${packagePrice.toLocaleString()}\nPreferred Date: ${formData.date}\nTravelers: ${formData.travelers || "Not specified"}\nHow Found: ${formData.howFound}${formData.referralCode ? `\nReferral Code: ${formData.referralCode}` : ""}\n\nAdditional Notes: ${formData.message || "None"}`,
          serviceType: "package",
          honeypot: "",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setReferenceNumber(result.referenceNumber)
        onSuccess?.()

        // Generate WhatsApp link and redirect
        const whatsappLink = generateWhatsAppLink(
          {
            packageName: packageName,
            date: formData.date,
            passengers: Number.parseInt(formData.travelers) || undefined,
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
          },
          settings.whatsapp_number,
        )

        setTimeout(() => {
          window.open(whatsappLink, "_blank")
        }, 1500)
      } else {
        setErrors({ submit: result.message || "Failed to submit. Please try again." })
      }
    } catch (error) {
      setErrors({ submit: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-8 text-center"
      >
        <div className="bg-saffron/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <CheckCircle2 className="text-saffron h-8 w-8" />
        </div>
        <h3 className="text-foreground mb-2 text-xl font-semibold">Booking Request Sent!</h3>
        {referenceNumber && (
          <p className="text-foreground bg-muted mb-4 inline-block rounded-lg px-4 py-2 text-sm font-medium">
            Reference: <span className="text-primary">{referenceNumber}</span>
          </p>
        )}
        <p className="text-muted-foreground mb-4">Redirecting you to WhatsApp to complete your booking...</p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setReferenceNumber(null)
            setFormData({
              name: "",
              phone: "",
              email: "",
              date: "",
              travelers: "",
              message: "",
              howFound: "",
              referralCode: "",
            })
          }}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="relative z-10 space-y-4 rounded-2xl bg-card/95 p-4 shadow-xl backdrop-blur-sm sm:p-5"
    >
      <TrustPaymentBadge type="package" className="mb-3" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center justify-between">
            Full Name *
            <span className="text-muted-foreground text-xs">{formData.name.length}/30</span>
          </Label>
          <div className="relative">
            <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              maxLength={30}
              className={`pl-10 transition-all duration-200 ${errors.name ? 'border-destructive focus:ring-destructive/20' : 'focus:ring-primary/20'}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {/* Character count indicator */}
            <AnimatePresence>
              {formData.name.length > 25 && formData.name.length <= 30 && !errors.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <span className="text-muted-foreground text-xs">{30 - formData.name.length} left</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                id="name-error"
                className="text-destructive flex items-center gap-1 text-sm"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center justify-between">
            Phone *
            <span className="text-muted-foreground text-xs">{formData.phone.length}/10</span>
          </Label>
          <div className="relative">
            <Phone className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10-digit number"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              className={`pl-10 transition-all duration-200 ${errors.phone ? 'border-destructive focus:ring-destructive/20' : 'focus:ring-primary/20'}`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {/* Phone validation indicator */}
            <AnimatePresence>
              {formData.phone.length === 10 && !errors.phone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                id="phone-error"
                className="text-destructive flex items-center gap-1 text-sm"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <div className="relative">
          <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-10"
            aria-invalid={!!errors.email}
          />
        </div>
        {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date *</Label>
          <div className="relative">
            <Calendar className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="date"
              name="date"
              type="date"
              min={todayDate}
              value={formData.date}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`pl-10 transition-all duration-200 ${errors.date ? 'border-destructive focus:ring-destructive/20' : 'focus:ring-primary/20'}`}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
          </div>
          <AnimatePresence>
            {errors.date && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                id="date-error"
                className="text-destructive flex items-center gap-1 text-sm"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.date}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelers">Number of Travelers</Label>
          <div className="relative">
            <Users className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="travelers"
              type="number"
              min="1"
              max="50"
              placeholder="e.g., 4"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="howFound">How did you find us? *</Label>
          <Select
            value={formData.howFound}
            onValueChange={(value) => setFormData({ ...formData, howFound: value })}
          >
            <SelectTrigger id="howFound" aria-invalid={!!errors.howFound}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {HOW_FOUND_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.howFound && (
            <p className="text-destructive flex items-center gap-1 text-sm">
              <AlertCircle className="h-3 w-3" />
              {errors.howFound}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="referralCode">Referral Code <span className="text-muted-foreground text-xs">(Optional)</span></Label>
          <div className="relative">
            <Tag className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="referralCode"
              placeholder="Enter referral code if any"
              value={formData.referralCode}
              onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Special Requirements</Label>
        <div className="relative">
          <MessageSquare className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
          <Textarea
            id="message"
            placeholder="Any special requirements or questions..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value.replace(/[^A-Za-z0-9\s]/g, '') })}
            className="min-h-20 pl-10"
          />
        </div>
      </div>

      {errors.submit && <p className="text-destructive text-center text-sm">{errors.submit}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-saffron hover:bg-saffron/90 w-full gap-2 text-white"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Send Booking Request
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </motion.form>
  )
}
