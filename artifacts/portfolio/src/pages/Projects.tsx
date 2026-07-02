import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import {
  ContextMenu, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuTrigger
} from "@/components/ui/context-menu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Empty } from "@/components/ui/empty";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ExternalLink, Play, BookOpen, LayoutGrid, LayoutList,
  Zap, FlaskConical, Globe, Trophy, Users, Cpu, ChevronRight,
  Copy, Share2, Star, ArrowUpRight
} from "lucide-react";
import { toast } from "sonner";

type ProjectStatus = "Active" | "Complete" | "Research" | "National 1st" | "State 1st";
type ProjectCategory = "Civic Tech" | "AI Research" | "Community" | "Competition" | "STEM";

interface ProjectLink {
  label: string;
  url: string;
  type: "demo" | "case-study" | "org" | "competition";
}

interface Project {
  id: string;
  title: string;
  role: string;
  status: ProjectStatus;
  year: string;
  category: ProjectCategory;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  links: ProjectLink[];
  featured: boolean;
  impact: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    id: "predictive-lab",
    title: "Marietta Predictive Social Equity Lab",
    role: "Founder & Lead Strategist",
    status: "Research",
    year: "2024 – Present",
    category: "Civic Tech",
    shortDesc: "AI-driven predictive analytics framework to shift Cobb County social services from reactive to proactive — targeting housing instability, food insecurity, and mental health access.",
    longDesc: "Conceived a CivicTech initiative proposing an AI-driven predictive analytics framework to help Cobb County shift social services from reactive to proactive. The framework targets housing instability, food insecurity, and mental health access through ML-based early warning models. Resource-allocation optimization and cost-benefit models draw on Industrial Engineering and Finance principles, proposing a system that identifies at-risk households before crises occur and routes them to the appropriate services preemptively.",
    tags: ["AI/ML", "Predictive Analytics", "Policy Design", "CivicTech", "Systems Thinking"],
    links: [
      { label: "View Case Study", url: "https://www.cobbboc.org", type: "case-study" },
    ],
    featured: true,
    impact: "Proposed framework covering 760,000+ Cobb County residents",
    icon: Cpu,
  },
  {
    id: "agency-engine",
    title: "Agency Engine",
    role: "Lead Researcher & Architect",
    status: "Research",
    year: "2024 – Present",
    category: "AI Research",
    shortDesc: "Original AI behavioral framework using an 'Adversarial Partner' model to counter over-reliance on generative AI and reinforce human critical thinking.",
    longDesc: "Designed an original AI behavioral framework exploring how to counter over-reliance on generative AI through an 'Adversarial Partner' model that uses productive friction to reinforce human critical thinking. The system is designed to deliberately challenge users' reasoning rather than simply completing their requests — fostering analytical independence. Researched human-AI interaction principles, cognitive load theory, and outlined a supporting technical architecture for deployment in educational and professional settings.",
    tags: ["AI Behavioral Research", "Framework Design", "HCI", "Critical Thinking", "NLP"],
    links: [],
    featured: true,
    impact: "Novel framework addressing AI cognitive dependency",
    icon: Zap,
  },
  {
    id: "yuva",
    title: "Hindu YUVA – Wheeler Chapter",
    role: "Founder & President",
    status: "Active",
    year: "2024 – Present",
    category: "Community",
    shortDesc: "Established Wheeler High School's first Hindu YUVA chapter from scratch — promoting service, leadership, and cultural awareness among students.",
    longDesc: "Founded and built Wheeler High School's Hindu YUVA chapter from the ground up. Hindu YUVA (Youth for Values and Action) is a national organization focused on service, leadership, and cultural education. Designed the chapter's programming calendar, recruited the founding membership, established officer structures, and launched community service projects aligned with the national organization's mission. The chapter has become an active presence in Wheeler's diverse student community.",
    tags: ["Entrepreneurship", "Cultural Programming", "Community Building", "Leadership"],
    links: [
      { label: "Hindu YUVA National", url: "https://hinduYUVA.org", type: "org" },
    ],
    featured: true,
    impact: "First chapter at Wheeler, growing membership",
    icon: Users,
  },
  {
    id: "consumer-judging",
    title: "National FCS Consumer Judging Championship",
    role: "Team Champion",
    status: "National 1st",
    year: "2024",
    category: "Competition",
    shortDesc: "Won the Georgia State Championship in consumer judging, then won the National FCS Consumer Judging Team Championship — defending analytical reasoning before national judges.",
    longDesc: "Competed in and won the Georgia 4-H Consumer Judging State Championship, evaluating consumer products across categories including food science, apparel, and home furnishings. The team then represented Georgia at the National FCS Consumer Judging Championship, where they won 1st Place nationally. The competition required critically analyzing consumer products, documenting evidence-based reasoning, and defending conclusions before expert panels.",
    tags: ["Consumer Analysis", "Rational Decision-Making", "Team Competition", "Research"],
    links: [
      { label: "4-H FCS Program", url: "https://4-h.org", type: "competition" },
    ],
    featured: false,
    impact: "Georgia State + National 1st Place",
    icon: Trophy,
  },
  {
    id: "human-rights",
    title: "Human Rights Across Different Regions",
    role: "Researcher & Presenter",
    status: "State 1st",
    year: "2025",
    category: "Competition",
    shortDesc: "Conducted independent research on global human rights issues and delivered a competitive presentation before judges — winning 1st Place at the NW District level.",
    longDesc: "Conducted independent research on global human rights challenges, focusing on issues affecting women, children, and minority populations across different geopolitical regions. Analyzed international human rights frameworks, regional enforcement mechanisms, and documented case studies. Compiled findings into a structured competitive presentation and delivered it before a panel of judges and peers. Won 1st Place at the Northwest Georgia 4-H District level.",
    tags: ["Independent Research", "Public Speaking", "Global Awareness", "Policy Analysis"],
    links: [],
    featured: false,
    impact: "1st Place – NW District 4-H",
    icon: Globe,
  },
  {
    id: "science-fair",
    title: "Science Fair: Hand Dryers vs. Paper Towels",
    role: "Lead Researcher",
    status: "Complete",
    year: "2023",
    category: "STEM",
    shortDesc: "Designed and conducted an original controlled experiment using Glo Germ and UV analysis to investigate germ spread from different hand-drying methods.",
    longDesc: "Developed and executed an independent scientific experiment to test whether hand dryers or paper towels spread more germs. Used Glo Germ solution (a UV-fluorescent lotion simulating germ particles) to track cross-contamination patterns under UV light before and after different drying methods. Designed the full experimental protocol — including controls, sample sizes, and data collection methodology. Analyzed results and produced a complete scientific write-up with conclusion and implications for public health settings.",
    tags: ["Experimental Design", "Data Analysis", "UV Analysis", "Scientific Writing", "Public Health"],
    links: [],
    featured: false,
    impact: "Novel germ spread analysis with UV methodology",
    icon: FlaskConical,
  },
];

const categories = ["All", "Civic Tech", "AI Research", "Community", "Competition", "STEM"];

const statusConfig: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  "Active":      { label: "Active",          color: "bg-emerald-50 text-emerald-700 border-emerald-200",  dot: "bg-emerald-500" },
  "Research":    { label: "Research",         color: "bg-blue-50 text-blue-700 border-blue-200",           dot: "bg-blue-500" },
  "Complete":    { label: "Complete",          color: "bg-muted text-muted-foreground border-border",       dot: "bg-gray-400" },
  "National 1st":{ label: "National 1st",     color: "bg-amber-50 text-amber-700 border-amber-200",        dot: "bg-amber-500" },
  "State 1st":   { label: "State 1st",         color: "bg-violet-50 text-violet-700 border-violet-200",    dot: "bg-violet-500" },
};

const PAGE_SIZE = 4;

function StatusBadge({ status }: { status: ProjectStatus }) {
  const cfg = statusConfig[status];
  return (
    <Badge className={`${cfg.color} border font-medium flex items-center gap-1.5 px-2.5 py-0.5`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${status === "Active" ? "animate-pulse" : ""}`} />
      {cfg.label}
    </Badge>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href + "#" + project.id);
    toast.success("Link copied to clipboard");
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <motion.div
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Card
            className="glass-card h-full flex flex-col overflow-hidden hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group"
            onClick={onClick}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-primary/8 border border-primary/15 text-primary group-hover:bg-primary/15 transition-colors shrink-0">
                  <project.icon className="w-5 h-5" />
                </div>
                <StatusBadge status={project.status} />
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{project.year}</p>
              <CardTitle className="text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <p className="text-sm font-medium text-primary">{project.role}</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-4">
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="outline" className="bg-muted/60 border-border text-muted-foreground text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="bg-muted/60 border-border text-muted-foreground text-xs font-normal">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                <Button size="sm" className="flex-1 h-8 text-xs rounded-lg" onClick={(e) => { e.stopPropagation(); onClick(); }}>
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Case Study
                </Button>
                {project.links.length > 0 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0 rounded-lg hover:border-primary/40"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.links[0].url, "_blank");
                        }}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{project.links[0].label}</TooltipContent>
                  </Tooltip>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </ContextMenuTrigger>
      <ContextMenuContent className="glass-panel border-border">
        <ContextMenuItem onClick={onClick}>
          <BookOpen className="w-4 h-4 mr-2" /> View Case Study
        </ContextMenuItem>
        {project.links.map(link => (
          <ContextMenuItem key={link.url} onClick={() => window.open(link.url, "_blank")}>
            <ExternalLink className="w-4 h-4 mr-2" /> {link.label}
          </ContextMenuItem>
        ))}
        <ContextMenuSeparator />
        <ContextMenuItem onClick={handleCopy}>
          <Copy className="w-4 h-4 mr-2" /> Copy Link
        </ContextMenuItem>
        <ContextMenuItem onClick={() => navigator.share?.({ title: project.title, url: window.location.href })}>
          <Share2 className="w-4 h-4 mr-2" /> Share
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function FeaturedCarousel({ projects, onSelect }: { projects: Project[]; onSelect: (p: Project) => void }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <Star className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-display font-bold uppercase tracking-tight text-foreground">Featured</h2>
        <Separator className="flex-1" />
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
              <Card
                className="glass-card border-border hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer group overflow-hidden h-full"
                onClick={() => onSelect(project)}
              >
                <CardContent className="p-6 flex flex-col h-full min-h-[240px]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <StatusBadge status={project.status} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">{project.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{project.shortDesc}</p>
                  <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-2">
                    <Button size="sm" className="rounded-full text-xs">
                      <Play className="w-3 h-3 mr-1.5" /> View Project
                    </Button>
                    {project.links.length > 0 && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full text-xs hover:border-primary/40"
                        onClick={(e) => { e.stopPropagation(); window.open(project.links[0].url, "_blank"); }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1.5" /> {project.links[0].label}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2" />
        <CarouselNext className="right-0 translate-x-1/2" />
      </Carousel>
    </div>
  );
}

function ProjectDetailDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <DialogContent className="glass-card border-border sm:max-w-2xl max-h-[85vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-start gap-4 mb-2">
          <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
            <project.icon className="w-7 h-7" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <StatusBadge status={project.status} />
              <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">
                {project.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <DialogTitle className="text-2xl font-display font-bold leading-tight text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm font-semibold text-primary mt-1">
              {project.role}
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <Tabs defaultValue="overview" className="mt-2">
        <TabsList className="bg-muted border border-border rounded-xl p-1 w-full">
          <TabsTrigger value="overview" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="skills" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            Skills Applied
          </TabsTrigger>
          <TabsTrigger value="impact" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base">{project.longDesc}</p>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-4">
          <Card className="glass-card border-border bg-primary/5">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Impact Summary</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.impact}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
          {project.links.map(link => (
            <Button key={link.url} asChild className="rounded-full">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> {link.label}
              </a>
            </Button>
          ))}
        </div>
      )}
    </DialogContent>
  );
}

function TableView({ projects, onSelect }: { projects: Project[]; onSelect: (p: Project) => void }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden glass-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/60 hover:bg-muted/60">
            <TableHead className="font-semibold text-foreground">Project</TableHead>
            <TableHead className="font-semibold text-foreground hidden sm:table-cell">Category</TableHead>
            <TableHead className="font-semibold text-foreground hidden md:table-cell">Status</TableHead>
            <TableHead className="font-semibold text-foreground hidden lg:table-cell">Year</TableHead>
            <TableHead className="font-semibold text-foreground text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project.id}
              className="cursor-pointer hover:bg-primary/5 transition-colors"
              onClick={() => onSelect(project)}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/8 text-primary border border-primary/15 shrink-0">
                    <project.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm leading-snug">{project.title}</p>
                    <p className="text-xs text-primary font-medium">{project.role}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">
                  {project.category}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <StatusBadge status={project.status} />
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary rounded-lg">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function LoadingSkeletons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {[1, 2, 3, 4].map(i => (
        <Card key={i} className="glass-card p-6 space-y-4">
          <div className="flex items-start justify-between">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <Skeleton className="w-20 h-6 rounded-full" />
          </div>
          <Skeleton className="w-1/3 h-3 rounded" />
          <Skeleton className="w-3/4 h-5 rounded" />
          <Skeleton className="w-1/2 h-4 rounded" />
          <Skeleton className="w-full h-12 rounded" />
          <div className="flex gap-2">
            <Skeleton className="w-16 h-5 rounded-full" />
            <Skeleton className="w-20 h-5 rounded-full" />
            <Skeleton className="w-14 h-5 rounded-full" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [view, setView] = useState<"grid" | "table">("grid");
  const [sort, setSort] = useState("featured");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [page, setPage] = useState(1);
  const [isLoading] = useState(false);

  const featured = projects.filter(p => p.featured);

  const filtered = useMemo(() => {
    let list = category === "All" ? projects : projects.filter(p => p.category === category);
    if (sort === "year-desc") list = [...list].sort((a, b) => b.year.localeCompare(a.year));
    if (sort === "year-asc") list = [...list].sort((a, b) => a.year.localeCompare(b.year));
    if (sort === "featured") list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [category, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategoryChange = (val: string) => {
    if (val) { setCategory(val); setPage(1); }
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-foreground">Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Civic tech initiatives, AI research, community organizations, and award-winning competitions.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Projects", value: projects.length.toString(), color: "text-foreground" },
          { label: "Active / Research", value: projects.filter(p => ["Active","Research"].includes(p.status)).length.toString(), color: "text-blue-600" },
          { label: "1st Place Wins", value: projects.filter(p => p.status.includes("1st")).length.toString(), color: "text-amber-600" },
          { label: "Categories", value: "5", color: "text-primary" },
        ].map(stat => (
          <Card key={stat.label} className="glass-card p-4 text-center hover:border-primary/30 transition-all">
            <p className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Featured Carousel — shown when viewing All */}
      {category === "All" && <FeaturedCarousel projects={featured} onSelect={setSelectedProject} />}

      {/* Controls row */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <ToggleGroup
            type="single"
            value={category}
            onValueChange={handleCategoryChange}
            className="flex flex-wrap gap-1 bg-muted border border-border p-1 rounded-xl h-auto justify-start"
          >
            {categories.map(cat => (
              <ToggleGroupItem
                key={cat}
                value={cat}
                className="rounded-lg px-3 text-sm data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm"
              >
                {cat}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="flex items-center gap-3 shrink-0">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-36 h-9 bg-muted border-border text-sm rounded-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="glass-panel border-border">
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="year-desc">Newest First</SelectItem>
                <SelectItem value="year-asc">Oldest First</SelectItem>
              </SelectContent>
            </Select>

            <RadioGroup
              value={view}
              onValueChange={(v) => setView(v as "grid" | "table")}
              className="flex items-center gap-1 bg-muted border border-border p-1 rounded-lg"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center">
                    <RadioGroupItem value="grid" id="view-grid" className="sr-only" />
                    <Label
                      htmlFor="view-grid"
                      className={`p-1.5 rounded-md cursor-pointer transition-colors ${view === "grid" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </Label>
                  </div>
                </TooltipTrigger>
                <TooltipContent>Grid view</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center">
                    <RadioGroupItem value="table" id="view-table" className="sr-only" />
                    <Label
                      htmlFor="view-table"
                      className={`p-1.5 rounded-md cursor-pointer transition-colors ${view === "table" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      <LayoutList className="w-4 h-4" />
                    </Label>
                  </div>
                </TooltipTrigger>
                <TooltipContent>Table view</TooltipContent>
              </Tooltip>
            </RadioGroup>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Showing {paginated.length} of {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {category !== "All" ? ` in ${category}` : ""}
        </p>
      </div>

      {/* Content */}
      {isLoading ? (
        <LoadingSkeletons />
      ) : paginated.length === 0 ? (
        <Empty
          title="No projects found"
          description="Try selecting a different category filter."
        />
      ) : (
        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {paginated.map(project => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TableView projects={paginated} onSelect={setSelectedProject} />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => { e.preventDefault(); setPage(p => Math.max(1, p - 1)); }}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={page === i + 1}
                  onClick={(e) => { e.preventDefault(); setPage(i + 1); }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => { e.preventDefault(); setPage(p => Math.min(totalPages, p + 1)); }}
                className={page === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Project Detail Dialog (desktop) */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <ProjectDetailDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </Dialog>
    </div>
  );
}
