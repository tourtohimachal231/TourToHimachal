"use client"

import Link from "next/link"
import Image from "next/image"
import { ClientOnly } from "@/components/ui/client-only"
import { Phone, Mail, MapPin, Facebook, Instagram, Heart, ArrowRight } from "lucide-react"
import { useSettings } from "@/lib/settings-context"

const quickLinks = [
  { href: "/packages", label: "Tour Packages" },
  { href: "/taxi", label: "Taxi Service" },
  { href: "/about", label: "About Us" },
  { href: "/diaries", label: "Travel Diaries" },
  { href: "/contact", label: "Contact" },
]

// Updated destinations for footer with corresponding package slugs
const destinations = [
  { name: "Mata Chintpurni - VIP", slug: "mata-chintpurni-mandir-vip-express" },
  { name: "Divya Mandir Yatra", slug: "divya-mandir-yatra-jwala-ji-baglamukhi-chintpurni" },
  { name: "4 Mahadev, 1 Shaktipeeth", slug: "4-mahadev-darshan-1-shakti-peeth-chintpurni-spiritual-circuit" },
  { name: "4 Shaktipeeth, 1 Mahadev", slug: "4-shakti-peeth-1-siddh-peeth-darshan-chintpurni-circuit" },
]

export function Footer() {
  const { settings } = useSettings()

  const socialLinks = [
    {
      icon: Facebook,
      href: settings.facebook_url || "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-saffron",
    },
    {
      icon: Instagram,
      href: settings.instagram_url || "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
    },

  ]

  const defaultSocialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-saffron",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
    },

  ]

  const contactPhone = settings.contact_phone || ""
  const contactEmail = settings.contact_email || "info@tourtohimachal.com"
  const address = settings.address || "123 Mall Road, Shimla, Himachal Pradesh 171001"

  return (
    <footer className="relative safe-area-bottom">
      {/* Top gradient border */}
      <div className="from-saffron via-golden-yellow to-saffron h-1 bg-gradient-to-r" style={{ WebkitBackgroundClip: 'border-box' }} />

      {/* Main footer content */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto px-4 py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="group mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                <div className="relative h-16 w-56 rounded-xl p-0 transition-transform group-hover:scale-105 sm:h-20 sm:w-72">
                  <Image
                    src="/Images/logow.webp"
                    alt="TourToHimachal Logo"
                    fill
                    className="object-contain object-left translate-x-16 lg:translate-x-24 scale-x-[1.5] scale-y-[1.2]"
                  />
                </div>

              </Link>
              <p className="mb-3 text-sm leading-relaxed text-slate-400 sm:mb-4 md:text-base">
                {settings.about_text ||
                  "Your trusted partner for exploring the majestic Himachal Pradesh. From spiritual journeys to adventure trips, we make your travel dreams come true."}
              </p>

              {/* Social links with colors */}
              <ClientOnly
                fallback={
                  <div className="flex gap-2 sm:gap-3">
                    {defaultSocialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 sm:h-10 sm:w-10 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    ))}
                  </div>
                }
              >
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 sm:h-10 sm:w-10 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  ))}
                </div>
              </ClientOnly>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold sm:mb-4 md:text-xl">
                <span className="from-saffron to-golden-yellow h-1 w-6 rounded-full bg-gradient-to-r sm:w-8" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-saffron group flex items-center gap-2 text-sm text-slate-400 transition-colors md:text-base"
                    >
                      <ArrowRight className="-ml-5 h-3 w-3 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold sm:mb-4 md:text-xl">
                <span className="from-saffron to-sunset-orange h-1 w-6 rounded-full bg-gradient-to-r sm:w-8" />
                Top Destinations
              </h3>
              <ul className="space-y-2">
                {destinations.map((destination) => (
                  <li key={destination.slug}>
                    <Link
                      href={`/packages/${destination.slug}`}
                      className="hover:text-saffron group flex items-center gap-2 text-sm text-slate-400 transition-colors md:text-base"
                    >
                      <MapPin className="text-saffron h-3 w-3" />
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold sm:mb-4 md:text-xl">
                <span className="from-sunset-orange to-temple-red h-1 w-6 rounded-full bg-gradient-to-r sm:w-8" />
                Contact Us
              </h3>
              <ClientOnly
                fallback={
                  <ul className="space-y-3">
                    <li className="group flex items-center gap-2 sm:gap-3 sm:items-start">
                      <div className="bg-saffron/10 group-hover:bg-saffron/20 shrink-0 rounded-lg p-1.5 transition-colors sm:p-2">
                        <MapPin className="text-saffron h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <span className="text-sm text-slate-400 md:text-base">
                        Near Temple Complex, Chintpurni, HP 177110
                      </span>
                    </li>
                    <li className="group flex items-center gap-2 sm:gap-3">
                      <div className="bg-saffron/10 group-hover:bg-saffron/20 shrink-0 rounded-lg p-1.5 transition-colors sm:p-2">
                        <Mail className="text-saffron h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <a
                        href="mailto:info@tourtohimachal.com"
                        className="hover:text-saffron text-sm break-all text-slate-400 transition-colors md:text-base"
                      >
                        info@tourtohimachal.com
                      </a>
                    </li>
                  </ul>
                }
              >
                <ul className="space-y-3 sm:space-y-4">
                  <li className="group flex items-center gap-2 sm:gap-3 sm:items-start">
                    <div className="bg-saffron/10 group-hover:bg-saffron/20 shrink-0 rounded-lg p-1.5 transition-colors sm:p-2">
                      <MapPin className="text-saffron h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-sm text-slate-400 md:text-base">{address}</span>
                  </li>
                  {contactPhone && (
                    <li className="group flex items-center gap-2 sm:gap-3">
                      <div className="bg-saffron/10 group-hover:bg-saffron/20 shrink-0 rounded-lg p-1.5 transition-colors sm:p-2">
                        <Phone className="text-saffron h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <a
                        href={`tel:${contactPhone.replace(/\s/g, "")}`}
                        className="hover:text-saffron text-sm text-slate-400 transition-colors md:text-base"
                      >
                        {contactPhone}
                      </a>
                    </li>
                  )}
                  <li className="group flex items-center gap-2 sm:gap-3">
                    <div className="bg-saffron/10 group-hover:bg-saffron/20 shrink-0 rounded-lg p-1.5 transition-colors sm:p-2">
                      <Mail className="text-saffron h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="hover:text-saffron text-sm break-all text-slate-400 transition-colors md:text-base"
                    >
                      {contactEmail}
                    </a>
                  </li>
                </ul>
              </ClientOnly>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
              <p className="flex items-center gap-1 text-sm text-slate-300 md:text-base">
                © 2026 TourToHimachal. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6">
                <Link
                  href="/privacy"
                  className="hover:text-saffron text-sm text-slate-300 transition-colors md:text-base"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-saffron text-sm text-slate-300 transition-colors md:text-base"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
