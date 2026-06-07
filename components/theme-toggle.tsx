"use client"

import { useEffect, useState } from "react"
import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = mounted ? resolvedTheme ?? theme : "light"
  const isDark = activeTheme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        "relative h-9 w-9 shrink-0 border-border/70 bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition-colors",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      disabled={!mounted}
    >
      <SunMedium
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
      />
      <MoonStar
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
        )}
      />
    </Button>
  )
}
