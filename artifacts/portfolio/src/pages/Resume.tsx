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
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Download, Maximize2, FileCheck, CheckCircle2 } from "lucide-react";

export default function Resume() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-6rem)] flex flex-col">
      <div className="shrink-0">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Resume</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-display font-bold uppercase tracking-tight text-foreground">Resume</h1>
          </div>
          
          <div className="flex gap-3">
            <Button asChild variant="outline" className="hover:bg-muted">
              <a href="/resume.docx" target="_blank" rel="noopener noreferrer">
                <Maximize2 className="w-4 h-4 mr-2" /> View Full Screen
              </a>
            </Button>
            <Button asChild>
              <a href="/resume.docx" download="Naitik_Maheshwari_Resume.docx">
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
        
        <Alert className="bg-primary/5 border-primary/20 mb-6 shrink-0">
          <FileCheck className="h-5 w-5 text-primary" />
          <AlertTitle className="text-foreground font-medium">Professional Document</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Full resume available for download as a .docx file. Comprehensive details on education, experience, projects, and awards below.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex-1 min-h-[500px] border border-border rounded-2xl overflow-hidden glass-card">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full rounded-lg">
          <ResizablePanel defaultSize={75} minSize={50} className="relative overflow-y-auto">
            <div className="p-8 md:p-10 font-sans text-foreground space-y-8 min-h-full bg-white">

              <div className="text-center border-b border-border pb-6">
                <h1 className="text-3xl font-display font-bold tracking-widest uppercase text-foreground mb-2">Naitik Maheshwari</h1>
                <p className="text-sm text-muted-foreground">Marietta, GA · 770-706-1612 · naitikmaheshwari30@gmail.com</p>
              </div>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-3">Profile</h2>
                <p className="text-sm text-foreground leading-relaxed">
                  Motivated honors student and youth leader with extensive experience in public speaking, civic engagement, research, and organizational leadership. Passionate about public policy, social studies, community service, and empowering others through servant leadership.
                </p>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-3">Education</h2>
                <div>
                  <p className="font-semibold text-foreground text-sm">Wheeler High School Magnet Program — Center for Advanced Studies in Science, Technology & Mathematics</p>
                  <p className="text-xs text-muted-foreground mt-1">Class of 2028 · GPA: 4.4 · Academic Letter Recipient · Academic Recognition in Honors & AP Coursework</p>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-3">Leadership & Activities</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    { role: "Georgia 4-H Northwest District Board of Directors, District Officer", date: "2025–Present", desc: "Elected to represent youth across Northwest Georgia; plan and coordinate district-wide leadership conferences and service projects." },
                    { role: "Georgia 4-H State Board Campaign, Statewide Candidate", date: "2025", desc: "Developing a statewide leadership platform and outreach strategy; preparing for live candidate forum before a judged audience." },
                    { role: "Cobb County Youth Commission, Member", date: "2024–2025", desc: "Represent Cobb County youth in local government proceedings; collaborate with elected officials on civic initiatives." },
                    { role: "Wheeler Magnet Student Advisory Board, Vice President", date: "2025–Present", desc: "Represent the student body in meetings with school administration; coordinate advisory board initiatives." },
                    { role: "Cobb County 4-H, President", date: "2025–Present", desc: "Lead the county 4-H officer team, setting priorities for county-wide programming and representing at district and state events." },
                    { role: "Cobb County 4-H, Secretary (Prior Role)", date: "2024–2025", desc: "Maintained official meeting records and correspondence before being elected President." },
                    { role: "Founder, Hindu YUVA – Wheeler High School Chapter", date: "2024–Present", desc: "Established a new school chapter to promote service, leadership, and cultural awareness among students." },
                    { role: "Adopt-A-Mile, Chapter Leader", date: "2024–Present", desc: "Organize recurring environmental cleanup events, coordinating volunteer turnout and safety logistics." },
                    { role: "Hindu Swayamsevak Sangh, Dwaj Pramukh", date: "2023–Present", desc: "Youth leadership role mentoring younger members in group activities and cultural programming." },
                  ].map((item, i) => (
                    <li key={i} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                        <span className="font-medium text-foreground">{item.role}</span>
                        <span className="text-xs text-muted-foreground shrink-0">{item.date}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3 italic">Additional: FBLA · Speech & Debate · Social Studies Honor Society · Helping Hands Club · Cobb Student Leadership Academy Graduate</p>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-3">Projects & Research</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    { title: "Marietta Predictive Social Equity Lab", role: "Founder & Lead Strategist", desc: "AI-driven predictive analytics framework to help Cobb County shift social services from reactive to proactive — targeting housing instability, food insecurity, and mental health access." },
                    { title: "The Agency Engine", role: "Lead Researcher & Architect", desc: "Original AI behavioral framework exploring how to counter over-reliance on generative AI through an 'Adversarial Partner' model reinforcing human critical thinking." },
                    { title: "Human Rights Across Different Regions (Georgia 4-H District Project)", role: "Researcher & Presenter", desc: "Independent research on global human rights issues; 1st Place competitive presentation at the NW District level." },
                    { title: "Science Fair: Hand Dryers vs. Paper Towels", role: "Lead Researcher", desc: "Designed original experiment using Glo Germ and UV analysis to investigate germ spread from different hand-drying methods." },
                    { title: "Georgia 4-H Consumer Judging", role: "State & National Competitor", desc: "Won Georgia State Championship; won National FCS Consumer Judging Team Championship, evaluating consumer products and defending reasoning before judges." },
                  ].map((item, i) => (
                    <li key={i} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                        <span className="font-medium text-foreground">{item.title}</span>
                        <span className="text-xs text-muted-foreground shrink-0">{item.role}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-3">Awards & Honors</h2>
                <ul className="space-y-1 text-sm">
                  {[
                    "1st Place, Georgia 4-H Consumer Judging — State Champion",
                    "1st Place, National FCS Consumer Judging Team Champions",
                    "1st Place, Northwest District Project Achievement",
                    "1st Place, Northwest District Public Speaking",
                    "4th Place, Georgia State Congress (International Category)",
                    "Academic Letter Recipient; Academic Recognition in Honors & AP Coursework",
                    "Varsity Swim & Water Polo, Georgia State Champions",
                  ].map((award, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-3">Skills</h2>
                <p className="text-sm text-foreground leading-relaxed">
                  Leadership · Public Speaking · Research · Policy Analysis · Event Planning · Team Leadership · Microsoft Office · Google Workspace · Python · Canva · Collaboration · Communication
                </p>
              </section>
            </div>
          </ResizablePanel>
          
          <ResizableHandle className="bg-border w-2 hover:bg-primary/30 transition-colors" />
          
          <ResizablePanel defaultSize={25} minSize={20} className="bg-muted/50 p-6 flex flex-col gap-6 hidden md:flex overflow-y-auto">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-foreground border-b border-border pb-4">Key Highlights</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Education
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Wheeler High School STEM Magnet<br/>
                  GPA: 4.4<br/>
                  Class of 2028
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Leadership
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  SAB Vice President<br/>
                  Cobb County 4-H President<br/>
                  GA 4-H NW District Officer<br/>
                  Hindu YUVA Founder
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Awards
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  National FCS Consumer Judging Champion<br/>
                  1st Place GA State Consumer Judging<br/>
                  1st Place District Public Speaking<br/>
                  GA State Swim & Water Polo Champions
                </p>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
