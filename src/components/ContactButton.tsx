import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

interface ContactButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export default function ContactButton({
  children,
  href,
  className,
  onClick,
  ...rest
}: ContactButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full bg-[linear-gradient(123deg,#00161F_0%,#007A96_38%,#00B8D9_72%,#00E5FF_100%)] px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${
    className ?? ""
  }`;
  const style = {
    boxShadow:
      "0px 4px 4px rgba(0, 229, 255, 0.25), inset 4px 4px 12px rgba(0, 229, 255, 0.3)",
    outline: "2px solid #ffffff",
    outlineOffset: "-3px",
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} style={style}>
        {children ?? "Contact Me"}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} style={style} {...rest}>
      {children ?? "Contact Me"}
    </button>
  );
}
