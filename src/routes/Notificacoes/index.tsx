import { Typography } from "@mui/material";
import MenuCategorias from "../../components/MenuCategorias";
import MenuPrincipal from "../../components/MenuPrincipal";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import EmConstrucao from "../../components/EmConstrucao";
import Navbar from "../../components/Navbar";

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
                    <MenuCategorias />
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a">
                <EmConstrucao />
        </main>
    </div>
    </>
}

export default Notificacoes;