import { create } from "zustand"
import { persist } from "zustand/middleware"

import { createTemplateSlice, TemplateSlice } from "./template.state"

interface StoreState extends TemplateSlice {}

/**
 * Main state in the app
 */
export const useBoundState = create(
  persist<StoreState>(
    (...a) => ({
      ...createTemplateSlice(...a)
    }),
    { name: "embedglobal-store" }
  )
)
