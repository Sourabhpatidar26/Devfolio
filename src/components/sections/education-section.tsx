// @/components/sections/education-section.tsx
import { education } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap as SectionIcon } from 'lucide-react'; // Main section icon
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Education" icon={SectionIcon} subtitle="My academic qualifications." />
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => {
            const IconComponent = edu.iconName ? LucideIcons[edu.iconName as keyof typeof LucideIcons] as LucideIcon : null;
            return (
              <Card key={index} className="shadow-lg overflow-hidden animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-primary/10 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-primary">{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  {IconComponent && <IconComponent className="h-10 w-10 text-primary/70" />}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
