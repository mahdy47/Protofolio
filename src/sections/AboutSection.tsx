import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import AnimatedText from "../components/AnimatedText";
import SectionHeading from "../components/SectionHeading";

const ABOUT_TEXT =
  "I'm a cybersecurity student focused on offensive security. My learning journey has been hands-on: PortSwigger Web Security Academy labs and CTF challenges on platforms like Hack The Box, where I've practiced vulnerabilities such as SQL Injection, XSS, and IDOR. I'm building a strong foundation in web application security, networking, and Linux, using tools like Burp Suite, Nmap, and Wireshark to grow my skills in ethical hacking and security assessment.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <SectionHeading hero>About Me</SectionHeading>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>

        <div className="mt-16 flex justify-center sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton href="mailto:abdelrahman.mahmoud0470@gmail.com" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
