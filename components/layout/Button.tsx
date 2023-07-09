import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
};

const Button = ({ href, ariaLabel, children }: Props) => {
  return (
    <Link
      href={href}
      className="p-2 w-max rounded-full disabled:opacity-50 hover:bg-primary-05"
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default Button;
