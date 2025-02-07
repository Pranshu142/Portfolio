"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
// Animation and Icons
import { motion } from "framer-motion";
import { Code2, GraduationCap, Layers, Moon, Sun } from "lucide-react";

// UI Components
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

// Theme Components
import { useTheme } from "next-themes";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "Chat Application",
    stack: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Real-time chat application with comprehensive features",
    points: [
      "Developed user registration, authentication, and real-time communication using Socket.io",
      "Designed intuitive UI with React.js and styled components for seamless navigation",
      "Implemented RESTful APIs in Node.js with Express.js for efficient backend",
      "Secured data using JWT and MongoDB for scalable storage",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
    demo: "https://example.com/chat-app",
    github: "https://github.com/username/chat-app",
  },
  {
    title: "Uber Clone",
    stack: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    description: "Full-featured ride-booking platform",
    points: [
      "Created real-time location tracking and route calculation using Google Maps API",
      "Integrated user authentication with bcrypt and JWT",
      "Built interactive map interface with Leaflet JS and Socket.io",
      "Optimized for scalability and high concurrent usage",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Google Maps API",
      "Leaflet JS",
    ],
    demo: "https://example.com/uber-clone",
    github: "https://github.com/username/uber-clone",
  },
];

export default function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen p-8 md:p-24"
      >
        {/* Theme Switch */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="fixed top-4 right-4"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-20 flex items-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-32 w-32">
              <AvatarImage src="/p1.jpg" />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">Pranshu Pandey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Software Developer & Designer
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="mt-4" variant="outline">
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-20"
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Technical Skills</h2>
              </motion.div>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    category: "Languages",
                    icon: "⚡",
                    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
                  },
                  {
                    category: "Frameworks/Libraries",
                    icon: "🛠️",
                    skills: [
                      "ReactJs",
                      "ExpressJs",
                      "Framer JS",
                      "GSAP",
                      "Scroll Trigger",
                      "Leaflet JS",
                    ],
                  },
                  {
                    category: "UI Tools",
                    icon: "🎨",
                    skills: ["Headless UI", "Tailwind CSS", "Bootstrap"],
                  },
                  {
                    category: "Databases",
                    icon: "🗄️",
                    skills: ["MySQL", "MongoDB"],
                  },
                  {
                    category: "Web Technologies",
                    icon: "🌐",
                    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
                  },
                  {
                    category: "Tools",
                    icon: "🔧",
                    skills: ["VScode", "IntelliJ IDEA", "Git", "Github"],
                  },
                  {
                    category: "Problem Solving",
                    icon: "🧩",
                    skills: ["Data Structures", "Algorithms", "Leetcode 100+"],
                  },
                ].map((category) => (
                  <motion.div
                    key={category.category}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-card border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="font-semibold text-lg">
                        {category.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="px-3 py-1 hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-20"
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </motion.div>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div variants={staggerContainer} className="space-y-6">
                {[
                  {
                    degree: "B-TECH in Computer Science (Data Science)",
                    institution:
                      "GL Bajaj Institute of Technology and Management",
                    duration: "Aug 2021 – Present",
                    location: "Greater Noida, Uttar Pradesh",
                    grade: "CGPA: 7.7 (till 6th semester)",
                    current: true,
                  },
                  {
                    degree: "Class 12",
                    institution: "Manbodhan Prasad Public School",
                    duration: "Mar 2019 – Mar 2020",
                    location: "Kanpur, Uttar Pradesh",
                    grade: "Percentage: 78%",
                  },
                  {
                    degree: "Class 10",
                    institution: "Dr Virendra Swaroop Education Center",
                    duration: "Mar 2017 – Mar 2018",
                    location: "Kanpur, Uttar Pradesh",
                    grade: "Percentage: 95%",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={`relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] 
              ${edu.current ? "before:bg-primary" : "before:bg-muted"}`}
                  >
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                    <div className="p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300">
                      <motion.h3
                        className="font-bold text-xl mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.div
                        className="space-y-2 text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="font-medium text-primary">
                          {edu.institution}
                        </p>
                        <div className="flex justify-between text-sm">
                          <span>{edu.duration}</span>
                          <span>{edu.location}</span>
                        </div>
                        <Badge variant="secondary">{edu.grade}</Badge>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -5 }}
          className="mb-20"
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <Layers className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Projects</h2>
              </motion.div>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <Card className="h-full overflow-hidden border border-border/50 bg-card">
                      <CardHeader className="relative h-48 p-0">
                        <Image
                          src={project.image || "/project-placeholder.png"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {project.stack}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <ScrollArea className="h-[300px] pr-4">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-bold tracking-tight">
                                {project.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-2">
                                {project.description}
                              </p>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                              {project.points.map((point, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <p className="text-sm text-muted-foreground">
                                    • {point}
                                  </p>
                                </motion.div>
                              ))}
                            </div>

                            <Separator />

                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Tooltip key={tech}>
                                  <TooltipTrigger>
                                    <Badge
                                      variant="outline"
                                      className="hover:bg-primary/10 transition-colors"
                                    >
                                      {tech}
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="text-xs">Built with {tech}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </div>
                          </div>
                        </ScrollArea>

                        <div className="flex gap-4 mt-6">
                          <HoverCard>
                            <HoverCardTrigger>
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full"
                                onClick={() =>
                                  window.open(project.demo, "_blank")
                                }
                              >
                                Live Demo
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                              View live demo of the project
                            </HoverCardContent>
                          </HoverCard>

                          <HoverCard>
                            <HoverCardTrigger>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() =>
                                  window.open(project.github, "_blank")
                                }
                              >
                                GitHub
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                              View source code on GitHub
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-20"
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </motion.div>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "NPTEL Java",
                    badge: "Silver Elite Certificate",
                    highlight: "Top 2% Performer",
                    points: [
                      "Completed comprehensive Java course",
                      "Top 2% performer nationwide",
                    ],
                  },
                  {
                    title: "NPTEL Python",
                    badge: "Silver Elite Certificate",
                    points: [
                      "Python programming expertise",
                      "Silver Elite status achievement",
                    ],
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold">{cert.title}</h3>
                          <Badge variant="default">{cert.badge}</Badge>
                        </div>
                        {cert.highlight && (
                          <Badge className="mb-4" variant="secondary">
                            {cert.highlight}
                          </Badge>
                        )}
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {cert.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.main>
    </TooltipProvider>
  );
}
