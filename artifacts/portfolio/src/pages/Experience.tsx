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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    id: "1",
    role: "Georgia 4-H Northwest District Board of Directors",
    title: "District Officer",
    date: "2025 – Present",
    type: "Leadership",
    description: "Elected to represent youth across Northwest Georgia. Plan and coordinate district-wide leadership conferences and community service projects, and mentor incoming members on officer responsibilities and public speaking.",
    skills: [
      { name: "Event Coordination", desc: "Organizing district-wide leadership conferences" },
      { name: "Mentorship", desc: "Guiding incoming officers and delegates" },
      { name: "Strategic Planning", desc: "Developing outreach strategies for 4-H" },
      { name: "Public Speaking", desc: "Representing the district at state events" }
    ],
    involvement: 95,
  },
  {
    id: "2",
    role: "Wheeler Magnet Student Advisory Board (SAB)",
    title: "Vice President",
    date: "2025 – Present",
    type: "Leadership",
    description: "Represent the student body in meetings with school administration. Help coordinate advisory board initiatives and communicate student feedback on magnet program policy decisions.",
    skills: [
      { name: "Stakeholder Communication", desc: "Bridging students and administration" },
      { name: "Policy Feedback", desc: "Advising on magnet program decisions" },
      { name: "Board Leadership", desc: "Coordinating SAB initiatives and meetings" }
    ],
    involvement: 90,
  },
  {
    id: "3",
    role: "Cobb County Youth Commission",
    title: "Member",
    date: "Aug 2024 – Sep 2025",
    type: "Government",
    description: "Represent the perspectives of Cobb County youth in local government proceedings. Collaborate with elected officials and fellow commissioners on civic initiatives affecting the community.",
    skills: [
      { name: "Policy Engagement", desc: "Working with local officials on county policies" },
      { name: "Civic Leadership", desc: "Representing youth perspectives in government" },
      { name: "Public Speaking", desc: "Presenting to county commissioners and public" }
    ],
    involvement: 100,
  },
  {
    id: "4",
    role: "Cobb County 4-H",
    title: "President",
    date: "2025 – Present",
    type: "Leadership",
    description: "Lead the county 4-H officer team, setting priorities for county-wide programming and representing Cobb County 4-H at district and state events.",
    skills: [
      { name: "Team Leadership", desc: "Directing the county officer team" },
      { name: "Program Development", desc: "Setting county-wide programming priorities" },
      { name: "Representation", desc: "Representing Cobb County at district and state level" }
    ],
    involvement: 90,
  },
  {
    id: "5",
    role: "Cobb County 4-H",
    title: "Secretary (Prior Role)",
    date: "2024 – 2025",
    type: "Leadership",
    description: "Maintained official meeting records and correspondence and supported officer communications before being elected President.",
    skills: [
      { name: "Record Keeping", desc: "Maintaining official meeting minutes" },
      { name: "Officer Communications", desc: "Supporting team correspondence" },
      { name: "Organizational Skills", desc: "Managing documentation and scheduling" }
    ],
    involvement: 80,
  },
  {
    id: "6",
    role: "Hindu YUVA – Wheeler High School Chapter",
    title: "Founder",
    date: "2024 – Present",
    type: "Community",
    description: "Established a new school chapter from the ground up to promote service, leadership, and cultural awareness among students.",
    skills: [
      { name: "Entrepreneurship", desc: "Building an organization from scratch" },
      { name: "Cultural Programming", desc: "Designing culturally aware service activities" },
      { name: "Community Building", desc: "Recruiting members and fostering inclusivity" }
    ],
    involvement: 85,
  },
  {
    id: "7",
    role: "Adopt-A-Mile",
    title: "Chapter Leader",
    date: "2024 – Present",
    type: "Community",
    description: "Organize and lead recurring environmental cleanup events along an adopted roadway, coordinating volunteer turnout and safety logistics.",
    skills: [
      { name: "Volunteer Coordination", desc: "Recruiting and managing volunteers" },
      { name: "Event Logistics", desc: "Planning safe and effective cleanup operations" },
      { name: "Environmental Stewardship", desc: "Promoting community environmental responsibility" }
    ],
    involvement: 75,
  },
  {
    id: "8",
    role: "Hindu Swayamsevak Sangh (HSS)",
    title: "Dwaj Pramukh",
    date: "2023 – Present",
    type: "Community",
    description: "Serve in a youth leadership role mentoring and guiding younger members in group activities and cultural programming.",
    skills: [
      { name: "Youth Mentorship", desc: "Guiding younger members in HSS activities" },
      { name: "Cultural Awareness", desc: "Facilitating cultural education and programming" },
      { name: "Leadership", desc: "Holding a recognized officer role within the organization" }
    ],
    involvement: 75,
  },
  {
    id: "9",
    role: "Georgia 4-H State Board Campaign",
    title: "Statewide Candidate",
    date: "2025",
    type: "Government",
    description: "Developing a statewide leadership platform and outreach strategy. Preparing to field impromptu policy and leadership questions live before a judged audience as part of the candidate forum process.",
    skills: [
      { name: "Platform Development", desc: "Building a statewide youth leadership agenda" },
      { name: "Impromptu Speaking", desc: "Fielding live policy questions before judges" },
      { name: "Strategic Outreach", desc: "Crafting messaging for a statewide audience" }
    ],
    involvement: 85,
  }
];

const projects = [
  {
    id: "p1",
    role: "Founder & Lead Strategist",
    title: "Marietta Predictive Social Equity Lab",
    type: "CivicTech",
    description: "Conceived a CivicTech initiative proposing an AI-driven predictive analytics framework to help Cobb County shift social services from reactive to proactive — targeting housing instability, food insecurity, and mental health access. Outlined resource-allocation optimization and cost-benefit models drawing on Industrial Engineering and Finance principles.",
    skills: [
      { name: "AI / Predictive Analytics", desc: "Designing ML-based social equity models" },
      { name: "Policy Design", desc: "Proposing proactive service-delivery frameworks" },
      { name: "Systems Thinking", desc: "Modeling resource allocation and cost-benefit analysis" },
      { name: "CivicTech", desc: "Applying technology to local government challenges" }
    ],
  },
  {
    id: "p2",
    role: "Lead Researcher & Architect",
    title: "Agency Engine",
    type: "AI Research",
    description: "Designed an original AI behavioral framework exploring how to counter over-reliance on generative AI through an 'Adversarial Partner' model that uses productive friction to reinforce human critical thinking. Researched human-AI interaction principles and outlined a supporting technical architecture.",
    skills: [
      { name: "AI Behavioral Research", desc: "Studying human-AI interaction dynamics" },
      { name: "Framework Design", desc: "Architecting the Adversarial Partner model" },
      { name: "Critical Thinking", desc: "Investigating cognitive effects of AI reliance" }
    ],
  },
  {
    id: "p3",
    role: "Researcher & Presenter",
    title: "Human Rights Across Different Regions",
    type: "4-H District Project",
    description: "Conducted independent research on global human rights issues — focusing on challenges faced by women, children, and minority populations — and delivered a competitive presentation before judges, winning 1st Place at the NW District level.",
    skills: [
      { name: "Independent Research", desc: "Analyzing international human rights data" },
      { name: "Public Speaking", desc: "Award-winning competitive presentation" },
      { name: "Global Awareness", desc: "Understanding geopolitical human rights contexts" }
    ],
  },
  {
    id: "p4",
    role: "Lead Researcher",
    title: "Science Fair: Hand Dryers vs. Paper Towels",
    type: "STEM Research",
    description: "Designed and conducted an original experiment using Glo Germ and UV analysis to investigate the spread of germs from different hand-drying methods. Developed the hypothesis, experimental design, data collection, and analysis independently.",
    skills: [
      { name: "Experimental Design", desc: "Designing a controlled scientific experiment" },
      { name: "Data Analysis", desc: "Interpreting UV-based germ spread results" },
      { name: "Scientific Writing", desc: "Documenting methodology and findings" }
    ],
  },
  {
    id: "p5",
    role: "State & National Competitor",
    title: "Georgia 4-H Consumer Judging",
    type: "Competition",
    description: "Won the Georgia State Championship in consumer judging, qualifying for Nationals. Then won the National FCS Consumer Judging Team Championship — evaluating consumer products and defending analytical reasoning before judges at both levels.",
    skills: [
      { name: "Consumer Analysis", desc: "Critically evaluating products and services" },
      { name: "Rational Decision-Making", desc: "Defending judgments before expert panels" },
      { name: "Team Collaboration", desc: "Competing as part of a high-performing state team" }
    ],
  }
];

const tabCategories = ["all", "Leadership", "Government", "Community", "Projects"];

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
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-foreground">Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Roles and projects focused on civic leadership, government service, community building, and AI-driven research.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 bg-muted border border-border rounded-xl p-1 flex flex-wrap h-auto">
          <TabsTrigger value="all" className="rounded-lg flex-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">All Roles</TabsTrigger>
          <TabsTrigger value="Leadership" className="rounded-lg flex-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Leadership</TabsTrigger>
          <TabsTrigger value="Government" className="rounded-lg flex-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Government</TabsTrigger>
          <TabsTrigger value="Community" className="rounded-lg flex-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Community</TabsTrigger>
          <TabsTrigger value="Projects" className="rounded-lg flex-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Projects</TabsTrigger>
        </TabsList>

        {tabCategories.map(tab => (
          <TabsContent key={tab} value={tab} className="mt-0">
            {tab === "Projects" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="glass-card overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">{project.type}</Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight text-foreground">{project.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">{project.role}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      <Separator className="bg-border" />
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Applied Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, idx) => (
                            <Tooltip key={idx}>
                              <TooltipTrigger asChild>
                                <Badge className="bg-muted hover:bg-primary/10 text-foreground border border-border cursor-help transition-colors">
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
                ))}
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="hidden lg:block w-8 border-r-2 border-border relative mt-6 shrink-0">
                  {experiences
                    .filter(exp => tab === "all" || exp.type === tab)
                    .map((exp, i) => (
                    <div
                      key={exp.id}
                      className="absolute w-4 h-4 rounded-full -right-[9px] border-4 border-white bg-primary"
                      style={{ top: `${(i * 180) + 40}px` }}
                    />
                  ))}
                </div>

                <div className="flex-1 w-full">
                  <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={experiences[0].id}>
                    {experiences
                      .filter(exp => tab === "all" || exp.type === tab)
                      .map((exp) => (
                      <AccordionItem key={exp.id} value={exp.id} className="glass-card border-border rounded-2xl overflow-hidden border-b-0 px-2 hover:border-primary/30 transition-colors">
                        <AccordionTrigger className="hover:no-underline px-4 py-6">
                          <div className="flex flex-col md:flex-row md:items-center text-left gap-2 w-full pr-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground mb-0.5">{exp.role}</h3>
                              <p className="text-sm font-semibold text-primary mb-1">{exp.title}</p>
                              <p className="text-xs text-muted-foreground">{exp.date}</p>
                            </div>
                            <Badge variant="outline" className="w-fit bg-primary/5 border-primary/20 text-primary">{exp.type}</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-6 pt-0 text-muted-foreground">
                          <Card className="bg-muted/50 border-border shadow-inner">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 pb-4">
                              <p className="text-base text-foreground leading-relaxed">
                                {exp.description}
                              </p>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs font-medium text-muted-foreground">
                                  <span>Involvement Level</span>
                                  <span>{exp.involvement}%</span>
                                </div>
                                <Progress value={exp.involvement} className="h-2 bg-border [&>div]:bg-primary" />
                              </div>
                              
                              <Separator className="bg-border" />
                              
                              <div className="space-y-3">
                                <h4 className="text-sm font-medium text-foreground">Applied Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill, idx) => (
                                    <Tooltip key={idx}>
                                      <TooltipTrigger asChild>
                                        <Badge className="bg-muted hover:bg-primary/10 text-foreground border border-border cursor-help transition-colors">
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
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
