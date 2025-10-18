"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { colleges } from "@/data/colleges";
import type { College } from "@/lib/types/college";

const regions = [
  "Global",
  "North America",
  "Europe",
  "Asia-Pacific",
  "Latin America",
  "Middle East & Africa",
] as const;

const focusAreas = [
  "Engineering",
  "Humanities",
  "Business",
  "Sciences",
  "Arts",
  "Social Impact",
] as const;

const rankingSchemes = [
  { value: "overall", label: "Overall" },
  { value: "qs", label: "QS" },
  { value: "usnews", label: "US News" },
] as const;

type RankingScheme = (typeof rankingSchemes)[number]["value"];

function getScore(college: College, scheme: RankingScheme) {
  const base = college.rankingScore;
  switch (scheme) {
    case "qs":
      return base + (college.focusAreas.includes("Engineering") ? 0.8 : 0);
    case "usnews":
      return base + (college.graduationRate - 0.8) * 20;
    default:
      return base;
  }
}

export default function SchoolsPage() {
  const [region, setRegion] = useState<(typeof regions)[number]>("Global");
  const [focus, setFocus] = useState<string | null>(null);
  const [scheme, setScheme] = useState<RankingScheme>("overall");

  const results = useMemo(() => {
    return colleges
      .filter((college) => {
        const matchRegion = region === "Global" || college.region === region;
        const matchFocus = !focus || college.focusAreas.includes(focus);
        return matchRegion && matchFocus;
      })
      .map((college) => ({
        college,
        score: Number(getScore(college, scheme).toFixed(2)),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
  }, [region, focus, scheme]);

  return (
    <div className="space-y-10">
      <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-8 py-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            <GraduationCap className="size-4" />
            Veritas College Atlas
          </span>
          <h1 className="text-3xl font-semibold text-slate-900">
            Discover the world’s leading universities
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Compare institutions across regions, disciplines, and ranking
            frameworks. Curated by our research team with quarterly updates.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="ghost"
            className="rounded-xl border border-slate-200"
          >
            Methodology
          </Button>
          <Button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Join the Journey
          </Button>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Region
            </p>
            <ul className="space-y-2">
              {regions.map((item) => {
                const active = item === region;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setRegion(item)}
                      className={cnRegionButton(active)}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Focus Highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => {
                const active = focus === area;
                return (
                  <Badge
                    key={area}
                    variant={active ? "default" : "outline"}
                    className={cnFocusBadge(active)}
                    onClick={() => setFocus(active ? null : area)}
                  >
                    {area}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Sparkles className="size-4 text-amber-500" />
              How we curate
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Rankings synthesize academic strength, learner outcomes, and
              global collaboration impact. Data refreshes quarterly.
            </p>
          </div>
        </aside>

        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Global Spotlight
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Top institutions shaping tomorrow
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Compass className="size-4 text-emerald-500" />
              Last updated Oct 2025
            </div>
          </div>

          <Tabs
            defaultValue="overall"
            value={scheme}
            onValueChange={(value) => setScheme(value as RankingScheme)}
          >
            <TabsList className="rounded-lg border border-slate-200 bg-slate-50 p-1">
              {rankingSchemes.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-md px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={scheme} className="mt-4">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                      <TableHead className="w-24 px-6">Rank</TableHead>
                      <TableHead className="px-6">University</TableHead>
                      <TableHead className="px-6">Location</TableHead>
                      <TableHead className="w-24 px-6 text-right">
                        Score
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map(({ college, score }, index) => (
                      <TableRow
                        key={`${college.rank}-${scheme}`}
                        className="text-sm text-slate-700"
                      >
                        <TableCell className="px-6 py-4 font-semibold text-slate-400">
                          #{String(index + 1).padStart(3, "0")}
                        </TableCell>
                        <TableCell className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
                              {college.name}
                              {index === 0 && (
                                <BadgeCheck className="size-4 text-blue-500" />
                              )}
                            </div>
                            <p className="text-xs text-slate-500">
                              Focus: {college.focusAreas.join(" · ")}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-slate-400" />
                            {college.city}, {college.country}
                          </div>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-right text-base font-semibold text-emerald-600">
                          {score.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}

function cnRegionButton(active: boolean) {
  return [
    "w-full rounded-xl border px-4 py-2 text-left text-sm font-semibold transition",
    active
      ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50",
  ].join(" ");
}

function cnFocusBadge(active: boolean) {
  return [
    "cursor-pointer rounded-lg px-3 py-1 text-xs",
    active
      ? "bg-blue-600 text-white hover:bg-blue-600"
      : "border-slate-200 text-slate-600 hover:bg-slate-100",
  ].join(" ");
}
