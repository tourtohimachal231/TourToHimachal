"use client"

import { ShieldCheck, CloudSnow, Check, Coins, Hotel, Car } from "lucide-react"

interface TrustPaymentBadgeProps {
  type?: "package" | "taxi"
  className?: string
}

export function TrustPaymentBadge({ type = "package", className = "" }: TrustPaymentBadgeProps) {
  const isPackage = type === "package"

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 p-3.5 shadow-xs ${className}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          </div>
          <span className="text-xs font-bold tracking-wide text-slate-900">
            {isPackage ? "Milestone Booking & Hotel Protection" : "Fleet-Only Transparent Booking"}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
          {isPackage ? <Hotel className="h-3 w-3 text-amber-600" /> : <Car className="h-3 w-3 text-emerald-600" />}
          {isPackage ? "Hotels + Cab" : "Fleet Only"}
        </span>
      </div>

      <div className="space-y-1.5 text-[11px] text-slate-600">
        <div className="flex items-start gap-1.5">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
          <span>
            {isPackage ? (
              <>
                <strong className="text-slate-900">25% Token</strong> to lock hotel rooms & cab. 50% on check-in, 25% mid-tour.
              </>
            ) : (
              <>
                <strong className="text-slate-900">20% Token</strong> to allocate driver. 50% on boarding, 30% at final drop.
              </>
            )}
          </span>
        </div>

        <div className="flex items-start gap-1.5">
          <CloudSnow className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
          <span>
            <strong className="text-slate-900">Weather & Pass Safety:</strong> Free date rescheduling if mountain passes are closed by authorities.
          </span>
        </div>

        <div className="flex items-start gap-1.5">
          <Coins className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
          <span>
            <strong className="text-slate-900">All-Inclusive Mountain Quote:</strong> All tolls, HP border permits, fuel & driver allowances included.
          </span>
        </div>
      </div>
    </div>
  )
}
