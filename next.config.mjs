import { withSentryConfig } from "@sentry/nextjs"

// @ts-check

/** @type {import('next').NextConfig} */
let nextConfig = {
  async redirects() {
    return [
      {
        source: "/whatsapp",
        destination: `https://api.whatsapp.com/send/?phone=%2B6569575566&text=Hi%2C+I+need+help+with+EmbedGlobal`,
        permanent: false,
        basePath: false
      }
    ]
  },
  webpack: (config, { isServer }) => {
    // https://github.com/open-telemetry/opentelemetry-js/issues/4173#issuecomment-1822938936
    // This is a hack to mute sentry opentelemtry logging
    if (isServer) {
      config.ignoreWarnings = [{ module: /opentelemetry/ }]
    }
    return config
  }
}

if (process.env.BUILD_ENV === "production") {
  nextConfig = withSentryConfig(nextConfig, {
    org: `embedglobal`,
    project: `SENTRY_PROJECT`,
    silent: true,
    widenClientFileUpload: process.env.LOCAL ? false : true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: false
  })
}

export default nextConfig
