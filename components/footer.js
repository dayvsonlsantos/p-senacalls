export default function Footer({ ...props }) {
    return (
        <footer className="fixed bottom-0 bg-white w-full flex items-center justify-evenly flex-row py-4">
            <a href="/">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img className="h-7 w-7" src={props.homeIcon} alt="Icone de casa, indicando Home, na cor laranja" />
                </div>
            </a>
            <a href="/abrirchamado">
                <div className="bg-senac-yellow-70 w-16 h-16 flex items-center justify-center rounded-full">
                    <img className="h-7 w-7" src="/addIcon.svg" alt="Icone de +, indicando adicionar, na cor branca" />
                </div>
            </a>
            <a href="/meuschamados">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img className="h-7 w-7" src={props.userIcon} alt="Icone de usuário, indicando usuário, na cor laranja" />
                </div>
            </a>
        </footer>
    )
}