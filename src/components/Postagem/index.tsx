import { Typography } from "@mui/material";
import BtnInteracao from "../BtnInteracao";

// Pega o ID via componente, faz a requisição, renderiza

const Postagem: React.FC = () => {
    return <>
        <div id="containerPostagem">
            <div id="infos">
                <img src="" alt="" />
                <Typography>Título</Typography>
                {/* Broches */}
                <Typography>Grau de escolaridade</Typography>
            </div>
            {/* icon do menu */}
            <div id="conteudo">
                <Typography>Texto</Typography>
                
                {/* Link para baixar ⬇️ */}
                <div id="download">
                    {/* Icon */}
                    <Typography>Download</Typography>
                </div>
            </div>
            <div id="interacao">
                <BtnInteracao tipo="curtida"/>
                <BtnInteracao tipo="comentario"/>
            </div>
        </div>
    </>
}

export default Postagem;