
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

const FishingLicenseSection = () => {
  return (
    <section id="fishing-license" className="section-container bg-white">
      <h2 className="section-title">Carteira de Pesca Esportiva ou Amadora</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-lg">
        Todo pescador com mais de 18 anos precisa ter a carteira de pesca
        amadora para praticar a atividade legalmente no Brasil
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card className="overflow-hidden h-full border-none shadow-lg group transition-transform hover:scale-[1.02]">
          <div className="h-40 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Carteira de pesca esportiva"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
          <CardHeader className="bg-white pt-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-pousada-green/20 p-2 rounded-full">
                <FileText size={24} className="text-pousada-green" />
              </div>
              <CardTitle className="text-lg font-bold font-serif">Documento Obrigatório</CardTitle>
            </div>
            <CardDescription className="text-sm text-muted-foreground">
              Para pesca esportiva em todo território nacional
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 font-serif">
              Licença de Pesca
            </h3>
            <p className="text-muted-foreground mb-4 text-lg">
              A licença é obrigatória tanto para pesca embarcada quanto 
              desembarcada. Todo pescador deve portar o documento durante 
              a atividade.
            </p>

            <p className="text-muted-foreground mb-6 text-lg">
              Obtenha sua licença de forma rápida e 100% online através do
              portal oficial do governo.
            </p>
          </div>

          <Button
            className="btn-primary inline-flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://www.gov.br/pt-br/servicos/solicitar-licenca-de-pescador-amador",
                "_blank"
              )
            }
          >
            Solicitar Carteira de Pesca
            <ExternalLink size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FishingLicenseSection;
