"use client";

import { Bell, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <Button
        size="icon"
        variant="ghost"
        className="relative size-10 rounded-full border border-slate-200"
      >
        <Bell className="size-4" />
        <span className="absolute right-1 top-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
          2
        </span>
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="size-10 rounded-full border border-slate-200"
      >
        <MessageSquare className="size-4" />
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-2"
      >
        <Avatar className="size-8">
          <AvatarFallback className="bg-blue-500 text-white">U</AvatarFallback>
        </Avatar>
        <div className="hidden text-left text-sm font-medium text-slate-700 sm:block">
          User Name
        </div>
        <ChevronDown className="size-4 text-slate-500" />
      </Button>
    </div>
  );
}
