import { useState } from 'react';
import FeedPostagem from "../../routes/Perfil/components/FeedPostagem";
import MenuCategorias from '../MenuCategorias';
import { togglePostagem, toggleComunidade, toggleCategoria } from '../functions/toggleBtnClassse';
import './index.css';

//TODO: Atualizar para requisição do banco de dados.
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

    let postagensComunidade: any = [];
    let postagens: any = [];

    //TODO: Alterar quando o Ronald atualizar o endpoint com as categorias
    // if (req != null) {
    //     req.forEach((p: { type: number; guid: string }) => { p.type == 3 ? postagensComunidade.push(p.guid) : postagens.push(p.guid); });
    // }

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