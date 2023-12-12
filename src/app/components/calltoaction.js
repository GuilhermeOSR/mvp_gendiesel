// Componente Call to Action da Página Principal

import React from 'react';
import ContactButton from './btnContact';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-900 py-8 px-4 sm:py-16 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-white">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Gendiesel Consultoria em Projetos ideais para prédios, residências e indústrias.
          </h2>
          <p className="text-base sm:text-lg">
            Conte com nossa equipe especializada para qualquer tipo de Manutenção a Geradores de diversas marcas e modelos.
            Além disso, a Gendiesel é especializada em Projetos de Engenharia para Automação de Transferência, assim como Instalação,
            Reforma, Modernização e venda completa de Geradores.
          </p>
        </div>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
