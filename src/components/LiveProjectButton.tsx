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
  const classes = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${
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
