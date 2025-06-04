"use client";

import Link from "next/link";
import cn from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-lg  bg-yellow-500 text-base px-4 py-2  lg:px-6 lg:py-3 lg:text-lg font-semibold text-black shadow-md transition-all hover:bg-yellow-600",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-2xltext-lg bg-yellow-500 px-6 py-3  font-semibold text-black shadow-md transition-all hover:bg-yellow-600",
        className
      )}
    >
      {children}
    </button>
  );
}
