import React from "react";
import { Link, useLocation } from "wouter";
import { 
  Home, 
  User, 
  Briefcase, 
  Trophy, 
  Star, 
  FileText, 
  Mail,
  MapPin,
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@assets/IMG_6720_1780111869102.jpeg";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Experience", url: "/experience", icon: Briefcase },
  { title: "Awards", url: "/awards", icon: Trophy },
  { title: "Skills", url: "/skills", icon: Star },
  { title: "Resume", url: "/resume", icon: FileText },
  { title: "Contact", url: "/contact", icon: Mail },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background text-foreground w-full">
        <Sidebar className="border-r border-white/10 glass-panel">
          <SidebarHeader className="pt-8 pb-4 flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4 ring-2 ring-primary/50 shadow-glow">
              <AvatarImage src={profilePhoto} alt="Naitik Maheshwari" className="object-cover" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-lg font-display font-bold uppercase tracking-tight text-white">Naitik Maheshwari</h2>
              <p className="text-xs text-primary/80 font-medium">Civic Leader</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={location === item.url || (item.url !== "/" && location.startsWith(item.url))}
                        className="hover:bg-white/5 hover:text-white data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
                      >
                        <Link href={item.url} data-testid={`sidebar-nav-${item.title.toLowerCase()}`}>
                          <item.icon className="w-4 h-4 mr-3" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="pb-8">
            <div className="flex flex-col items-center justify-center text-xs text-muted-foreground gap-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Marietta, GA</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-x-hidden relative flex flex-col">
          <div className="sticky top-0 z-50 p-4 lg:hidden backdrop-blur-md bg-background/50 border-b border-white/5">
            <SidebarTrigger />
          </div>
          <div className="max-w-5xl w-full mx-auto px-6 py-8 flex-1">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
