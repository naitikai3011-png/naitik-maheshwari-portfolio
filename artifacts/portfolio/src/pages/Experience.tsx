import React from "react";
import { Link } from "wouter";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    id: "1",
    role: "Cobb County Youth Commissioner",
    date: "Aug 2024 – Sep 2025",
    type: "Government",
    description: "Selected to represent youth voices in county government. Collaborated with officials on civic initiatives and contributed to discussions on local policies and community improvement.",
    skills: [
      { name: "Policy Engagement", desc: "Working with local officials on county policies" },
      { name: "Civic Leadership", desc: "Representing youth perspectives in government" },
      { name: "Public Speaking", desc: "Presenting to county commissioners and public" }
    ],
    involvement: 100,
    color: "primary"
  },
  {
    id: "2",
    role: "Georgia 4-H Northwest District Board of Director",
    date: "Feb 2025 – Present",
    type: "Leadership",
    description: "Planned and led youth leadership conferences and regional community service projects across Georgia. Coordinated with counties to expand outreach and participation.",
    skills: [
      { name: "Event Coordination", desc: "Organizing district-wide conferences" },
      { name: "Strategic Planning", desc: "Developing outreach strategies for 4-H" },
      { name: "Leadership", desc: "Guiding peer teams and delegates" }
    ],
    involvement: 90,
    color: "secondary"
  },
  {
    id: "3",
    role: "\"Human Rights Across Borders\" – District Project",
    date: "Mar 2025 – Present",
    type: "Advocacy",
    description: "Researched and presented on human rights issues across different regions, highlighting challenges faced by women, children, and minority populations at a state level.",
    skills: [
      { name: "Public Speaking", desc: "Delivering award-winning presentations" },
      { name: "Research", desc: "Analyzing international human rights data" },
      { name: "Advocacy", desc: "Raising awareness for minority populations" },
      { name: "Global Awareness", desc: "Understanding international geopolitical contexts" }
    ],
    involvement: 85,
    color: "accent"
  }
];

export default function Experience() {
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
            <BreadcrumbPage>Experience</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-white text-glow">Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Roles and projects focused on civic leadership, policy advocacy, and community engagement.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 bg-white/5 border border-white/10 rounded-xl p-1 flex flex-wrap h-auto">
          <TabsTrigger value="all" className="rounded-lg flex-1">All Roles</TabsTrigger>
          <TabsTrigger value="Government" className="rounded-lg flex-1">Government</TabsTrigger>
          <TabsTrigger value="Leadership" className="rounded-lg flex-1">Leadership</TabsTrigger>
          <TabsTrigger value="Advocacy" className="rounded-lg flex-1">Advocacy</TabsTrigger>
        </TabsList>

        {["all", "Government", "Leadership", "Advocacy"].map(tab => (
          <TabsContent key={tab} value={tab} className="mt-0">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Visual Timeline (Hidden on mobile) */}
              <div className="hidden lg:block w-8 border-r-2 border-white/10 relative mt-6 shrink-0">
                {experiences
                  .filter(exp => tab === "all" || exp.type === tab)
                  .map((exp, i) => (
                  <div 
                    key={exp.id} 
                    className={`absolute w-4 h-4 rounded-full -right-[9px] border-4 border-background shadow-[0_0_15px_rgba(var(--${exp.color}),0.5)] bg-${exp.color}`}
                    style={{ top: `${(i * 180) + 40}px` }}
                  />
                ))}
              </div>

              {/* Accordion List */}
              <div className="flex-1 w-full">
                <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={experiences[0].id}>
                  {experiences
                    .filter(exp => tab === "all" || exp.type === tab)
                    .map((exp) => (
                    <AccordionItem key={exp.id} value={exp.id} className="glass-card border-white/10 rounded-2xl overflow-hidden border-b-0 px-2">
                      <AccordionTrigger className="hover:no-underline px-4 py-6">
                        <div className="flex flex-col md:flex-row md:items-center text-left gap-2 w-full pr-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className={`text-sm text-${exp.color} font-medium`}>{exp.date}</p>
                          </div>
                          <Badge variant="outline" className="w-fit bg-white/5 border-white/10">{exp.type}</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-6 pt-0 text-muted-foreground">
                        <Card className="bg-white/5 border-white/5 shadow-inner">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Overview</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6 pb-4">
                            <p className="text-base text-white/90 leading-relaxed">
                              {exp.description}
                            </p>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs font-medium text-muted-foreground">
                                <span>Involvement Level</span>
                                <span>{exp.involvement}%</span>
                              </div>
                              <Progress value={exp.involvement} className={`h-2 bg-white/10 [&>div]:bg-${exp.color}`} />
                            </div>
                            
                            <Separator className="bg-white/10" />
                            
                            <div className="space-y-3">
                              <h4 className="text-sm font-medium text-white">Applied Skills</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                  <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                      <Badge className="bg-black/40 hover:bg-white/10 text-white/80 border border-white/10 cursor-help transition-colors">
                                        {skill.name}
                                      </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{skill.desc}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
