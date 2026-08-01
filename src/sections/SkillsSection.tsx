import type { LucideIcon } from "lucide-react";
import { Shield, Network, Code, Wrench, Check } from "lucide-react";
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
      "Linux Administration",
      "Linux Command Line & System Navigation",
    ],
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
      className="rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <SectionHeading className="mb-16 sm:mb-20 md:mb-28">Skills</SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_CATEGORIES.map((category, i) => {
          const Icon = category.icon;
          return (
            <FadeIn key={category.id} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-6 rounded-[30px] border border-[rgba(12,12,12,0.15)] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(0,229,255,0.12)] text-[#0085A0]">
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                  <span className="text-[clamp(1.6rem,3vw,2.5rem)] font-black leading-none text-[rgba(12,12,12,0.15)]">
                    {category.id}
                  </span>
                </div>

                <h3 className="text-[clamp(1rem,2.2vw,1.6rem)] font-medium uppercase leading-none">
                  {category.title}
                </h3>

                <ul className="flex flex-col gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-light text-[rgba(12,12,12,0.7)] [font-size:clamp(0.85rem,1.4vw,1.05rem)]"
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
