import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/IMG_6720_1780111869102.jpeg";

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
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-[60] transform-origin-left"
        style={{ scaleX }}
      />
      
      <HeroBlobs />

      <div className="z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/40 shadow-glow mx-auto">
            <AvatarImage src={profilePhoto} className="object-cover" />
            <AvatarFallback>NM</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 text-sm text-muted-foreground shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Civic Leader · Researcher · Entrepreneur
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase font-display text-gradient pb-4"
          data-testid="hero-name"
        >
          Naitik Maheshwari
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 font-light tracking-wide leading-relaxed"
        >
          Motivated honors student and youth leader driving civic change through public policy, 
          AI-powered research, and servant leadership across Georgia and beyond.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-12 mb-12"
        >
          <Card className="glass-card flex flex-col items-center justify-center p-6 text-center border-white/5 hover:border-primary/30 transition-colors">
            <span className="text-4xl font-display font-bold text-white mb-2">4.4</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">GPA</span>
          </Card>
          <Card className="glass-card flex flex-col items-center justify-center p-6 text-center border-white/5 hover:border-accent/30 transition-colors">
            <span className="text-4xl font-display font-bold text-white mb-2">10+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Major Roles</span>
          </Card>
          <Card className="glass-card flex flex-col items-center justify-center p-6 text-center border-white/5 hover:border-secondary/30 transition-colors">
            <span className="text-4xl font-display font-bold text-white mb-2">7</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Awards</span>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full shadow-glow">
            <Link href="/about" data-testid="hero-about-btn">
              About Me <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-white/5 hover:bg-white/10 border-white/10 backdrop-blur-md">
            <Link href="/experience" data-testid="hero-experience-btn">
              Experience
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
