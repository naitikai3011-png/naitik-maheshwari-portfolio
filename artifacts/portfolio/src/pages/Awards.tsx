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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Trophy, Award, Globe, Star, StarIcon, MapPin, Calendar, Dumbbell } from "lucide-react";

const awardsData = [
  {
    id: "1",
    title: "Georgia 4-H Consumer Judging",
    place: "1st Place",
    level: "State",
    icon: Star,
    desc: "Won the state championship in consumer judging, critically evaluating consumer products and defending reasoning before judges — qualifying the team for Nationals.",
    date: "2024",
    location: "Georgia"
  },
  {
    id: "2",
    title: "National FCS Consumer Judging Team Championship",
    place: "1st Place",
    level: "National",
    icon: Trophy,
    desc: "Won the National FCS Consumer Judging Team Championship, representing Georgia after qualifying at the state level. Evaluated consumer products and defended analytical reasoning before national-level judges.",
    date: "2024",
    location: "National"
  },
  {
    id: "3",
    title: "Northwest District Project Achievement — Human Rights Across Different Regions",
    place: "1st Place",
    level: "District",
    icon: Award,
    desc: "Conducted independent research on global human rights issues and delivered a competitive presentation before judges and peers, securing 1st place at the district level.",
    date: "2025",
    location: "Northwest Georgia"
  },
  {
    id: "4",
    title: "Northwest Georgia 4-H Public Speaking",
    place: "1st Place",
    level: "District",
    icon: Award,
    desc: "Secured first place in the district for persuasive and informative public speaking, recognized for delivery, content, and audience engagement.",
    date: "2023",
    location: "Northwest Georgia"
  },
  {
    id: "5",
    title: "Georgia State Congress",
    category: "International Category",
    place: "4th Place",
    level: "State",
    icon: Globe,
    desc: "Competed at the state level in legislative simulation, debating complex international policies and authoring bills in the International category.",
    date: "2024",
    location: "Atlanta, GA"
  },
  {
    id: "6",
    title: "Academic Letter Recipient",
    place: "Honor",
    level: "School",
    icon: Award,
    desc: "Earned an Academic Letter for sustained academic excellence across Honors and AP coursework at Wheeler High School STEM Magnet.",
    date: "2024",
    location: "Wheeler High School"
  },
  {
    id: "7",
    title: "Varsity Swim & Water Polo — Georgia State Champions",
    place: "State Champions",
    level: "State",
    icon: Dumbbell,
    desc: "Member of the Varsity Swim & Water Polo team that won the Georgia State Championship.",
    date: "2024",
    location: "Georgia"
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

  const isTopPlace = (place: string) => place.includes("1st") || place === "State Champions";

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
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-foreground">Awards & Honors</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Recognized for excellence in consumer judging, public speaking, legislative simulation, and athletics at the district, state, and national levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="glass-card bg-primary/5 border-primary/20 p-6 flex flex-col justify-center items-center text-center hover:shadow-md transition-all">
          <Trophy className="w-8 h-8 text-primary mb-2" />
          <span className="text-3xl font-display font-bold text-foreground">7</span>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Total Awards</span>
        </Card>
        <Card className="glass-card bg-amber-50 border-amber-200 p-6 flex flex-col justify-center items-center text-center hover:shadow-md transition-all">
          <StarIcon className="w-8 h-8 text-amber-500 mb-2" />
          <span className="text-3xl font-display font-bold text-foreground">4</span>
          <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">First Place Finishes</span>
        </Card>
        <Card className="glass-card bg-violet-50 border-violet-200 p-6 flex flex-col justify-center items-center text-center hover:shadow-md transition-all">
          <Globe className="w-8 h-8 text-violet-500 mb-2" />
          <span className="text-3xl font-display font-bold text-foreground">District–National</span>
          <span className="text-sm font-medium text-violet-600 uppercase tracking-wider">Competition Level</span>
        </Card>
      </div>

      <Alert className="bg-primary/5 border-primary/20 mb-8">
        <Award className="h-5 w-5 text-primary" />
        <AlertTitle className="text-foreground font-semibold tracking-wide">Top Achievement</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          1st Place National FCS Consumer Judging Team Championship — won after also winning the Georgia State Championship in consumer judging.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">Trophy Case</h2>
        <ToggleGroup type="single" value={filter} onValueChange={(v) => v && setFilter(v)} className="bg-muted p-1 rounded-lg border border-border">
          <ToggleGroupItem value="All" aria-label="Toggle All" className="data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm rounded-md">All</ToggleGroupItem>
          <ToggleGroupItem value="1st Place" aria-label="Toggle 1st Place" className="data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm rounded-md">1st Place</ToggleGroupItem>
          <ToggleGroupItem value="State" aria-label="Toggle State" className="data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm rounded-md">State</ToggleGroupItem>
          <ToggleGroupItem value="National" aria-label="Toggle National" className="data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm rounded-md">National</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAwards.map((award) => (
          <Card
            key={award.id}
            className="glass-card overflow-hidden cursor-pointer hover:border-primary/40 hover:shadow-md transition-all hover:-translate-y-1 group relative h-full flex flex-col"
            onClick={() => setSelectedAward(award)}
            data-testid={`award-card-${award.id}`}
          >
            <CardContent className="p-6 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-primary/8 border border-primary/15 text-primary group-hover:scale-110 transition-transform">
                  <award.icon className="w-6 h-6" />
                </div>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge className={`${isTopPlace(award.place) ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-muted text-muted-foreground border-border"} font-medium`}>
                      {award.place}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Placement</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-1 leading-snug">{award.title}</h3>
              {award.category && <p className="text-sm text-muted-foreground mb-4">{award.category}</p>}
              
              <div className="mt-auto pt-6 flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs font-normal">
                  {award.level} Level
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedAward} onOpenChange={(open) => !open && setSelectedAward(null)}>
        <DialogContent className="glass-card border-border sm:max-w-md">
          {selectedAward && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <selectedAward.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <Badge className={`${isTopPlace(selectedAward.place) ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-muted text-muted-foreground border-border"} mb-1`}>
                      {selectedAward.place}
                    </Badge>
                    <Badge variant="outline" className="ml-2 bg-primary/5 border-primary/20 text-primary">
                      {selectedAward.level} Level
                    </Badge>
                  </div>
                </div>
                <DialogTitle className="text-2xl font-display font-bold leading-tight text-foreground">{selectedAward.title}</DialogTitle>
                {selectedAward.category && <DialogDescription className="text-lg">{selectedAward.category}</DialogDescription>}
              </DialogHeader>
              
              <div className="py-4 text-muted-foreground leading-relaxed text-base">
                {selectedAward.desc}
              </div>
              
              <div className="flex items-center gap-6 pt-4 border-t border-border text-sm font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{selectedAward.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
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
