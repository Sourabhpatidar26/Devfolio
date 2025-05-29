// @/components/sections/contact-section.tsx
import { contactMethods, sectionIconMapping, personalInfo } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from './contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Get In Touch" icon={Users} subtitle="I'm open to new opportunities and collaborations. Let's connect!" />
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-3">
            <Card className="shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send me a message</h3>
              <ContactForm />
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="shadow-xl p-6 md:p-8 h-full animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-start">
                    <method.icon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{method.label}</h4>
                      {method.href ? (
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground break-all">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
               <Button asChild className="w-full mt-8" size="lg">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" download>
                  Download My Resume
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
