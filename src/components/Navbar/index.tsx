import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import './index.css';

const Navbar: React.FC = () => { 
    const navigate = useNavigate();
    
    let textoBtnLogin = (): string => {
        if (localStorage.getItem("token")) {
            return "Sair";
        } else {
            return "Entrar";
        }
    }

    function loginUser() {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            localStorage.removeItem("idUsuario");
            navigate("/");
            document.location.reload();
        } else {
            navigate("/login");
        }
    }
    
    return (
        <header>
            <Link to="/" className="linkLogo">
                <div className="containerLogo">
                    <img
                        src="/src/components/Navbar/assets/iconografiaLogo.svg"
                        alt="Logo da plataforma com as letras C e S com pontos em seu formato, simbolizando pontos de parada."
                    />
                    <Typography variant={'h1'} fontFamily={'poppins'} fontWeight={'bold'}>Conectando Saberes</Typography>
                </div>
            </Link>
            <button onClick={loginUser} id="btnCheckIn"><Typography fontFamily={'poppins'}>{textoBtnLogin()}</Typography></button>
        </header>
    );
};
  
export default Navbar;