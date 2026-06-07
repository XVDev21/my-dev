"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { 
  DiJava, 
  DiPython, 
  DiPhp,
  DiJavascript1,
  DiReact,
  DiDjango,
  DiLaravel,
  DiMysql,
} from "react-icons/di";

import { 
  SiTypescript,
  SiCplusplus,
  SiVuedotjs,
  SiArduino,
  SiRaspberrypi, 
  SiVscodium,
  SiGit,
  SiWordpress,
  SiLinux,
  SiWinamp
} from "react-icons/si";


const techStack = {
  "Programming Languages": [
    { name: "Java", icon: DiJava },
    { name: "Python", icon: DiPython },
    { name: "PHP", icon: DiPhp },
    { name: "C++", icon: SiCplusplus }, 
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: DiJavascript1 },
  ],
  "Frameworks & Libraries": [
    { name: "Laravel", icon: DiLaravel },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Django", icon: DiDjango },
    { name: "React", icon: DiReact },
  ],
  "Tools & Hardware": [
    { name: "Raspberry Pi", icon: SiRaspberrypi },
    { name: "Arduino", icon: SiArduino },
    { name: "Git", icon: SiGit },
    { name: "VS Code", icon: SiVscodium },
  ],
  Platforms: [
    { name: "WordPress", icon: SiWordpress },
    { name: "Linux", icon: SiLinux },
    { name: "Windows Server Express", icon: SiWinamp },
    { name: "MySQL", icon: DiMysql },
  ],
}

export function TechStackSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="relative isolate overflow-hidden bg-card py-24" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(22,101,52,0.08),transparent_28%),radial-gradient(circle_at_20%_75%,rgba(202,138,4,0.07),transparent_22%),radial-gradient(circle_at_80%_75%,rgba(22,101,52,0.06),transparent_20%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,253,143,0.08),transparent_28%),radial-gradient(circle_at_20%_75%,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.04),transparent_20%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-secondary font-mono text-sm tracking-wider transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {"Technologies"}
          </p>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-primary mt-2 transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Tech Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, items], catIndex) => (
            <div
              key={category}
              className={cn(
                "transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(catIndex + 2) * 100}ms` }}
            >
              <h3 className="font-semibold text-primary mb-4 text-center">{category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {items.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={cn(
                      "p-3 rounded-lg border border-border bg-muted/30 text-center group cursor-default transition-all duration-300 hover:border-accent hover:bg-accent/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
                      isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
                    )}
                    style={{
                      transitionDelay: `${(catIndex * 4 + index + 4) * 50}ms`,
                    }}
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform inline-block">
                      <tech.icon size={28} className="mx-auto" />
                    </span>

                    <p className="mt-1 text-xs font-medium text-foreground/70 dark:text-foreground/85">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
