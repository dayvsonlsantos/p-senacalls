import Card from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function MeusChamados() {
    return (
        <>
            <div className="flex-grow mb-28">
                <Navbar/>
                <main className="flex items-center justify-center flex-col w-full ">
                    <h1 className="flex justify-start w-4/5 m-4 text-lg">Meus Chamados</h1>
                    <Card numero_chamado={'0#28345'} chamado_status={'Aberto'} chamado_descricao={'O computador do lab. está com a tela ...'} />
                    <Card numero_chamado={'0#28345'} chamado_status={'Concluído'} chamado_descricao={'O computador do lab. está com a tela ...'} />
                    <Card numero_chamado={'0#28345'} chamado_status={'Concluído'} chamado_descricao={'O computador do lab. está com a tela ...'} />
                </main>
            </div>
            <Footer homeIcon={'/homeIconLight.svg'} userIcon={'/userOrangeIcon.svg'}/>
        </>
    )
}