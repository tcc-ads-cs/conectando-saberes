import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import './index.css';

const Navbar: React.FC = () => {
    localStorage.setItem("logado", "false"); // Informação será estipulada através do login/JWT.
    let btn = document.getElementById('btnCheckIn');
    
    btn?.addEventListener("click", () => {
        if (localStorage.getItem("logado") == "true") {
            localStorage.setItem("logado", "false");
        } else if (localStorage.getItem("logado") == "false") {
            localStorage.setItem("logado", "true");
        }
    })
    
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
            <Link to={''} id="btnCheckIn"><Typography fontFamily={'poppins'}>Entrar</Typography></Link>
        </header>
    );
};
  
export default Navbar;