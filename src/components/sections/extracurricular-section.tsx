// @/components/sections/extracurricular-section.tsx
import { extracurricularActivities, sectionIconMapping } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export function ExtraCurricularSection() {
  return (
    <section id="extracurricular" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Achievements & Activities" icon={Sparkles} subtitle="Beyond the code." />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {extracurricularActivities.map((activity, index) => (
            <Card key={index} className="shadow-lg overflow-hidden animate-fade-in-up hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-xl font-semibold text-primary flex items-center">
                  {activity.icon && <activity.icon className="mr-3 h-6 w-6" />}
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-foreground/80 leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
