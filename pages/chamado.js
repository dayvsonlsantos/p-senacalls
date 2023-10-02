import DadosChamado from "../components/dadosChamado";
import Navbar from "../components/navbar";

export default function Chamado() {

    let teste_local = "Aberto"

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow mb-28">
                <Navbar />
                <main className="flex items-center justify-center flex-col w-full ">
                    <h1 className="flex justify-start w-4/5 m-4 text-lg">Sobre o Chamado</h1>
                    <DadosChamado title={'Nº do Chamado'} dado_chamado='34534' />
                    <DadosChamado title={'Equipamento'} dado_chamado='Computador' />
                    <DadosChamado title={'Código do Equipamento'} dado_chamado='3425345#23423' />
                    <DadosChamado title={'Sala / Laboratório'} dado_chamado='1404' />
                    <DadosChamado title={'Defeito'} dado_chamado={'O computador do lab. está desligando ...'} />
                    <div className="flex justify-start items-start flex-col w-4/6">
                        <h2 className="flex justify-start w-full py-2">Status</h2>
                        <span className={`text-xs p-1 rounded-lg ${teste_local === 'Concluído' ? 'bg-senac-blue text-white' : 'bg-senac-yellow-70'}`}>
                            {teste_local}
                        </span>
                    </div>
                    <span className="text-gray-600 flex items-center justify-center text-sm py-4 pt-8">Gostaria de cancelar o chamado ?</span>
                    <a href="/cancelarchamado" className="bg-red-600 text-white rounded-lg p-1">Cancelar</a>
                </main>
            </div>
            <section className="fixed bottom-0 bg-white flex w-full flex-col">
                <footer className="w-1/3 flex items-center justify-evenly flex-row py-4">
                    <a href="/">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img className="h-7 w-7" src='/backIcon.svg' alt="Icone de seta, indicando voltar, na cor laranja" />
                        </div>
                    </a>
                </footer>
            </section>
        </div>
    )
}