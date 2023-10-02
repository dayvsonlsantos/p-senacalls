export default function DadosChamado({...props}){
    return(
        <div className="flex justify-center items-start flex-col w-4/6 py-2">
            <h2 className="flex justify-start w-full py-2">{props.title}</h2>
            <p className="text-gray-600">{props.dado_chamado}</p>
        </div>
    )
}