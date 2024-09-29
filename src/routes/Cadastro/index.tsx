import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import FormCadastro from "./components/FormCadastro";

import '../../styles/forms.css';

const Cadastro: React.FC = () => {
    return <>
        <Navbar />
            <main className="BGGradiente checkinContainer">
                <div className="formContainer">
                    <div>
                        <Typography className="titulo" variant="h2" fontFamily={'poppins'}>Começe sua jornada no CS</Typography>
                        <Typography fontFamily={'poppins'}>Nos diga um pouco sobre você!</Typography>
                    </div>
                    <FormCadastro />
                </div>
            </main>
        <RodapeDA />
    </>
}

export default Cadastro;