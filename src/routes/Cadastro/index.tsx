import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import FormCadastro from "./components/FormCadastro";

const Cadastro: React.FC = () => {
    return <>
        <Navbar />
        <Typography variant="h2">Dados de usuário</Typography>
        <Typography>Vamos definir seu acesso na plataforma.</Typography>
        <FormCadastro />
        <RodapeDA />
    </>
}

export default Cadastro;