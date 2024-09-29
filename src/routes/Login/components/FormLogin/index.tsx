import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Campo from "../../../../components/Campo"

const FormLogin: React.FC = () => {
    return <>
        <form
        // action=""
        // method="post"
        className="inputContainer"
        >
            <Campo classe="inputLogin" tipo="email" label="E-mail:" placeholder="seuemail@ifsp.edu.br"/>
            <Campo tipo="senha" label="Senha:" placeholder="********"/>
            <Link
                to="/redefinir-senha"
                className="linkForm"
            >Esqueceu sua senha?</Link>
            <button className="btnForm" type="submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Acessar</Typography></button>
        </form>
    </>
}

export default FormLogin;