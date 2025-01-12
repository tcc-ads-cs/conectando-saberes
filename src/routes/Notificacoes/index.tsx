import { Typography } from "@mui/material";
import MenuCategorias from "../../components/MenuCategorias";
import MenuPrincipal from "../../components/MenuPrincipal";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import Navbar from "../../components/Navbar";

import * as postagem from '../../assets/tags.json';
let jsonPo = JSON.stringify(postagem);

const Notificacoes: React.FC = () => {
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
                {/* Em construção */}
        </main>
    </div>
    </>
}

export default Notificacoes;