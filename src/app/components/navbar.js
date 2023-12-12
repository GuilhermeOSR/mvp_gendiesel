// Componente NavBar para as Páginas
"use client"
import React, { useState } from 'react';
// Componente de link do Next.js para navegação entre páginas
import Link from 'next/link';

const NavBar = () => {
   // Definindo o estado do menu como inicialmente fechado
  const [menuOpen, setMenuOpen] = useState(false);
  // Função para alternar o estado do menu entre aberto e fechado
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-10 bg-transparent py-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-xl font-semibold ml-2">
              <Link href="/">
                <img src="logo-branca.png" alt="Logo" />
              </Link>
            </span>
          </div>

          <div className="hidden md:flex space-x-6 items-center ">
            <Link href="/" className="text-xl text-white hover:text-azul transition duration-300">
              Home
            </Link>
            <Link href="/maintanance" className="text-xl text-white hover:text-azul transition duration-300">
              Serviços
            </Link>
            <Link href="/brands" className="text-xl text-white hover:text-azul transition duration-300">
              Marcas
            </Link>
            <Link href="/contact" className="text-xl text-white hover:text-azul transition duration-300">
              Contato
            </Link>
          </div>

          {/* Menu para dispositivos móveis */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            {/* Menu para dispositivos móveis */}
            {menuOpen && (
              <div className="absolute top-0 w-full right-12 bg-white p-8 shadow-md px-16">
                <Link href="/" className="text-xl text-black hover:text-azul transition duration-300 flex col">
                  Home
                </Link>
                <Link href="/maintanance" className="text-xl text-black hover:text-azul transition duration-300 flex col">
                  Serviços
                </Link>
                <Link href="/brands" className="text-xl text-black hover:text-azul transition duration-300 flex col">
                  Marcas
                </Link>
                <Link href="/contact" className="text-xl text-black hover:text-azul transition duration-300 ">
                  Contato
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
