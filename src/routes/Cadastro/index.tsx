import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import FormCadastro from "./components/FormCadastro";
import '../../styles/forms.css';

import { Link } from "react-router-dom";

const Cadastro: React.FC = () => {
    return <>
        <Navbar />
        <div className="cta">
            <Typography className="text" fontFamily={'poppins'}>Deseja logar no CS? <Link to='/login'><em>Clique aqui</em></Link></Typography>
        </div>
            <main className="BGGradiente checkinContainer">
                <div className="formContainer">
                    <div className="formHeader">
                        <Typography className="titulo" variant="h2" fontFamily={'poppins'}>Comece sua jornada no CS!</Typography>
                        <Typography fontFamily={'poppins'}>Cadastre-se em 3 etapas.</Typography>
                    </div>
                    <FormCadastro />
                </div>
            </main>
        <RodapeDA />
    </>
}

export default Cadastro;