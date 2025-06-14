import { SENTRY_DSN } from "@/configs/app-config"
import * as Sentry from "@sentry/nextjs"

import { IS_PROD } from "@/lib/constants"

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1,
  debug: !IS_PROD,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  enabled: IS_PROD
})
