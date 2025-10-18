"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HeaderSearch() {
  return (
    <div className="relative w-72 max-w-full">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      <Input
        placeholder="Search resources..."
        className="h-10 rounded-2xl pl-10"
        type="search"
        autoComplete="off"
      />
    </div>
  );
}
