import DadosChamado from "../../components/dadosChamado"
import Navbar from "../../components/navbar"
import { useRouter } from 'next/router'
import fs from 'fs';
import path from 'path';

export async function getStaticProps(context) {

    const { params } = context;

    const filePath = path.join(process.cwd(), 'public', 'chamados.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const chamados = JSON.parse(fileContent);

    // Encontre o chamado específico pelo chamadoId
    const chamado = chamados.find(ch => ch.id === params.chamadoId);

    if (!chamado) {
        return { notFound: true };  // Se o chamado não for encontrado, retorne um erro 404
    }

    return {
        props: { chamado }
    };
}


export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'public', 'chamados.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    const paths = data.map((chamado) => {
        return {
            params: {
                chamadoId: chamado.id.toString()
            }
        }
    });

    return { paths, fallback: false }
}


export default function Chamado({ chamado }) {

    // Permite rotar de voltar página
    const router = useRouter()

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow mb-28">
                <Navbar />
                <main className="flex items-center justify-center flex-col w-full ">
                    <h1 className="flex justify-start w-4/5 m-4 text-lg">Sobre o Chamado</h1>
                    <DadosChamado title={'Nº do Chamado'} dado_chamado={chamado.id.toString()} />
                    <DadosChamado title={'Equipamento'} dado_chamado={chamado.equipamento} />
                    <DadosChamado title={'Código do Equipamento'} dado_chamado={chamado.codigo_equipamento} />
                    <DadosChamado title={'Sala / Laboratório'} dado_chamado={chamado.sala_laboratorio} />
                    <DadosChamado title={'Defeito'} dado_chamado={chamado.chamado_defeito} />
                    <div className="flex justify-center items-start flex-col w-4/6 py-2">
                        <h2 className="flex justify-start w-full py-2">Imagem do Problema</h2>
                        <div className="rounded-lg my-2 w-64 h-44 overflow-hidden relative">
                            {chamado.imagem
                                ?
                                (
                                    <img className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src={chamado.imagem} alt={chamado.imagemAlt} />
                                )
                                : <img className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src='/images/noImage.png' alt='Imagem padrão, indicando que nenhuma imagem foi enviada' />
                            }
                        </div>
                    </div>
                    <div className="flex justify-start items-start flex-col w-4/6">
                        <h2 className="flex justify-start w-full py-2">Status</h2>
                        <span className={`text-xs p-1 rounded-lg ${chamado.chamado_status === 'Concluído' ? 'bg-senac-blue text-white' : 'bg-senac-yellow-70'}`}>
                            {chamado.chamado_status}
                        </span>
                    </div>
                    <span className="text-gray-600 flex items-center justify-center text-sm py-4 pt-8">Gostaria de cancelar o chamado ?</span>
                    <a href="/cancelarchamado" className="bg-red-600 text-white rounded-lg p-1">Cancelar</a>
                </main>
            </div>
            <section className="fixed bottom-0 bg-white flex w-full flex-col">
                <footer className="w-1/3 flex items-center justify-evenly flex-row py-4">
                    <button onClick={() => router.back()} className="w-16 h-16 flex items-center justify-center rounded-full">
                        <img className="h-7 w-7" src="/backIcon.svg" alt="Icone de ok, indicando check, na cor branca" />
                    </button>
                </footer>
            </section>
        </div>
    )
}