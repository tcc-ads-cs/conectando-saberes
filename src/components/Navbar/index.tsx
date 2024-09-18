import { Typography } from "@mui/material";
import Botao from "./components/Botao";

import './index.css';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <header>
            <Link to="/" className="linkLogo">
                <div className="containerLogo">
                    <img
                        src="src/components/Navbar/assets/iconografiaLogo.svg"
                        alt="Logo da plataforma com as letras C e S com pontos em seu formato, simbolizando pontos de parada."
                    />
                    <Typography variant={'h1'} fontFamily={'poppins'} >Conectando Saberes</Typography>
                </div>
            </Link>
            <div className="containerBtn">
                <Botao id="btnLogin" funcao="login" placeholder="Entrar" />
                <Botao id="btnCadastro" funcao="cadastro" placeholder="Cadastre-se" />
            </div>
        </header>
    );
};
  
export default Navbar;