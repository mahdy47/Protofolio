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
        y={-20}
        ariaLabel="Primary"
        className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="flex flex-1 flex-col justify-center gap-10 px-6 pb-7 pt-10 sm:pb-8 md:px-10 md:pb-10 lg:gap-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <FadeIn delay={0.15} y={40} className="w-full lg:flex-1">
            <h1 className="hero-heading w-full text-center text-[clamp(2.4rem,11vw,150px)] font-black uppercase leading-[0.88] tracking-tight lg:text-left lg:text-[clamp(1.9rem,6.5vw,120px)]">
              <span className="block whitespace-nowrap">Abdelrahman</span>
              <span className="block whitespace-nowrap">Elmahdy</span>
            </h1>
          </FadeIn>

          <div className="shrink-0">
            <FadeIn delay={0.6} y={30}>
              <Magnet
                padding={150}
                strength={3}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
              >
                <div className="aspect-[3/4] w-[220px] overflow-hidden rounded-[40px] border border-[#00E5FF]/40 bg-[#121212] sm:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[380px]">
                  <img
                    src="/profile-photo.jpg"
                    alt="Abdelrahman Elmahdy"
                    width={960}
                    height={1280}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Magnet>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn delay={0.35} y={20}>
            <div className="flex max-w-[280px] flex-col gap-3 text-center sm:max-w-[380px] md:max-w-[460px] lg:text-left">
              <p className="text-xs font-medium uppercase tracking-widest text-[#00E5FF] sm:text-sm">
                {PROFILE_TITLE}
              </p>
              <p className="font-light uppercase leading-snug tracking-wide text-[#D7E2EA] [font-size:clamp(0.75rem,1.4vw,1.35rem)]">
                {PROFILE_DESCRIPTION}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
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
