import { StateCreator } from "zustand"

interface Template {
  // ...
}

const INIT: Template = {
  // ...
}

export interface TemplateSlice {
  // ...
}

export const createTemplateSlice: StateCreator<TemplateSlice> = (set) => ({
  template: INIT
})
