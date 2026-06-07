"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const experiences = [
  {
    period: "2024-2025",
    role: "Web Developer | IT Specialist",
    company: "Starlegends Adventures Inc.",
    tagline: "Solving problems, streamlining operations, and building smarter systems.",
    highlights: [
      "Managed WordPress and Laravel systems",
      "Built custom plugins tailored to internal workflows",
      "Designed modern responsive landing pages",
      "Implemented IT documentation and process improvements",
      "Provided application and network support",
      "Executed fast-paced technical tasks cross-departmentally",
    ],
  },
  {
    period: "2024",
    role: "Developer Intern",
    company: "SciBiz Informatics",
    tagline: "Where software meets hardware and creativity meets innovation.",
    highlights: [
      "Developed using Python and Vue",
      "Integrated BitCash API with Paytaca App",
      "Used Raspberry Pi for automation",
      "Strengthened software-hardware integration skills",
    ],
  },
  {
    period: "2020-2022",
    role: "Freelance Developer",
    company: "Self-Employed",
    tagline: "Turning ideas into efficient tools crafted for local clients.",
    highlights: [
      "Developed custom management systems",
      "Full-stack apps using Laravel and Vue",
      "Desktop applications in Java and VB.NET",
      "Delivered reliable systems despite resource limitations",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="relative isolate overflow-hidden bg-card py-24" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,138,4,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(22,101,52,0.09),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,253,143,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_26%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className={cn(
              "font-mono text-sm tracking-wider text-secondary transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            My Journey
          </p>
          <h2
            className={cn(
              "mt-2 text-3xl font-bold text-primary transition-all duration-700 delay-100 sm:text-4xl",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Experience timeline
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "relative grid gap-8 transition-all duration-700 md:grid-cols-2 md:gap-16",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-accent animate-glow md:left-1/2" />

                <div
                  className={cn(
                    "pl-12",
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16",
                  )}
                >
                  <span className="mb-2 inline-block rounded-full border border-secondary/20 bg-secondary/25 px-3 py-1 font-mono text-sm text-secondary shadow-sm transition-colors dark:border-white/10 dark:bg-white/10 dark:text-foreground dark:shadow-black/20">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <p className="font-medium text-secondary">{exp.company}</p>
                  <p className="mt-1 text-sm italic text-foreground/60">"{exp.tagline}"</p>
                  <ul className={cn("mt-4 space-y-2", index % 2 === 0 ? "md:text-right" : "")}>
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                        style={{
                          justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                      >
                        {index % 2 !== 0 && <span className="mt-0.5 text-accent">-&gt;</span>}
                        {highlight}
                        {index % 2 === 0 && <span className="mt-0.5 text-accent">&lt;-</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
