import InputField from "../components/inputField";
import Navbar from "../components/navbar";
import React, { useState } from 'react';

export default function AbrirChamado() {

    const [data, setData] = useState({
        equipamento: "",
        codigo_equipamento: "",
        sala_laboratorio: "",
        defeito: ""
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
                    <h1 className="flex justify-start w-4/5 m-4 text-lg">Abrir Chamado</h1>

                    <InputField
                        title={'Equipamento'}
                        type={'text'}
                        name={'equipamento'}
                        id={'equipamento'}
                        placeholder={'Informe o nome do equipamento'}
                        value={data.equipamento}
                        onChange={changeInputValue}
                    />

                    <InputField
                        title={'Código do Equipamento'}
                        type={'text'}
                        name={'codigo_equipamento'}
                        id={'codigo_equipamento'}
                        placeholder={'Informe o código do equipamento'}
                        value={data.codigo_equipamento}
                        onChange={changeInputValue}
                    />

                    <InputField
                        title={'Sala / Laboratório'}
                        type={'text'}
                        name={'sala_laboratorio'}
                        id={'sala_laboratorio'}
                        placeholder={'Informe o local do equipamento'}
                        value={data.sala_laboratorio}
                        onChange={changeInputValue}
                    />

                    <InputField
                        title={'Informe o Defeito'}
                        type={'text'}
                        name={'defeito'}
                        id={'defeito'}
                        placeholder={'Informe o defeito do equipamento'}
                        value={data.defeito}
                        onChange={changeInputValue}
                    />

                </main>
            </div>
            <section className="fixed bottom-0 bg-white flex w-full flex-col">
                <span className="flex items-center justify-center text-sm py-4">Enviar chamado ?</span>
                <footer className=" w-9/12 flex items-center justify-evenly flex-row py-4">
                    <a href="/">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img className="h-7 w-7" src='/backIcon.svg' alt="Icone de seta, indicando voltar, na cor laranja" />
                        </div>
                    </a>
                    <button type="submit" className="bg-senac-yellow-70 w-16 h-16 flex items-center justify-center rounded-full">
                        <img className="h-7 w-7" src="/checkIcon.svg" alt="Icone de ok, indicando check, na cor branca" />
                    </button>
                </footer>
            </section>

        </form>
    )
}