import type { LucideIcon } from "lucide-react";
import { Shield, Network, Code, Wrench, Terminal, Check } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "01",
    title: "Offensive Security",
    icon: Shield,
    items: [
      "Cybersecurity Fundamentals",
      "Web Application Security",
      "SQLi, XSS, CSRF, SSRF, IDOR, Clickjacking",
      "Information Gathering & Reconnaissance",
      "CTF & Hands-on Security Labs",
    ],
  },
  {
    id: "02",
    title: "Networking",
    icon: Network,
    items: [
      "TCP/IP & Networking Fundamentals",
      "Network Protocols (HTTP/HTTPS, DNS, DHCP)",
    ],
  },
  {
    id: "05",
    title: "Systems & Linux",
    icon: Terminal,
    items: ["Linux Administration & Command Line"],
  },
  {
    id: "03",
    title: "Programming",
    icon: Code,
    items: ["Python", "TypeScript", "Bash Scripting Basics", "MySQL Database Basics"],
  },
  {
    id: "04",
    title: "Tools",
    icon: Wrench,
    items: [
      "Burp Suite (Proxy, Repeater, Intruder)",
      "Nmap & Masscan",
      "sqlmap",
      "Wireshark & TCPDump",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative border-t border-[#D7E2EA]/10 px-6 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading index="04" label="skills" hero className="mb-14 sm:mb-20">
        Skills
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, i) => {
          const Icon = category.icon;
          return (
            <FadeIn key={category.id} delay={i * 0.1} className="h-full">
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/45 hover:shadow-[0_16px_48px_-16px_rgba(0,229,255,0.28)] sm:p-7">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />

                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00E5FF]/25 bg-[#00E5FF]/10 text-[#00E5FF]">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-lg font-medium text-[#00E5FF]/60">
                    {category.id}
                  </span>
                </div>

                <h3 className="text-[clamp(1rem,2.2vw,1.5rem)] font-medium uppercase leading-tight text-[#D7E2EA]">
                  {category.title}
                </h3>

                <ul className="flex flex-col gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-light text-[#D7E2EA]/75 [font-size:clamp(0.85rem,1.4vw,1rem)]"
                    >
                      <Check
                        size={14}
                        strokeWidth={3}
                        className="shrink-0 text-[#22C55E]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
