"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#043915] py-24 text-[#f7f5ea] dark:bg-[#062d16] dark:text-[#f7f5ea]"
      ref={ref}
    >
      <div className="absolute left-4 top-1/4 h-2 w-2 rounded-full bg-accent/60 animate-float sm:left-8" />
      <div className="absolute left-12 top-1/3 h-3 w-3 rounded-full border border-accent/40 animate-float-delayed sm:left-24" />
      <div className="absolute left-6 bottom-1/4 h-1.5 w-1.5 rounded-full bg-secondary/50 animate-float sm:left-16" />
      <div className="absolute left-20 bottom-1/3 h-2 w-2 rounded-full border border-secondary/30 animate-float-delayed sm:left-32" />

      <div className="absolute right-4 top-1/3 h-2 w-2 rounded-full bg-accent/60 animate-float-delayed sm:right-8" />
      <div className="absolute right-12 top-1/4 h-3 w-3 rounded-full border border-accent/40 animate-float sm:right-24" />
      <div className="absolute right-6 bottom-1/3 h-1.5 w-1.5 rounded-full bg-secondary/50 animate-float-delayed sm:right-16" />
      <div className="absolute right-20 bottom-1/4 h-2 w-2 rounded-full border border-secondary/30 animate-float sm:right-32" />

      <div className="absolute left-8 top-8 hidden opacity-20 sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 30 H20 V10 H30" stroke="#B0CE88" strokeWidth="1" />
          <circle cx="30" cy="10" r="2" fill="#B0CE88" />
        </svg>
      </div>
      <div className="absolute right-8 top-8 hidden opacity-20 sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 30 H40 V10 H30" stroke="#B0CE88" strokeWidth="1" />
          <circle cx="30" cy="10" r="2" fill="#B0CE88" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 hidden opacity-20 sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 30 H20 V50 H30" stroke="#FFFD8F" strokeWidth="1" />
          <circle cx="30" cy="50" r="2" fill="#FFFD8F" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 hidden opacity-20 sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 30 H40 V50 H30" stroke="#FFFD8F" strokeWidth="1" />
          <circle cx="30" cy="50" r="2" fill="#FFFD8F" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p
          className={cn(
            "font-mono text-sm tracking-wider text-accent transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Get In Touch
        </p>
        <h2
          className={cn(
            "mt-2 text-3xl font-bold transition-all duration-700 delay-100 sm:text-4xl",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Let&apos;s build something smart, together.
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-[#f7f5ea]/80 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Have a project in mind or just want to connect? I&apos;m open to new opportunities, collaborations, and
          practical ideas worth shipping.
        </p>

        <div
          className={cn(
            "mt-8 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-glow">
            <a href="mailto:delossantosxyrelvaughn@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              delossantosxyrelvaughn@gmail.com
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#f7f5ea]/30 bg-transparent text-[#f7f5ea] hover:bg-[#f7f5ea]/10"
          >
            <a href="tel:+639774045326">
              <Phone className="mr-2 h-4 w-4" />
              +63 977 404 5326
            </a>
          </Button>
        </div>

        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#f7f5ea]/80 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          I am generally available for calls around 7 PM to 9 PM Philippine Standard Time (UTC+08:00) and strive to
          respond to emails within the same day.
        </p>

        <div
          className={cn(
            "mt-8 flex items-center justify-center gap-4 transition-all duration-700 delay-400",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <a
            href="https://www.facebook.com/XTriminator"
            className="group rounded-full border border-[#f7f5ea]/30 p-3 transition-all duration-300 hover:border-accent hover:bg-[#f7f5ea]/10"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 transition-colors group-hover:text-accent" />
          </a>
          <a
            href="https://www.linkedin.com/in/xyrel-vaughn-delos-santos-603468399"
            className="group rounded-full border border-[#f7f5ea]/30 p-3 transition-all duration-300 hover:border-accent hover:bg-[#f7f5ea]/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 transition-colors group-hover:text-accent" />
          </a>
          <a
            href="https://github.com/XVDel0Saint"
            className="group rounded-full border border-[#f7f5ea]/30 p-3 transition-all duration-300 hover:border-accent hover:bg-[#f7f5ea]/10"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 transition-colors group-hover:text-accent" />
          </a>
        </div>

        <div
          className={cn(
            "mt-16 flex justify-center transition-all duration-700 delay-500",
            isInView ? "opacity-100" : "opacity-0",
          )}
        >
          <svg viewBox="0 0 200 20" className="h-5 w-48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 10 H60 V5 H80 V15 H100 V5 H120 V15 H140 V10 H200"
              stroke="#FFFD8F"
              strokeWidth="2"
              fill="none"
              className="animate-pulse-glow"
            />
            <circle cx="60" cy="10" r="3" fill="#FFFD8F" />
            <circle cx="100" cy="10" r="3" fill="#FFFD8F" />
            <circle cx="140" cy="10" r="3" fill="#FFFD8F" />
          </svg>
        </div>
      </div>
    </section>
  )
}
