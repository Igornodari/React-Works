import Frase from "../shared-component/Frases"

function Header() {
    const nome = "igor";
    const sobrenome= "leal";

    return (
            <header className="App-header">
                <Frase nome={nome} sobreNome={sobrenome}/>
            </header>
    )

}

export default Header