import { PersonAdd, WebStories } from "@mui/icons-material";
import { Typography } from "@mui/material";
import './index.css';

import Recomendacao from "../../components/MenuRecomendacoes/components/Recomendacao";
import * as jsonRec from "../../assets/recomendacoes.json";

let jsonPe = JSON.parse(JSON.stringify(jsonRec.perfis));
let jsonPo = JSON.parse(JSON.stringify(jsonRec.postagens));

const MenuRecomendacoes: React.FC = () => {
    return <>
    <div className="containerMenuRecomendacoes">
        <div className="headerRecomendacao">
            <PersonAdd />
            <Typography fontFamily={'poppins'} variant={'h3'}>Perfis para você</Typography>
        </div>
        {jsonPe.map((jpe: any) => <Recomendacao key={jpe.id} tipo="perfil" req={jpe} />)}
    </div>
    <div className="containerMenuRecomendacoes">
        <div className="headerRecomendacao">
            <WebStories />
            <Typography fontFamily={'poppins'} variant={'h3'}>Postagens para você</Typography>
        </div>
        {jsonPo.map((jpo: any) => <Recomendacao key={jpo.guid} tipo="postagem" req={jpo} />)}
    </div>
    </>
}

export default MenuRecomendacoes;