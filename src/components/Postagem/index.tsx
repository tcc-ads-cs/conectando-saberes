import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Broche from "../Broche";
import BtnInteracao from "../BtnInteracao";
import { getCategorias } from "../functions/getCategorias";
import { getGrauEscolaridade } from "../functions/getGrauEscolaridade";

import './index.css'

interface PostagemProps {
    post: string | any;
}

// TODO: Adicionar o ID do perfil na requisição
var idPerfil = "id-do-perfil";

const Postagem: React.FC<PostagemProps> = ({post}) => {  
    switch (post.type) {
        case 0:
        // Postagem longa com anexo
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"perfil/" + idPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)}</Typography>
                        </div>
                        <ArrowDropDownIcon />
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.dcTitulo}</Typography>
                        <div className="categoriasPostagem">
                        {
                            (post.dcCategorias).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                        <Typography fontFamily={'source-serif-4'}>{post.textPost}</Typography>
                    </Link>
                    <div className="containerInteracaoPostagem">
                        <div className="containerDownloadPostagem">
                            <Link to={post.flDownload} className="downloadPostagem">
                                <FileOpenIcon />
                            </Link>
                            
                            {/*TODO: Fazer uma lógica onde a partir do tamanho da tela, adiciona a classe none */}
                            <Typography id="altTextDownload" className="none" fontFamily={'poppins'}>Anexo disponível para download</Typography>
                        </div>
                        <div className="interacaoPostagem">   
                            <BtnInteracao tipo="curtida" qtInteracao={post.qtLikes}/>
                            <BtnInteracao tipo="comentario" qtInteracao={post.qtComentarios}/>
                        </div>
                    </div>
                </div>
            </>
        default:
            return post.textPost + " - (" + post.type + ")";
    }
}

export default Postagem;
