import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import AnimatedText from "../components/AnimatedText";
import SectionHeading from "../components/SectionHeading";

const ABOUT_TEXT =
  "Cybersecurity student focused on offensive security with hands-on practice across web application security, networking, and Linux. I work through PortSwigger Web Security Academy labs and CTF challenges on platforms like Hack The Box, practicing vulnerabilities including SQL Injection, XSS, and IDOR. I use tools like Burp Suite, Nmap, and Wireshark to grow practical skills in penetration testing and security assessment.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center border-t border-[#D7E2EA]/10 px-6 py-24 sm:px-8 md:py-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <SectionHeading hero>About Me</SectionHeading>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[560px] text-center font-light leading-relaxed text-[#D7E2EA]/85 [font-size:clamp(1rem,2vw,1.3rem)]"
        />
      </div>

      <div className="mt-16 flex justify-center sm:mt-20 md:mt-24">
        <FadeIn delay={0.2} y={20}>
          <ContactButton href="mailto:abdelrahman.mahmoud0470@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
}
