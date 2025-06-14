import { Inter } from "next/font/google"

import "./globals.css"

import config from "@/configs"

import { cn } from "@/lib/cn"
import { Toaster } from "@/components/ui/sonner"
import SupportFloater from "@/components/support-floater"
import ThemeProvider from "@/components/theme-provider"
import ViewportIndicator from "@/components/viewport-indicator"

const inter = Inter({ subsets: ["latin"] })

// Settings
export const metadata = config.siteMetadata
export const viewport = config.siteViewport

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}

          <Toaster position="top-center" />
          <SupportFloater />
          <ViewportIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
