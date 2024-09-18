import Campo from "../../../../components/Campo"
import './index.css';

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FormLogin: React.FC = () => {
    return <>
        <form
        // action=""
        // method="post"
        >
            <Campo tipo="email" label="E-mail:" placeholder="seuemail@ifsp.edu.br"/>
            <Campo tipo="senha" label="Senha:" placeholder="********"/>
            <Link
                to="/redefinir-senha"
            >Esqueceu sua senha?</Link>
            <button type="submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Acessar</Typography></button>
        </form>
    </>
}

export default FormLogin;