// Componente Content da Página Principal
import React from 'react';

// Componente Feature: Representa uma feature na seção de conteúdo
const Feature = ({ title, description, icon }) => (
  <div className="flex flex-col items-center w-7xl text-white text-center hover:bg-zinc-700 p-4 m-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105">
    {icon}
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const Content = () => {
  return (
    <div className="bg-zinc-800 flex ">
      <div className="max-w-full mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row justify-center items-center h-full">
          {/* Renderiza quatro instâncias do componente Feature, cada uma representando uma feature */}
          <Feature
            title="Geração de Energia Renovável"
            description="Utilizamos tecnologias sustentáveis para gerar energia limpa e renovável."
            icon={<svg className="w-6 h-6 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" color='rgb(0, 188,240)' stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10L14 4L8 10M3 15H20"></path></svg>}
          />
          <Feature
            title="Eficiência Energética"
            description="Implementamos soluções para otimizar o consumo de energia, reduzindo custos e impactos ambientais."
            icon={<svg className="w-6 h-6 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" color='rgb(0, 188,240)' stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"></polyline></svg>}
          />
          <Feature
            title="Infraestrutura Inteligente"
            description="Desenvolvemos uma infraestrutura inteligente para monitorar e gerenciar a distribuição de energia."
            icon={<svg className="w-6 h-6 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" color='rgb(0, 188,240)' stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="4" y1="14" x2="20" y2="14"/><line x1="8" y1="18" x2="8" y2="22"/><line x1="16" y1="18" x2="16" y2="22"/></svg>}
          />
          <Feature
            title="Atendimento Personalizado"
            description="Oferecemos um suporte ao cliente personalizado, garantindo satisfação e confiança."
            icon={<svg className="w-6 h-6 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color='rgb(0, 188,240)' fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 2C5.485 2 2 5.485 2 9s3.485 7 7 7 7-3.485 7-7-3.485-7-7-7zm0 12v3m0-9V5"/></svg>}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
