import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

interface LiveProjectButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children?: ReactNode;
  href?: string;
  newTab?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

export default function LiveProjectButton({
  children,
  href,
  newTab,
  className,
  onClick,
  ...rest
}: LiveProjectButtonProps) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#00E5FF]/40 bg-[#0C0C0C]/40 px-7 py-3 font-mono text-xs uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] sm:px-9 sm:py-3.5 sm:text-sm ${
    className ?? ""
  }`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {children ?? "Live Project"}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children ?? "Live Project"}
    </button>
  );
}
