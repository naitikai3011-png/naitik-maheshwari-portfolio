import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Sparkles, ArrowUpRight, Trophy, Star, Zap, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import profilePhoto from "@/assets/profile.jpeg";

const highlights = [
  {
    icon: Trophy,
    label: "National Champions",
    desc: "1st Place – National FCS Consumer Judging Team Championship",
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-200",
  },
  {
    icon: Zap,
    label: "AI Researcher",
    desc: "Agency Engine – original AI behavioral framework for human-AI interaction",
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-200",
  },
  {
    icon: Users,
    label: "Civic Leader",
    desc: "Cobb County Youth Commission member + Georgia 4-H District Officer",
    color: "text-primary",
    bg: "bg-primary/5 border-primary/20",
  },
  {
    icon: Star,
    label: "YUVA Founder",
    desc: "Founded Wheeler High School's Hindu YUVA chapter from scratch",
    color: "text-violet-500",
    bg: "bg-violet-50 border-violet-200",
  },
];

const skillRadarData = [
  { subject: "Civic Engagement", A: 95 },
  { subject: "Research", A: 90 },
  { subject: "Public Speaking", A: 88 },
  { subject: "Leadership", A: 92 },
  { subject: "Policy Design", A: 85 },
  { subject: "Tech / AI", A: 72 },
];

const chartConfig = {
  A: { label: "Proficiency", color: "hsl(var(--primary))" },
};

const recentActivity = [
  { label: "Georgia 4-H State Board Campaign", date: "2025", type: "Government" },
  { label: "NW District 4-H Project Achievement – Human Rights", date: "2025", type: "1st Place" },
  { label: "Hindu YUVA Wheeler Chapter Founded", date: "2024", type: "Community" },
  { label: "National FCS Consumer Judging Championship", date: "2024", type: "1st Place" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative -mt-8 pt-8">
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-violet-400 to-purple-300 z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="z-10 w-full flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative mt-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-violet-300/20 to-purple-200/30 scale-[1.12] blur-sm" />
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20 shadow-lg mx-auto relative">
              <AvatarImage src={profilePhoto} className="object-cover" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6 text-sm font-medium text-primary shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Civic Leader · Researcher · Entrepreneur
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-extrabold tracking-tighter uppercase font-display pb-2 leading-none"
          data-testid="hero-name"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
            Naitik
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground">
            Maheshwari
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-6 font-light tracking-wide leading-relaxed"
        >
          Motivated honors student and youth leader driving civic change through public policy,
          AI-powered research, and servant leadership across Georgia and beyond.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mt-12 mb-10"
        >
          {[
            { value: "4.4",  label: "GPA",           sub: "Honors & AP" },
            { value: "10+",  label: "Major Roles",    sub: "Civic & Community" },
            { value: "7",    label: "Awards",         sub: "District – National" },
            { value: "6+",   label: "Projects",       sub: "Active & Research" },
          ].map(({ value, label, sub }) => (
            <Card key={label} className="glass-card flex flex-col items-center justify-center p-5 text-center hover:border-primary/40 hover:shadow-md transition-all">
              <span className="text-3xl font-display font-bold text-foreground mb-1">{value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</span>
              <span className="text-[10px] text-muted-foreground/70 mt-0.5">{sub}</span>
            </Card>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button asChild size="lg" className="rounded-full px-8 shadow-sm">
            <Link href="/projects" data-testid="hero-projects-btn">
              View Projects <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/5 hover:border-primary/40">
            <Link href="/about" data-testid="hero-about-btn">
              About Me <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/5 hover:border-primary/40">
            <Link href="/experience" data-testid="hero-experience-btn">
              Experience
            </Link>
          </Button>
        </motion.div>

        <Separator className="w-full max-w-3xl mb-16 opacity-50" />

        {/* Highlights Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6 text-left">
            <Star className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-display font-bold uppercase tracking-tight text-foreground">Highlights</h2>
            <Separator className="flex-1" />
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {highlights.map((h) => (
                <CarouselItem key={h.label} className="pl-4 basis-full sm:basis-1/2">
                  <Card className={`glass-card border h-full ${h.bg} hover:shadow-md transition-all`}>
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl bg-white/70 border border-white/80 shrink-0 ${h.color}`}>
                        <h.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm mb-1">{h.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </motion.div>

        {/* Skills Radar + Recent Activity — side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Radar Chart */}
          <Card className="glass-card border-border">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Skill Overview</h3>
              </div>
              {!loaded ? (
                <Skeleton className="w-full h-48 rounded-xl" />
              ) : (
                <ChartContainer config={chartConfig} className="h-48 w-full">
                  <RadarChart data={skillRadarData} margin={{ top: 8, right: 16, bottom: 8, left: 16 }}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Radar
                      name="Proficiency"
                      dataKey="A"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RadarChart>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card border-border">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 py-2 border-b border-border/50 last:border-0">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-snug truncate">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
                    </div>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Badge
                          className={`shrink-0 text-xs cursor-default ${
                            item.type === "1st Place"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : item.type === "Government"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-primary/5 text-primary border-primary/20"
                          }`}
                        >
                          {item.type}
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-48 text-xs text-muted-foreground glass-panel border-border">
                        {item.type === "1st Place" ? "Award-winning achievement at district, state, or national level" :
                         item.type === "Government" ? "Civic or government role representing youth" :
                         "Community building and cultural leadership"}
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="sm" className="w-full mt-3 text-xs text-muted-foreground hover:text-primary">
                    <Link href="/awards">View all awards →</Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>See the full awards & honors list</TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>
        </motion.div>

        {/* Wheeler STEM badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center items-center gap-3 text-sm text-muted-foreground mb-8"
        >
          <img src="/wheeler-logo.png" alt="Wheeler High School" className="h-7 w-auto opacity-70" />
          <Separator orientation="vertical" className="h-4" />
          <span>Wheeler High School STEM Magnet · Class of 2028</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-primary font-semibold">GPA 4.4</span>
        </motion.div>
      </div>
    </div>
  );
}
