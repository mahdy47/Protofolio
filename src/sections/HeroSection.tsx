import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import LiveProjectButton from "../components/LiveProjectButton";
import Magnet from "../components/Magnet";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const PROFILE_TITLE = "Penetration Tester";

const PROFILE_DESCRIPTION =
  "Junior Penetration Tester focused on Web Application Security and Network Security — sharpened through PortSwigger labs, CTF challenges, and tools like Burp Suite and Nmap.";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-x-clip">
      <FadeIn
        as="nav"
        delay={0}
        y={-16}
        ariaLabel="Primary"
        className="relative z-10"
      >
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 px-6 py-5 md:px-10">
          <span className="whitespace-nowrap font-mono text-xs text-[#D7E2EA]/80 sm:text-sm">
            <span className="text-[#00E5FF]">guest</span>
            <span className="text-[#D7E2EA]/40">@</span>
            <span className="hidden sm:inline">portfolio</span>
            <span className="text-[#D7E2EA]/40">:~$</span>
          </span>

          <div className="flex items-center gap-3 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-wider text-[#D7E2EA]/75 transition-colors duration-200 hover:text-[#00E5FF] sm:text-sm"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="flex flex-1 flex-col justify-center gap-12 px-6 py-12 md:px-10 lg:gap-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <FadeIn delay={0.2} y={40} className="w-full">
              <h1 className="hero-heading w-full text-center text-[clamp(2.4rem,11vw,140px)] font-black uppercase leading-[0.9] tracking-tight lg:text-left lg:text-[clamp(2rem,6.5vw,112px)]">
                <span className="block whitespace-nowrap">Abdelrahman</span>
                <span className="block whitespace-nowrap">Elmahdy</span>
              </h1>
            </FadeIn>
          </div>

          <div className="shrink-0">
            <FadeIn delay={0.45} y={30}>
              <Magnet
                padding={140}
                strength={3}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
              >
                <div className="relative aspect-[3/4] w-[220px] rounded-2xl border border-[#00E5FF]/30 bg-[#121212] sm:w-[280px] lg:w-[300px] xl:w-[330px] 2xl:w-[350px]">
                  <span className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-[#00E5FF]/60" />
                  <span className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-[#00E5FF]/60" />
                  <span className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-[#00E5FF]/60" />
                  <span className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-[#00E5FF]/60" />
                  <img
                    src="/profile-photo.jpg"
                    alt="Abdelrahman Elmahdy"
                    width={960}
                    height={1280}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </Magnet>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn delay={0.3} y={20}>
            <div className="flex max-w-[280px] flex-col gap-3 text-center sm:max-w-[400px] md:max-w-[480px] lg:text-left">
              <p className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] sm:text-sm">
                {PROFILE_TITLE}
              </p>
              <p className="font-light leading-relaxed text-[#D7E2EA]/80 [font-size:clamp(0.95rem,1.5vw,1.25rem)]">
                {PROFILE_DESCRIPTION}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <LiveProjectButton href="#projects">View Projects</LiveProjectButton>
              <LiveProjectButton href="/cv.pdf" newTab>
                Download CV
              </LiveProjectButton>
              <ContactButton href="#contact" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
