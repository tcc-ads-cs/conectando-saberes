import { useEffect, useState } from 'react';
import FeedPostagem from "../../routes/Perfil/components/FeedPostagem";
import MenuCategorias from '../MenuCategorias';
import { togglePostagem, toggleComunidade, toggleCategoria } from '../functions/toggleBtnClassse';
import { getRequest } from '../../hooks/useRequests';
import './index.css';

//TODO: Atualizar para requisição do banco de dados.
import * as categorias from '../../assets/tags.json';
import { useParams } from 'react-router-dom';
let jsonCat = JSON.stringify(categorias);

interface MenuPostagemProps {
    req?: string | any;
    type: string;
}

const MenuPostagem: React.FC<MenuPostagemProps> = ({type}) => {
    const [showPostagens, setShowPostagens] = useState(true);
    const [showComunidade, setShowComunidade] = useState(false);
    const [showCategorias, setShowCategorias] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
    const [topicos, setTopicos] = useState<any[]>([]);
    const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);
    const [pageNumber, setPageNumber] = useState(1);
    let id: string | null = null; 
    let pageSize: number = 8;

    const btnPostagens = () => {
        togglePostagem();
        setShowPostagens(true);
        setShowComunidade(false);
        setShowCategorias(false);
    };

    const btnComunidade = () => {
        toggleComunidade();
        setShowPostagens(false);
        setShowComunidade(true);
        setShowCategorias(false);
    };

    const btnCategorias = () => {
        toggleCategoria();
        setShowPostagens(false);
        setShowComunidade(false);
        setShowCategorias(true);
    };

    const buscaPosts = async () => {
            setPageNumber(pageNumber + 1);
            
            switch (type) {
                case "meuPerfil":
                    localStorage.getItem('idUsuario') != null ? id = localStorage.getItem('idUsuario') : null;

                    try {
                        let postagens = await getRequest(`/Post/user/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
                        if (postagens.length < pageSize) {
                            setHasMorePosts(false);
                        }
                        if (postagens.length > 0) {
                            postagens.forEach((post: any) => {
                                if (post.type === 2) {
                                    setTopicos((prevTopicos) => [...prevTopicos, post]);
                                } else {
                                    setPosts((prevPosts) => [...prevPosts, post]);
                                }
                            });
                        }
                    } catch (e) {
                        console.error("Erro ao buscar postagens:", e);
                    }
                    break;
                case "perfil":
                    const { idPerfil } = useParams();
                    idPerfil != undefined ? id = idPerfil : id = null; 

                    try {
                        let postagens = await getRequest(`/Post/user/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
                        if (postagens.length < pageSize) {
                            setHasMorePosts(false);
                        }
                        if (postagens.length > 0) {
                            postagens.forEach((post: any) => {
                                if (post.type === 2) {
                                    setTopicos((prevTopicos) => [...prevTopicos, post]);
                                } else {
                                    setPosts((prevPosts) => [...prevPosts, post]);
                                }
                            });
                        }
                    } catch (e) {
                        console.error("Erro ao buscar postagens:", e);
                    }
                    break;
                default: <></>
            }
        };

    useEffect(() => {
        buscaPosts();
    }, [])

    return <>
        <div className="containerMenuPostagem">
            <a id="btnPostagens" className="linkSelecionado" onClick={btnPostagens}>Postagens</a>
            <a id="btnComunidade" onClick={btnComunidade}>Comunidade</a>
            <a id="btnCategorias" onClick={btnCategorias}>Categorias</a>
        </div>
        <div className="conteudoMenuPostagem">
            {showPostagens && <FeedPostagem postagens={posts} maisPosts={hasMorePosts} />}
            {showComunidade && <FeedPostagem postagens={topicos} maisPosts={hasMorePosts} />}
            {showCategorias && <MenuCategorias req={jsonCat} />}
        </div>
        
    </>
}

export default MenuPostagem;