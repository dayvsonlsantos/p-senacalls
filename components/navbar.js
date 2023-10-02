export default function Navbar(){
    return(
        <header className="flex justify-center items-center w-full">
            <nav className="flex flex-row m-6 w-4/5">
                <div className="w-1/2 flex justify-start items-center">
                    <img className="w-24 h-12" src='/logo.svg' alt="logo do aplicativo senacalls" />
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <img className="bg-senac-blue p-3 rounded-full w-12 h-12" src='/userIcon.svg' alt="icone do perfil do usuário" />
                </div>
            </nav>
        </header>
    )
}