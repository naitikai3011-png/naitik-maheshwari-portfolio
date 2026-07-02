import React, { useState } from "react";
import { Link } from "wouter";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Kbd } from "@/components/ui/kbd";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer
} from "recharts";
import { ChevronDown, BarChart2, MessageSquare, Briefcase, Search, Code2, Palette, Info } from "lucide-react";

const hardSkills = [
  { name: "Civic Engagement & Policy", short: "Civic", level: 95, icon: Briefcase },
  { name: "Research & Data Analysis",  short: "Research", level: 90, icon: Search },
  { name: "Leadership Coordination",   short: "Leadership", level: 88, icon: BarChart2 },
  { name: "Public Speaking",           short: "Speaking", level: 86, icon: MessageSquare },
  { name: "Microsoft Office & G Suite",short: "Productivity", level: 80, icon: MessageSquare },
  { name: "Python",                    short: "Python", level: 70, icon: Code2 },
  { name: "Canva & Design Tools",      short: "Design", level: 75, icon: Palette },
];

const softSkills = [
  "Creative and Critical Thinking",
  "Strong Verbal and Written Communication",
  "Collaboration and Team Leadership",
  "Cultural Awareness and Empathy",
  "Public Speaking",
  "Strategic Planning",
  "Problem Solving",
  "Adaptability",
  "Servant Leadership",
  "Organizational Management",
  "Conflict Resolution",
  "Active Listening",
];

const radarData = hardSkills.map(s => ({ subject: s.short, A: s.level }));

const chartConfig = {
  A:     { label: "Proficiency", color: "hsl(var(--primary))" },
  level: { label: "Level",       color: "hsl(var(--primary))" },
};

const COLORS = [
  "hsl(var(--primary))",
  "hsl(265 89% 68%)",
  "hsl(230 80% 62%)",
  "hsl(200 75% 55%)",
  "hsl(240 60% 60%)",
  "hsl(270 65% 60%)",
  "hsl(210 70% 58%)",
];

export default function Skills() {
  const [showDetails, setShowDetails] = useState(true);
  const [chartType, setChartType] = useState<"radar" | "bar">("radar");

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Skills</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-foreground">Core Competencies</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A balanced mix of technical capabilities and interpersonal skills developed through diverse leadership roles, research projects, and civic engagement.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg border border-border">
          <Switch id="show-details" checked={showDetails} onCheckedChange={setShowDetails} />
          <Label htmlFor="show-details" className="cursor-pointer text-sm font-medium">Show Details</Label>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted border border-border p-1 rounded-xl mb-8">
          <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Overview</TabsTrigger>
          <TabsTrigger value="hard"     className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Hard Skills</TabsTrigger>
          <TabsTrigger value="soft"     className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Soft Skills</TabsTrigger>
        </TabsList>

        {/* ── Overview ── */}
        <TabsContent value="overview" className="animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Chart card */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground text-base">
                  <span>Skill Visualization</span>
                  <div className="flex items-center gap-1 bg-muted border border-border rounded-lg p-1">
                    {(["radar", "bar"] as const).map(t => (
                      <button
                        key={t}
                        onClick={() => setChartType(t)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          chartType === t
                            ? "bg-white text-primary shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t === "radar" ? "Radar" : "Bar"}
                      </button>
                    ))}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {chartType === "radar" ? (
                  <ChartContainer config={chartConfig} className="h-56 w-full">
                    <RadarChart data={radarData} margin={{ top: 8, right: 16, bottom: 8, left: 16 }}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      />
                      <Radar
                        name="Proficiency"
                        dataKey="A"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.18}
                        strokeWidth={2}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ChartContainer>
                ) : (
                  <ChartContainer config={chartConfig} className="h-56 w-full">
                    <BarChart data={hardSkills} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 80 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis type="category" dataKey="short" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} width={76} />
                      <Bar dataKey="level" radius={[0, 6, 6, 0]}>
                        {hardSkills.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Bar>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ChartContainer>
                )}
              </CardContent>
            </Card>

            {/* Skill Intersections */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground text-base">
                  <span>Skill Intersections</span>
                  <div className="flex gap-2">
                    <Kbd className="bg-muted border-border text-muted-foreground">Shift</Kbd>
                    <Kbd className="bg-muted border-border text-muted-foreground">↑</Kbd>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  {
                    title: "Policy & Research",
                    desc: "Combining data analysis with civic awareness to produce well-researched policy positions and persuasive arguments for competitions, presentations, and government initiatives.",
                  },
                  {
                    title: "Leadership & Empathy",
                    desc: "Utilizing cultural awareness to effectively manage and organize youth teams in 4-H district initiatives, SAB, and Hindu YUVA, ensuring inclusive and engaging events across diverse communities.",
                  },
                  {
                    title: "CivicTech & AI Research",
                    desc: "Applying Python, data modeling, and policy analysis to design AI-driven civic tech systems — including predictive analytics for social services equity and frameworks for healthy human-AI collaboration.",
                  },
                ].map((item, i) => (
                  <Collapsible key={i} defaultOpen={i === 0} className="space-y-1">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted hover:bg-primary/5 rounded-lg border border-border transition-colors font-medium text-sm text-foreground">
                      {item.title}
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 text-sm text-muted-foreground bg-white rounded-lg border border-border leading-relaxed">
                      {item.desc}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>

            {/* Top sliders */}
            <Card className="glass-card border-border md:col-span-2">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Top Proficiencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {hardSkills.slice(0, 3).map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-foreground flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-primary" />
                          {skill.short}
                        </span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Slider
                        defaultValue={[skill.level]}
                        max={100}
                        step={1}
                        disabled
                        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── Hard Skills ── */}
        <TabsContent value="hard" className="animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hardSkills.map((skill, idx) => (
              <Card key={idx} className="glass-card border-border overflow-hidden group hover:border-primary/30 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/8 border border-primary/15 text-primary group-hover:bg-primary/15 transition-colors">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base leading-tight text-foreground">{skill.name}</h3>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-bold shrink-0">
                          {skill.level}%
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>Proficiency level: {skill.level}/100</TooltipContent>
                    </Tooltip>
                  </div>
                  {showDetails && (
                    <div className="space-y-2 mt-2">
                      <Progress value={skill.level} className="h-1.5 bg-muted [&>div]:bg-primary" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── Soft Skills ── */}
        <TabsContent value="soft" className="animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Interpersonal & Cognitive Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[280px] w-full rounded-md pr-4">
                  <div className="flex flex-wrap gap-2.5">
                    {softSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all hover:-translate-y-0.5 cursor-default text-foreground shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground text-base">
                  <Info className="w-4 h-4 text-primary" />
                  Why These Skills Matter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator />
                {[
                  { skill: "Servant Leadership", note: "Core to 4-H mission — leading by serving others first" },
                  { skill: "Cultural Awareness", note: "Essential for Hindu YUVA + diverse Cobb County community" },
                  { skill: "Strategic Planning", note: "Applied as Cobb County 4-H President planning district events" },
                  { skill: "Active Listening", note: "Key in government roles on Youth Commission" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs shrink-0 mt-0.5">
                      {item.skill}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
