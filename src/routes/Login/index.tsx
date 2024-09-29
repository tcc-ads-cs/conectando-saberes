import { Typography } from "@mui/material";

import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import FormLogin from "./components/FormLogin";
import '../../styles/forms.css';

const Login: React.FC = () => {
    return <>
        <Navbar />
        <main className="BGGradiente checkinContainer">
            <div className="formContainer">
                <div>
                    <Typography className="titulo" variant='h2' fontFamily={'poppins'}>Bora continuar sua jornada?</Typography>
                    <Typography fontFamily={'poppins'}>Insira seu e-mail e senha para fazer login.</Typography>
                </div>
                <FormLogin />
            </div>
        </main>
        <RodapeDA />
    </>
}

export default Login;