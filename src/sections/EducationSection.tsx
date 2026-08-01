import { GraduationCap } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function EducationSection() {
  return (
    <section className="rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <SectionHeading className="mb-16 sm:mb-20 md:mb-28">Education</SectionHeading>

      <div className="mx-auto flex justify-center">
        <FadeIn delay={0.1} className="w-full max-w-sm">
          <div className="flex h-full flex-col gap-6 rounded-[30px] border border-[rgba(12,12,12,0.15)] p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(0,229,255,0.12)] text-[#0085A0]">
              <GraduationCap size={26} strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium uppercase leading-none sm:text-xl">
                El Shrouk Academy
              </h3>
              <p className="text-sm font-light text-[rgba(12,12,12,0.6)]">
                Cairo, Egypt
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-widest text-[#0085A0]">
                2023 – 2027
              </span>
              <p className="text-sm font-light text-[rgba(12,12,12,0.6)]">
                Expected graduation 2027
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
