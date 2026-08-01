import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  hero?: boolean;
  index?: string;
  label?: string;
  className?: string;
}

export default function SectionHeading({
  children,
  hero = false,
  index,
  label,
  className,
}: SectionHeadingProps) {
  const headingClasses = [
    "text-[clamp(2.5rem,7vw,6.5rem)]",
    "font-black",
    "uppercase",
    "leading-[0.9]",
    "tracking-tight",
    "text-center",
    hero ? "hero-heading" : "text-[#D7E2EA]",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col items-center gap-5">
      {label && (
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#00E5FF]/80 sm:text-sm">
          {index ? `[ ${index} ]` : ""}
          {index ? " // " : ""}
          {label}
        </span>
      )}
      <h2 className={headingClasses}>{children}</h2>
    </div>
  );
}
