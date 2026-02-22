"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, CheckCircle2, AlertCircle, Tag } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fadeInUp } from "@/lib/animation-variants"
import { useSettings } from "@/lib/settings-context"
import { submitContactForm, type ContactFormData } from "@/lib/contact"
import {
  validateName as sharedValidateName,
  validatePhone as sharedValidatePhone,
  validateNoSpecialCharsText,
} from "@/lib/form-validators"

const HOW_FOUND_OPTIONS = [
  "Google Search",
  "Instagram",
  "Facebook",
  "Friends/Family",
  "Online Ads",
  "Previous Customer",
]

const serviceTypes = [
  { value: "package", label: "Tour Package Inquiry" },
  { value: "taxi", label: "Taxi Booking" },
  { value: "enquiry", label: "General Enquiry" },
]

interface FormErrors {
  name?: string[]
  phone?: string[]
  email?: string[]
  subject?: string[]
  message?: string[]
  serviceType?: string[]
  howFound?: string[]
}

// Get today's date in YYYY-MM-DD format for min date attribute
const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function ContactForm() {
  const { settings } = useSettings()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  const todayDate = getTodayDate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    message: "",
    honeypot: "", // Spam protection field
    howFound: "",
    referralCode: "",
  })

  // Wrap shared validators to match local string[] | undefined return type
  const validateName = (value: string): string[] | undefined => {
    const err = sharedValidateName(value)
    if (!err && value.length > 0 && value.length < 2) return ["Name must be at least 2 characters"]
    return err ? [err] : undefined
  }

  const validatePhone = (value: string): string[] | undefined => {
    const err = sharedValidatePhone(value)
    return err ? [err] : undefined
  }

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case "name":
        if (value.length < 2) {
          newErrors.name = ["Name must be at least 2 characters"]
        } else {
          const nameError = validateName(value)
          if (nameError) {
            newErrors.name = nameError
          } else {
            delete newErrors.name
          }
        }
        break
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = ["Please enter a valid email address"]
        } else {
          delete newErrors.email
        }
        break
      case "phone":
        if (value.length === 0) {
          newErrors.phone = ["Phone number is required"]
        } else {
          const phoneError = validatePhone(value)
          if (phoneError) {
            newErrors.phone = phoneError
          } else {
            delete newErrors.phone
          }
        }
        break
      case "subject": {
        const subjectSpecialErr = validateNoSpecialCharsText(value)
        if (subjectSpecialErr) {
          newErrors.subject = [subjectSpecialErr]
        } else {
          delete newErrors.subject
        }
        break
      }
      case "message": {
        const msgSpecialErr = validateNoSpecialCharsText(value)
        if (msgSpecialErr) {
          newErrors.message = [msgSpecialErr]
        } else if (value.length < 10) {
          newErrors.message = ["Message must be at least 10 characters"]
        } else {
          delete newErrors.message
        }
        break
      }
    }

    setErrors(newErrors)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // For phone field, only allow numeric input
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '')
      setFormData((prev) => ({ ...prev, [name]: numericValue }))

      // Real-time validation
      if (errors[name as keyof FormErrors]) {
        validateField(name, numericValue)
      }
    } else if (name === 'name') {
      // Allow only letters and spaces
      const sanitizedValue = value.replace(/[^A-Za-z\s]/g, '')
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }))

      if (errors[name as keyof FormErrors]) {
        validateField(name, sanitizedValue)
      }
    } else if (name === 'subject' || name === 'message') {
      // Allow only letters, numbers, and spaces
      const sanitizedValue = value.replace(/[^A-Za-z0-9\s]/g, '')
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }))

      validateField(name, sanitizedValue)
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))

      // Real-time validation on blur
      if (errors[name as keyof FormErrors]) {
        validateField(name, value)
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    validateField(name, value)
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    // Validate all fields
    const newErrors: FormErrors = {}
    if (formData.name.length < 2) {
      newErrors.name = ["Name must be at least 2 characters"]
    } else {
      const nameError = validateName(formData.name)
      if (nameError) newErrors.name = nameError
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = ["Please enter a valid email address"]
    if (formData.phone.length === 0) {
      newErrors.phone = ["Phone number is required"]
    } else {
      const phoneError = validatePhone(formData.phone)
      if (phoneError) newErrors.phone = phoneError
    }
    const subjectSpecialErr = validateNoSpecialCharsText(formData.subject)
    if (subjectSpecialErr) newErrors.subject = [subjectSpecialErr]
    const msgSpecialErr = validateNoSpecialCharsText(formData.message)
    if (msgSpecialErr) {
      newErrors.message = [msgSpecialErr]
    } else if (formData.message.length < 10) {
      newErrors.message = ["Message must be at least 10 characters"]
    }
    if (!formData.serviceType) newErrors.serviceType = ["Please select a service type"]
    if (!formData.howFound) newErrors.howFound = ["Please tell us how you found us"]

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    const submitData: ContactFormData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject || undefined,
      message: `${formData.message}\n\nHow Found: ${formData.howFound}${formData.referralCode ? `\nReferral Code: ${formData.referralCode}` : ""}`,
      serviceType: formData.serviceType as "package" | "taxi" | "enquiry",
      honeypot: formData.honeypot,
      howFound: formData.howFound || undefined,
      referralCode: formData.referralCode || undefined,
    }

    const result = await submitContactForm(submitData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSubmitted(true)
      setReferenceNumber(result.referenceNumber || null)
    } else {
      setSubmitError(result.message)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-saffron/10 border-saffron/30 rounded-2xl border p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="bg-saffron/20 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
        >
          <CheckCircle2 className="text-saffron h-10 w-10" />
        </motion.div>
        <h3 className="text-foreground mb-2 font-serif text-2xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground mb-4">Your inquiry has been submitted successfully.</p>
        {referenceNumber && (
          <p className="text-foreground bg-muted mb-6 inline-block rounded-lg px-4 py-2 text-sm font-medium">
            Reference: <span className="text-primary">{referenceNumber}</span>
          </p>
        )}
        <p className="text-muted-foreground mb-6 text-sm">
          We typically respond within 12 hours. For urgent inquiries, chat with us directly.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-saffron text-white hover:bg-saffron/90">
            <a
              href={`https://wa.me/${(settings.whatsapp_number || "").replace(/[^0-9]/g, "")}?text=Hi!%20I%20just%20submitted%20an%20inquiry%20and%20would%20like%20to%20chat.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false)
              setReferenceNumber(null)
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                serviceType: "",
                message: "",
                honeypot: "",
                howFound: "",
                referralCode: "",
              })
            }}
          >
            Send Another Inquiry
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="space-y-6 min-w-0 w-full"
    >
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData((prev) => ({ ...prev, honeypot: e.target.value }))}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-6 md:grid-cols-2 min-w-0">
        <div className="space-y-2 min-w-0">
          <Label htmlFor="name" className="flex items-center justify-between">
            Full Name *
            <span className="text-muted-foreground text-xs">{formData.name.length}/30</span>
          </Label>
          <div className="relative">
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your full name"
              required
              maxLength={30}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2 pr-12 ${errors.name ? "border-destructive" : ""
                }`}
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
                {errors.name[0]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="space-y-2 min-w-0">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="your@email.com"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2 ${errors.email ? "border-destructive" : ""
              }`}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                id="email-error"
                className="text-destructive flex items-center gap-1 text-sm"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.email[0]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 min-w-0">
        <div className="space-y-2 min-w-0">
          <Label htmlFor="phone" className="flex items-center justify-between">
            Phone / WhatsApp *
            <span className="text-muted-foreground text-xs">{formData.phone.length}/10</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="10-digit number"
              required
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2 pr-12 ${errors.phone ? "border-destructive" : ""
                }`}
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
                {errors.phone[0]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="space-y-2 min-w-0">
          <Label htmlFor="serviceType">Service Type *</Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
            required
          >
            <SelectTrigger
              id="serviceType"
              className={`focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2 ${errors.serviceType ? "border-destructive" : ""
                }`}
              aria-invalid={!!errors.serviceType}
            >
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence>
            {errors.serviceType && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-destructive flex items-center gap-1 text-sm"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.serviceType[0]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* How Found & Referral Code */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 min-w-0">
        <div className="space-y-2">
          <Label htmlFor="howFound">How did you find us? *</Label>
          <Select
            value={formData.howFound}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, howFound: value }))}
          >
            <SelectTrigger
              id="howFound"
              className={`focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2 ${errors.howFound ? "border-destructive" : ""}`}
              aria-invalid={!!errors.howFound}
            >
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {HOW_FOUND_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence>
            {errors.howFound && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-destructive flex items-center gap-1 text-sm"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.howFound[0]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referralCode">Referral Code <span className="text-muted-foreground text-xs">(Optional)</span></Label>
          <div className="relative">
            <Tag className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="referralCode"
              placeholder="Enter referral code if any"
              value={formData.referralCode}
              onChange={(e) => setFormData((prev) => ({ ...prev, referralCode: e.target.value }))}
              className="pl-10 focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2 min-w-0">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Brief subject of your inquiry"
          className="focus:ring-primary/20 transition-all duration-200 focus:shadow-lg focus:ring-2"
        />
      </div>

      <div className="space-y-2 min-w-0">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Tell us about your travel plans, preferred destinations, special requirements..."
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`focus:ring-primary/20 resize-none transition-all duration-200 focus:shadow-lg focus:ring-2 ${errors.message ? "border-destructive" : ""
            }`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              id="message-error"
              className="text-destructive flex items-center gap-1 text-sm"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.message[0]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>


      {/* Submit Error */}
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-destructive/10 border-destructive/30 text-destructive flex items-center gap-3 rounded-lg border p-4"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>{submitError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        className="bg-saffron hover:bg-saffron/90 w-full text-white transition-all duration-200"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Inquiry
          </>
        )}
      </Button>

      {/* Status message for screen readers */}
      <div aria-live="polite" className="sr-only">
        {isSubmitting && "Submitting your inquiry..."}
        {isSubmitted && `Success! Your reference number is ${referenceNumber}`}
      </div>
    </motion.form>
  )
}
