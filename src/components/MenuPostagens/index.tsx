import { useState } from 'react';
import FeedPostagem from "../../routes/Perfil/components/FeedPostagem";
import MenuCategorias from '../MenuCategorias';
import { togglePostagem, toggleComunidade, toggleCategoria } from '../functions/toggleBtnClassse';
import './index.css';

import * as categorias from '../../assets/tags.json';
let jsonCat = JSON.stringify(categorias);

interface MenuPostagemProps {
    req: string | any;
}

// Verifica qual o tipo de feed + qual o usuário e envia o usuário para o feed requisitar o feed

const MenuPostagem: React.FC<MenuPostagemProps> = ({req}) => {
    const [showPostagens, setShowPostagens] = useState(true);
    const [showComunidade, setShowComunidade] = useState(false);
    const [showCategorias, setShowCategorias] = useState(false);

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

    let json = JSON.parse(req);
    let posts = json.posts;
    let postagensComunidade: any = [];
    let postagens: any = [];

    posts.forEach((p: { type: number; }) => { p.type == 3 ? postagensComunidade.push(p) : postagens.push(p); });

    return <>
        <div className="containerMenuPostagem">
            <a id="btnPostagens" className="linkSelecionado" onClick={btnPostagens}>Postagens</a>
            <a id="btnComunidade" onClick={btnComunidade}>Comunidade</a>
            <a id="btnCategorias" onClick={btnCategorias}>Categorias</a>
        </div>
        <div className="conteudoMenuPostagem">
            {showPostagens && <FeedPostagem req={postagens} />}
            {showComunidade && <FeedPostagem req={postagensComunidade} />}
            {showCategorias && <MenuCategorias req={jsonCat} />}
        </div>
        
    </>
}

export default MenuPostagem;