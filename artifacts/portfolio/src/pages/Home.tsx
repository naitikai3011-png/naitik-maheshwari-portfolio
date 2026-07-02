import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile.jpeg";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative -mt-8 pt-8">
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-violet-400 to-purple-300 z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="z-10 w-full flex flex-col items-center text-center">
        {/* Avatar with decorative ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-violet-300/20 to-purple-200/30 scale-[1.12] blur-sm" />
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20 shadow-lg mx-auto relative">
              <AvatarImage src={profilePhoto} className="object-cover" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6 text-sm font-medium text-primary shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Civic Leader · Researcher · Entrepreneur
        </motion.div>

        {/* Name - split: first name in purple gradient, last name in dark */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-extrabold tracking-tighter uppercase font-display pb-2 leading-none"
          data-testid="hero-name"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
            Naitik
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground">
            Maheshwari
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-6 font-light tracking-wide leading-relaxed"
        >
          Motivated honors student and youth leader driving civic change through public policy,
          AI-powered research, and servant leadership across Georgia and beyond.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-12 mb-12"
        >
          <Card className="glass-card flex flex-col items-center justify-center p-6 text-center hover:border-primary/40 hover:shadow-md transition-all">
            <span className="text-4xl font-display font-bold text-foreground mb-2">4.4</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">GPA</span>
          </Card>
          <Card className="glass-card flex flex-col items-center justify-center p-6 text-center hover:border-primary/40 hover:shadow-md transition-all">
            <span className="text-4xl font-display font-bold text-foreground mb-2">10+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Major Roles</span>
          </Card>
          <Card className="glass-card flex flex-col items-center justify-center p-6 text-center hover:border-primary/40 hover:shadow-md transition-all">
            <span className="text-4xl font-display font-bold text-foreground mb-2">7</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Awards</span>
          </Card>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-8 shadow-sm">
            <Link href="/about" data-testid="hero-about-btn">
              About Me <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/5 hover:border-primary/40">
            <Link href="/experience" data-testid="hero-experience-btn">
              Experience
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
