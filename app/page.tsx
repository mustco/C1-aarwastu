'use client';

import { AboutSection } from '@/components/page/about';
import { ContactSection } from '@/components/page/contact';
import { Footer } from '@/components/page/footer';
import { HeroSection } from '@/components/page/hero';
import { Navbar } from '@/components/page/navbar';
import { PortfolioSection } from '@/components/page/portfolio';
import { ProcessSection } from '@/components/page/process';
import { ServicesSection } from '@/components/page/services';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
