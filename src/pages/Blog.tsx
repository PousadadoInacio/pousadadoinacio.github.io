import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedFish from "@/components/AnimatedFish";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section do Blog */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Blog da Pousada Beira Rio
            </h1>
            <p className="text-xl text-muted-foreground">
              Dicas, experiências e guias completos sobre pesca esportiva no
              Pantanal
            </p>
          </div>
        </div>
      </section>

      {/* Artigo Principal */}
      <section className="section-container bg-white">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Pesca Esportiva em Águas do Miranda: O Paraíso dos Pescadores no
              Pantanal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra por que Águas do Miranda é considerado um dos melhores
              destinos de pesca esportiva do Brasil e como vivenciar uma
              experiência transformadora no coração do Mato Grosso do Sul.
            </p>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
                alt="Rio Miranda com águas cristalinas em Águas do Miranda, Bonito MS, ideal para pesca esportiva"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </header>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p className="text-xl font-medium">
              Imagine-se às margens do Rio Miranda, com a linha na água e o
              coração acelerado esperando pela fisgada do dourado dos seus
              sonhos. A <strong>pesca esportiva em Águas do Miranda</strong> não
              é apenas um hobby - é uma experiência que conecta você com a
              natureza mais selvagem e preservada do Pantanal
              Sul-Mato-Grossense.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6 font-serif">
              Por Que Águas do Miranda é o Destino Perfeito para Pesca
              Esportiva?
            </h2>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=400&fit=crop"
                alt="Paisagem do Pantanal em Águas do Miranda com rio serpenteando entre montanhas, destino ideal para turismo de pesca"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <p>
              Localizada estrategicamente no distrito de{" "}
              <strong>Bonito-MS</strong>, Águas do Miranda oferece uma das mais
              ricas biodiversidades aquáticas do país. O Rio Miranda, com suas
              águas cristalinas e correnteza moderada, abriga espécies nobres
              que fazem o coração de qualquer pescador acelerar: dourado,
              pintado, pacu, piavuçu e jaú são apenas algumas das espécies que
              você pode encontrar durante sua{" "}
              <strong>pescaria em Bonito</strong>.
            </p>

            <div className="nature-card p-6 my-8">
              <p className="italic text-lg fishing-highlight">
                "Quer saber qual é o melhor período para pegar aquele dourado
                campeão que você sempre sonhou? Continue lendo e descubra os
                segredos dos pescadores locais!"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6 font-serif">
              Melhores Épocas para Pesca Esportiva no Pantanal
            </h2>

            <p>
              O <strong>turismo de pesca</strong> em Águas do Miranda é
              favorecido pelo clima tropical que proporciona condições ideais
              durante praticamente todo o ano. No entanto, conhecer as estações
              pode fazer toda a diferença no sucesso da sua pescaria:
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4 font-serif">
              Período de Seca (Maio a Setembro)
            </h3>

            <p>
              Durante os meses secos, os peixes se concentram nos poços mais
              profundos, facilitando a localização e aumentando as chances de
              captura. É a época preferida pelos{" "}
              <strong>pescadores amadores</strong> e profissionais,
              especialmente para a pesca do dourado e pintado.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4 font-serif">
              Período de Cheia (Outubro a Abril)
            </h3>

            <p>
              As águas mais altas dispersam os peixes, mas oferecem a
              oportunidade única de pescar em meio à natureza exuberante, com a
              fauna e flora pantaneiras em pleno vigor. Ideal para quem busca
              uma experiência de <strong>ecoturismo</strong> completa.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6 font-serif">
              Pousadas para Pesca em Águas do Miranda: Estrutura que Faz a
              Diferença
            </h2>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop"
                alt="Paisagem natural do Pantanal próxima às pousadas para pesca em Águas do Miranda, Bonito MS"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <p>
              Escolher as{" "}
              <strong>pousadas para pesca em Águas do Miranda</strong> adequadas
              é fundamental para o sucesso da sua viagem. As Pousadas do Inácio
              oferecem uma <strong>estrutura para pescadores amadores</strong> e
              profissionais que inclui:
            </p>

            <div className="nature-card p-6 my-8">
              <ul className="list-disc pl-6 space-y-2">
                <li>Acomodações confortáveis à beira do Rio Miranda</li>
                <li>Freezers para conservação dos peixes</li>
                <li>Área de limpeza e preparo dos pescados</li>
                <li>Guias especializados conhecedores da região</li>
                <li>Embarcações equipadas e seguras</li>
                <li>Alimentação regional de qualidade</li>
              </ul>
            </div>

            <div className="nature-card p-6 my-8">
              <p className="italic text-lg fishing-highlight">
                "Já imaginou acordar com o som do rio e ter sua embarcação pronta
                para mais um dia de pescaria inesquecível?"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6 font-serif">
              Fauna Aquática: Os Troféus que Te Esperam
            </h2>

            <p>
              A diversidade de espécies torna cada{" "}
              <strong>viagem de pesca no MS</strong> única e emocionante.
              Conheça os principais alvos dos pescadores:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="nature-card card-ripple p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-serif">
                  Dourado - O Rei dos Rios
                </h4>
                <p className="text-sm">
                  Conhecido como o "rei dos rios", o dourado é o peixe mais cobiçado
                  da <strong>pesca esportiva</strong>. Com sua coloração dourada
                  característica e briga intensa.
                </p>
              </div>

              <div className="nature-card card-ripple p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-serif">
                  Pintado - O Gigante Silencioso
                </h4>
                <p className="text-sm">
                  O pintado, com suas pintas características, é um dos maiores
                  peixes de couro do Pantanal. Sua captura exige técnica e paciência.
                </p>
              </div>

              <div className="nature-card card-ripple p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-serif">
                  Pacu - Força e Velocidade
                </h4>
                <p className="text-sm">
                  O pacu combina força e agilidade, oferecendo uma briga
                  emocionante. Excelente opção para <strong>pescadores amadores</strong>.
                </p>
              </div>
            </div>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=400&fit=crop"
                alt="Pescador praticando pesca esportiva sustentável no Rio Miranda, Águas do Miranda, Bonito MS"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6 font-serif">
              Pesca Sustentável: Preservando o Paraíso
            </h2>

            <p>
              A <strong>pesca esportiva em Águas do Miranda</strong> é praticada
              seguindo rigorosos princípios de sustentabilidade. Nosso
              compromisso vai além de proporcionar momentos inesquecíveis:
            </p>

            <div className="nature-card p-6 my-8">
              <ul className="list-disc pl-6 space-y-2">
                <li>Prática do "pesque e solte" para espécies reprodutoras</li>
                <li>Respeito aos períodos de defeso</li>
                <li>Uso de anzóis sem farpa quando possível</li>
                <li>Educação ambiental para todos os hóspedes</li>
                <li>Apoio a projetos de conservação local</li>
                <li>Monitoramento da qualidade da água</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6 font-serif">
              Planeje Sua Aventura no Pantanal
            </h2>

            <p>
              A <strong>pesca esportiva em Águas do Miranda</strong> é mais do
              que uma atividade - é uma jornada de descoberta, conexão com a
              natureza e criação de memórias que durarão para sempre.
            </p>

            <div className="nature-card p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                Pronto para Sua Próxima Grande Pescaria?
              </h3>
              <p className="text-lg mb-6">
                Entre em contato conosco e descubra nossos pacotes exclusivos de{" "}
                <strong>turismo de pesca</strong>. Personalizamos cada experiência
                para tornar sua estadia inesquecível.
              </p>

              <a
                href="https://wa.me/5567992156433?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20pesca%20esportiva%20em%20%C3%81guas%20do%20Miranda."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.004 2.003c-5.52 0-10 4.478-10 9.997 0 1.76.459 3.445 1.329 4.944l-1.39 5.082 5.215-1.366c1.451.804 3.09 1.23 4.846 1.23 5.52 0 9.997-4.478 9.997-9.997s-4.477-9.997-9.997-9.997zm.022 17.998c-1.59 0-3.134-.426-4.486-1.23l-.32-.191-3.098.811.823-3.01-.208-.317c-.808-1.255-1.231-2.696-1.231-4.177 0-4.418 3.584-8.003 8.003-8.003s8.003 3.585 8.003 8.003c.001 4.419-3.584 8.004-8.003 8.004zm4.419-6.067c-.245-.122-1.446-.715-1.67-.797-.223-.082-.386-.122-.548.123-.163.245-.63.797-.772.962-.143.163-.285.183-.53.061-.244-.122-1.03-.379-1.963-1.208-.726-.647-1.215-1.447-1.358-1.691-.143-.245-.015-.377.108-.498.112-.112.244-.285.367-.428.123-.143.163-.244.244-.407.082-.163.041-.306-.02-.428-.061-.122-.548-1.324-.752-1.814-.198-.48-.4-.415-.548-.424l-.468-.008c-.163 0-.428.061-.652.306s-.857.837-.857 2.04c0 1.204.877 2.367 1.002 2.53.122.163 1.728 2.641 4.192 3.702.586.253 1.044.403 1.4.514.588.187 1.122.161 1.545.098.472-.07 1.446-.591 1.65-1.163.203-.571.203-1.061.142-1.163-.061-.102-.223-.163-.468-.285z" />
                </svg>
                Garanta sua Pescaria
              </a>

              <p className="text-sm text-muted-foreground mt-4">
                Águas do Miranda, Bonito-MS - Onde a pesca esportiva encontra a
                hospitalidade pantaneira
              </p>
            </div>
          </div>
        </article>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <AnimatedFish />
    </div>
  );
};

export default Blog;
