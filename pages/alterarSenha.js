import { useState } from 'react';
import InputField from "../components/inputField";

export default function AlterarSenha({...props}) {

    const [data, setData] = useState({
        senhaAntiga: "",
        novaSenha: "",
        confirmarNovaSenha: ""
    });

    function sendData(e) {
        e.preventDefault();

        if ((data.senhaAntiga === '12345') && (data.novaSenha === data.confirmarNovaSenha)) {
            console.log('senha alterada com sucesso' + data);
        }else{
            console.log('Não foi possível alterar sua senha')
        }

        props.closeModalAlterarSenha();

    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className='bg-modal-shadow fixed w-screen h-screen top-0 right-0 flex items-center justify-center z-10'>
            <div className="w-8/12 drop-shadow-lg bg-white py-4 rounded-lg absolute flex items-center justify-center flex-col top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
                <div className='flex items-center justify-evenly flex-row w-11/12'>
                    <h1 className='my-5 text-lg'>Inserir sua Senha</h1>
                    <button onClick={props.closeModalAlterarSenha} className='w-10 h-10'><img src="/closeIcon.svg" alt="Icone de fechar/sair" /></button>
                </div>
                <InputField
                    title={'Senha Antiga'}
                    type={'password'}
                    name={'senhaAntiga'}
                    id={'senhaAntiga'}
                    placeholder={'Informe a sua senha antiga'}
                    value={data.senhaAntiga}
                    onChange={changeInputValue}
                />
                <InputField
                    title={'Nova Senha'}
                    type={'password'}
                    name={'novaSenha'}
                    id={'novaSenha'}
                    placeholder={'Informe a sua nova senha'}
                    value={data.novaSenha}
                    onChange={changeInputValue}
                />
                <InputField
                    title={'Confirmar Nova Senha'}
                    type={'password'}
                    name={'confirmarNovaSenha'}
                    id={'confirmarNovaSenha'}
                    placeholder={'Confirme a sua nova senha'}
                    value={data.confirmarNovaSenha}
                    onChange={changeInputValue}
                />
                <button onClick={sendData} className="my-6 text-sm bg-senac-yellow-70 w-28 h-10 text-white flex items-center justify-center rounded-lg">
                    Alterar Senha
                </button>
            </div>
        </div>
    )
}