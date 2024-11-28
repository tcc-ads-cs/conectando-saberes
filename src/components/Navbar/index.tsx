import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import './index.css';

document.addEventListener('DOMContentLoaded', function() {
    let btn: HTMLElement = document.getElementById('btnCheckIn') as HTMLElement;
    btn.addEventListener("click", () => {
        if (localStorage.getItem("logado") == "true") {
            localStorage.setItem("logado", "false");  
            btn.innerHTML = "<p class=\"MuiTypography-root MuiTypography-body1 css-7fd3ay-MuiTypography-root\">Entrar</p>";
        } else {
            localStorage.setItem("logado", "true");
            btn.innerHTML = "<p class=\"MuiTypography-root MuiTypography-body1 css-7fd3ay-MuiTypography-root\">Sair</p>";
        }
    });
});

function loginUser() {
    // Lógica de login/logoff
    console.log("Clicou");
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
            <button onClick={loginUser} id="btnCheckIn"><Typography fontFamily={'poppins'}>Entrar</Typography></button>
        </header>
    );
};
  
export default Navbar;