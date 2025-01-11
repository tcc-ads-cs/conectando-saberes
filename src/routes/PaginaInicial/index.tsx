import { Typography } from "@mui/material";
import MenuCategorias from "../../components/MenuCategorias";
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import '../../styles/estruturas.css';
import MenuPostagem from "../../components/MenuPostagens";

import './index.css';

import * as postagem from '../../assets/tags.json';
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
let jsonPo = JSON.stringify(postagem);

const PaginaInicial: React.FC = () => {
    return <>
    <Navbar />
    <div className="grid">
        <aside className="grid-b">
            <section>
                <MenuPrincipal />
            </section>
            <section className="containerMenuCategorias">
                <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias utilizadas</Typography>
                <MenuCategorias req={jsonPo}/>
            </section>
            <section className="containerMenuCategorias">
                <MenuRecomendacoes />
            </section>
        </aside>
        <main className="grid-a">
            {/* TODO: Colocar pro feed */}
            <MenuPostagem type=""/>
        </main>
    </div>
</>
}

export default PaginaInicial;