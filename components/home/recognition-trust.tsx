import Image from "next/image"
import { ShieldCheck, Star, MapPin } from "lucide-react"

export function RecognitionTrust() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white py-10 sm:py-14 md:py-16 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Restrained Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/70 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-900 uppercase">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                <span>Verified Independent Recognition</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                Recognized. Rated. Chosen.
              </h2>

              {/* Approved Supporting Line */}
              <p className="text-base sm:text-lg md:text-xl font-normal text-slate-700 leading-relaxed text-pretty">
                TourToHimachal is proud to be recognized by Justdial as a Users&apos; Choice 2026 travel service in Amb.
              </p>

              {/* Reassuring E-E-A-T Highlights for Families & Senior Pilgrims */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
                  <Star className="h-4 w-4 text-amber-500 shrink-0 mt-0.5 fill-amber-500" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs sm:text-sm">5-Star Customer Rating</strong>
                    <span className="text-xs text-slate-500 leading-normal">Reflecting real traveler satisfaction & experiences</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
                  <MapPin className="h-4 w-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs sm:text-sm">Rooted in Amb & Himachal</strong>
                    <span className="text-xs text-slate-500 leading-normal">Direct local coordination & dependable hill support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Award Screenshot Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px] rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-xl shadow-slate-200/60 transition-all hover:shadow-2xl hover:shadow-slate-300/50">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50">
                  <Image
                    src="/Images/justdial-award-2026.png"
                    alt="Justdial Users' Choice 2026 Recognition for Tour to Himachal (Amb)"
                    width={1024}
                    height={730}
                    className="w-full h-auto object-contain block"
                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 100vw"
                    priority
                  />
                </div>
                <p className="mt-2 text-center text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide">
                  Official Justdial Users&apos; Choice 2026 Recognition • Amb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
