import { useEffect, useState } from 'react';
import FeedPostagem from "../../routes/Perfil/components/FeedPostagem";
import MenuCategorias from '../MenuCategorias';
import { togglePostagem, toggleComunidade, toggleCategoria } from '../functions/toggleBtnClassse';
import { getRequest } from '../../hooks/useRequests';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import NotFound from '../NotFound';
import './index.css';

interface MenuPostagemProps {
    type: string,
    user?: Array<string> | any,
}

const MenuPostagem: React.FC<MenuPostagemProps> = ({type, user}) => {
    const [posts, setPosts] = useState<any[]>([]);
    const [topicos, setTopicos] = useState<any[]>([]);
    const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);
    const [pageNumber, setPageNumber] = useState(1);
    let id: string | null = null;
    const { idPerfil } = useParams();
    let pageSize: number = 8;
    
    const [activeTab, setActiveTab] = useState('postagens');

    const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const tab = event.currentTarget.id.replace('btn', '').toLowerCase();
        setActiveTab(tab);
        switch (tab) {
            case 'postagens':
                togglePostagem();
                break;
            case 'comunidade':
                toggleComunidade();
                break;
            case 'categorias':
                toggleCategoria();
                break;
            default:
                break;
        }
    };

    const showPostagens = activeTab === 'postagens';
    const showComunidade = activeTab === 'comunidade';
    const showCategorias = activeTab === 'categorias';
    
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
                            if (post.post.userId === user.idUsuario) {
                                if (post.post.type === 2) {
                                    setTopicos((prevTopicos) => [...prevTopicos, { ...post, user }]);
                                } else if ((post.post.type !== 2)) {
                                    setPosts((prevPosts) => [...prevPosts, { ...post, user }]);
                                }
                            } else {
                                setPosts([]);
                                setTopicos([]);
                            }
                        });
                    }
                } catch (e) {
                    console.error("Erro ao buscar postagens:", e);
                }
                break;
            case "perfil":
                idPerfil != undefined ? id = idPerfil : id = null;
                try {
                    let postagensPerfil = await getRequest(`/Post/user/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
                    if (postagensPerfil.length < pageSize) {
                        setHasMorePosts(false);
                    }
                    if (postagensPerfil.length > 0) {
                        postagensPerfil.forEach((post: any) => {
                            if (post.post.userId === user.idUsuario) {
                                if (post.post.type === 2) {
                                    setTopicos((prevTopicos) => [...prevTopicos, { ...post, user }]);
                                } else if ((post.post.type !== 2)) {
                                    setPosts((prevPosts) => [...prevPosts, { ...post, user }]);
                                }
                            } else {
                                setPosts([]);
                                setTopicos([]);
                            }
                        });
                    }
                } catch (e) {
                    console.error("Erro ao buscar postagens:", e);
                }
                break;
            case "feed":
                idPerfil != undefined ? id = idPerfil : id = null;
                try {
                    let meuFeed = await getRequest(`/Post/feed?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
                        "token": localStorage.getItem('token') || ''
                    });

                    if (meuFeed.length < pageSize) {
                        setHasMorePosts(false);
                    } 
                    if (meuFeed.length > 0) {
                        meuFeed.forEach((post: any) => {
                            if (post.post.type === 2) {
                                setTopicos((prevTopicos) => [...prevTopicos, post]);
                            } else if ((post.post.type !== 2)) {
                                setPosts((prevPosts) => [...prevPosts, post]);
                            } else {
                                setPosts([]);
                                setTopicos([]);
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
    }, []);

    return <>
        <div className="containerMenuPostagem">
            <a id="btnPostagens" className="linkSelecionado" onClick={handleTabClick}>Postagens</a>
            <a id="btnComunidade" onClick={handleTabClick}>Comunidade</a>
            <a id="btnCategorias" onClick={handleTabClick}>Categorias</a>
        </div>
        {posts &&
            <div className="conteudoMenuPostagem">
                {showPostagens && (posts.length > 0 ? <FeedPostagem postagens={posts} /> : <NotFound text="Esse usuário não tem postagens" />)}
                {showComunidade && (topicos.length > 0 ? <FeedPostagem postagens={topicos} /> : <NotFound text="Esse usuário não tem postagens na comunidade" />)}
                {showCategorias && <MenuCategorias />}
                
                {hasMorePosts && (showPostagens || showComunidade) && (
                <button type="button" id="btnMaisPosts" onClick={buscaPosts}>
                    <Typography fontFamily='poppins'>Mostrar mais postagens</Typography>
                </button>
                )}
            </div>
        }
        
    </>
}

export default MenuPostagem;