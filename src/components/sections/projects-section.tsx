// @/components/sections/projects-section.tsx
import { projects, sectionIconMapping } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProjectCard } from '@/components/ui/project-card';
import { Presentation } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="My Projects" icon={Presentation} subtitle="A selection of projects I've worked on." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
