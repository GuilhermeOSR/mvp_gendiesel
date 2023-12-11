"use client"

import { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import marcasData from "../components/marcas.json";
import Footer from '../components/footer';

export default function Brands() {
  const [brandsData, setBrandsData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Atualiza o estado com os dados do JSON
    setBrandsData(marcasData);
  }, []); // O segundo parâmetro vazio indica que este efeito só deve ser executado uma vez (quando o componente montar)

  const filteredBrands = brandsData.filter(brand =>
    brand.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-zinc-800 h-full">
      <NavBar />
      <div className="bg-azul text-white py-4 text-center">
        <h1 className="text-3xl font-semibold">Marcas Trabalhadas</h1>
      </div>
      <div className="container mx-auto py-4 max-w-7xl sm:px-0 px-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar por nome da marca"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="container mx-auto py-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-0 px-4">
        {/* Renderiza as marcas usando os dados em 'filteredBrands' */}
        {filteredBrands.map((brand, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h2 className='text-gray-800 text-xl font-semibold mb-2'>{brand.name}</h2>
            <p className="text-gray-600">{brand.description}</p>
            <div className="mt-4">
              {brand.image && <img src={brand.image} alt={`Imagem da ${brand.name}`} className="w-full h-auto rounded-md" />}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}