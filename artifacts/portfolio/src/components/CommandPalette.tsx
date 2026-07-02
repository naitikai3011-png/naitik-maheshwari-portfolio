import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home, User, Briefcase, Trophy, Star, FileText, Mail,
  FolderOpen, Zap, Copy, ExternalLink
} from "lucide-react";
import { toast } from "sonner";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const pages = [
  { title: "Home",       url: "/",           icon: Home,       desc: "Back to the main page" },
  { title: "About",      url: "/about",       icon: User,       desc: "Learn about Naitik" },
  { title: "Experience", url: "/experience",  icon: Briefcase,  desc: "Leadership roles & projects" },
  { title: "Projects",   url: "/projects",    icon: FolderOpen, desc: "Featured projects & research" },
  { title: "Awards",     url: "/awards",      icon: Trophy,     desc: "Honors & achievements" },
  { title: "Skills",     url: "/skills",      icon: Star,       desc: "Core competencies" },
  { title: "Resume",     url: "/resume",      icon: FileText,   desc: "View & download resume" },
  { title: "Contact",    url: "/contact",     icon: Mail,       desc: "Get in touch" },
];

const quickActions = [
  {
    title: "Copy Email",
    desc: "naitikmaheshwari30@gmail.com",
    icon: Copy,
    action: () => {
      navigator.clipboard.writeText("naitikmaheshwari30@gmail.com");
      toast.success("Email copied to clipboard");
    },
  },
  {
    title: "View Resume (PDF)",
    desc: "Open resume in a new tab",
    icon: ExternalLink,
    action: () => window.open("/resume.pdf", "_blank"),
  },
  {
    title: "Hindu YUVA",
    desc: "Visit hinduYUVA.org",
    icon: Zap,
    action: () => window.open("https://hinduYUVA.org", "_blank"),
  },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [, navigate] = useLocation();

  const runAndClose = (fn: () => void) => {
    fn();
    onOpenChange(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages, projects, quick actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.url}
              value={`${page.title} ${page.desc}`}
              onSelect={() => runAndClose(() => navigate(page.url))}
            >
              <page.icon className="mr-2 h-4 w-4 text-primary shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">{page.title}</span>
                <span className="text-xs text-muted-foreground">{page.desc}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          {quickActions.map((action) => (
            <CommandItem
              key={action.title}
              value={`${action.title} ${action.desc}`}
              onSelect={() => runAndClose(action.action)}
            >
              <action.icon className="mr-2 h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">{action.title}</span>
                <span className="text-xs text-muted-foreground">{action.desc}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return { open, setOpen };
}
