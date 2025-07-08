import { useEffect, useState } from "react"
import { Toaster as Sonner } from "sonner"
import type { ToasterProps } from "sonner"

const Toaster = (props: ToasterProps) => {
  // Detect system theme using matchMedia, fallback to 'light'
  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"

  const [theme, setTheme] = useState<ToasterProps["theme"]>("light")

  useEffect(() => {
    // On mount, set initial theme
    setTheme(getSystemTheme())

    // Listen for changes to the prefers-color-scheme media query
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light")

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
