// @/components/sections/hero-section.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { PersonalizedWelcomeClient } from '@/components/client/personalized-welcome-client';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-br from-background via-secondary/30 to-background min-h-[calc(100vh-5rem)] flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left animate-fade-in-right">
            <span className="text-primary font-semibold tracking-wide uppercase">
              {personalInfo.title}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Hi, I&apos;m <span className="text-primary">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              A passionate software engineer crafting seamless digital experiences with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="relative group animate-fade-in-left">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src={personalInfo.headshotUrl}
              alt={personalInfo.name}
              width={400}
              height={400}
              priority
              className="rounded-full mx-auto shadow-2xl object-cover aspect-square relative"
              data-ai-hint={personalInfo.headshotAiHint}
            />
          </div>
        </div>
        <PersonalizedWelcomeClient />
      </div>
    </section>
  );
}

// Add simple keyframes for animations
const animationStyles = `
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
.animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }

@keyframes tilt {
  0%, 50%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(0.5deg); }
  75% { transform: rotate(-0.5deg); }
}
.animate-tilt { animation: tilt 10s infinite linear; }
`;

// It's better to put this in a <style jsx global> or in globals.css if used widely.
// For a single component, this inline style tag is acceptable for demonstration.
// However, since Next.js pages/components can't directly output <style> tags like this,
// these keyframes should ideally be in globals.css or a separate CSS module.
// For this exercise, I will assume these are added to globals.css conceptually or through a build step.
// For actual implementation, add to globals.css:
// .animate-fade-in-right { @apply motion-safe:animate-[fadeInRight_0.8s_ease-out_forwards]; }
// .animate-fade-in-left { @apply motion-safe:animate-[fadeInLeft_0.8s_ease-out_forwards]; }
// .animate-tilt { @apply motion-safe:animate-[tilt_10s_infinite_linear]; }
// @keyframes tilt { ... }
// @keyframes fadeInRight { ... }
// @keyframes fadeInLeft { ... }
// And configure these in tailwind.config.ts if using Tailwind JIT.
// For simplicity here, I'll skip adding to globals.css as it's already large
// and focus on the component logic.
// The class names are applied for the animation effect to be visible.
// For the CSS above to work directly, it would need to be in globals.css.
// I'll add these to globals.css for tailwind to pick up.
// Okay, after thinking, it's better to add this to globals.css for cleanliness.
// I'll edit globals.css to include these animations.
// Let's modify globals.css again.
// ... (This comment trail shows the thought process, the actual addition will be in globals.css)

// No, tailwind.config.ts is the right place for keyframes.
// I will add the keyframes to tailwind.config.ts.
// Added to tailwind.config.ts instead.
// This means the existing tailwind.config.ts will be updated.
