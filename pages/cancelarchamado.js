'use client'

import DadosChamado from "../components/dadosChamado";
import InputField from "../components/inputField";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function CancelarChamado() {

    const router = useRouter()

    const [data, setData] = useState({
        cancelarChamado: "",
    });

    function sendData(e) {
        e.preventDefault();
        console.log(data);
    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={sendData} className="flex flex-col min-h-screen">
            <div className="flex-grow mb-36">
                <Navbar />
                <main className="flex items-center justify-center flex-col w-full ">
                    <h1 className="flex justify-start w-4/5 m-4 text-lg">Sobre o Chamado</h1>
                    <DadosChamado title={'Nº do Chamado'} dado_chamado='34534' />
                    <div className="w-5/6 flex items-center justify-center">
                        <InputField
                            title={'Por que deseja cancelar ?'}
                            type={'text'}
                            name={'cancelarChamado'}
                            id={'cancelarChamado'}
                            placeholder={'Informe o motivo do cancelamento desse chamado'}
                            value={data.cancelarChamado}
                            onChange={changeInputValue}
                        />
                    </div>
                </main>
            </div>
            <section className="fixed bottom-0 bg-white flex w-full flex-col">
                <span className="flex items-center justify-center text-sm py-4">Encerrar chamado ?</span>
                <footer className="w-4/6 flex items-center justify-around flex-row py-4">
                    <button onClick={() => router.back()}>
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img className="h-7 w-7" src='/backIcon.svg' alt="Icone de seta, indicando voltar, na cor laranja" />
                        </div>
                    </button>
                    <button type="submit" className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full">
                        <img className="h-7 w-7" src="/checkIcon.svg" alt="Icone de ok, indicando check, na cor branca" />
                    </button>
                </footer>
            </section>
        </form>
    )
}