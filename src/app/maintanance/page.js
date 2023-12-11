import React from "react";
import NavBar from '../components/navbar';
import ContactButton from "../components/btnContact";
import Footer from "../components/footer";

export default function Services() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <NavBar />
      <div className="container mx-auto py-8 md:py-10 px-4 md:px-0 max-w-7xl text-white">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">Serviços de Instalação</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <p className="text-base md:text-xl mb-4">
              Oferecemos serviços especializados de instalação para atender às suas necessidades. Nossa equipe altamente qualificada garante a instalação eficiente e segura de equipamentos.
            </p>
            <p className="text-base md:text-xl">
              Trabalhamos com uma variedade de produtos e equipamentos para garantir que sua instalação seja realizada com qualidade e precisão.
            </p>
            <div className="mt-6">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://www.gendieselgeradores.com.br/images/instalacao-de-geradores-gendiesel.jpg" alt="Imagem 1" className="mb-4 w-full h-auto rounded-md" />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl md:text-4xl font-semibold mb-6">Serviços de Manutenção</h1>
          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <p className="text-base md:text-xl mb-4">
                Nossos serviços de manutenção garantem o funcionamento contínuo e eficiente de seus equipamentos. Conte com nossa equipe para resolver problemas rapidamente e prevenir falhas.
              </p>
              <p className="text-base md:text-xl">
                Realizamos manutenção preventiva e corretiva, oferecendo soluções personalizadas para atender às suas necessidades específicas.
              </p>
              <div className="mt-6">
                <ContactButton />
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://www.gendieselgeradores.com.br/images/gendiesel-manutencao-de-geradores-service.jpg" alt="Imagem 3" className="mb-4 w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
