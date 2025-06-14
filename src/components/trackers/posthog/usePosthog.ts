import { CaptureResult } from "posthog-js"
import { PostHog, usePostHog as usePostHogHook } from "posthog-js/react"

type EventName = "test-event"

interface CustomPostHog extends PostHog {
  event: (eventName: EventName, properties?: any) => void | CaptureResult
}

export const usePostHog = (): CustomPostHog => {
  const posthog = usePostHogHook() as CustomPostHog

  posthog.event = (eventName: EventName, properties: any = undefined) => {
    let res: void | CaptureResult = undefined

    try {
      res = posthog.capture(eventName, properties)
    } catch (err) {
      console.error("PostHog capture error:", err)
    }

    return res
  }

  return posthog
}
