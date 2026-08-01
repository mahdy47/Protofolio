import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  hero?: boolean;
  className?: string;
}

export default function SectionHeading({
  children,
  hero = false,
  className,
}: SectionHeadingProps) {
  const classes = [
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

  return <h2 className={classes}>{children}</h2>;
}
