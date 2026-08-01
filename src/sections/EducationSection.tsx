import { GraduationCap } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function EducationSection() {
  return (
    <section className="relative border-t border-[#D7E2EA]/10 px-6 py-24 sm:px-8 md:py-32">
      <SectionHeading index="05" label="education" hero className="mb-14 sm:mb-20">
        Education
      </SectionHeading>

      <div className="mx-auto flex justify-center">
        <FadeIn delay={0.1} className="w-full max-w-md">
          <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/45 hover:shadow-[0_16px_48px_-16px_rgba(0,229,255,0.28)]">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00E5FF]/25 bg-[#00E5FF]/10 text-[#00E5FF]">
              <GraduationCap size={24} strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium uppercase leading-none text-[#D7E2EA] sm:text-2xl">
                El Shrouk Academy
              </h3>
              <p className="text-sm font-light text-[#D7E2EA]/60">Cairo, Egypt</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">
                2023 – 2027
              </span>
              <p className="text-sm font-light text-[#D7E2EA]/60">
                Expected graduation 2027
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
