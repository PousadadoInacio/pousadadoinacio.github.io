
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661762422433-b18f87b64341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "center center"
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
          Viva a Pesca dos Seus Sonhos
        </h1>
        <p 
          className="text-lg md:text-xl max-w-3xl mb-8 animate-fade-in font-sans tracking-wide leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Experimente dias inesquecíveis às margens do Rio Miranda. Conforto, natureza e emoção no coração do Pantanal.
        </p>
        <Button
          className="btn-primary text-lg animate-fade-in"
          style={{ animationDelay: "0.4s" }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Garanta sua pescaria
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
