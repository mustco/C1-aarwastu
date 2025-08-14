import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import FloatingWhatsApp from "@/components/floating-whatsapp"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "AARWASTU - Indie Architecture Studio",
  description:
    "Premium architecture and interior design studio based in Solo, Indonesia. Specializing in exterior design, interior design, construction, and custom furniture.",
  icons: {
    icon: "/aarwastu.png",
  },
  openGraph: {
    title: "AARWASTU - Indie Architecture Studio",
    description:
      "Premium architecture and interior design studio based in Solo, Indonesia.",
    // url: 'https://your-site.netlify.app', 
    siteName: "AARWASTU",
    images: [
      {
        url: "/aarwastu.png", 
        width: 1200, 
        height: 630, 
        alt: "AARWASTU - Indie Architecture Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AARWASTU - Indie Architecture Studio",
    description:
      "Premium architecture and interior design studio based in Solo, Indonesia.",
    images: ["/aarwastu.png"], 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
    >
      <body className="font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
