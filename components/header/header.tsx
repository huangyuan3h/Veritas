"use client";

import { HeaderSearch } from "./header-search";
import { HeaderTitle } from "./header-title";
import { HeaderActions } from "./header-actions";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({ title = "Dashboard", subtitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-6 border-b border-slate-200 bg-white/80 px-8 py-4 backdrop-blur">
      <HeaderTitle title={title} subtitle={subtitle} />
      <div className="flex flex-1 items-center justify-end gap-4">
        <HeaderSearch />
        <HeaderActions />
      </div>
    </header>
  );
}
