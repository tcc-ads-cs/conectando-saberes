import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import Form from "./components/Form";

const Login: React.FC = () => {
    return <>
        <Navbar />
        <Typography variant='h2' fontFamily={'poppins'}>Bora continuar sua jornada?</Typography>
        <Typography>Insira seu e-mail e senha para fazer login.</Typography>
        <Form />
        <RodapeDA />
    </>
}

export default Login;