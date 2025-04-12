import RodapeDA from "../../components/RodapeDA";
import NotFound from "../../components/NotFound";
import Navbar from "../../components/Navbar";

const Erro404: React.FC = () => {
    return <>
    <Navbar />
    <div className="landingPage">
        <NotFound text='Esta página não foi encontrada.' link='..'/>
    </div>
    <RodapeDA />
    </>
}

export default Erro404;