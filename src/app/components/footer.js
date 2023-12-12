// Componente Footer das Páginas

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Fale Conosco</h3>
          <p>Será um prazer falar com você!</p>
          <p>Email: Email@gendieselgeradores.com.br</p>
          <p>Telefone: +55 11 5555-7777</p>
          <p>Endereço: Av. Lua  nº 823 Universo - São Paulo/SP</p>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Marcas</h3>
          <ul>
            <li>FG WILSON</li>
            <li>STEMAC</li>
            <li>CUMMINS</li>
          </ul>
        </div>
        <div className="sm:col-span-2">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Newsletter</h3>
          <p>Cadastre-se para receber novidades e promoções.</p>
          <div className="flex mt-4">
            <input type="email" placeholder="Digite seu e-mail" className="text-black mr-2 p-2 w-full sm:w-3/4" />
            <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-zinc-700 hover:text-white transition duration-300 ease-in-out">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
