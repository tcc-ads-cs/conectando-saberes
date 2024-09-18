import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import FormLogin from "./components/FormLogin";

import './index.css';

const Login: React.FC = () => {
    return <>
        <Navbar />
        <main className="BGGradiente">
            <div className="formContainer">
                <Typography variant='h2' fontFamily={'poppins'}>Bora continuar sua jornada?</Typography>
                <Typography fontFamily={'poppins'}>Insira seu e-mail e senha para fazer login.</Typography>
                <FormLogin />
            </div>
        </main>
        <RodapeDA />
    </>
}

export default Login;