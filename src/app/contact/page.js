// Página de Contato
import React from "react";
import NavBar from '../components/navbar';
import Form from '../components/form'
import ContactComponent from "../components/contactComponent";
import Footer from '../components/footer'

export default function Contact() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <NavBar />
      <div className="container mx-auto py-20 max-w-7xl">
        <h1 className="text-4xl font-semibold text-white mb-6 text-center md:text-start">Entre em Contato</h1>
        <ContactComponent />
        <div className="flex sm:justify-end justify-center mb-28">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};
