// @/components/sections/about-section.tsx
import { personalInfo, sectionIconMapping } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="About Me" icon={UserCheck} subtitle="My professional journey and aspirations." />
        <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden animate-fade-in-up">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-2xl text-primary flex items-center">
              <UserCheck className="mr-3 h-7 w-7" />
              Professional Objective
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
              {personalInfo.objective}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Add animation to globals.css or tailwind.config.ts
// .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// Will be added to tailwind.config.ts
