"use client"

import { ShieldCheck, CloudSnow, Check, Coins } from "lucide-react"

interface TrustPaymentBadgeProps {
  type?: "package" | "taxi"
  className?: string
}

export function TrustPaymentBadge({ type = "package", className = "" }: TrustPaymentBadgeProps) {
  const isPackage = type === "package"

  return (
    <div className={`rounded-2xl border border-saffron/30 bg-linear-to-br from-amber-50/80 via-white to-orange-50/50 p-3.5 shadow-sm ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron text-white">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
        <span className="text-xs font-bold text-foreground tracking-wide">
          100% Risk-Free Booking Promise
        </span>
      </div>

      <div className="space-y-1.5 text-[11px] text-muted-foreground">
        <div className="flex items-start gap-1.5">
          <Check className="h-3.5 w-3.5 text-forest-green shrink-0 mt-0.5" />
          <span>
            {isPackage ? (
              <strong className="text-foreground">Only 25% Token</strong>
            ) : (
              <strong className="text-foreground">Only 20% Token</strong>
            )}{" "}
            needed to confirm. Balance payable after arrival.
          </span>
        </div>

        <div className="flex items-start gap-1.5">
          <CloudSnow className="h-3.5 w-3.5 text-mountain-blue shrink-0 mt-0.5" />
          <span>
            <strong className="text-foreground">Weather & Landslide Safety:</strong> Free date rescheduling if roads are closed by authorities.
          </span>
        </div>

        <div className="flex items-start gap-1.5">
          <Coins className="h-3.5 w-3.5 text-saffron shrink-0 mt-0.5" />
          <span>
            <strong className="text-foreground">Zero Hidden Charges:</strong> All tolls, state taxes, fuel & driver allowances included.
          </span>
        </div>
      </div>
    </div>
  )
}
