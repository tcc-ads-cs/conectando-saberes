// Componente recebe um ID e renderiza o perfil.
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import InfoPerfil from "./components/InfoPerfil";
import MenuPostagem from "../../components/MenuPostagens";

//! Esse json deve ser obtido via requisição!!!
import * as mock from '../../assets/mock.json';
let json = JSON.stringify(mock);

const Perfil: React.FC = () => {    
    return <>
        <Navbar />
        <div className="grid-alt">
            <main className="grid-a" style={{borderStyle:"solid"}}>
                <InfoPerfil req={json}/>
            </main>
            <aside>
                <div className="grid-b">
                    <MenuPrincipal />
                </div>
                <div className="grid-d">
                    {/* categorias */}
                </div>
            </aside>
            <section className="grid-c">
                <MenuPostagem req={json}/>
            </section>
        </div>
    </>
}

export default Perfil;