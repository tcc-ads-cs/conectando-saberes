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
                    <Link
                    to={"/perfil/" + req.lkPerfil}
                    className="containerRecomendacao">
                    <img src={req.ftPerfil} alt="" className="grid-a"/>
                    <Typography fontFamily={'poppins'} className="grid-b" fontSize={24} fontWeight={300}>{req.nmUsuario}</Typography>
                    <Typography fontFamily={'poppins'} fontWeight={'bold'} className="grid-c enfase">{req.dcCategorias[1]} categoria(s) favoritada(s) em comum</Typography>
                    </Link>
            </>
        case "postagem": 
            return <>
                <Link
                to={req.lkPerfil}
                className="containerRecomendacao">
                <FileOpen className="iconPostagem"/>
                <div className="containerRecomendacaoPostagem">
                    <Typography fontFamily={'poppins'} className="nomeRecomendacao" fontSize={24}>{req.dcTitulo}</Typography>
                    {(req.dcCategorias).map((c: any) => {
                        return getCategorias(c);
                    })}
                    <Typography fontFamily={'poppins'}>por {req.nmAutor}</Typography>
                </div>
                </Link>
            </>
    }
}

export default Recomendacao;