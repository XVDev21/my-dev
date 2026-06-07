"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code2, SearchCheck, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    label: "Years Experience",
    description: "Development and technical IT",
  },
  {
    icon: Code2,
    value: "Cross-Discipline",
    label: "Expertise",
    description: "Web systems, support, and product thinking",
  },
  {
    icon: Workflow,
    value: "Systems Innovation",
    label: "Focus",
    description: "Leaning toward innovative solutions",
  },
  {
    icon: SearchCheck,
    value: "Gap Analysis",
    label: "Business Advisory",
    description: "Locating operational gaps and shaping scalable solutions",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="relative isolate overflow-hidden bg-card py-24" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(22,101,52,0.08),transparent_24%),radial-gradient(circle_at_85%_15%,rgba(202,138,4,0.08),transparent_22%),linear-gradient(135deg,transparent_0%,transparent_48%,rgba(255,255,255,0.45)_49%,transparent_50%,transparent_100%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(255,253,143,0.08),transparent_24%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(135deg,transparent_0%,transparent_48%,rgba(255,255,255,0.08)_49%,transparent_50%,transparent_100%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl dark:bg-white/5" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div
              className={cn(
                "relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border-4 border-secondary/30 shadow-xl transition-all duration-700 lg:hidden",
                isInView ? "scale-100 opacity-100" : "scale-95 opacity-0",
              )}
            >
              <Image src="/my-dev/Me4 - tinified.png" alt="Xyrel Vaughn Delos Santos" fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <p
                className={cn(
                  "font-mono text-sm tracking-wider text-secondary transition-all duration-700",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                About Me
              </p>

              <div
                className={cn(
                  "relative mx-auto hidden transition-all duration-700 lg:block",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
              >
                <div className="relative mx-auto h-64 w-64">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-secondary/30 shadow-2xl">
                    <Image
                      src="/my-dev/Me4 - tinified.png"
                      alt="Xyrel Vaughn Delos Santos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -left-2 -top-2 h-8 w-8 rounded-tl-lg border-l-4 border-t-4 border-accent" />
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-lg border-b-4 border-r-4 border-accent" />
                </div>
              </div>

              <h2
                className={cn(
                  "text-3xl font-bold text-primary transition-all duration-700 delay-100 sm:text-4xl",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                Crafting smart solutions with precision and purpose.
              </h2>
            </div>

            <div
              className={cn(
                "space-y-4 leading-relaxed text-foreground/70 transition-all duration-700 delay-200",
                isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              <p>
                I&apos;m <strong className="text-primary">Xyrel Vaughn Delos Santos</strong>, a developer and IT
                specialist who works across web apps, WordPress, systems support, and business-focused advisory with a
                product-minded approach.
              </p>
              <p>
                The goal is always the same: make the interface clearer, the workflow easier, and the system more
                dependable for the people who use it every day.
              </p>
              <p>
                My edge is versatility, combining software engineering, operational thinking, practical problem-solving,
                and a broader view of where businesses can improve at scale.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className={cn(
                    "group border-secondary/30 bg-secondary/10 transition-all duration-500 hover:border-accent/50",
                    isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  )}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-lg bg-secondary p-3 text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                        <span className="text-sm font-medium text-foreground/70">{stat.label}</span>
                      </div>
                      <p className="text-sm text-foreground/50">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
