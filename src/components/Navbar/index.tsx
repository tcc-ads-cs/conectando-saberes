import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
                
                <button
                    onClick={() => {alert("oi")}}
                > <Typography variant={'h4'}>{LoginLogout()}</Typography>
                </button>
                
                {/* O link abaixo não deve aparecer se a pessoa estiver LOGADA. */}
                <Link
                    to="/cadastro"
                > <Typography variant={'h4'}>Cadastre-se</Typography>
                </Link>
            </div>
        </header>
    );
  };

function LoginLogout() {
    var statusLogin: string = "Sair"
    return statusLogin;
    // Função para logar/deslogar E alterar o texto do botão entre Entrar/Sair.
}
  
export default Navbar;