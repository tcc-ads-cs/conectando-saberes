import { Typography } from "@mui/material";
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";

// Ideia: esse ser o componente que recebe um ID e renderiza o perfil em questão

const Perfil: React.FC = () => {
    return <>
        <Navbar />
        <div className="grid-alt">
            <main className="grid-a" style={{borderStyle:"solid"}}>
                <Typography fontFamily={'poppins'} variant="h2">Nome.</Typography>
                
                <Typography fontFamily={'poppins'}>Descrição</Typography>
                <Typography fontFamily={'poppins'}>Grau de escolaridade</Typography>
                <Typography fontFamily={'poppins'}>Data de nascimento</Typography>
                <Typography fontFamily={'poppins'}>Cidade + Estado</Typography>
                <Typography fontFamily={'poppins'}>Seguidores</Typography>
                <Typography fontFamily={'poppins'}>Seguindo</Typography>

                {/* Broche 1
                Broche 2 */}
                
                <img src="public/vite.svg" alt="" />
                <button type="reset">Contato</button>
            </main>
            <aside>
                <div className="grid-e">
                    testing
                </div>
                <div className="grid-b">
                    <MenuPrincipal />
                </div>
            </aside>
            <section className="grid-c">
                {/* menu de postagens */}
            </section>
            <article className="grid-d">
                {/* postagens */}
            </article>
        </div>
    </>
}

export default Perfil;