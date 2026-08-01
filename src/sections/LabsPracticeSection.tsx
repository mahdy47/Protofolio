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
    <section className="rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <SectionHeading className="mb-16 sm:mb-20 md:mb-28">
        Labs &amp; Practice
      </SectionHeading>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LABS.map((lab, i) => {
          const Icon = lab.icon;
          return (
            <FadeIn key={lab.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-6 rounded-[30px] border border-[rgba(12,12,12,0.15)] p-6 sm:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(0,229,255,0.12)] text-[#0085A0]">
                  <Icon size={26} strokeWidth={1.75} />
                </span>
                <h3 className="text-[clamp(1rem,2.2vw,1.35rem)] font-medium uppercase leading-none">
                  {lab.title}
                </h3>
                <p className="font-light leading-relaxed text-[rgba(12,12,12,0.7)] [font-size:clamp(0.9rem,1.4vw,1.05rem)]">
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
