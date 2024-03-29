import { useState } from 'react';
import InputField from '../components/inputField';
import { useRouter } from 'next/router';

export default function Login() {

    const [data, setData] = useState({
        matricula: "",
        senha: ""
    });

    function sendData(e) {
        e.preventDefault();
        console.log(data);
        acessarPerfil();
    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const router = useRouter();

    function acessarPerfil() {
        if ((data.matricula === '0020012000') && (data.senha === '0020012000')) {
            router.push('/perfil');
        }
    }


    return (
        <>
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
                        title={'Senha'}
                        type={'password'}
                        name={'senha'}
                        id={'senha'}
                        placeholder={'Informe a sua senha'}
                        value={data.senha}
                        onChange={changeInputValue}
                    />
                </div>
                <button type="submit" className="my-6 bg-senac-yellow-70 text-sm w-24 h-10 text-white flex items-center justify-center rounded-lg">
                    Entrar
                </button>
                <p className="flex w-4/6 text-xs text-center items-center justify-center flex-col py-4">
                    Não possui uma conta ?
                    <span className='my-4 flex items-center justify-center text-senac-blue'><a href="/cadastrar">Cadastre-se</a></span>
                    ... e venha conosco ajudar a melhorar o Senac :)
                </p>
                
            </form>
            <footer className='fixed bottom-0 bg-white w-full flex items-center justify-evenly flex-row py-4'>
                <a href="/">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img className="h-7 w-7" src='/homeIcon.svg' alt="Icone de casa, indicando Home, na cor laranja" />
                    </div>
                </a>
            </footer>
        </>
    )
}