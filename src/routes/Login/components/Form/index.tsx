import Campo from "./components/Campo"
import { Link } from "react-router-dom";

const Form: React.FC = () => {
    return <>
        <form
        // action=""
        // method="post"
        >
            <Campo tipo='email' />
            <Campo tipo='senha' />
            <Link
                to="/redefinir-senha"
            >Esqueceu sua senha?</Link>
            <button type="submit">Acessar</button>
        </form>
    </>
}

export default Form;