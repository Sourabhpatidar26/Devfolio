// @/components/sections/skills-section.tsx
import { skills, sectionIconMapping, type Skill } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { SkillBar } from '@/components/ui/skill-bar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from 'lucide-react';

const groupSkillsByCategory = (skillList: Skill[]) => {
  return skillList.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

export function SkillsSection() {
  const groupedSkills = groupSkillsByCategory(skills);
  const categories = Object.keys(groupedSkills) as Skill['category'][];
  // Ensure a consistent order for categories
  const categoryOrder: Skill['category'][] = ['Frontend', 'Backend', 'Mobile', 'Database', 'Frameworks', 'Tools', 'Other'];
  const sortedCategories = categoryOrder.filter(cat => categories.includes(cat));


  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Technical Skills" icon={Zap} subtitle="A showcase of my technical proficiencies." />
        
        <Tabs defaultValue={sortedCategories[0]} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {sortedCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList

          {sortedCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <Card className="shadow-lg animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category} Proficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {groupedSkills[category]?.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
