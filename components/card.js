export default function Card({ ...props }) {
    return (
        <section className="flex items-center justify-center flex-col m-1.5 w-4/5 rounded-xl bg-senac-yellow-40 p-4">
            <div className='flex items-center justify-evenly flex-row w-full mb-2'>
                <h2 className='text-sm'>Nº Chamado: <span>{props.numero_chamado}</span></h2>
                <span className={`text-xs p-1 rounded-lg ${props.chamado_status === 'Concluído' ? 'bg-senac-blue text-white' : 'bg-senac-yellow-70'}`}>
                    {props.chamado_status}
                </span>
            </div>
            <div>
                <p className='text-xs'>
                    {props.chamado_descricao.length > 40
                        ? props.chamado_descricao.substr(0, 40) + '...'
                        : props.chamado_descricao}
                </p>
            </div>
        </section>
    )
}