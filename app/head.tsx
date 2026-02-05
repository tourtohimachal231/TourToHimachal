import { optimizeCloudinaryDeliveryUrl } from "@/lib/cloudinary"

export default function Head() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseOrigin = supabaseUrl ? new URL(supabaseUrl).origin : null

  // Likely homepage LCP image (used in the home Hero background)
  const lcpHeroImage = optimizeCloudinaryDeliveryUrl(
    "https://res.cloudinary.com/daqp8c5fa/image/upload/v1767795277/v7svtjhbjhj6cyadgfhz.webp",
    { width: 1200, quality: "auto:good", format: "auto", crop: "limit", dpr: 1.0 },
  )

  return (
    <>
      {/* Cross-browser and mobile compatibility meta tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="TourToHimachal" />
      <meta name="application-name" content="TourToHimachal" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="color-scheme" content="light dark" />

      {/* DNS / Connection hints */}
      <link rel="dns-prefetch" href="//res.cloudinary.com" />
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />

      {supabaseOrigin && (
        <>
          <link rel="dns-prefetch" href={supabaseOrigin.replace(/^https?:/, "")} />
          <link rel="preconnect" href={supabaseOrigin} crossOrigin="anonymous" />
        </>
      )}

      {/* LCP hint */}
      <link rel="preload" as="image" href={lcpHeroImage} fetchPriority="high" />

      {/* Microsoft Clarity Analytics */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "v3ikvkpm3x");`,
        }}
      />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-22TPYRK5Z6" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-22TPYRK5Z6');
          `,
        }}
      />
    </>
  )
}
