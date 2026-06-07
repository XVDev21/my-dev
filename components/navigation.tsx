"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#" className="font-mono text-lg font-bold text-primary">
            Xyrel Vaughn Delos Santos
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="ml-1 flex items-center gap-3">
              <ThemeToggle />
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="/my-dev/Xyrel Vaughn Delos Santos - Updated.pdf" download="Xyrel-Vaughn-Delos-Santos.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background/95 py-4 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2 py-1 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-2 pt-2">
                <ThemeToggle />
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/my-dev/Xyrel Vaughn Delos Santos - Updated.pdf" download="Xyrel-Vaughn-Delos-Santos.pdf">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
