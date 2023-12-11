"use client"
import React, { useState, useEffect } from 'react';
import ContactButton from './btnContact';

export default function Container() {

  const ArrowIcon = ({ direction }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      color="rgb(0, 188,240)"
      className={`h-40 w-40 transform ${direction === 'right' ? 'rotate-0' : ''}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.1"
        d={direction === 'right' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
      />
    </svg>
  );

  const slides = [
    {
      title: 'Projetos Residenciais',
      content:
        'Transforme sua casa em um espaço moderno e eficiente com nossos serviços de instalação elétrica. De iluminação a sistemas de automação residencial, oferecemos soluções personalizadas para atender às suas necessidades.',
    },
    {
      title: 'Soluções Industriais',
      content:
        'Aumente a eficiência e a confiabilidade de sua operação industrial com nossos serviços de instalação e manutenção de sistemas elétricos. Nossa equipe experiente garante a integridade dos equipamentos, minimizando o tempo de inatividade.',
    },
    {
      title: 'Geradores de Emergência',
      content:
        'Proteja seu negócio contra quedas de energia com nossos geradores de emergência. Oferecemos instalação e manutenção para garantir que sua empresa esteja sempre operacional, mesmo durante interrupções imprevistas de energia.',
    },
    {
      title: 'Manutenção Preditiva',
      content:
        'Abordagem proativa à manutenção preditiva utiliza tecnologia de ponta para monitorar o desempenho de seus sistemas elétricos. Identificamos problemas antes que se tornem falhas, garantindo uma operação contínua.',
    },
    {
      title: 'Sustentabilidade Energética',
      content:
        'Práticas sustentáveis ao fornecer soluções de energia eficientes. Desde a escolha de equipamentos energeticamente eficientes até a implementação de fontes de energia renovável, ajudamos sua empresa a alcançar objetivos ambientais.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="max-w-full px-6 py-20 z-10">
      <div className="max-w-full py-36 ">
        <div className="controller flex justify-between relative">
          <button
            onClick={prevSlide}
            className="text-xl  left transition duration-300 ease-in-out transform w-6/6 p-5 my-5 font-black text-white sm-w-full absolute left-0 hidden md:flex"
          >
            <ArrowIcon direction="left" />
          </button>
          <div className="carroussel  container mx-auto flex flex-col justify-center items-center mb-12">
            <h1 className="text-5xl sm:text-5xl font-semibold text-white mb-8 sm:mb-8 text-center">
              {slides[currentSlide].title}
            </h1>
            <p className="text-sm sm:text-1xl font-extralight text-white w-10/12 sm:w-2/3 sm:px-28 mb-8 sm:mb-8  text-center ">
              {slides[currentSlide].content}
            </p>
           <ContactButton />
          </div>

          <button
            onClick={nextSlide}
            className="text-xl  transition duration-300 ease-in-out transform w-6/6 bg-transparent p-5 my-5  font-black text-white sm-w-full absolute right-0 hidden md:flex"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="relative gap-4 flex">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`text-xl hover:bg-branco transition duration-300 ease-in-out transform w-6 bg-transparent border-2 h-2 rounded-full font-black text-white sm-w-full ${
                index === currentSlide ? 'bg-white' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
            </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
