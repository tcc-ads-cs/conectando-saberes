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
            <Campo id="emailLogin" tipo="email" label="E-mail:" placeholder="seuemail@ifsp.edu.br"/>
            <Campo id="senhaLogin" tipo="senha" label="Senha:" placeholder="********"/>
            <Link
                to="/redefinir-senha"
            >Esqueceu sua senha?</Link>
            <button className="btnForm" type="submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Acessar</Typography></button>
        </form>
    </>
}

export default FormLogin;