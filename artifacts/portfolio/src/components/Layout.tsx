import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Home, 
  User, 
  Briefcase, 
  Trophy, 
  Star, 
  FileText, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile.jpeg";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (url: string) =>
    url === "/" ? location === "/" : location.startsWith(url);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Soft gradient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="light-blob w-[600px] h-[600px] bg-violet-100/70 top-[-100px] left-[-200px]" />
        <div className="light-blob w-[500px] h-[500px] bg-purple-100/60 bottom-[-100px] right-[-150px]" />
        <div className="light-blob w-[400px] h-[400px] bg-indigo-50/80 top-[40%] left-[40%]" />
      </div>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: avatar + name */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Avatar className="w-8 h-8 ring-2 ring-primary/20">
              <AvatarImage src={profilePhoto} alt="Naitik Maheshwari" className="object-cover" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block leading-tight">
              <span className="text-sm font-display font-bold text-foreground tracking-tight">Naitik Maheshwari</span>
              <p className="text-[10px] text-primary font-medium uppercase tracking-widest">Civic Leader</p>
            </div>
          </Link>

          {/* Center: nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                data-testid={`nav-${item.title.toLowerCase()}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(item.url)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right: available badge + mobile menu */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/60 px-4 py-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive(item.url)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative z-10 pt-16">
        <div className="max-w-5xl w-full mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
