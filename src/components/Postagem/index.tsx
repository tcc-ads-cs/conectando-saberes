import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import FileOpenIcon from '@mui/icons-material/FileOpen';

import Broche from "../Broche";
import BtnInteracao from "./components/BtnInteracao";
import { getCategorias } from "../functions/getCategorias";
import { getGrauEscolaridade } from "../functions/getGrauEscolaridade";
import { formataTextoPostagem } from "./functions/formataTextoPostagem";
import { formataNumero } from "../functions/formataNumero";
import './index.css';

interface PostagemProps {
    post: string | any;
}

const Postagem: React.FC<PostagemProps> = ({post}) => {  
    let url = useParams();
    switch (post.post.type) {
        case 0:
            return <>
                <div id={post.post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.post.userId} className="headerPostagem">
                        <img src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png' alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        {!Object.keys(url).includes('guidPostagem') ? formataTextoPostagem(post.textPost) : <Typography fontFamily={'poppins'}>{post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.dcCategorias.result).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                    </div>
                    <div className="containerInteracaoPostagem">
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={formataNumero(post.qtLikes)}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={formataNumero(post.qtComentarios)}/>
                        </div>
                    </div>
                </div>
            </>
        case 1:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.lkPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        {Object.keys(url).length === 0 ? formataTextoPostagem(post.textPost) : <Typography>{post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.dcCategorias.result).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                    </div>
                    <div className="containerInteracaoPostagem">
                        <div className="containerDownloadPostagem">
                            <Link to={post.flDownload} className="downloadPostagem">
                                <FileOpenIcon />
                            </Link>
                            <Typography id="altTextDownload" fontFamily={'poppins'}>Anexo disponível para download</Typography>
                        </div>
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={formataNumero(post.qtLikes)}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={formataNumero(post.qtComentarios)}/>
                        </div>
                    </div>
                </div>
            </>
        case 2:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.lkPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.dcTitulo}</Typography>
                        {Object.keys(url).length === 0 ? formataTextoPostagem(post.textPost) : <Typography>{post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.dcCategorias.result).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                    <div className="containerInteracaoPostagem">
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={formataNumero(post.qtLikes)}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={formataNumero(post.qtComentarios)}/>
                        </div>
                    </div>
                </div>
            </>
        case 3:
            return <>
                <div id={post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.lkPerfil} className="headerPostagem">
                        <img src={post.ftPerfil} alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.nmAutor}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.grauEscolaridade)} • {post.nmInstituicao}</Typography>
                        </div>
                    </Link>
                    <Link to={"/postagem/" + post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.dcTitulo}</Typography>
                        {Object.keys(url).length === 0 ? formataTextoPostagem(post.textPost) : <Typography>{post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.dcCategorias.result).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                    <div className="containerInteracaoPostagem">
                        <div className="containerDownloadPostagem">
                            <Link to={post.flDownload} className="downloadPostagem">
                                <FileOpenIcon />
                            </Link>
                            <Typography id="altTextDownload" fontFamily={'poppins'}>Anexo disponível para download</Typography>
                        </div>
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.guid} tipo="curtida" qtInteracao={formataNumero(post.qtLikes)}/>
                            <BtnInteracao guid={post.guid} tipo="comentario" qtInteracao={formataNumero(post.qtComentarios)}/>
                        </div>
                    </div>
                </div>
            </>
    }
}

export default Postagem;