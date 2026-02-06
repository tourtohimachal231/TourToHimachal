"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Inbox } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  service_type: string
  status: string
  created_at: string
  reference_number: string
}

interface RecentLeadsProps {
  leads: Lead[]
}

const statusColors: Record<string, string> = {
  new: "bg-saffron/10 text-saffron",
  contacted: "bg-yellow-100 text-yellow-800",
  booked: "bg-saffron/10 text-saffron",
  closed: "bg-gray-100 text-gray-800",
}

const serviceLabels: Record<string, string> = {
  package: "Package",
  taxi: "Taxi",
  enquiry: "Enquiry",
}

export function RecentLeads({ leads }: RecentLeadsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-2">
        <CardTitle className="truncate text-base sm:text-lg lg:text-xl">Recent Leads</CardTitle>
        <Button variant="ghost" size="sm" asChild className="shrink-0 text-sm md:text-base">
          <Link href="/admin/leads" className="gap-1">
            <span className="xs:inline hidden">View All</span>
            <span className="xs:hidden">View</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="p-2">
        {leads.length === 0 ? (
          <div className="py-6 text-center sm:py-8">
            <Inbox className="text-muted-foreground mx-auto mb-2 h-10 w-10 sm:mb-3 sm:h-12 sm:w-12" />
            <p className="text-muted-foreground text-sm md:text-base">No leads yet</p>
            <p className="text-muted-foreground text-sm md:text-base">New inquiries will appear here</p>
          </div>
        ) : (
          <div className="space-y-2 sm:space-y-3">
            {leads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-muted/50 hover:bg-muted flex items-center justify-between gap-2 rounded-lg p-2 transition-colors sm:p-3"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <p className="text-foreground truncate text-sm font-medium md:text-base">{lead.name}</p>
                    <Badge
                      variant="outline"
                      className={`${statusColors[lead.status]} text-[10px] sm:text-xs`}
                    >
                      {lead.status}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs md:text-sm">
                    <span>{serviceLabels[lead.service_type] || lead.service_type}</span>
                    <span>•</span>
                    <span suppressHydrationWarning>
                      {formatDistanceToNow(new Date(lead.created_at), { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${lead.phone.replace(/\D/g, "")}?text=Hi ${lead.name}, thank you for contacting TourToHimachal!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-saffron p-1.5 text-white transition-colors hover:bg-saffron/90 sm:p-2"
                >
                  <WhatsAppIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
