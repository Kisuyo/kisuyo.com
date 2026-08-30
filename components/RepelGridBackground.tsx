"use client";

import type { ReactNode } from "react";

interface RepelGridBackgroundProps {
  children: ReactNode;
}

export default function RepelGridBackground({
  children,
}: RepelGridBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--primary-900)]">
      <div className="flex min-h-screen items-center justify-center px-5 text-center">
        {children}
      </div>
    </div>
  );
}
