import React from "react";

const AboutSection = () => {
  return ( 
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">Sobre a Pousada do Inácio</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 h-full">
          <img
            src="https://images.unsplash.com/photo-1607524191306-7fec3d6b44b6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipamentos de pesca e rede"
            className="w-full h-full max-h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Pousada do Inácio é seu lar longe de casa em Bonito, MS. Localizada estrategicamente às margens do Rio Miranda, no Distrito Águas do Miranda, oferecemos uma experiência única que combina a emoção da pesca esportiva com o conforto e tranquilidade que você merece.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa estrutura foi pensada para atender tanto os pescadores mais exigentes quanto famílias em busca de momentos de lazer e contato com a natureza. Contamos com acomodações confortáveis, áreas de convivência e acesso privilegiado ao rio.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Seja para capturar aquele peixe troféu ou simplesmente relaxar contemplando as belezas naturais da região, a Pousada do Inácio é o lugar perfeito para sua próxima aventura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
