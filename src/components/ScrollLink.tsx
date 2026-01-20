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
  onClick?: () => void;   // ✅ allow onClick
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

        // ✅ call optional onClick (used for closing mobile menu)
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
}
