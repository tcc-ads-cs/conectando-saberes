import { useState } from "react";
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import MenuCategorias from "../../components/MenuCategorias";
import { Typography } from "@mui/material";

import * as categorias from '../../assets/tags.json';
let jsonCat = JSON.stringify(categorias);


const Pesquisa: React.FC = () => {
    const [ isLoading , setLoading ] = useState(false);

    return <>
    <Navbar />
        <div className="grid">
            <aside className="grid-b">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias favoritas</Typography>
                    <MenuCategorias req={jsonCat}/>
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a">
                
            </main>
        </div>
    </>
}

export default Pesquisa;