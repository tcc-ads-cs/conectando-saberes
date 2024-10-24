import { Typography } from "@mui/material";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Broche from "../Broche";
import BtnInteracao from "../BtnInteracao";
import { getCategorias } from "../functions/getCategorias";
import './index.css'
import { getGrauEscolaridade } from "../functions/getGrauEscolaridade";

interface PostagemProps {
    post: string | any;
}


const Postagem: React.FC<PostagemProps> = ({post}) => {  
    switch (post.type) {
        case 0:
        // Postagem simples
            return <>
                <div id={post.guid} className="containerPostagem">
                    <div className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)}</Typography>
                        </div>
                        <ArrowDropDownIcon />
                    </div>
                    <div className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.dcTitulo}</Typography>
                        <div className="categoriasPostagem">
                        {
                            (post.dcCategorias).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                        <Typography fontFamily={'source-serif-4'}>{post.textPost}</Typography>
                    </div>
                    <div className="interacaoPostagem">
                        <div className="downloadPostagem">
                            <FileOpenIcon />
                            <Typography fontFamily={'poppins'}>{post.lkDownload}</Typography>
                        </div>
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
