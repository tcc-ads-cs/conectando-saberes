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
import formatarData from "./functions/formataData";

interface PostagemProps {
    post: string | any,
}

const Postagem: React.FC<PostagemProps> = ({post}) => {  
    let url = useParams();
    
    const simplificaNome = (nome: string) => {
        return nome.split(' ').slice(0, 2).join(' ');
    }

    //TODO: Atribuir as fotos de perfil
    switch (post.post.type) {
        case 0:
            return <>
                <div id={post.post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.user.idUsario} className="headerPostagem">
                        <img src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png' alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.user.nmUsuario ? simplificaNome(post.user.nmUsuario) : simplificaNome(post.user.nmAutor)}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.user.tpPreferencia} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.user.grauEscolaridade)} • {post.user.nmInstituicao}</Typography>
                        </div>
                        {Object.keys(url).includes('guidPostagem') ? <Typography fontFamily={'poppins'}>{formatarData(post.post.postDate)}</Typography> : <></> }
                        {Object.keys(url).includes('guidPostagem') ? <BtnInteracao guid={post.post.guid} tipo="deletar" /> : <></> }
                    </Link>
                    <Link to={"/postagem/" + post.post.guid} className="conteudoPostagem">
                        {!Object.keys(url).includes('guidPostagem') ? formataTextoPostagem(post.post.textPost) : <Typography fontFamily={'source-serif-4'} fontSize={20}>{post.post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.categories).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                    </div>
                    <div className="containerInteracaoPostagem">
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.post.guid} tipo="curtida" qtInteracao={formataNumero(post.post.quantityLikes)}/>
                            {Object.keys(url).includes('guidPostagem') ? <></> : <BtnInteracao guid={post.post.guid} tipo="comentario" qtInteracao={formataNumero(post.post.qtComentarios)}/>}
                        </div>
                    </div>
                </div>
            </>
        case 1:
            return <>
                <div id={post.post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.post.userId} className="headerPostagem">
                        <img src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png' alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.user.nmUsuario ? simplificaNome(post.user.nmUsuario) : simplificaNome(post.user.nmAutor)}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.user.tpPreferencia} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.user.grauEscolaridade)} • {post.user.nmInstituicao}</Typography>
                        </div>
                        {Object.keys(url).includes('guidPostagem') ? <Typography fontFamily={'poppins'}>{formatarData(post.post.postDate)}</Typography> : <></> }
                        {Object.keys(url).includes('guidPostagem') ? <BtnInteracao guid={post.post.guid} tipo="deletar" /> : <></> }
                    </Link>
                    <Link to={"/postagem/" + post.post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.post.dcTitulo}</Typography>
                        {Object.keys(url).length === 0 ? formataTextoPostagem(post.post.textPost) : <Typography fontFamily={'source-serif-4'} fontSize={20}>{post.post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.categories).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                    </div>
                    <div className="containerInteracaoPostagem">
                        <div className="interacaoPostagem">
                            <BtnInteracao guid={post.post.guid} tipo="curtida" qtInteracao={formataNumero(post.post.quantityLikes)}/>
                            {Object.keys(url).includes('guidPostagem') ? <></> : <BtnInteracao guid={post.post.guid} tipo="comentario" qtInteracao={formataNumero(post.post.qtComentarios)}/>}
                        </div>
                    </div>
                </div>
            </>
        case 2:
            return <>
                <div id={post.post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.post.userId} className="headerPostagem">
                        <img src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png' alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.user.nmUsuario ? simplificaNome(post.user.nmUsuario) : simplificaNome(post.user.nmAutor)}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.user.grauEscolaridade)} • {post.user.nmInstituicao}</Typography>
                        </div>
                        {Object.keys(url).includes('guidPostagem') ? <Typography fontFamily={'poppins'}>{formatarData(post.post.postDate)}</Typography> : <></> }
                        {Object.keys(url).includes('guidPostagem') ? <BtnInteracao guid={post.post.guid} tipo="deletar" /> : <></> }
                    </Link>
                    <Link to={"/postagem/" + post.post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.post.dcTitulo}</Typography>
                        {Object.keys(url).length === 0 ? formataTextoPostagem(post.post.textPost) : <Typography fontFamily={'source-serif-4'} fontSize={20}>{post.post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.categories).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                    <div className="containerInteracaoPostagem">
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.post.guid} tipo="curtida" qtInteracao={formataNumero(post.post.quantityLikes)}/>
                            {Object.keys(url).includes('guidPostagem') ? <></> : <BtnInteracao guid={post.post.guid} tipo="comentario" qtInteracao={formataNumero(post.post.qtComentarios)}/>}
                        </div>
                    </div>
                </div>
            </>
        case 3:
            return <>
                <div id={post.post.guid} className="containerPostagem">
                    <Link to={"/perfil/" + post.post.userId} className="headerPostagem">
                        <img src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png' alt="" />
                        <div className="infoAutorPostagem">
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'} fontWeight={'bold'}>{post.user.nmUsuario ? simplificaNome(post.user.nmUsuario) : simplificaNome(post.user.nmAutor)}</Typography>
                            <Broche classN="itemInfoAutorPostagem" tipo={post.post.tpInteresse} />
                            <Typography className="itemInfoAutorPostagem" fontFamily={'poppins'}>{getGrauEscolaridade(post.user.grauEscolaridade)} • {post.user.nmInstituicao}</Typography>
                        </div>
                        {Object.keys(url).includes('guidPostagem') ? <Typography fontFamily={'poppins'}>{formatarData(post.post.postDate)}</Typography> : <></> }
                        {Object.keys(url).includes('guidPostagem') ? <BtnInteracao guid={post.post.guid} tipo="deletar" /> : <></> }
                    </Link>
                    <Link to={"/postagem/" + post.post.guid} className="conteudoPostagem">
                        <Typography fontFamily={'poppins'} variant={'h3'}>{post.post.dcTitulo}</Typography>
                        {Object.keys(url).length === 0 ? formataTextoPostagem(post.post.textPost) : <Typography fontFamily={'source-serif-4'} fontSize={20}>{post.post.textPost}</Typography>}
                    </Link>
                    <div className="categoriasPostagem">
                        {
                            (post.categories).map((e: any) => {
                                return getCategorias(e);
                            })
                        }
                        </div>
                    <div className="containerInteracaoPostagem">
                        <div className="containerDownloadPostagem">
                            <Link to={post.post.flDownload} className="downloadPostagem">
                                <FileOpenIcon />
                            </Link>
                            <Typography id="altTextDownload" fontFamily={'poppins'}>Anexo disponível para download</Typography>
                        </div>
                        <div className="interacaoPostagem">   
                            <BtnInteracao guid={post.post.guid} tipo="curtida" qtInteracao={formataNumero(post.post.quantityLikes)}/>
                            {Object.keys(url).includes('guidPostagem') ? <></> : <BtnInteracao guid={post.post.guid} tipo="comentario" qtInteracao={formataNumero(post.post.qtComentarios)}/>}
                        </div>
                    </div>
                </div>
            </>
    }
}

export default Postagem;