"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  ChevronDown,
  GraduationCap,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { colleges } from "@/data/colleges";
import type { College } from "@/lib/types/college";

const regions = [
  "Global",
  "North America",
  "Europe",
  "Asia-Pacific",
  "Latin America",
  "Middle East & Africa",
];

const focusAreas = [
  "Engineering",
  "Humanities",
  "Business",
  "Sciences",
  "Arts",
  "Social Impact",
];

export default function PublicCollegePage() {
  const [selectedRegion, setSelectedRegion] = useState("Global");
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);
  const [activeCollege, setActiveCollege] = useState<College | null>(null);

  const filteredColleges = useMemo(() => {
    return colleges
      .filter((college) => {
        const matchesRegion =
          selectedRegion === "Global" || college.region === selectedRegion;
        const matchesFocus =
          selectedFocus === null || college.focusAreas.includes(selectedFocus);
        return matchesRegion && matchesFocus;
      })
      .slice(0, 50);
  }, [selectedRegion, selectedFocus]);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Veritas College Atlas
              </p>
              <h1 className="text-xl font-bold text-slate-900">
                Discover the world’s leading universities
              </h1>
            </div>
          </div>
          <Button variant="secondary" className="hidden md:inline-flex">
            Join the Journey
          </Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Region
            </p>
            <div className="space-y-2">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full rounded-2xl border px-4 py-2 text-left text-sm font-semibold transition ${
                    selectedRegion === region
                      ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                      : "border-transparent hover:bg-slate-100"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Focus highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => {
                const isActive = selectedFocus === area;
                return (
                  <Badge
                    key={area}
                    variant={isActive ? "default" : "outline"}
                    className={`cursor-pointer rounded-2xl px-3 py-1 text-sm ${
                      isActive
                        ? "bg-blue-600 text-white hover:bg-blue-600"
                        : "border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                    onClick={() => setSelectedFocus(isActive ? null : area)}
                  >
                    {area}
                  </Badge>
                );
              })}
            </div>
          </div>

          <Card className="rounded-3xl border-blue-100 bg-blue-50/60 shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm text-blue-800">
                <Sparkles className="size-4" />
                How we curate
              </CardTitle>
              <CardDescription className="text-sm text-blue-600">
                Rankings synthesize academic strength, learner outcomes, and
                global collaboration impact. Data refreshes quarterly.
              </CardDescription>
            </CardHeader>
          </Card>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                {selectedRegion} Spotlight
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Top institutions shaping tomorrow
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <TrendingUp className="size-4 text-emerald-500" />
              Last updated Oct 2025
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="grid grid-cols-[80px_1.5fr_1fr_120px] gap-4 border-b border-slate-100 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span>Rank</span>
              <span>University</span>
              <span className="flex items-center gap-2">
                <MapPin className="size-3" />
                Location
              </span>
              <span className="flex items-center gap-1">
                Score
                <ChevronDown className="size-3" />
              </span>
            </div>

            <ul className="divide-y divide-slate-100">
              {filteredColleges.map((college) => (
                <li key={college.rank}>
                  <Sheet
                    open={activeCollege?.rank === college.rank}
                    onOpenChange={(open) =>
                      setActiveCollege(open ? college : null)
                    }
                  >
                    <SheetTrigger asChild>
                      <button className="grid w-full grid-cols-[80px_1.5fr_1fr_120px] items-center gap-4 px-6 py-4 text-left transition hover:bg-slate-50">
                        <span className="text-lg font-bold text-slate-400">
                          #{college.rank.toString().padStart(3, "0")}
                        </span>
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-slate-900">
                            {college.name}
                          </p>
                          <p className="text-sm text-slate-500 line-clamp-1">
                            Focus: {college.focusAreas.join(" · ")}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
                          {college.city}, {college.country}
                        </p>
                        <p className="text-sm font-semibold text-emerald-600">
                          {college.rankingScore.toFixed(2)}
                        </p>
                      </button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-full max-w-xl overflow-y-auto"
                    >
                      <SheetHeader className="p-6">
                        <SheetTitle className="flex items-start justify-between gap-4 text-2xl">
                          {college.name}
                          <Badge className="rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            Rank #{college.rank}
                          </Badge>
                        </SheetTitle>
                        <SheetDescription className="text-base text-slate-600">
                          {college.summary}
                        </SheetDescription>
                      </SheetHeader>
                      <div className="space-y-8 px-6 pb-10">
                        <Card className="rounded-3xl border-0 bg-slate-50">
                          <CardHeader className="flex flex-row items-start justify-between">
                            <div className="space-y-1">
                              <CardTitle className="text-sm uppercase text-slate-500">
                                Snapshot
                              </CardTitle>
                              <CardDescription className="text-slate-900 text-lg font-semibold">
                                {college.city}, {college.country}
                              </CardDescription>
                            </div>
                            <Badge
                              variant="secondary"
                              className="rounded-xl bg-white text-slate-700"
                            >
                              Founded {college.founded}
                            </Badge>
                          </CardHeader>
                          <CardContent className="grid gap-4 md:grid-cols-2">
                            <InfoStat
                              label="Acceptance rate"
                              value={`${Math.round(
                                college.acceptanceRate * 100
                              )}%`}
                            />
                            <InfoStat
                              label="Undergraduate"
                              value={`${college.undergraduatePopulation.toLocaleString()} students`}
                            />
                            <InfoStat
                              label="Graduation rate"
                              value={`${Math.round(
                                college.graduationRate * 100
                              )}%`}
                            />
                            <InfoStat
                              label="Tuition (est.)"
                              value={`$${college.tuitionUSD.toLocaleString()}`}
                            />
                          </CardContent>
                        </Card>

                        <div className="space-y-3">
                          <h3 className="text-sm font-semibold uppercase text-slate-500">
                            Signature strengths
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {college.focusAreas.map((area) => (
                              <Badge
                                key={area}
                                className="rounded-xl bg-emerald-50 px-3 py-1 text-emerald-700"
                              >
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-sm font-semibold uppercase text-slate-500">
                            Highlights
                          </h3>
                          <div className="space-y-4">
                            {college.highlights.map((highlight) => (
                              <Card
                                key={highlight.title}
                                className="rounded-3xl border-slate-200 bg-white shadow-sm"
                              >
                                <CardHeader>
                                  <CardTitle className="flex items-center gap-2 text-base">
                                    <Building2 className="size-4 text-blue-500" />
                                    {highlight.title}
                                  </CardTitle>
                                  <CardDescription className="text-sm text-slate-600">
                                    {highlight.description}
                                  </CardDescription>
                                </CardHeader>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            size="lg"
                            onClick={() =>
                              window.open(college.website, "_blank")
                            }
                            className="rounded-2xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                          >
                            Visit official site
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="rounded-2xl border-slate-200 px-6 py-3 text-slate-700"
                          >
                            Add to compare
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </li>
              ))}
            </ul>
        </div>
        </section>
      </main>
    </div>
  );
}

interface InfoStatProps {
  label: string;
  value: string;
}

function InfoStat({ label, value }: InfoStatProps) {
  return (
    <div className="rounded-2xl bg-white/60 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}
