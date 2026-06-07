"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Cpu, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  {
    icon: Code,
    title: "Software & Web Engineering",
    items: [
      "Design and development of full-stack web applications",
      "API design, third-party integrations, and workflow automation",
      "Custom WordPress themes, plugins, and platform-level extensions",
    ],
  },
  {
    icon: Server,
    title: "Systems & IT Support",
    items: [
      "Troubleshooting, OS configuration, server maintenance",
      "Documentation and process optimization",
      "Technical support and cross-department collaboration",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware & IoT Integration",
    items: [
      "Arduino and Raspberry Pi",
      "Sensor-based systems and automation prototypes",
      "Hardware-software communication",
    ],
  },
  {
    icon: Wifi,
    title: "Network & Infrastructure Fundamentals",
    items: [
      "Local network configuration and endpoint connectivity",
      "Basic switch and router setup, including VLAN awareness",
      "Network troubleshooting and performance optimization in office environments",
    ],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="relative isolate overflow-hidden bg-background py-24" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_18%,rgba(22,101,52,0.05)_18%,rgba(22,101,52,0.05)_19%,transparent_19%,transparent_81%,rgba(202,138,4,0.05)_81%,rgba(202,138,4,0.05)_82%,transparent_82%,transparent_100%),radial-gradient(circle_at_50%_0%,rgba(22,101,52,0.08),transparent_32%)] dark:bg-[linear-gradient(90deg,transparent_0%,transparent_18%,rgba(255,255,255,0.05)_18%,rgba(255,255,255,0.05)_19%,transparent_19%,transparent_81%,rgba(255,253,143,0.05)_81%,rgba(255,253,143,0.05)_82%,transparent_82%,transparent_100%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_32%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 h-64 w-64 translate-x-1/3 rounded-full bg-accent/8 blur-3xl dark:bg-white/5" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className={cn(
              "font-mono text-sm tracking-wider text-secondary transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            What I Do
          </p>
          <h2
            className={cn(
              "mt-2 text-3xl font-bold text-primary transition-all duration-700 sm:text-4xl",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Skills & Expertise
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={cn(
                "group border-border bg-card transition-all duration-500 hover:border-accent/50 hover:shadow-lg",
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${(index + 2) * 10}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2 text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-primary">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75 dark:text-foreground/80">
                      <span className="mt-1.5 text-xs text-accent">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p
          className={cn(
            "mt-12 text-center font-medium italic text-foreground/65 transition-all duration-100 dark:text-foreground/75",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          "End-to-end solutions built with clarity, efficiency, and reliability."
        </p>
      </div>
    </section>
  )
}
