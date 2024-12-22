import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import './index.css';

let textoBtnLogin = "Entrar";

function loginUser() {
    if (localStorage.getItem("logado") == "true") {
        //* Usuário tentando deslogar
        
        localStorage.setItem("logado", "false");  
        textoBtnLogin = "Entrar";
    } else if (localStorage.getItem("logado") == "false") {
        //* Usuário tentando logar

        localStorage.setItem("logado", "true");
        textoBtnLogin = "Sair"
    }
}

const Navbar: React.FC = () => { 
    return (
        <header>
            <Link to="/" className="linkLogo">
                <div className="containerLogo">
                    <img
                        src="src/components/Navbar/assets/iconografiaLogo.svg"
                        alt="Logo da plataforma com as letras C e S com pontos em seu formato, simbolizando pontos de parada."
                    />
                    <Typography variant={'h1'} fontFamily={'poppins'} fontWeight={'bold'}>Conectando Saberes</Typography>
                </div>
            </Link>
            <button onClick={loginUser} id="btnCheckIn"><Typography fontFamily={'poppins'}>{textoBtnLogin}</Typography></button>
        </header>
    );
};
  
export default Navbar;