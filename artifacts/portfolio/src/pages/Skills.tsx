import React, { useState } from "react";
import { Link } from "wouter";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
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
import { ChevronDown, BarChart2, MessageSquare, Briefcase, Search, Code2, Palette } from "lucide-react";

const hardSkills = [
  { name: "Civic Engagement and Policy Awareness", level: 95, icon: Briefcase },
  { name: "Research and Data Analysis", level: 90, icon: Search },
  { name: "Event Planning & Youth Leadership Coordination", level: 85, icon: BarChart2 },
  { name: "Microsoft Office & Google Workspace", level: 80, icon: MessageSquare },
  { name: "Python", level: 70, icon: Code2 },
  { name: "Canva", level: 75, icon: Palette },
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
  "Active Listening"
];

export default function Skills() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
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
          <TabsTrigger value="hard" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Hard Skills</TabsTrigger>
          <TabsTrigger value="soft" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Soft Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  <span>Top Proficiencies</span>
                  <div className="flex gap-2">
                    <Kbd className="bg-muted border-border text-muted-foreground">Shift</Kbd>
                    <Kbd className="bg-muted border-border text-muted-foreground">↑</Kbd>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {hardSkills.slice(0, 3).map((skill, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-foreground flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        {skill.name}
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
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Skill Intersections</CardTitle>
              </CardHeader>
              <CardContent>
                <Collapsible defaultOpen className="space-y-2">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted hover:bg-primary/5 rounded-lg border border-border transition-colors font-medium text-sm text-foreground">
                    Policy & Research
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-3 text-sm text-muted-foreground bg-white rounded-lg border border-border">
                    Combining data analysis with civic awareness to produce well-researched policy positions and persuasive arguments for competitions, presentations, and government initiatives.
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible className="space-y-2 mt-2">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted hover:bg-primary/5 rounded-lg border border-border transition-colors font-medium text-sm text-foreground">
                    Leadership & Empathy
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-3 text-sm text-muted-foreground bg-white rounded-lg border border-border">
                    Utilizing cultural awareness to effectively manage and organize youth teams in 4-H district initiatives, SAB, and Hindu YUVA, ensuring inclusive and engaging events across diverse communities.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="space-y-2 mt-2">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted hover:bg-primary/5 rounded-lg border border-border transition-colors font-medium text-sm text-foreground">
                    CivicTech & AI Research
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-3 text-sm text-muted-foreground bg-white rounded-lg border border-border">
                    Applying Python, data modeling, and policy analysis to design AI-driven civic tech systems — including predictive analytics for social services equity and frameworks for healthy human-AI collaboration.
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="hard" className="animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hardSkills.map((skill, idx) => (
              <Card key={idx} className="glass-card border-border overflow-hidden group hover:border-primary/30 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/8 border border-primary/15 text-primary group-hover:bg-primary/15 transition-colors">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight text-foreground">{skill.name}</h3>
                  </div>
                  
                  {showDetails && (
                    <div className="space-y-2 mt-6">
                      <div className="flex justify-between text-xs font-medium text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-1.5 bg-muted [&>div]:bg-primary" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="soft" className="animate-in fade-in zoom-in-95 duration-500">
          <Card className="glass-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Interpersonal & Cognitive Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full rounded-md pr-4">
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-3 rounded-full bg-muted border border-border text-sm font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all hover:-translate-y-1 cursor-default text-foreground shadow-sm"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
