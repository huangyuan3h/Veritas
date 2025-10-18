"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface HeaderActionsProps {}

export function HeaderActions({}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 transition hover:border-slate-300/80 md:flex">
        <Search className="size-4 text-slate-400" />
        <Input
          placeholder="Search resources..."
          className="h-8 w-44 border-none bg-transparent p-0 text-sm text-slate-600 focus-visible:ring-0"
          type="search"
        />
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="relative size-12 rounded-xl border border-slate-100 bg-white text-slate-600 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] transition hover:border-slate-200 hover:bg-slate-100 hover:text-slate-800"
      >
        <Bell className="size-4" />
        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-rose-500 to-rose-600 px-1 text-[10px] font-semibold text-white shadow-[0_6px_16px_-8px_rgba(225,29,72,0.7)]">
          2
        </span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-12 items-center gap-3 rounded-xl bg-white px-3 pr-4 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <Avatar className="size-9">
              <AvatarFallback className="bg-blue-500 text-white">
                U
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium sm:block">
              User Name
            </span>
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="text-xs uppercase tracking-wide text-slate-400">
            Account
          </DropdownMenuLabel>
          <DropdownMenuItem className="gap-2 text-sm text-slate-600">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-sm text-slate-600">
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 text-sm text-rose-600">
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
