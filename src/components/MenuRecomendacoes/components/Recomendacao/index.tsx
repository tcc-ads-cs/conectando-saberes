import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { getCategorias } from "../../../functions/getCategorias";
import './index.css';
import NotFound from "../../../NotFound";

interface RecomendacaoProps {
    tipo: string,
    req: string | any
}

const Recomendacao: React.FC<RecomendacaoProps> = ({tipo, req}) => {
    switch (tipo) {
        case "perfil": 
            return (
                <div className="containerRecomendacao">
                    <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" />
                    <div className='conteudoRecomendacao'>
                        <Link to={'/perfil/' + req.id} className="link"><Typography fontFamily={'poppins'}  fontSize={24} fontWeight={300}>{req.name}</Typography></Link>
                    </div>
                </div>
            );
        case "categoria": 
            return (
                <div className="containerRecomendacao">
                    {req.map((c: any) => {
                            return getCategorias(c);
                        })}
                </div>
            );
        default:
            return <NotFound text='Não foram encontradas recomendações para você.' />;
    }
}

export default Recomendacao;