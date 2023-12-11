import React from "react";
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link href="/contact">
    <div class="relative flex flex-col  overflow-hidden bg-transparent py-6 sm:py-12">
  <div class="max-w-screen-xl z-10">
    <div class="flex flex-wrap gap-5">
      <button class="relative border border-azul bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-azul before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Entre em Contato</button>
    </div>
  </div>
</div>
</Link>  
  );
};

export default ContactButton;