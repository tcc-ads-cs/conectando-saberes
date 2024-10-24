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
                <div id={post.guid} className="containerPostagem">
                    <div className="infoPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <Typography>{post.nmAutor}</Typography>
                        <Broche tipo={post.tpInteresse} />
                        <Typography>{post.grauEscolaridade}</Typography>
                    </div>
                    <div className="opcoesMenu">
                        <ArrowDropDownIcon />
                    </div>
                    <div className="conteudoPostagem">
                        <Typography>{post.dcTitulo}</Typography>
                        <Typography>{post.dcTags}</Typography>
                        <Typography>{post.textPost}</Typography>
                        
                        <div className="downloadPostagem">
                            <FileOpenIcon />
                            <Typography>{post.lkDownload}</Typography>
                        </div>
                    </div>
                    <div className="interacaoPostagem">
                        <BtnInteracao tipo="curtida" curtidas={post.quantityLikes}/>
                        <BtnInteracao tipo="comentario" curtidas={post.nbComentarios}/>
                        Acabou o post aqui
                    </div>
                </div>
            </>
        default:
            return post.textPost + " - (" + post.type + ")";
    }
}

export default Postagem;