import { Metadata } from "next"

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://embedglobal.com"),
  title: {
    default: "Embed Global",
    template: `%s - Embed Global`
  },
  description: "Embed Global",
  keywords: "Embed Global",
  authors: [],
  creator: "Embed Global",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://embedglobal.com",
    title: "Embed Global",
    description: "Embed Global",
    siteName: "Embed Global",
    images: [
      {
        url: "https://embedglobal.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Embed Global"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Embed Global",
    description: "Embed Global",
    images: ["https://embedglobal.com/og-image.png"],
    creator: "@Embed Global"
  }
}
