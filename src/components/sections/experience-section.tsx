// @/components/sections/experience-section.tsx
import { experiences, sectionIconMapping } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Work Experience" icon={Briefcase} subtitle="My professional background and roles." />
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg overflow-hidden animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-primary/10 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-primary">{exp.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                {exp.icon && <exp.icon className="h-10 w-10 text-primary/70" />}
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
                {exp.description && (
                  <p className="text-foreground/80">{exp.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
