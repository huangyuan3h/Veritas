"use client";

import { Bell, MessageSquare, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface HeaderActionsProps {
  showAgentControls?: boolean;
}

export function HeaderActions({}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm transition hover:border-slate-300 md:flex">
        <Search className="size-4 text-slate-400" />
        <Input
          placeholder="Search resources..."
          className="h-8 w-40 border-none bg-transparent p-0 text-sm text-slate-600 focus-visible:ring-0"
          type="search"
        />
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="relative size-10 rounded-full border border-slate-200 text-slate-500 hover:text-slate-700"
      >
        <Bell className="size-4" />
        <span className="absolute right-1 top-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
          2
        </span>
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="size-10 rounded-full border border-slate-200 text-slate-500 hover:text-slate-700"
      >
        <MessageSquare className="size-4" />
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-2 text-slate-600 hover:text-slate-800"
      >
        <Avatar className="size-8">
          <AvatarFallback className="bg-blue-500 text-white">U</AvatarFallback>
        </Avatar>
        <div className="hidden text-left text-sm font-medium sm:block">
          User Name
        </div>
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}
