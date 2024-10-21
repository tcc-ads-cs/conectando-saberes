import MenuPrincipal from "../../components/MenuPrincipal";
import '../../styles/estruturas.css';

const PaginaInicial: React.FC = () => {
    return <>
        <div className="grid">
            <MenuPrincipal />
        </div>
    </>;
}

export default PaginaInicial;