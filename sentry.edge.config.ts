import { SENTRY_DSN } from "@/configs/app-config"
import * as Sentry from "@sentry/nextjs"

import { IS_PROD } from "@/lib/constants"

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1,
  debug: !IS_PROD,
  enabled: IS_PROD
})
