"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemesProvider
    {...props}
    attribute="class"
    defaultTheme="light"
    enableSystem={false}>
    {children}
  </NextThemesProvider>
)

export default ThemeProvider
