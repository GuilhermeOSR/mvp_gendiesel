// Componente Form para Formulário da Página de Contato

export default function Form() {

    return(
        <form className="relative max-w-2xl bg-zinc-700 p-10 mx-4 shadow-xl rounded-md" autocomplete="off">
          <div className="mb-6 relative">
            <label htmlFor="name" className="block text-sm font-medium text-zinc-500 ">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" text-2xl mt-2 w-full bg-transparent outline-none text-white border-b-2 border-zinc-600 "
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-500 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-2xl space-y-4 mt-2 w-full bg-transparent outline-none text-white border-b-2 border-zinc-600 "
              placeholder=""
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-500 ">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="text-2xl space-y-4 mt-2 w-full bg-transparent outline-none text-white border-b-2 border-zinc-600 "
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-500 ">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"

              className="text-2xl space-y-4 mt-2 w-full bg-transparent h-[40px] duration-300 outline-none text-white border-b-2 border-zinc-600 focus:duration-500 focus:h-[100px]"
              placeholder=""
            ></textarea>
          </div>
          <div className="mb-4 shadow-sm mt-[70px]">
            <button
              type="submit"
              className="text-2xl font-bold bg-azul text-white py-2 px-4 h-20 hover:bg-amarelo duration-500 w-full rounded-sm  "
            >
              Enviar
            </button>
          </div>
          <div className="absolute inset-[-50px] hidden sm:flex pointer-events-none">
        <div className="absolute left-0 top-0 border-t-4 border-l-4 h-20 w-20 border-azul"></div>
        <div className="absolute right-0 top-0 border-t-4 border-r-4 h-20 w-20 border-azul" ></div>
        <div className="absolute left-0 bottom-0 border-b-4 border-l-4 h-20 w-20 border-azul"></div>
        <div className="absolute right-0 bottom-0 border-b-4 border-r-4 h-20 w-20 border-azul"></div>
      </div>
        </form>
    )
}