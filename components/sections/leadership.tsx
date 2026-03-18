"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function LeadershipSection({ locale }: { locale: Locale }) {
  const t = content[locale].leadership

  return (
    <section id="leadership" className="pt-16 pb-32 lg:pt-20 lg:pb-40 bg-secondary/30">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.members.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-white overflow-hidden"
            >
              {/* Large portrait photo */}
              <div className="relative aspect-[4/4] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text content */}
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-normal text-foreground">
                    {member.name}
                  </h3>
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
                <p className="mt-2 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
