"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "./constants"
import type { NavItem } from "./types"
import { cn } from "@/lib/utils"
import { useNavigation } from "@/contexts/navigation-context"
import {
  Compass,
  Library,
  School,
  FileCheck2,
  PenSquare,
  UsersRound,
  ArrowLeftToLine,
  Sparkles,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const iconMap: Record<NavItem["icon"], LucideIcon> = {
  Compass,
  Library,
  School,
  FileCheck2,
  PenSquare,
  UsersRound,
}

export function Navigation() {
  const pathname = usePathname()
  const { isOpen, navWidth, toggleNav } = useNavigation()
  const isCollapsed = !isOpen

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCollapsed) {
      event.preventDefault()
      toggleNav()
    }
  }

  return (
    <aside
      className="flex h-screen flex-col border-r border-slate-200 bg-white/90 backdrop-blur transition-[width] duration-300 ease-in-out"
      style={{ width: navWidth }}
    >
      <div
        className={cn(
          "flex items-center justify-between px-4 py-5 transition-all duration-300 ease-in-out",
          isCollapsed && "flex-col gap-3 px-0 py-6",
        )}
      >
        <Link
          href="/"
          onClick={handleBrandClick}
          className={cn(
            "flex items-center gap-3 transition-all duration-300 ease-in-out",
            isCollapsed && "justify-center",
          )}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 font-semibold text-white">
            V
          </div>
          {isOpen && (
            <div className="leading-tight opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-base font-semibold text-slate-900">Veritas</p>
              <p className="text-xs font-medium tracking-wide text-amber-600 uppercase">
                Learning Atlas
              </p>
            </div>
          )}
        </Link>
        {!isCollapsed && (
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleNav}
            className="size-8 rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 ease-in-out hover:bg-slate-200 hover:text-slate-800"
          >
            <ArrowLeftToLine className="size-4" />
          </Button>
        )}
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item, index) => {
          const Icon = iconMap[item.icon]
          const active = pathname === item.href || (pathname === "/" && index === 0)

          return (
            <Tooltip key={item.href} disableHoverableContent={!isCollapsed}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center font-medium transition-all duration-300 ease-in-out",
                    isCollapsed
                      ? "justify-center rounded-xl py-3 text-slate-500"
                      : "gap-3 rounded-2xl px-3 py-2 text-sm text-slate-600",
                    active
                      ? "bg-gradient-to-r from-amber-100 to-rose-100 text-rose-700"
                      : "hover:bg-slate-100 hover:text-slate-900",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-4 transition-colors duration-200",
                      active ? "text-current" : "text-inherit",
                    )}
                  />
                  {isOpen && (
                    <span className="transition-opacity duration-300 ease-in-out">
                      {item.label}
                    </span>
                  )}
                </Link>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent
                  side="right"
                  sideOffset={12}
                  className="bg-slate-800 text-white"
                >
                  {item.label}
                </TooltipContent>
              )}
            </Tooltip>
          )
        })}
      </nav>

      <div className="px-3 pb-6">
        {isOpen ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Sparkles className="size-4 text-amber-500" />
              Keep the curiosity glowing
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Explore new chapters, save favorites, and follow your lifelong learning
              journey.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 transition-all duration-300 ease-in-out">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-amber-500">
              <Sparkles className="size-5" />
            </div>
            <span className="text-xs font-medium text-slate-500">Grow</span>
          </div>
        )}
      </div>
    </aside>
  )
}
