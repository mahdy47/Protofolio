import type { LucideIcon } from "lucide-react";
import { BookOpen, Target } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

interface Course {
  title: string;
  provider?: string;
  year: string;
  description: string;
  icon: LucideIcon;
}

const COURSES: Course[] = [
  {
    title: "Cybersecurity Bootcamp",
    provider: "NTI",
    year: "2025",
    description:
      "Cybersecurity, Linux, and networking fundamentals, with hands-on penetration testing and web security testing practice using real security tools and labs.",
    icon: BookOpen,
  },
  {
    title: "Fundamentals of Penetration Testing",
    year: "2025",
    description:
      "Cybersecurity, Linux, networking, and information gathering fundamentals, with practical vulnerability assessment, enumeration, exploitation, and security analysis techniques.",
    icon: Target,
  },
];

export default function CoursesSection() {
  return (
    <section className="relative border-t border-[#D7E2EA]/10 px-6 py-24 sm:px-8 md:py-32">
      <SectionHeading index="06" label="training & courses" hero className="mb-14 sm:mb-20">
        Training &amp; Courses
      </SectionHeading>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {COURSES.map((course, i) => {
          const Icon = course.icon;
          return (
            <FadeIn key={course.title} delay={i * 0.1} className="h-full">
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/45 hover:shadow-[0_16px_48px_-16px_rgba(0,229,255,0.28)] sm:p-8">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />

                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00E5FF]/25 bg-[#00E5FF]/10 text-[#00E5FF]">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full border border-[#00E5FF]/30 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-[#00E5FF]">
                    {course.year}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium uppercase leading-tight text-[#D7E2EA] sm:text-xl">
                    {course.title}
                  </h3>
                  {course.provider && (
                    <p className="text-sm font-light text-[#D7E2EA]/60">
                      {course.provider}
                    </p>
                  )}
                </div>

                <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/70">
                  {course.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
