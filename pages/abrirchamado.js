import InputField from "../components/inputField";
import Navbar from "../components/navbar";
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function AbrirChamado() {

    const router = useRouter()

    const [data, setData] = useState({
        equipamento: "",
        codigo_equipamento: "",
        sala_laboratorio: "",
        defeito: "",
        imagem: ""
    });

    function sendData(e) {
        e.preventDefault();
        console.log(data);
    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // Imagem Input

    const [selectedFile, setSelectedFile] = useState(null);
    const [checkFile, setCheckFile] = useState(false);

    const imageHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setCheckFile(true);
        setData({ ...data, imagem: e.target.files[0] });
    }


    return (
        <form onSubmit={sendData} className="flex flex-col min-h-screen">
            <div className="flex-grow mb-40">
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

                    <div className="flex items-center justify-center flex-col w-4/5">
                        <h2 className="flex justify-start w-full py-2">Adicione uma Imagem</h2>

                        <div className="w-[320px] grid gap-2">
                            <div className="h-24 cursor-pointer relative flex justify-center items-center rounded-md bg-senac-yellow-40">
                                <input type="file" name="file" onChange={imageHandler} className="z-20 opacity-0 cursor-pointer h-full w-full" />
                                <div className="absolute flex justify-center items-center gap-2">
                                    <img className={`h-10 w-10 rounded-full ${checkFile ? 'opacity-1' : 'opacity-0'}`} src={selectedFile ? URL.createObjectURL(selectedFile) : null} />
                                    <span className="text-[18px] w-56 truncate">{checkFile ? (selectedFile ? selectedFile.name : 'Imagem Selecionada') : 'Enviar uma Imagem'}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
            </div>
            <section className="fixed bottom-0 bg-white flex w-full flex-col">
                <span className="flex items-center justify-center text-sm py-4">Enviar chamado ?</span>
                <footer className=" w-4/6 flex items-center justify-around flex-row py-4">
                    <button onClick={() => router.back()}>
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img className="h-7 w-7" src='/backIcon.svg' alt="Icone de seta, indicando voltar, na cor laranja" />
                        </div>
                    </button>
                    <button type="submit" className="bg-senac-yellow-70 w-16 h-16 flex items-center justify-center rounded-full">
                        <img className="h-7 w-7" src="/checkIcon.svg" alt="Icone de ok, indicando check, na cor branca" />
                    </button>
                </footer>
            </section>

        </form>
    )
}