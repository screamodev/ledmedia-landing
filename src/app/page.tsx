'use client';

import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ClientsSection from '../components/sections/CasesSection';
import LocationsSection from '../components/sections/LocationsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LocationsSection />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
