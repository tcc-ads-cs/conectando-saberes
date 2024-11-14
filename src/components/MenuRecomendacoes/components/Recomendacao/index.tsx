import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { FileOpen } from "@mui/icons-material";
import { getCategorias } from "../../../functions/getCategorias";

interface RecomendacaoProps {
    tipo: string,
    req: string | any
}

const Recomendacao: React.FC<RecomendacaoProps> = ({tipo, req}) => {
    switch (tipo) {
        case "perfil": 
            return <>
                <Link
                to={req.lkPerfil}
                className="conteudoRecomendacao">
                <img src={req.ftPerfil} alt="" />
                <div className="containerRecomendacaoPerfil">
                    <Typography fontFamily={'poppins'}>{req.nmUsuario}</Typography>
                    <Typography fontFamily={'poppins'}>Suas categorias favoritadas em comum:</Typography>
                    {(req.dcCategorias).map((c: any) => {
                        return getCategorias(c);
                    })}
                </div>
                </Link>
            </>
        case "postagem": 
            return <>
                <Link
                to={req.lkPerfil}
                className="conteudoRecomendacao">
                <FileOpen className="iconPostagem"/>
                <div className="containerRecomendacaoPostagem">
                    <Typography fontFamily={'poppins'}>{req.dcTitulo}</Typography>
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