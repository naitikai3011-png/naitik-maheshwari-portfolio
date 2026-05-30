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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Trophy, Award, Globe, Users, Star, StarIcon, MapPin, Calendar } from "lucide-react";

const awardsData = [
  {
    id: "1",
    title: "Northwest Georgia 4-H Public Speaking: Human Rights Across Different Regions",
    place: "1st Place",
    level: "District",
    icon: Award,
    color: "yellow",
    desc: "Delivered a comprehensive presentation on global human rights violations, securing first place in the highly competitive district level event.",
    date: "2025",
    location: "Northwest Georgia"
  },
  {
    id: "2",
    title: "Georgia State Congress",
    category: "International Category",
    place: "4th Place",
    level: "State",
    icon: Globe,
    color: "blue",
    desc: "Competed at the state level in legislative simulation, debating complex international policies and authoring bills.",
    date: "2024",
    location: "Atlanta, GA"
  },
  {
    id: "3",
    title: "National Consumer Judging Qualifying Team",
    place: "National Qualifier",
    level: "National",
    icon: Users,
    color: "purple",
    desc: "Qualified as part of the state team to represent Georgia at the national consumer judging competition, evaluating products and services.",
    date: "2024",
    location: "National"
  },
  {
    id: "4",
    title: "Georgia 4-H Consumer Judging",
    place: "1st Place",
    level: "State",
    icon: Star,
    color: "emerald",
    desc: "Won the top statewide honor for critical thinking and rational decision-making in the consumer sciences judging competition.",
    date: "2023",
    location: "Georgia"
  },
  {
    id: "5",
    title: "4-H Public Speaking Competition",
    place: "1st Place",
    level: "District",
    icon: Trophy,
    color: "orange",
    desc: "Secured first place in the district for persuasive and informative public speaking.",
    date: "2023",
    location: "Northwest Georgia"
  }
];

export default function Awards() {
  const [filter, setFilter] = useState("All");
  const [selectedAward, setSelectedAward] = useState<typeof awardsData[0] | null>(null);

  const filteredAwards = awardsData.filter(award => {
    if (filter === "All") return true;
    if (filter === "1st Place") return award.place.includes("1st Place");
    if (filter === "State") return award.level === "State";
    if (filter === "National") return award.level === "National";
    return true;
  });

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
            <BreadcrumbPage>Awards</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-white text-glow">Awards & Honors</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Recognized for excellence in public speaking, legislative simulation, and critical analysis at the district, state, and national levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="glass-card bg-primary/10 border-primary/20 p-6 flex flex-col justify-center items-center text-center">
          <Trophy className="w-8 h-8 text-primary mb-2" />
          <span className="text-3xl font-display font-bold text-white">5</span>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Total Awards</span>
        </Card>
        <Card className="glass-card bg-yellow-500/10 border-yellow-500/20 p-6 flex flex-col justify-center items-center text-center">
          <StarIcon className="w-8 h-8 text-yellow-500 mb-2" />
          <span className="text-3xl font-display font-bold text-white">3</span>
          <span className="text-sm font-medium text-yellow-500 uppercase tracking-wider">First Place Finishes</span>
        </Card>
        <Card className="glass-card bg-secondary/10 border-secondary/20 p-6 flex flex-col justify-center items-center text-center">
          <Globe className="w-8 h-8 text-secondary mb-2" />
          <span className="text-3xl font-display font-bold text-white">State & National</span>
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Competition Level</span>
        </Card>
      </div>

      <Alert className="bg-primary/5 border-primary/30 backdrop-blur-md mb-8">
        <Award className="h-5 w-5 text-primary" />
        <AlertTitle className="text-white font-semibold tracking-wide">Top Achievement</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          Recent 1st Place victory in Northwest Georgia 4-H Public Speaking focusing on "Human Rights Across Different Regions".
        </AlertDescription>
      </Alert>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-display font-semibold">Trophy Case</h2>
        <ToggleGroup type="single" value={filter} onValueChange={(v) => v && setFilter(v)} className="bg-white/5 p-1 rounded-lg border border-white/10">
          <ToggleGroupItem value="All" aria-label="Toggle All">All</ToggleGroupItem>
          <ToggleGroupItem value="1st Place" aria-label="Toggle 1st Place">1st Place</ToggleGroupItem>
          <ToggleGroupItem value="State" aria-label="Toggle State">State</ToggleGroupItem>
          <ToggleGroupItem value="National" aria-label="Toggle National">National</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAwards.map((award) => (
          <Card 
            key={award.id} 
            className="glass-card overflow-hidden cursor-pointer hover:border-primary/50 transition-all hover:-translate-y-1 group relative h-full flex flex-col"
            onClick={() => setSelectedAward(award)}
            data-testid={`award-card-${award.id}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${award.color}-500/20 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-30`} />
            
            <CardContent className="p-6 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-${award.color}-400 group-hover:scale-110 transition-transform`}>
                  <award.icon className="w-6 h-6" />
                </div>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge className={`${award.place.includes("1st") ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" : "bg-white/10 text-white border-white/20"} font-medium`}>
                      {award.place}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Placement</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">{award.title}</h3>
              {award.category && <p className="text-sm text-muted-foreground mb-4">{award.category}</p>}
              
              <div className="mt-auto pt-6 flex items-center gap-2">
                <Badge variant="outline" className="bg-black/30 border-white/10 text-xs font-normal">
                  {award.level} Level
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedAward} onOpenChange={(open) => !open && setSelectedAward(null)}>
        <DialogContent className="glass-card border-white/10 sm:max-w-md">
          {selectedAward && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl bg-${selectedAward.color}-500/20 text-${selectedAward.color}-400 border border-${selectedAward.color}-500/30`}>
                    <selectedAward.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <Badge className={`${selectedAward.place.includes("1st") ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" : "bg-white/10 text-white border-white/20"} mb-1`}>
                      {selectedAward.place}
                    </Badge>
                    <Badge variant="outline" className="ml-2 bg-black/30 border-white/10">
                      {selectedAward.level} Level
                    </Badge>
                  </div>
                </div>
                <DialogTitle className="text-2xl font-display font-bold leading-tight">{selectedAward.title}</DialogTitle>
                {selectedAward.category && <DialogDescription className="text-lg">{selectedAward.category}</DialogDescription>}
              </DialogHeader>
              
              <div className="py-4 text-muted-foreground leading-relaxed text-base">
                {selectedAward.desc}
              </div>
              
              <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-sm font-medium text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{selectedAward.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>{selectedAward.location}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
