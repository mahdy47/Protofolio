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
    "text-center",
    "text-[clamp(3rem,12vw,160px)]",
    "font-black",
    "uppercase",
    "leading-none",
    "tracking-tight",
    hero ? "hero-heading" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <h2 className={classes}>{children}</h2>;
}
