"use client";

import { HeaderTitle } from "./header-title";
import { HeaderActions } from "./header-actions";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Journey" }: HeaderProps) {
  return (
    <header className="flex h-[65px] items-center justify-between gap-6 border-b border-slate-200 bg-white/80 px-6 backdrop-blur">
      <HeaderTitle title={title} />
      <HeaderActions />
    </header>
  );
}
