
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type AccommodationProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const AccommodationCard = ({ image, title, description, price, features }: AccommodationProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col w-full border-none shadow-lg group transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
        />
      </div>
      <CardHeader className="bg-white pt-5">
        <CardTitle className="text-lg font-bold font-serif">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-pousada-green mr-2 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-lg font-medium mb-2">
          A partir de <span className="text-xl font-semibold text-pousada-brown">{price}</span>
        </p>
        <Button 
          className="w-full btn-primary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
        >
          Reservar
        </Button>
      </CardFooter>
    </Card>
  );
};

const AccommodationSection = () => {
  const accommodations = [
    {
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tJTIwc3RhbmRhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Quarto Standard",
      description: "Acomodação aconchegante com vista para o jardim",
      price: "R$ 250/diária",
      features: [
        "Cama de casal ou 2 camas de solteiro",
        "Ar-condicionado",
        "TV LCD 32\"",
        "Frigobar",
        "Banheiro privativo"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tJTIwbHV4dXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Suíte Premium",
      description: "O melhor da pousada com vista panorâmica para o Rio Miranda",
      price: "R$ 450/diária",
      features: [
        "Cama king size",
        "Ar-condicionado split",
        "TV LCD 50\"",
        "Frigobar abastecido",
        "Banheiro com banheira",
        "Varanda privativa",
        "Rede para descanso"
      ]
    }
  ];

  return (
    <section id="accommodations" className="section-container bg-white">
      <h2 className="section-title">Nossas Acomodações</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-lg">
        Oferecemos opções de hospedagem que unem conforto e contato com a natureza, para que sua estadia seja perfeita.
      </p>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="flex justify-center">
              <AccommodationCard 
                image={accommodation.image}
                title={accommodation.title}
                description={accommodation.description}
                price={accommodation.price}
                features={accommodation.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
