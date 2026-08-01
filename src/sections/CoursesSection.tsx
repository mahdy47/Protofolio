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
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <SectionHeading hero className="mb-16 sm:mb-20 md:mb-28">
        Training &amp; Courses
      </SectionHeading>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {COURSES.map((course, i) => {
          const Icon = course.icon;
          return (
            <FadeIn key={course.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-5 rounded-[30px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,229,255,0.1)] text-[#00E5FF]">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full border border-[#00E5FF]/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#00E5FF]">
                    {course.year}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium uppercase leading-none text-[#D7E2EA] sm:text-xl">
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
