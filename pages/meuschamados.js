import { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function MeusChamados() {

    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        fetch('/chamados.json') // Acessando o arquivo local na pasta public
            .then((response) => response.json())
            .then((data) => {
                setChamados(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os chamados:", error);
            });
    }, []);

    return (
        <>
            <div className="flex-grow mb-28">
                <Navbar />
                <main className="flex items-center justify-center flex-col w-full ">
                    <h1 className="flex justify-start w-4/5 m-4 text-lg">Meus Chamados</h1>
                    {chamados.map((chamado) => (
                        chamado.usuarioId.toString() == 1 ? (
                            <a
                                key={chamado.id}
                                className="flex items-center justify-center w-full"
                                href={`/chamado/${chamado.id.toString()}`}
                            >
                                <Card
                                    numero_chamado={chamado.id.toString()}
                                    chamado_status={chamado.chamado_status}
                                    chamado_descricao={chamado.chamado_defeito}
                                />
                            </a>
                        ) : null
                    ))}
                </main>
            </div>
            <Footer homeIcon={'/homeIconLight.svg'} userIcon={'/userOrangeIcon.svg'} />
        </>
    )
}