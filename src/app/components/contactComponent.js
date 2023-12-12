// Componente de Contato da Página Contato
 
export default function contactComponent() {
    return(
        <div className="relative max-w-6xl flex">
            
            <div className="absolute border-l-4 h-[500px] border-azul top-12 hidden md:flex p-8 ">

                <div className="relative justify-center text-white font-bold text-2xl mt-8 ">
                    <h2>Visite-Nos!</h2>
                    <h3 className="mb-16 text-xl text-zinc-600 w-[60%] ">Av. Doutor kenkiti Shimomoto nº 813 
City Bussocaba - Osasco/SP
</h3>
        
                    <h2>Email</h2>
                    <h3 className="mb-16 text-xl text-zinc-600 w-[50%]">Email@gendieselgeradores.com.br</h3>

                    <h2>Telefone</h2>
                    <h3 className="mb-16 text-xl text-zinc-600 w-[50%]">+55 11 5555-7777</h3>
                </div>

   
            </div>
    
            
        </div>
    )
}