import type { Metadata } from "next"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { StaticHero } from "@/components/ui/static-hero"
import { ShieldCheck, Lock, Eye, Database, Globe, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | TourToHimachal - Tours, Packages & Taxi Services",
  description:
    "Read TourToHimachal's privacy policy to understand how we collect, use, and protect your personal information when you book tours, packages, or taxi services in Himachal Pradesh.",
  keywords: "privacy policy tourtohimachal, data protection, personal information, himachal travel privacy",
  openGraph: {
    title: "Privacy Policy | TourToHimachal",
    description: "Your privacy matters to us. Learn how we protect your personal information.",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pb-8 overflow-x-hidden safe-area-bottom">
        {/* Hero Section */}
        <StaticHero
          image="Images/diary.png"
          badge="Your Privacy Matters"
          title="Privacy Policy"
          subtitle="At TourToHimachal, we value your trust and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you use our travel services."
        />


        {/* Main Content */}
        <section className="py-6 md:py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Introduction */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TourToHimachal ("we," "our," or "us") is a Himachal Pradesh-based travel company providing tour packages,
                  taxi services, and travel planning services. This Privacy Policy outlines our practices regarding the
                  collection, use, and disclosure of your personal information when you use our website, make bookings,
                  or communicate with us.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  By using TourToHimachal services, you agree to the collection and use of information in accordance with
                  this policy. We are committed to ensuring that your privacy is protected and that any personal
                  information you provide is handled securely and responsibly.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card border-border rounded-2xl border p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-3">Personal Information</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      When you book a tour, taxi service, or contact us, we may collect:
                    </p>
                    <ul className="text-muted-foreground text-sm mt-3 space-y-2 list-disc list-inside">
                      <li>Full name and contact details (phone number, email address)</li>
                      <li>Travel dates, destinations, and preferences</li>
                      <li>Number of travelers and their details (for group bookings)</li>
                      <li>Payment information (processed securely through payment gateways)</li>
                      <li>Special requirements (dietary restrictions, accessibility needs, etc.)</li>
                    </ul>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-3">Travel-Related Information</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To provide you with the best travel experience, we collect:
                    </p>
                    <ul className="text-muted-foreground text-sm mt-3 space-y-2 list-disc list-inside">
                      <li>Itinerary preferences and travel history</li>
                      <li>Accommodation preferences and requirements</li>
                      <li>Transportation needs (taxi pickup/drop locations)</li>
                      <li>Activity and sightseeing interests</li>
                    </ul>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-3">Technical Information</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We automatically collect certain technical data when you visit our website:
                    </p>
                    <ul className="text-muted-foreground text-sm mt-3 space-y-2 list-disc list-inside">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website (if you came from another site)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">How We Use Your Information</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We use your personal information to:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-3 list-disc list-inside">
                    <li><strong>Process bookings:</strong> Confirm and manage your tour packages, taxi services, and travel arrangements</li>
                    <li><strong>Provide services:</strong> Arrange accommodations, transportation, and activities as per your booking</li>
                    <li><strong>Communicate:</strong> Send booking confirmations, travel updates, and respond to your inquiries</li>
                    <li><strong>Improve services:</strong> Analyze usage patterns to enhance our travel offerings and customer experience</li>
                    <li><strong>Send marketing:</strong> Share travel deals and offers (only with your consent)</li>
                    <li><strong>Ensure safety:</strong> Contact you in case of emergencies or travel disruptions</li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Data Sharing & Disclosure</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We respect your privacy and do not sell your personal information. We may share your data only in the following circumstances:
                </p>

                <div className="space-y-4">
                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Service Providers</h3>
                    <p className="text-muted-foreground text-sm">
                      We share necessary information with trusted partners to fulfill your bookings — hotels, taxi operators, activity providers, and payment processors. These partners are contractually bound to protect your data.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground text-sm">
                      We may disclose information when required by law, to protect our rights, prevent fraud, or comply with legal proceedings.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Business Transfers</h3>
                    <p className="text-muted-foreground text-sm">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Data Security</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-3 list-disc list-inside">
                    <li>Secure SSL encryption for all data transmissions</li>
                    <li>Secure payment processing through trusted payment gateways</li>
                    <li>Restricted access to personal data within our organization</li>
                    <li>Regular security reviews and updates</li>
                    <li>Secure storage of booking and customer information</li>
                  </ul>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Your Rights</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Access</h3>
                    <p className="text-muted-foreground text-sm">
                      Request a copy of the personal data we hold about you.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Correction</h3>
                    <p className="text-muted-foreground text-sm">
                      Request correction of inaccurate or incomplete data.
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Deletion</h3>
                    <p className="text-muted-foreground text-sm">
                      Request deletion of your personal data (subject to legal obligations).
                    </p>
                  </div>

                  <div className="bg-card border-border rounded-2xl border p-5">
                    <h3 className="text-foreground font-semibold mb-2">Opt-out</h3>
                    <p className="text-muted-foreground text-sm">
                      Unsubscribe from marketing communications at any time.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-saffron/10 border border-saffron/20 rounded-2xl p-5">
                  <h3 className="text-foreground font-semibold mb-2">How to Exercise Your Rights</h3>
                  <p className="text-muted-foreground text-sm">
                    To exercise any of these rights, please contact us at{" "}
                    <a href="mailto:tourtohimachal231@gmail.com" className="text-saffron hover:underline">
                      tourtohimachal231@gmail.com
                    </a>
                    {" "}or call us directly. We will respond to your request within 30 days.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Cookies & Tracking</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We use cookies and similar technologies to improve your browsing experience:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                    <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
                    <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    You can manage cookie preferences through your browser settings. Disabling cookies may affect some features of our website.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-saffron/10 text-saffron rounded-xl p-2">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground font-serif text-2xl font-bold sm:text-3xl">Contact Us</h2>
                </div>
                
                <div className="bg-card border-border rounded-2xl border p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please reach out to us:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-foreground font-semibold text-sm">Email:</p>
                      <a href="mailto:tourtohimachal231@gmail.com" className="text-saffron text-sm hover:underline">
                        tourtohimachal231@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Phone:</p>
                      <a href="tel:+918628839955" className="text-saffron text-sm hover:underline">
                        +91 8628839955
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Address:</p>
                      <p className="text-muted-foreground text-sm">
                        TourToHimachal<br />
                        Chintpurni, Himachal Pradesh<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="bg-muted/30 border-border rounded-2xl border p-6">
                <h2 className="text-foreground font-serif text-xl font-bold mb-3">Updates to This Policy</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by
                  posting the new policy on our website and updating the "Last Updated" date. We encourage you to review
                  this policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
