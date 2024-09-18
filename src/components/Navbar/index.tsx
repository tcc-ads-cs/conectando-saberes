import { Typography } from "@mui/material";
import Botao from "./components/Botao";

const Navbar: React.FC = () => {
    return (
        <header>
            <div>
                <img
                    src="src/components/Navbar/assets/iconografiaLogo.svg"
                    alt="Logo da plataforma com as letras C e S com pontos em seu formato, simbolizando pontos de parada."
                />
                <Typography variant={'h1'}>Conectando Saberes</Typography>
            </div>
            <div>
                <Botao id="btnLogin" funcao="login" placeholder="Entrar" />
                <Botao id="btnCadastro" funcao="cadastro" placeholder="Cadastre-se" />
            </div>
        </header>
    );
};
  
export default Navbar;