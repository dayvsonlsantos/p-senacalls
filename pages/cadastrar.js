import { useState } from 'react';
import InputField from '../components/inputField';

export default function Cadastrar() {

    const [data, setData] = useState({
        matricula: "",
        senha: "",
        email: ""
    });

    function sendData(e) {
        e.preventDefault();
        console.log(data);
    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    return (
        <form onSubmit={sendData} className="flex items-center justify-center w-full flex-col absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
            <div className="flex items-center justify-center my-4">
                <img src="/logo.svg" alt="Logo do aplicativo senacalls" />
            </div>
            <div className="flex items-center justify-center my-4 flex-col w-4/5">
                <InputField
                    title={'Matrícula'}
                    type={'text'}
                    name={'matricula'}
                    id={'matricula'}
                    placeholder={'Informe a sua matricula'}
                    value={data.matricula}
                    onChange={changeInputValue}
                />
                <InputField
                    title={'E-mail Institucional'}
                    type={'email'}
                    name={'email'}
                    id={'email'}
                    placeholder={'Informe o seu e-mail institucional'}
                    value={data.email}
                    onChange={changeInputValue}
                />
                <InputField
                    title={'Senha'}
                    type={'password'}
                    name={'senha'}
                    id={'senha'}
                    placeholder={'Informe a sua senha'}
                    value={data.senha}
                    onChange={changeInputValue}
                />
            </div>
            <button type="submit" className="my-6 text-sm bg-senac-yellow-70 w-24 h-10 text-white flex items-center justify-center rounded-lg">
                Cadastrar
            </button>
            <p className="flex w-4/6 text-xs text-center items-center justify-center flex-col py-4">
                Já possui uma conta ?
                <span className='my-4 flex items-center justify-center text-senac-blue'><a href="/login">Realizar login</a></span>
            </p>
        </form>
    )
}