import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import InfoPerfil from "./components/InfoPerfil";
import MenuPostagem from "../../components/MenuPostagens";
import MenuCategorias from "../../components/MenuCategorias";
import { Typography } from "@mui/material";
import './index.css';

//! Esse json deve ser obtido via requisição!!!
import * as perfil from '../../assets/mock.json';
let jsonPe = JSON.stringify(perfil);

import * as postagem from '../../assets/tags.json';
let jsonPo = JSON.stringify(postagem);

const Perfil: React.FC = () => {    
    return <>
        <Navbar />
        <div className="grid-alt">
            <main className="grid-a containerInfoUsuario">
                <InfoPerfil req={jsonPe}/>
            </main>
            <aside className="grid-b padding-right">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias favoritas</Typography>
                    <MenuCategorias req={jsonPo}/>
                </section>
            </aside>
            <section className="grid-c padding-left">
                <MenuPostagem req={jsonPe}/>
            </section>
        </div>
    </>
}

export default Perfil;