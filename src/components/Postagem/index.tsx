import { Typography } from "@mui/material";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Broche from "../Broche";
import BtnInteracao from "../BtnInteracao";

interface PostagemProps {
    post: string | any;
}

const Postagem: React.FC<PostagemProps> = ({post}) => {  
    switch (post.type) {
        case 0:
            return <>
                <div id="containerPostagem">
                    <div id="infoPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <Typography>{post.nmAutor}</Typography>
                        <Broche tipo={post.dcInteresse} />
                        <Typography>{post.grauEscolaridade}</Typography>
                    </div>
                    <div id="opcoesMenu">
                        <ArrowDropDownIcon />
                    </div>
                    <div id="conteudoPostagem">
                        <Typography>{post.dcTitulo}</Typography>
                        <Typography>{post.dcTags}</Typography>
                        <Typography>{post.textPost}</Typography>
                        
                        <div id="downloadPostagem">
                            <FileOpenIcon />
                            <Typography>{post.lkDownload}</Typography>
                        </div>
                    </div>
                    <div id="interacaoPostagem">
                        <BtnInteracao tipo="curtida" curtidas={post.quantityLikes}/>
                        <BtnInteracao tipo="comentario" curtidas={post.nbComentarios}/>
                    </div>
                </div>
            </>
        default:
            return post.textPost + " - (" + post.type + ")";
    }
}

export default Postagem;