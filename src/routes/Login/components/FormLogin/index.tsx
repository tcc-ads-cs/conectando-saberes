import Campo from "../../../../components/Campo"
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
            <button type="submit">Acessar</button>
        </form>
    </>
}

export default FormLogin;