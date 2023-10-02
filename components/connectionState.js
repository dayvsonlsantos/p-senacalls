import React, { useEffect, useState } from 'react';

function ConnectionState() {
    const [state, setState] = useState('unknown'); // Define o estado inicial como 'unknown' sem acessar o localStorage aqui

    useEffect(() => {
        // Apenas dentro deste useEffect o código é executado no lado do cliente

        // Atualiza o estado com base no localStorage assim que o componente é montado
        const savedState = localStorage.getItem('connectionStatus') || 'unknown';
        setState(savedState);

        function handleStateChange(event) {
            const newState = event.type === 'online' ? 'online' : 'offline';

            // Armazene o status no localStorage apenas se ele mudar
            if (newState !== localStorage.getItem('connectionStatus')) {
                localStorage.setItem('connectionStatus', newState);
                setState(newState);
            }
        }

        // Atualize o status no carregamento do componente
        const initialState = navigator.onLine ? 'online' : 'offline';
        if (state === 'unknown') {  // Só atualiza se o estado for 'unknown' para evitar reescritas desnecessárias
            setState(initialState);
            localStorage.setItem('connectionStatus', initialState);
        }

        window.addEventListener('online', handleStateChange);
        window.addEventListener('offline', handleStateChange);

        // Limpar os listeners quando o componente for desmontado
        return () => {
            window.removeEventListener('online', handleStateChange);
            window.removeEventListener('offline', handleStateChange);
        };
    }, []); // Dependência vazia significa que este useEffect será executado uma vez quando o componente for montado

    return (
        <p className="flex items-center justify-center my-2 w-full">Você está
            <strong id="status" className={`ml-1 ${state === 'online' ? 'text-senac-yellow' : 'text-red-500'}`}>
                {state === 'unknown'
                    ? 'com conexão desconhecida'
                    : state
                }
            </strong>
        </p>
    );
}

export default ConnectionState;
