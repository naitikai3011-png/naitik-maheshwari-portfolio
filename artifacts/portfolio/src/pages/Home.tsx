import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Trophy, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  ChevronDown,
  Briefcase,
  Layers,
  Star,
  Globe,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Navigation Component
const Navigation = () => {
  const links = ["About", "Experience", "Awards", "Skills", "Contact"];
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-6 py-3 flex gap-6 items-center"
      data-testid="main-navigation"
    >
      {links.map((link) => (
        <a 
          key={link} 
          href={`#${link.toLowerCase()}`}
          className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          data-testid={`nav-link-${link.toLowerCase()}`}
        >
          {link}
        </a>
      ))}
    </motion.nav>
  );
};

// Hero Background Blobs
const HeroBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen"
      />
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

// Reusable Glass Card
const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ y: -5 }}
    className={`glass-card rounded-2xl p-6 sm:p-8 shimmer-border ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white relative font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-[60] transform-origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
        <HeroBlobs />
        
        <div className="z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Civic Leader & Public Speaker
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase font-display text-gradient pb-4"
            data-testid="hero-name"
          >
            Naitik Maheshwari
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-6 font-light tracking-wide leading-relaxed"
          >
            Precise. Data-forward. Deeply intentional. 
            Applying interests and background knowledge to opportunities in the social studies field.
          </motion.p>
          
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors animate-bounce"
            data-testid="hero-scroll-cta"
          >
            <ChevronDown className="w-6 h-6 text-white/70" />
          </motion.a>
        </div>
      </section>

      {/* Main Content Area - contained to max width */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32 relative z-10">
        
        {/* About Section */}
        <section id="about" className="pt-24 scroll-mt-24">
          <GlassCard>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white">About Me</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A passionate and highly motivated high school student seeking to apply interests and background knowledge to opportunities in the social studies field. My focus lies at the intersection of civic engagement, human rights advocacy, and strategic youth leadership.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">School</p>
                    <p className="font-medium text-sm">Wheeler High School</p>
                    <p className="text-xs text-muted-foreground mt-1">Center of Advanced Studies in Science, Technology, and Math (STEM Magnet)</p>
                    <p className="text-xs text-secondary mt-2">Class of 2028</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Academic Profile</p>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-display font-bold text-white">4.3</span>
                      <span className="text-sm text-muted-foreground pb-1">GPA</span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Academic Letter Recipient</li>
                      <li>• Academic Recognition in Advanced Courses (Honors & AP)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Briefcase className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Experience</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {/* Experience 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card-border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              </div>
              <GlassCard className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] !p-6" delay={0.1}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">Cobb County Youth Commissioner</h3>
                </div>
                <div className="text-primary text-sm font-medium mb-4">Aug 2024 – Sep 2025</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Selected to represent youth voices in county government. Collaborated with officials on civic initiatives and contributed to discussions on local policies and community improvement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Policy Engagement</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Civic Leadership</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Public Speaking</Badge>
                </div>
              </GlassCard>
            </div>

            {/* Experience 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card-border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              </div>
              <GlassCard className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] !p-6" delay={0.2}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">Georgia 4-H Northwest District Board of Director</h3>
                </div>
                <div className="text-secondary text-sm font-medium mb-4">Feb 2025 – Present</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Planned and led youth leadership conferences and regional community service projects across Georgia. Coordinated with counties to expand outreach and participation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Event Coordination</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Strategic Planning</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Leadership</Badge>
                </div>
              </GlassCard>
            </div>

            {/* Experience 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card-border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
              </div>
              <GlassCard className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] !p-6" delay={0.3}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">"Human Rights Across Borders" – District Project</h3>
                </div>
                <div className="text-accent text-sm font-medium mb-4">Mar 2025 – Present</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Researched and presented on human rights issues across different regions, highlighting challenges faced by women, children, and minority populations at a state level.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Public Speaking</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Research</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Advocacy</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">Global Awareness</Badge>
                </div>
              </GlassCard>
            </div>

          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-yellow-500/10">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Awards & Honors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Northwest Georgia 4-H Public Speaking: Human Rights Across Different Regions", place: "1st Place", icon: Award, color: "text-yellow-400", bg: "bg-yellow-400/10" },
              { title: "Georgia State Congress (International Category)", place: "4th Place", icon: Globe, color: "text-blue-400", bg: "bg-blue-400/10" },
              { title: "National Consumer Judging Qualifying Team", place: "National", icon: Users, color: "text-purple-400", bg: "bg-purple-400/10" },
              { title: "Georgia 4-H Consumer Judging (State Level)", place: "1st Place", icon: Star, color: "text-emerald-400", bg: "bg-emerald-400/10" },
              { title: "4-H Public Speaking Competition (District Level)", place: "1st Place", icon: Trophy, color: "text-orange-400", bg: "bg-orange-400/10" }
            ].map((award, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="flex flex-col h-full relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 ${award.bg} rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50`} />
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${award.color}`}>
                    <award.icon className="w-6 h-6" />
                  </div>
                  <Badge className="bg-white/10 text-white hover:bg-white/20 border-0 pointer-events-none">
                    {award.place}
                  </Badge>
                </div>
                <h3 className="text-lg font-medium leading-snug relative z-10 mt-auto pt-4">{award.title}</h3>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-accent/10">
              <Layers className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Core Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard delay={0.1}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-primary">
                <div className="w-2 h-2 rounded-full bg-primary" /> Hard Skills
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Research and Data Analysis",
                  "Civic Engagement and Policy Awareness",
                  "Event Planning and Youth Leadership Coordination",
                  "Microsoft Office and Google Workspace Proficient"
                ].map((skill, i) => (
                  <motion.div 
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="p-3 rounded-lg bg-white/5 border border-white/5 text-sm flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.2}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-secondary">
                <div className="w-2 h-2 rounded-full bg-secondary" /> Soft Skills
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Creative and Critical Thinking",
                  "Strong Verbal and Written Communication",
                  "Collaboration and Team Leadership",
                  "Cultural Awareness and Empathy"
                ].map((skill, i) => (
                  <motion.div 
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="p-3 rounded-lg bg-white/5 border border-white/5 text-sm flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 pb-20">
          <GlassCard className="text-center relative overflow-hidden p-10 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl font-display font-bold uppercase tracking-tight mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-10">
                Open to discussions regarding civic initiatives, public speaking engagements, and collaborative projects in the social studies field.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("naitikmaheshwari30@gmail.com");
                    // Assuming a toast could be added here in a fuller implementation
                  }}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto justify-center"
                  data-testid="contact-email"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  <span className="font-medium text-sm">naitikmaheshwari30@gmail.com</span>
                </button>
                
                <a 
                  href="tel:404-388-3101"
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto justify-center"
                  data-testid="contact-phone"
                >
                  <Phone className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                  <span className="font-medium text-sm">404-388-3101</span>
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> Marietta, GA
              </div>
            </div>
          </GlassCard>
        </section>

      </main>
      
      {/* Minimal Footer */}
      <footer className="py-8 text-center text-xs text-muted-foreground/50 border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Naitik Maheshwari. All rights reserved.</p>
      </footer>
    </div>
  );
}
