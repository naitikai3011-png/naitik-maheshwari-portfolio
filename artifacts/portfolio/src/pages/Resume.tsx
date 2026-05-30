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
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Download, Maximize2, FileCheck, CheckCircle2 } from "lucide-react";

export default function Resume() {
  const [isPdfLoaded, setIsPdfLoaded] = useState(false);

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
            <h1 className="text-4xl font-display font-bold uppercase tracking-tight text-white text-glow">Resume</h1>
          </div>
          
          <div className="flex gap-3">
            <Button asChild variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Maximize2 className="w-4 h-4 mr-2" /> View Full Screen
              </a>
            </Button>
            <Button asChild className="shadow-glow">
              <a href="/resume.pdf" download="Naitik_Maheshwari_Resume.pdf">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </a>
            </Button>
          </div>
        </div>
        
        <Alert className="bg-secondary/10 border-secondary/20 mb-6 shrink-0">
          <FileCheck className="h-5 w-5 text-secondary" />
          <AlertTitle className="text-white font-medium">Professional Document</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Contains comprehensive details regarding education, experience, and awards. For references, please refer to the contact page.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex-1 min-h-[500px] border border-white/10 rounded-2xl overflow-hidden glass-card">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full rounded-lg">
          <ResizablePanel defaultSize={75} minSize={50} className="relative bg-white">
            {!isPdfLoaded && (
              <div className="absolute inset-0 p-8 flex flex-col gap-4 bg-background z-10">
                <Skeleton className="h-12 w-3/4 rounded-lg bg-white/10" />
                <Skeleton className="h-4 w-1/4 rounded bg-white/10" />
                <div className="space-y-2 mt-8">
                  <Skeleton className="h-4 w-full rounded bg-white/10" />
                  <Skeleton className="h-4 w-full rounded bg-white/10" />
                  <Skeleton className="h-4 w-5/6 rounded bg-white/10" />
                </div>
                <div className="space-y-2 mt-8">
                  <Skeleton className="h-4 w-full rounded bg-white/10" />
                  <Skeleton className="h-4 w-4/6 rounded bg-white/10" />
                </div>
              </div>
            )}
            <iframe 
              src="/resume.pdf" 
              className="w-full h-full border-0 rounded-l-lg bg-white" 
              title="Naitik Maheshwari Resume"
              onLoad={() => setIsPdfLoaded(true)}
            />
          </ResizablePanel>
          
          <ResizableHandle className="bg-white/10 w-2 hover:bg-primary/50 transition-colors" />
          
          <ResizablePanel defaultSize={25} minSize={20} className="bg-background/50 p-6 flex flex-col gap-6 hidden md:flex overflow-y-auto">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white border-b border-white/10 pb-4">Key Highlights</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Education
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Wheeler High School STEM Magnet<br/>
                  GPA: 4.3<br/>
                  Class of 2028
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-secondary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Leadership
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Cobb County Youth Commissioner<br/>
                  GA 4-H NW District Board of Director
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-accent mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Awards
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  1st Place District Public Speaking<br/>
                  4th Place State Congress
                </p>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
