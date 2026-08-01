import type { LucideIcon } from "lucide-react";
import { Bug, Box, Flag } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

interface Lab {
  title: string;
  description: string;
  icon: LucideIcon;
}

const LABS: Lab[] = [
  {
    title: "PortSwigger Web Security Academy",
    description:
      "Hands-on labs practicing web vulnerabilities including SQL Injection, Cross-Site Scripting (XSS), and Insecure Direct Object References (IDOR).",
    icon: Bug,
  },
  {
    title: "Hack The Box",
    description:
      "CTF-style machines and challenges for practicing offensive security techniques in a controlled environment.",
    icon: Box,
  },
  {
    title: "Capture The Flag",
    description:
      "Competitive challenges that reinforce reconnaissance, web exploitation, and security analysis skills.",
    icon: Flag,
  },
];

export default function LabsPracticeSection() {
  return (
    <section className="relative border-t border-[#D7E2EA]/10 px-6 py-24 sm:px-8 md:py-32">
      <SectionHeading index="03" label="labs & practice" hero className="mb-14 sm:mb-20">
        Labs &amp; Practice
      </SectionHeading>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LABS.map((lab, i) => {
          const Icon = lab.icon;
          return (
            <FadeIn key={lab.title} delay={i * 0.1} className="h-full">
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/45 hover:shadow-[0_16px_48px_-16px_rgba(0,229,255,0.28)] sm:p-8">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00E5FF]/25 bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="text-[clamp(1rem,2.2vw,1.35rem)] font-medium uppercase leading-tight text-[#D7E2EA]">
                  {lab.title}
                </h3>
                <p className="font-light leading-relaxed text-[#D7E2EA]/70 [font-size:clamp(0.9rem,1.4vw,1rem)]">
                  {lab.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
