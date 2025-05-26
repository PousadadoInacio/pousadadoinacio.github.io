
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Anchor, Home, MapPin } from "lucide-react";

type ActivityProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
};

const ActivityCard = ({ icon, title, description, imageUrl }: ActivityProps) => {
  return (
    <Card className="overflow-hidden h-full border-none shadow-lg group transition-transform hover:scale-[1.02]">
      <div className="h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="bg-white pt-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-pousada-green/20 p-2 rounded-full">
            {icon}
          </div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Fish size={24} className="text-pousada-green" />,
      title: "Pesca Esportiva",
      description:
        "Sinta a emoção de fisgar grandes peixes no Rio Miranda — um dos destinos mais renomados do Brasil. Ideal para quem busca adrenalina e conexão com a natureza.",
      imageUrl:
        "https://images.unsplash.com/photo-1516016219524-a3937cc00495?auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <Anchor size={24} className="text-pousada-green" />,
      title: "Navegação Cênica",
      description:
        "Explore as águas calmas do Pantanal em passeios de barco que revelam paisagens exuberantes e vida selvagem em seu estado mais puro.",
      imageUrl:
        "https://images.unsplash.com/photo-1599933190257-ade62d308472?auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <Home size={24} className="text-pousada-green" />,
      title: "Ponto de Apoio",
      description:
        "Espaço acolhedor e reservado, pensado especialmente para o descanso dos pescadores. Ideal para refeições tranquilas e momentos de contemplação à beira da natureza.",
      imageUrl:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <MapPin size={24} className="text-pousada-green" />,
      title: "Sabores Pantaneiros",
      description:
        "Aprecie o melhor da gastronomia local com pratos típicos feitos com ingredientes frescos, direto do Pantanal para sua mesa.",
      imageUrl:
        "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section id="activities" className="section-container bg-white">
      <h2 className="section-title">Atividades & Experiências</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-lg">
        Conecte-se ao Pantanal como nunca antes. Seja através da pesca, da natureza ou da cultura local, aqui cada momento é uma descoberta.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
