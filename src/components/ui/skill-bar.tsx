// @/components/ui/skill-bar.tsx
"use client";

import { useEffect, useState, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import type { Skill } from '@/lib/data';
import { motion, useAnimation, useInView } from "framer-motion";
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillBarProps {
  skill: Skill; // Skill type already updated in data.ts to use iconName
}

export function SkillBar({ skill }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${skill.level}%`,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 }
      });
      setIsVisible(true);
    }
  }, [inView, controls, skill.level]);

  const IconComponent = skill.iconName ? LucideIcons[skill.iconName as keyof typeof LucideIcons] as LucideIcon : null;

  return (
    <div ref={ref} className="mb-4 group">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {IconComponent && <IconComponent className="h-5 w-5 mr-2 text-primary group-hover:text-accent transition-colors" />}
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold text-primary group-hover:text-accent transition-colors">
          {isVisible ? `${skill.level}%` : '0%'}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
}
