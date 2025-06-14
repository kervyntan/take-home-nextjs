export const IS_DEV = process.env.NODE_ENV === "development"
export const IS_PROD = process.env.NODE_ENV === "production"

export const BASE_URL = IS_DEV
  ? "http://localhost:3000"
  : "https://embedglobal.com"

export const API_URL = IS_DEV
  ? "http://localhost:8000"
  : "https://api.embedglobal.com"

export const isBrowser = typeof window !== "undefined"
