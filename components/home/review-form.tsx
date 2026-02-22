"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Star, Loader2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"


const LETTERS_ONLY = /^[A-Za-z\s]*$/
const SAFE_TEXT = /^[A-Za-z0-9\s]*$/

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .refine((v) => LETTERS_ONLY.test(v), {
      message: "Only letters and spaces are allowed — no special characters, symbols, or accented letters",
    }),
  phone: z.string().min(10, "Please enter a valid phone number").regex(/^\d+$/, "Phone must contain only digits"),
  city: z
    .string()
    .min(2, "City name is required")
    .refine((v) => LETTERS_ONLY.test(v), {
      message: "Only letters and spaces are allowed — no special characters, symbols, or accented letters",
    }),
  rating: z.number().min(1, "Please select a rating").max(5),
  review_text: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .refine((v) => SAFE_TEXT.test(v), {
      message: "Special characters, accented letters, and symbols are not allowed",
    }),
})

interface ReviewFormProps {
  onSuccess?: () => void
}

export function ReviewForm({ onSuccess }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      rating: 5,
      review_text: "",
    },
  })


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    const supabase = createClient()

    try {
      const { error } = await supabase.from("reviews").insert([
        {
          name: values.name,
          phone: values.phone,
          city: values.city,
          rating: values.rating,
          review_text: values.review_text,
          image_url: null,
          is_approved: true,
        },
      ])

      if (error) throw error

      toast.success("Review submitted successfully!", {
        description: "Your review is pending approval locally.",
      })

      form.reset()
      onSuccess?.()
    } catch (error) {
      console.error("Error submitting review:", error)
      toast.error("Failed to submit review", {
        description: "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6 py-4">
      <DialogHeader>
        <DialogTitle>Share Your Experience</DialogTitle>
        <DialogDescription>
          We&apos;d love to hear about your trip! Your review helps others plan their perfect getaway.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      {...field}
                      className="text-base sm:text-sm"
                      onChange={(e) => {
                        // Strip non-letter chars in real time
                        field.onChange(e.target.value.replace(/[^A-Za-z\s]/g, ""))
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contact number"
                      {...field}
                      className="text-base sm:text-sm"
                      inputMode="numeric"
                      onChange={(e) => {
                        // Strip non-digit chars in real time
                        field.onChange(e.target.value.replace(/\D/g, ""))
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Where are you from?"
                    {...field}
                    className="text-base sm:text-sm"
                    onChange={(e) => {
                      // Strip non-letter chars in real time
                      field.onChange(e.target.value.replace(/[^A-Za-z\s]/g, ""))
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />



          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating *</FormLabel>
                <FormControl>
                  <div className="flex justify-center gap-2 py-2 sm:justify-start sm:gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => field.onChange(star)}
                      >
                        <Star
                          className={`h-8 w-8 sm:h-8 sm:w-8 ${star <= (hoverRating || field.value)
                            ? "fill-golden-yellow text-golden-yellow"
                            : "text-muted-foreground/30"
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="review_text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Review *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your trip..."
                    className="min-h-[100px] resize-none"
                    {...field}
                    onChange={(e) => {
                      // Strip non-letter/number chars in real time
                      field.onChange(e.target.value.replace(/[^A-Za-z0-9\s]/g, ""))
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-saffron hover:bg-saffron/90 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Review"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
