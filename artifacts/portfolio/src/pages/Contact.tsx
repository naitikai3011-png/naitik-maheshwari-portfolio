import React from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Mail, Phone, MapPin, Send, Loader2, CalendarIcon, Copy, ExternalLink, Share2, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    }, 1000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

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
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2 text-white text-glow">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Open to discussions regarding civic initiatives, public speaking engagements, and collaborative projects.
          </p>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button className="shadow-glow rounded-full">
              <MessageSquare className="w-4 h-4 mr-2" /> Quick Contact
            </Button>
          </SheetTrigger>
          <SheetContent className="glass-panel border-white/10 sm:max-w-md">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-display uppercase tracking-tight text-white">Quick Message</SheetTitle>
              <SheetDescription>Send a brief message directly from here.</SheetDescription>
            </SheetHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" className="bg-black/20 border-white/10 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can I help you?" className="min-h-[120px] bg-black/20 border-white/10 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-4" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  Send Quick Message
                </Button>
              </form>
            </Form>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <Card className="glass-card border-white/10">
            <CardContent className="p-6 sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-white/5 border-white/10 h-12 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-white/5 border-white/10 h-12 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10 h-12 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your inquiry in detail..." className="min-h-[150px] bg-white/5 border-white/10 resize-y focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-8" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <Card className="glass-card border-white/10 hover:border-primary/50 transition-colors">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</h3>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-lg font-medium text-white truncate hover:text-primary transition-colors focus:outline-none w-full text-left">
                      naitikmaheshwari30@gmail.com
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="glass-panel border-white/10">
                    <DropdownMenuItem onClick={() => copyToClipboard("naitikmaheshwari30@gmail.com", "Email")}>
                      <Copy className="w-4 h-4 mr-2" /> Copy to clipboard
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="mailto:naitikmaheshwari30@gmail.com">
                        <ExternalLink className="w-4 h-4 mr-2" /> Open Mail Client
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="w-4 h-4 mr-2" /> Share Contact
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 hover:border-secondary/50 transition-colors">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</h3>
                <button 
                  onClick={() => copyToClipboard("404-388-3101", "Phone number")}
                  className="text-lg font-medium text-white hover:text-secondary transition-colors focus:outline-none text-left block"
                >
                  404-388-3101
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 hover:border-accent/50 transition-colors">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
                <p className="text-lg font-medium text-white">Marietta, GA 30066</p>
                <p className="text-sm text-muted-foreground mt-1">Available for local and remote engagements</p>
              </div>
            </CardContent>
          </Card>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full mt-4 bg-white/5 border-white/10 hover:bg-white/10 h-14 rounded-xl">
                <CalendarIcon className="w-5 h-5 mr-2 text-primary" /> Check Availability
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 glass-panel border-white/10" align="end">
              <Calendar
                mode="single"
                className="rounded-md"
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
              />
              <div className="p-3 border-t border-white/10 text-xs text-center text-muted-foreground">
                Select a date to propose a meeting
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
