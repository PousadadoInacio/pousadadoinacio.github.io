
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import AccommodationSection from "@/components/AccommodationSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";
import FishingLicenseSection from "@/components/FishingLicenseSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedFish from "@/components/AnimatedFish";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AccommodationSection />
      <ActivitiesSection />
      <ContactSection />
      <FishingLicenseSection />
      <Footer />
      <FloatingWhatsApp />
      <AnimatedFish />
    </div>
  );
};

export default Index;
