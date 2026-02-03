import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Timelex | Digital Asset Protection | Anti Counterfeiting Solutions",
  description:
    "Timelex is a leading Digital Asset Protection, Research & Policy Advisory firm working across genres of digital IP. We are focused on helping clients protect their digital assets.",
  openGraph: {
    title: "Timelex | Digital Asset Protection | Anti Counterfeiting Solutions",
    description:
      "Timelex is a leading Digital Asset Protection, Research & Policy Advisory firm working across genres of digital IP.",
    type: "website",
    siteName: "Timelex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timelex | Digital Asset Protection | Anti Counterfeiting Solutions",
    description:
      "Timelex is a leading Digital Asset Protection, Research & Policy Advisory firm working across genres of digital IP.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
