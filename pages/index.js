import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Card from '../components/card'
import ConnectionState from '../components/connectionState'
import { useState, useEffect } from 'react';

export default function Home() {

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
      <Head>
        <title>Senacalls</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow mb-28">
          <Navbar />
          <ConnectionState />
          <main className="flex items-center justify-center flex-col w-full ">
            <h1 className="flex justify-start w-4/5 m-4 text-lg">Chamados</h1>
            {chamados.map((chamado) => (
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
            ))}


          </main>
        </div>
        <Footer homeIcon={'/homeIcon.svg'} userIcon={'/userOrangeIconLight.svg'} />
      </div>
    </>
  )
}
