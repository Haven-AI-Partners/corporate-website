"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function LeadershipSection({ locale }: { locale: Locale }) {
  const t = content[locale].leadership

  return (
    <section id="leadership" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.members.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-start gap-5 mb-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2">
                    <div>
                      {"nameJa" in member && member.nameJa && (
                        <p className="text-lg font-semibold text-foreground">
                          {member.nameJa}
                        </p>
                      )}
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-pretty text-xs leading-relaxed text-muted-foreground/80 mb-6">
                {member.memberSubtitle}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
              {member.education && (
                <p className="mt-4 text-sm font-medium text-foreground/80">
                  {member.education}
                </p>
              )}
              {member.skills && member.skills.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2"
                    >
                      <p className="text-xs font-semibold text-primary">
                        {skill.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
