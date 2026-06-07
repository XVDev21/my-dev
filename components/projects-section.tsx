"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const legacyProjects = [
  {
    title: "StarLegends Travel & Business Platform",
    description:
      "Built pages, improved the look and feel, tailored membership courses, and created custom plugins and features for the system's workflows.",
    tags: ["WordPress", "PHP", "MySQL", "Custom Plugins"],
    image: "/my-dev/STBP.png",
    link: "https://starlegends.com.ph",
  },
  {
    title: "BCH Crypto Vendo Machine | Featuring Paytaca App",
    description:
      "Secure BCH transactions with vending-machine workflows and payment support via the Paytaca app.",
    tags: ["Python", "Vue", "BitCash API", "Raspberry Pi", "PostgreSQL"],
    image: "/my-dev/bch-vendo-menu-select.png",
    link: "https://drive.google.com/drive/folders/1aEuotHHvgS4TGJ2nrJKjV8MZF6DWOpdO?usp=sharing",
  },
  {
    title: "AquaCon | Real-Time IoT Dashboard",
    description: "Raspberry Pi-powered system for smart operations and live monitoring.",
    tags: ["Arduino", "Python", "IoT", "Firebase"],
    image: "/my-dev/App-Monitor.jpg",
    link: "https://drive.google.com/drive/folders/1l1Da4Uj70Npgc-Rt5GQK0y677vkpeWmg?usp=sharing",
  },
  {
    title: "Static Web UI & Landing Pages",
    description: "Single-page menus and landing pages for small businesses showcasing products and services.",
    tags: ["HTML", "CSS"],
    image: "/my-dev/Sizzling Steak.png",
    link: "https://drive.google.com/drive/folders/1KuNy_bbazyzq0CqwWtbeobxta0Z-XIrp?usp=drive_link",
  },
  {
    title: "Full Stack Web Apps",
    description: "Recreated and featured web design systems inspired by modern SaaS dashboards and media interfaces.",
    tags: ["Laravel", "Vue", "MySQL"],
    image: "/my-dev/VideoLib.png",
    link: "https://drive.google.com/drive/folders/1vH7BlArn3-is5XeO4jpOPRBQQry5Hsp-?usp=sharing",
  },
  {
    title: "Desktop Apps and Customized Projects",
    description: "Customized, curated projects tailored to meet specific client needs and requirements.",
    tags: ["Java", "VB.NET", "Microsoft SQL 2017"],
    image: "/my-dev/inventra-watermark.png",
    link: "https://drive.google.com/drive/folders/1eybDDcPlTUgByuvQtXQ0Jcg-kARlRLiX?usp=sharing",
  },
]

const featuredProjects = [
  {
    title: "Veltrix Cloud",
    description:
      "A cloud-oriented experience shaped around secure access, organized workflows, and scalable infrastructure concepts for modern digital operations.",
    tags: ["Cloud Workspace", "Infrastructure", "Secure Access"],
    image: "/my-dev/veltrix.png",
    link: "https://veltrix-frontend-j2ge.onrender.com/",
  },
  {
    title: "YAHSHUA One",
    description:
      "An all-in-one operating platform that brings core business functions together in one cohesive workspace for teams that need clarity, control, and scale.",
    tags: ["Business Platform", "Operations", "Unified Workspace"],
    image: "/my-dev/yahshua-one.png",
    link: "https://www.yahshua.one/",
  },
  {
    title: "FAMEConnect",
    description:
      "A buyer-focused experience designed to strengthen connection, visibility, and brand discovery through a sharper presentation and more intentional flow.",
    tags: ["Buyer Journey", "Brand Visibility", "Discovery"],
    image: "/my-dev/fameconnnect.png",
    link: "https://fameconnect.onrender.com/",
  },
  {
    title: "WorkSphere HR",
    description:
      "A workforce management experience built to streamline daily HR operations, improve visibility across tasks, and support a more organized team rhythm.",
    tags: ["Workforce Ops", "HR Systems", "Task Clarity"],
    image: "/my-dev/worksphere.png",
    link: "https://xvdev21.github.io/worksphere-hr/",
  },
]

function LegacyProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof legacyProjects)[number]
  index: number
  isInView: boolean
}) {
  return (
    <a
      href={project.link || undefined}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className="block"
    >
      <Card
        className={cn(
          "group flex h-full flex-col overflow-hidden border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        style={{ transitionDelay: `${(index + 2) * 100}ms` }}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {project.link && (
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-primary/80 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 font-medium text-primary-foreground">
                See Samples <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          )}
        </div>

        <CardContent className="flex flex-1 flex-col p-4">
          <h3 className="font-bold text-primary transition-colors group-hover:text-secondary">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-foreground/70">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-muted/70 text-xs text-foreground/75 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-white/10 dark:text-foreground/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  )
}

function FeaturedProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof featuredProjects)[number]
  index: number
  isInView: boolean
}) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card
        className={cn(
          "group h-full overflow-hidden border-border/70 bg-background/70 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        style={{ transitionDelay: `${(index + 1) * 120}ms` }}
      >
        <div className="flex h-full flex-col">
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>

          <CardContent className="flex flex-1 flex-col p-5">
            <div className="space-y-2">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-secondary">
                Selected Release
              </p>
              <h3 className="text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                {project.title}
              </h3>
            </div>

              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-muted/70 text-xs text-foreground/75 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-white/10 dark:text-foreground/80"
              >
                {tag}
              </Badge>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/65 dark:text-foreground/75">
                Public preview
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-secondary">
                Open project <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </a>
  )
}

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="relative isolate overflow-hidden bg-background py-24" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(22,101,52,0.08),transparent_22%),radial-gradient(circle_at_88%_82%,rgba(202,138,4,0.08),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(22,101,52,0.06),transparent_28%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(255,253,143,0.07),transparent_22%),radial-gradient(circle_at_88%_82%,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_28%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p
            className={cn(
              "font-mono text-sm tracking-wider text-secondary transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            My Work
          </p>
          <h2
            className={cn(
              "mt-2 text-3xl font-bold text-primary transition-all duration-700 delay-100 sm:text-4xl",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Selected projects, from current featured work to the foundation behind it.
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70 transition-all duration-700 delay-200 sm:text-base",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            The featured work comes first, followed by the earlier projects that shaped my approach and set the
            foundation for what I build now.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-sm tracking-wider text-secondary">Latest Featured Projects</p>
                <h3 className="mt-2 text-2xl font-bold text-primary">Current priorities and flagship releases</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-foreground/60">
                These are the builds I want to put forward first because they speak most clearly to the direction of
                the portfolio and the kind of work I want to keep shipping.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard key={project.title} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-sm tracking-wider text-secondary">Foundation Projects</p>
                <h3 className="mt-2 text-2xl font-bold text-primary">Earlier work that shaped the approach</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-foreground/60">
                This section keeps the earlier projects visible as part of the foundation without pulling focus away
                from the featured work above it.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {legacyProjects.map((project, index) => (
                <LegacyProjectCard key={project.title} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
