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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Info } from "lucide-react";
import profilePhoto from "@/assets/profile.jpeg";

export default function About() {
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
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-foreground">About Me</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A motivated honors student and youth leader with extensive experience in public speaking, civic engagement, AI-powered research, and organizational leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="glass-card p-4 rounded-2xl sticky top-24">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
              <img src={profilePhoto} alt="Naitik Maheshwari" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-foreground">Naitik Maheshwari</h3>
            <p className="text-primary text-sm font-medium mb-4">Marietta, Georgia</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 cursor-help">Civic Leader</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Engaged in local & state government initiatives</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 cursor-help">Public Speaker</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>State & District level award winner</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 cursor-help">Researcher</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>AI-driven civic tech and social equity research</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 cursor-help">Entrepreneur</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Founded Hindu YUVA chapter and civic tech initiatives</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <Tabs defaultValue="background" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted border border-border p-1 rounded-xl mb-8">
              <TabsTrigger value="background" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Background</TabsTrigger>
              <TabsTrigger value="education" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Education</TabsTrigger>
              <TabsTrigger value="personal" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Personal</TabsTrigger>
            </TabsList>

            <TabsContent value="background" className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a motivated honors student and youth leader with extensive experience in public speaking, civic engagement, research, and organizational leadership. Passionate about public policy, social studies, community service, and empowering others through servant leadership — I operate at the intersection of government, technology, and community.
                </p>
                <Separator className="bg-border my-6" />
                <h4 className="text-lg font-semibold mb-4 text-foreground">Key Roles</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Wheeler Magnet Student Advisory Board (SAB), Vice President</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Cobb County 4-H, President</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Georgia 4-H Northwest District Board of Directors, District Officer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Founder, Hindu YUVA – Wheeler High School Chapter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Cobb County Youth Commission, Member</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Founder, Marietta Predictive Social Equity Lab (CivicTech AI Initiative)</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 bg-white rounded-xl p-2 shrink-0 flex items-center justify-center border border-border shadow-sm">
                  <img src="/wheeler-logo.png" alt="Wheeler High School" className="max-w-full max-h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold mb-1 text-foreground">Wheeler High School</h3>
                  <p className="text-primary font-medium mb-4">Class of 2028</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted rounded-xl p-4 border border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current GPA</p>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="flex items-center gap-2 cursor-help">
                            <span className="text-3xl font-display font-bold text-foreground">4.4</span>
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 glass-card border-border" side="top">
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-foreground">Weighted GPA</h4>
                            <p className="text-xs text-muted-foreground">Includes Honors and AP course weighting reflecting a rigorous academic courseload.</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <div className="bg-muted rounded-xl p-4 border border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Honors</p>
                      <p className="text-sm font-medium text-foreground mb-1">Academic Letter</p>
                      <p className="text-xs text-muted-foreground">Recognition in Honors & AP Courses</p>
                    </div>
                  </div>

                  <Collapsible className="border border-border rounded-xl overflow-hidden bg-muted/50">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium hover:bg-muted transition-colors text-foreground">
                      More About Wheeler STEM Magnet
                      <ChevronDown className="w-4 h-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-0 text-sm text-muted-foreground border-t border-border bg-white/50">
                      The Center of Advanced Studies in Science, Technology, and Math (STEM Magnet) program provides rigorous, college-level coursework and hands-on research opportunities for highly motivated students.
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personal" className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">Beyond Academics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Core Interests</h4>
                    <div className="flex flex-col gap-2">
                      {["International Relations", "Policy Debate & Speech", "Community Organizing", "Youth Advocacy", "Swimming & Water Polo", "CivicTech & AI Research"].map((item) => (
                        <div key={item} className="bg-muted px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Future Goals</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To pursue a career in public policy or international law, leveraging AI-driven research and civic advocacy to address systemic equity issues — from local government all the way to the national stage.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
