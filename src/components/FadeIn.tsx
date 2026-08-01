import type { ElementType, CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

type AllowedTags =
  | "div"
  | "span"
  | "p"
  | "section"
  | "nav"
  | "h1"
  | "h2"
  | "h3"
  | "li"
  | "ul"
  | "a"
  | "button";

interface FadeInProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: AllowedTags;
  className?: string;
  style?: CSSProperties;
  id?: string;
  ariaLabel?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className,
  style,
  id,
  ariaLabel,
  ...rest
}: FadeInProps) {
  const MotionComponent = motion.create(as as ElementType) as ElementType;

  return (
    <MotionComponent
      id={id}
      aria-label={ariaLabel}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
