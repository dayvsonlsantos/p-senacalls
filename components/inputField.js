export default function InputField({...props}){
    
    const {...inputProps} = props;
    
    return(
        <div className="flex items-center justify-center flex-col w-4/5">
            <h2 className="flex justify-start w-full py-2">{props.title}</h2>
            <input 
            {...inputProps}
            required
            className="m-1.5 p-4 rounded-lg border-2 w-full border-senac-yellow-40"
        />
        </div>
    )
}