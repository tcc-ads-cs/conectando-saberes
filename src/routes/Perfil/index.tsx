import { Typography } from "@mui/material";
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";

// Ideia: esse ser o componente que recebe um ID e renderiza o perfil em questão

const Perfil: React.FC = () => {
    var desc = 100;
    let email = "ronald@ifsp.com";
    
    return <>
        <Navbar />
        <div className="grid-alt">
            <main className="grid-a" style={{borderStyle:"solid"}}>
                <Typography fontFamily={'poppins'} variant="h2">{desc + " Nome"}</Typography>
                <Typography fontFamily={'poppins'}>{desc + " Descrição"}</Typography>
                <Typography fontFamily={'poppins'}>{desc + " Grau de escolaridade"}</Typography>
                <Typography fontFamily={'poppins'}>{desc + " Data de nascimento"}</Typography>
                <Typography fontFamily={'poppins'}>{desc + " Cidade + Estado"}</Typography>
                <Typography fontFamily={'poppins'}>{desc + " Seguidores"}</Typography>
                <Typography fontFamily={'poppins'}>{desc + " Seguindo"}</Typography>

                {/* Broche 1
                Broche 2 */}
                
                <img src="/vite.svg" alt="" />
                
                {/* Copiar para área de transferência */}
                <button type="reset" onClick={() => {navigator.clipboard.writeText(email)}}>Contato</button>
            </main>
            <aside>
                <div className="grid-e">
                    {/* categorias */}
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