import React from 'react';
import Link from 'next/link';


export default function NavBar() {
    return ( 
      <nav className="z-10 bg-transparent py-4 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <span className="text-white text-xl font-semibold ml-2"><Link href="/"><img src="logo-branca.png"/></Link></span>
          </div>

          <div className="hidden md:flex space-x-6 flex items-center ">
          <Link href="/maintanance" className="text-xl text-branco hover:text-azul transition duration-300">
            Serviços
          </Link>
          <Link href="/brands" className="text-xl text-branco hover:text-azul transition duration-300">
            Marcas
          </Link>
          <Link href="/contact" className="text-xl text-branco hover:text-azul transition duration-300">
            Contato
          </Link>
          </div>
        </div>
      </div>
    </nav>
    )
  }
  