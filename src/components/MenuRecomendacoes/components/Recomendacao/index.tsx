import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { FileOpen } from "@mui/icons-material";
import { getCategorias } from "../../../functions/getCategorias";
import './index.css';

interface RecomendacaoProps {
    tipo: string,
    req: string | any
}

const Recomendacao: React.FC<RecomendacaoProps> = ({tipo, req}) => {
    switch (tipo) {
        case "perfil": 
            return <>
                <div className="containerRecomendacao">
                    <img src={req.ftPerfil} alt="" />
                    <div className='conteudoRecomendacao'>
                        <Link to={'/perfil/' + req.lkPerfil} className="link"><Typography fontFamily={'poppins'}  fontSize={24} fontWeight={300}>{req.nmUsuario}</Typography></Link>
                        <Typography fontFamily={'poppins'} fontWeight={'bold'} className="enfase">{req.dcCategorias.length} categoria(s) favoritada(s) em comum</Typography>
                    </div>
                </div>
            </>
        case "postagem": 
            return <>
                <div className="containerRecomendacao">
                    <FileOpen className="iconPostagem"/>
                    <div className="conteudoRecomendacao">
                        <Link to={'/postagem/' + req.guid} className="link"><Typography fontFamily={'poppins'} className="nomeRecomendacao" fontSize={24}>{req.dcTitulo}</Typography></Link>
                        {(req.dcCategorias).map((c: any) => {
                            return getCategorias(c);
                        })}
                        <Typography fontFamily={'poppins'} className="bold">por {req.nmAutor}</Typography>
                    </div>
                </div>
            </>
    }
}

export default Recomendacao;