import type { Metadata } from 'next';
import { Geist_Sans as GeistSans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';


const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sourabh Patidar | Software Engineer',
  description: 'Portfolio of Sourabh Patidar, an experienced Associate Software Engineer specializing in full-stack web and mobile application development.',
  keywords: "Sourabh Patidar, Portfolio, Software Engineer, React, Next.js, React Native, Swift, Full-stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
