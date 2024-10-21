import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import './index.css';

const Navbar: React.FC = () => {
    function btnLogin() {
        //TODO: Fazer função onde loga/desloga + altera o texto do botão.
        
        let logado = true;
        let btn = document.getElementById('btnCheckIn');
        
        if (logado && btn != null) {
            try {
                var textoBtn = "Sair"
                btn.innerHTML = '<p class="MuiTypography-root MuiTypography-body1 css-7fd3ay-MuiTypography-root">' + textoBtn + '</p>';
                logado = false;
            } catch (e) {
                console.log(e);
            }          
        }
    }
    
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
            <Link to={''} id="btnCheckIn" onClick={btnLogin}><Typography fontFamily={'poppins'}>Voltar</Typography></Link>
        </header>
    );
};
  
export default Navbar;