import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FileOpenIcon from '@mui/icons-material/FileOpen';

import Broche from "../Broche";
import BtnInteracao from "../BtnInteracao";
import { getCategorias } from "../functions/getCategorias";
import { getGrauEscolaridade } from "../functions/getGrauEscolaridade";

import './index.css'

interface PostagemProps {
    post: string | any;
}

// TODO: 6 - Adicionar o ID do perfil na requisição
var idPerfil = "id-do-perfil";

const Postagem: React.FC<PostagemProps> = ({post}) => {  
    switch (post.type) {
        case 0:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"perfil/" + idPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'source-serif-4'}>{post.textPost}</Typography>
                        <div className="categoriasPostagem">
                        {
                            (post.dcCategorias).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                    </Link>
                    <div className="containerInteracaoPostagem">
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={post.qtLikes}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={post.qtComentarios}/>
                        </div>
                    </div>
                </div>
            </>
        case 1:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"perfil/" + idPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'source-serif-4'}>{post.textPost}</Typography>
                        <div className="categoriasPostagem">
                        {
                            (post.dcCategorias).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                    </Link>
                    <div className="containerInteracaoPostagem">
                        <div className="containerDownloadPostagem">
                            <Link to={post.flDownload} className="downloadPostagem">
                                <FileOpenIcon />
                            </Link>
                            <Typography id="altTextDownload" fontFamily={'poppins'}>Anexo disponível para download</Typography>
                        </div>
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={post.qtLikes}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={post.qtComentarios}/>
                        </div>
                    </div>
                </div>
            </>
        case 2:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"perfil/" + idPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
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
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={post.qtLikes}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={post.qtComentarios}/>
                        </div>
                    </div>
                </div>
            </>
        case 3:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"perfil/" + idPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
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
                            <Typography id="altTextDownload" fontFamily={'poppins'}>Anexo disponível para download</Typography>
                        </div>
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={post.qtLikes}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={post.qtComentarios}/>
                        </div>
                    </div>
                </div>
            </>
    }
}

export default Postagem;