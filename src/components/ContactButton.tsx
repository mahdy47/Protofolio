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
  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(123deg,#00161F_0%,#007A96_38%,#00B8D9_72%,#00E5FF_100%)] px-7 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(0,229,255,0.5)] sm:px-9 sm:py-3.5 sm:text-sm ${
    className ?? ""
  }`;
  const style = { boxShadow: "0 4px 16px -6px rgba(0,229,255,0.35)" };

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
