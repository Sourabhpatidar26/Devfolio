// @/components/layout/footer.tsx
import Link from 'next/link';
import { personalInfo, contactMethods } from '@/lib/data';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = contactMethods.filter(cm => cm.iconName && (cm.label === 'LinkedIn' || cm.label === 'Email'));

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8 md:px-6 text-center text-sm text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map(link => {
            const IconComponent = link.iconName ? LucideIcons[link.iconName as keyof typeof LucideIcons] as LucideIcon : null;
            return (
              <Button key={link.label} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </a>
              </Button>
            );
          })}
        </div>
        <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-1">
          Built with Next.js and Tailwind CSS. 
        </p>
      </div>
    </footer>
  );
}
