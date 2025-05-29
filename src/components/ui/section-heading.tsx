import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  className?: string;
}

export function SectionHeading({ title, subtitle, icon: Icon, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-12 text-center", className)}>
      {Icon && <Icon className="mx-auto h-12 w-12 text-primary mb-4" />}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
