"use client"

import { POSTHOG_HOST, POSTHOG_KEY } from "@/configs/app-config"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

import { IS_DEV, IS_PROD, isBrowser } from "@/lib/constants"

// Check that PostHog is client-side (used to handle Next.js SSR)
if (isBrowser && IS_PROD) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageleave: true,

    loaded: (posthog) => {
      if (IS_DEV) posthog.debug()
    }
  })
}

const PHProvider = ({ children }: { children: React.ReactNode }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export default PHProvider
