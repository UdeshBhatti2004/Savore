"use client";

import { ReactNode } from "react";

export default function ScrollLink({
  target,
  offset = -80,
  children,
  className = "",
  onClick,
}: {
  target: string;
  offset?: number;
  children: ReactNode;
  className?: string;
  onClick?: () => void;   
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const el = document.getElementById(target);
        const lenis = (window as any).lenis;

        if (el && lenis) {
          lenis.scrollTo(el, { offset });
        }

        
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
}
