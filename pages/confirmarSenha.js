import { useState } from 'react';
import InputField from "../components/inputField";

export default function ConfirmarSenha({ ...props }) {

    const [data, setData] = useState({
        senha: ""
    });

    function sendData(e) {
        e.preventDefault();

        if (data.senha === '12345') {
            console.log(props.dataPerfil);
        }else{
            console.log('Não foi possível alterar seus dados')
        }

        props.closeModalConfirmarSenha();

    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className='bg-modal-shadow fixed w-screen h-screen top-0 right-0 flex items-center justify-center z-10'>
            <div className="w-8/12 drop-shadow-lg bg-white py-4 rounded-lg absolute flex items-center justify-center flex-col top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
                <div className='flex items-center justify-evenly flex-row w-11/12'>
                    <h1 className='my-5 text-lg'>Inserir sua Senha</h1>
                    <button onClick={props.closeModalConfirmarSenha} className='w-10 h-10'><img src="/closeIcon.svg" alt="Icone de fechar/sair" /></button>
                </div>
                <InputField
                    title={'Senha'}
                    type={'password'}
                    name={'senha'}
                    id={'senha'}
                    placeholder={'Informe a sua senha'}
                    value={data.senha}
                    onChange={changeInputValue}
                />
                <button onClick={sendData} className="my-6 text-sm bg-senac-yellow-70 w-24 h-10 text-white flex items-center justify-center rounded-lg">
                    Confirmar
                </button>
            </div>
        </div>
    )
}