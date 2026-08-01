import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import SectionHeading from "../components/SectionHeading";

interface ContactLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

const CONTACT_LINKS: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/mahdy47", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdelrahman-el-mahdy-2367aa330",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:abdelrahman.mahmoud0470@gmail.com",
    icon: Mail,
  },
  { label: "Phone", href: "tel:+201026411847", icon: Phone },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <SectionHeading hero>Contact</SectionHeading>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <p className="max-w-[480px] text-center font-light leading-relaxed text-[#D7E2EA] [font-size:clamp(1rem,1.8vw,1.25rem)]">
            Open to Junior Penetration Testing opportunities.
          </p>
        </FadeIn>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {CONTACT_LINKS.map((link, i) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");
            return (
              <FadeIn key={link.label} delay={0.2 + i * 0.1} y={20}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2.5 rounded-full border border-[#D7E2EA]/30 px-8 py-3.5 font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:border-[#00E5FF] hover:text-[#00E5FF]"
                >
                  <Icon size={18} strokeWidth={2} />
                  {link.label}
                </a>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href="mailto:abdelrahman.mahmoud0470@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
}
