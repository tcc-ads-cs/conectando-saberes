import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import MenuCategorias from "../../components/MenuCategorias";
import FormPesquisa from "./components/FormPesquisa";
import { Typography } from "@mui/material";

const Pesquisa: React.FC = () => {
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
                <FormPesquisa />
            </main>
        </div>
    </>
}

export default Pesquisa;