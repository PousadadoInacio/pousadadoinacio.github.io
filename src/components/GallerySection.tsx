
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImageModal from "./ImageModal";

type GalleryItemProps = {
  image: string;
  title: string;
  description?: string;
  onClick: () => void;
}

const GalleryItem = ({ image, title, onClick }: GalleryItemProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer" onClick={onClick}>
      <CardContent className="p-0 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
            <p className="text-sm font-medium">Clique para ampliar</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Acomodações Confortáveis",
      description: "Quartos amplos e confortáveis com vista privilegiada para o Rio Miranda. Todas as acomodações possuem ar-condicionado, frigobar e banheiro privativo para garantir o máximo conforto durante sua estadia."
    },
    {
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVsYXglMjByaXZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Vista Panorâmica para o Rio",
      description: "Desfrute de uma vista deslumbrante do Rio Miranda diretamente de nossa pousada. O cenário perfeito para relaxar e contemplar a natureza exuberante do Pantanal, especialmente durante o pôr do sol."
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGl0aW9uYWwlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Gastronomia Regional",
      description: "Saboreie pratos típicos da região pantaneira preparados com ingredientes frescos e locais. Nossa cozinha oferece o melhor da culinária sul-mato-grossense, incluindo peixes frescos do rio e pratos tradicionais."
    },
    {
      image: "https://images.unsplash.com/photo-1520031607503-2d59cba835c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpc2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
      title: "Pesca Esportiva",
      description: "O Rio Miranda oferece excelentes condições para a pesca esportiva. Com águas cristalinas e rica diversidade de peixes, é o destino ideal para pescadores experientes e iniciantes que buscam uma experiência única."
    },
    {
      image: "https://images.unsplash.com/photo-1599933190257-ade62d308472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpdmVyJTIwYm9hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Passeios de Barco",
      description: "Explore o Rio Miranda em nossos passeios de barco guiados. Navegue pelas águas calmas do rio enquanto observa a fauna e flora local, incluindo jacarés, capivaras e uma variedade impressionante de aves."
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudGFuYWwlMjBicmF6aWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Natureza Exuberante",
      description: "Imersa na natureza preservada do Pantanal, nossa pousada oferece contato direto com um dos biomas mais ricos do mundo. Observe animais silvestres em seu habitat natural e desconecte-se da vida urbana."
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2hpbmclMjBsb2RnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Área de Lazer",
      description: "Espaços externos planejados para seu descanso e contemplação. Deque com vista para o rio, área para churrascos e espaços de convivência onde você pode relaxar e compartilhar experiências com outros hóspedes."
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cml2ZXIlMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Ambiente Preservado",
      description: "A pousada está localizada em uma área de preservação ambiental, oferecendo um ambiente único onde a natureza é protagonista. Ideal para quem busca paz, tranquilidade e contato genuíno com o Pantanal."
    },
    {
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpcmVmbGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Noites Mágicas",
      description: "As noites na pousada são verdadeiramente especiais, com o som da natureza como trilha sonora. Aprecie o céu estrelado do Pantanal, um dos mais limpos do Brasil, longe da poluição luminosa das cidades."
    }
  ];

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section-container bg-white">
      <h2 className="section-title">Conheça Nossa Pousada</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Desfrute de momentos inesquecíveis em meio à natureza do Pantanal, com o conforto e a tranquilidade que você merece.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <GalleryItem 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            onClick={() => handleImageClick(item)}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          image={selectedImage.image}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}
    </section>
  );
};

export default GallerySection;
