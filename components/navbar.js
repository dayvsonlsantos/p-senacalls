export default function Navbar() {
    return (
        <header className="flex justify-center items-center w-full">
            <nav className="flex flex-row m-6 w-4/5">
                <a className="w-1/2 flex justify-start items-center" href="/">
                    <div className="w-full flex justify-start items-center">
                        <img className="w-24 h-12" src='/logo.svg' alt="logo do aplicativo senacalls" />
                    </div>
                </a>
                <a className="w-1/2 flex justify-end items-center" href="/login">
                    <div className="w-1/2 flex justify-end items-center">
                        <img className="bg-senac-blue p-3 rounded-full w-12 h-12" src='/userIcon.svg' alt="icone do perfil do usuário" />
                    </div>
                </a>
            </nav>
        </header>
    )
}