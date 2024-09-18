import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import FormLogin from "./components/FormLogin";

const Login: React.FC = () => {
    return <>
        <Navbar />
        <Typography variant='h2' fontFamily={'poppins'}>Bora continuar sua jornada?</Typography>
        <Typography>Insira seu e-mail e senha para fazer login.</Typography>
        <FormLogin />
        <RodapeDA />
    </>
}

export default Login;