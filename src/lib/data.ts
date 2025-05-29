import type { LucideIcon as LucideIconType } from 'lucide-react';
// Keep direct imports for sectionIconMapping as it's used server-side directly
import { Briefcase, Code2, Database, Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Presentation, Server, Smartphone, Sparkles, Star, UserCheck, Users, Wrench, Zap } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Sourabh Patidar',
  title: 'Associate Software Engineer',
  email: 'sourabhpatidar389@gmail.com',
  phone: '+91 7748026642',
  location: 'Indore, India',
  linkedin: 'https://linkedin.com/in/sourabh-patidar',
  objective: "Experienced Associate Software Engineer with 2.6+ years of professional experience in full-stack web and mobile application development. Proficient in React.js, React Native, and Swift, with a strong foundation in building scalable, user-centric applications across platforms. Passionate about creating impactful digital experiences and continuously learning new technologies. Actively seeking a full-time role in a forward-thinking team where I can contribute my technical expertise, problem-solving skills, and dedication to product excellence.",
  resumeUrl: '/Sourabh_Patidar_Resume.pdf',
  headshotUrl: 'https://placehold.co/400x400.png',
  headshotAiHint: 'professional man',
};

// Using string type for iconName for flexibility, can be tightened with keyof typeof LucideIcons if needed
// and all icons are guaranteed to exist. For now, components will handle missing icons.
type IconName = keyof typeof import('lucide-react');


export interface Skill {
  name: string;
  level: number; 
  iconName?: IconName; 
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Tools' | 'Frameworks' | 'Other';
}

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, iconName: 'Code2', category: 'Frontend' },
  { name: 'CSS3', level: 90, iconName: 'Code2', category: 'Frontend' },
  { name: 'JavaScript', level: 90, iconName: 'Code2', category: 'Frontend' },
  { name: 'React.js', level: 90, iconName: 'Zap', category: 'Frontend' },
  { name: 'Next.js', level: 85, iconName: 'Zap', category: 'Frontend' },
  { name: 'React Native (Expo)', level: 85, iconName: 'Smartphone', category: 'Mobile' },
  { name: 'Swift (iOS)', level: 75, iconName: 'Smartphone', category: 'Mobile' },
  { name: 'Node.js', level: 80, iconName: 'Server', category: 'Backend' },
  { name: 'Express.js', level: 80, iconName: 'Server', category: 'Backend' },
  { name: 'Shopify', level: 70, iconName: 'Code2', category: 'Other' },
  { name: 'MySQL', level: 75, iconName: 'Database', category: 'Database' },
  { name: 'MongoDB', level: 80, iconName: 'Database', category: 'Database' },
  { name: 'Git', level: 90, iconName: 'Github', category: 'Tools' },
  { name: 'Xcode', level: 70, iconName: 'Wrench', category: 'Tools' },
  { name: 'VSCode', level: 95, iconName: 'Wrench', category: 'Tools' },
  { name: 'Postman', level: 85, iconName: 'Wrench', category: 'Tools' },
  { name: 'Bootstrap', level: 85, iconName: 'Code2', category: 'Frameworks' },
  { name: 'Tailwind CSS', level: 90, iconName: 'Code2', category: 'Frameworks' },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageAiHint: string;
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 'apple-fix-pros',
    title: 'Apple Fix Pros',
    description: 'An eCommerce web application for Apple device repair services and part sales. Built for performance, SEO optimization, and a smooth user experience.',
    techStack: ['Next.js', 'Node.js', 'Bootstrap'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'ecommerce website',
    liveLink: '#', 
  },
  {
    id: 'vinyasa',
    title: 'Vinyasa – Yoga and Wellness App',
    description: 'A mobile yoga app to guide users through daily yoga sessions and promote healthy lifestyle habits. Offers structured routines and progress tracking.',
    techStack: ['React Native', 'Expo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'mobile app yoga',
  },
  {
    id: 'groov-consumer',
    title: 'Groov Consumer App',
    description: 'A custom insole ordering app for iOS. Allows users to scan feet, select shoe details, and place orders with tracking.',
    techStack: ['Swift', 'Node.js'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'mobile app shoes',
  },
  {
    id: 'wealthcon',
    title: 'Wealthcon App',
    description: 'An educational web app for students to watch video lectures, read articles, and access newsletters. Includes an admin panel for content management.',
    techStack: ['React.js', 'Node.js'], 
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'education platform',
  },
  {
    id: 'nps-overview',
    title: 'NPS Overview App',
    description: 'A customer feedback app integrated with Shopify. Automates post-delivery WhatsApp messages for ratings and visualizes data on a dashboard.',
    techStack: ['Shopify', 'Node.js', 'React.js'], 
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'dashboard chart',
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string; 
  iconName?: IconName;
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Techinfini solutions Pvt,Ltd',
    period: 'Oct 2022 - Current',
    location: 'VijayNagar, Scheme No 54, Indore, (M.P.)',
    iconName: 'Briefcase',
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  iconName?: IconName;
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'JIT college borawan',
    period: '2020 - 2022',
    location: 'Khargone (M.P.)',
    iconName: 'GraduationCap',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Govt. Pg college Khargone',
    period: '2016 - 2020',
    location: 'Khargone (M.P.)',
    iconName: 'GraduationCap',
  },
];

export interface Activity {
  title: string;
  description: string;
  iconName?: IconName;
}

export const extracurricularActivities: Activity[] = [
  {
    title: 'MERN Stack Internship',
    description: 'Successfully completed a six-month internship in MERN stack development at Ypsilon IT Solutions Pvt Ltd. Gained hands-on experience and contributed to a Student Management System project, building a solid foundation in modern web development.',
    iconName: 'Star',
  },
  {
    title: 'Innovate India Coding Championship',
    description: 'Completed the Innovate India Coding Championship hosted by Coding Ninja, showcasing proficiency in advanced coding challenges and algorithmic problem-solving. Highlights dedication to continuous learning and strong programming skills.',
    iconName: 'Sparkles',
  },
];

interface ContactMethod {
  label: string;
  value: string;
  href?: string;
  iconName: IconName;
}

export const contactMethods: ContactMethod[] = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, iconName: 'Mail' },
  { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, iconName: 'Phone' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sourabh-patidar', href: personalInfo.linkedin, iconName: 'Linkedin' },
  { label: 'Location', value: personalInfo.location, iconName: 'MapPin' },
];

// sectionIconMapping is used by Server Components, passing components directly is fine here.
export const sectionIconMapping: { [key: string]: LucideIconType } = {
  about: UserCheck,
  projects: Presentation,
  skills: Zap,
  experience: Briefcase,
  education: GraduationCap,
  extra: Sparkles,
  contact: Users,
};
