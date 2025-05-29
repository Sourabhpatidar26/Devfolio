// @/components/ui/project-card.tsx
"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/lib/data';
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.custom
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      // Framer Motion's `motion.custom` expects a DOM element type, but Card is a React component.
      // So, we wrap Card in a motion.div or use forwardRef if Card supports it.
      // For Shadcn Card, it's a div, so this should work if we use motion(Card) or wrap it.
      // Let's wrap it in motion.div for simplicity.
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
        <CardHeader className="p-0">
          <div className="aspect-video overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              data-ai-hint={project.imageAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-semibold mb-2 text-primary">{project.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-4 h-20 overflow-y-auto custom-scrollbar">
            {project.description}
          </CardDescription>
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-muted/30 border-t">
          <div className="flex justify-end w-full space-x-3">
            {project.githubLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {project.liveLink && (
              <Button variant="default" size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.custom>
  );
}

// Add custom scrollbar style to globals.css or here if it's component-specific
// .custom-scrollbar::-webkit-scrollbar { width: 6px; }
// .custom-scrollbar::-webkit-scrollbar-track { background: hsl(var(--muted) / 0.5); border-radius: 3px; }
// .custom-scrollbar::-webkit-scrollbar-thumb { background: hsl(var(--primary) / 0.7); border-radius: 3px; }
// .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary)); }
// Added to globals.css
