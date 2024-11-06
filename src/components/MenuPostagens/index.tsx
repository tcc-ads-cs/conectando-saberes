import { useState } from 'react';
import FeedPerfil from "../../routes/Perfil/components/FeedPerfil";
import MenuCategorias from '../MenuCategorias';
import './index.css';

interface MenuPostagemProps {
    req: string | any;
}

import * as categorias from '../../assets/tags.json';
let jsonCat = JSON.stringify(categorias);

const MenuPostagem: React.FC<MenuPostagemProps> = ({req}) => {
    const [showPostagens, setShowPostagens] = useState(true);
    const [showComunidade, setShowComunidade] = useState(false);
    const [showCategorias, setShowCategorias] = useState(false);
    
    //TODO: Transformar a estilização dos botões em funções
    let btnA = document.getElementById('btnPostagens');
    let btnCo = document.getElementById('btnComunidade');
    let btnCa = document.getElementById('btnCategorias');

    const btnPostagens = () => {
        if (!(btnA?.classList.contains('linkSelecionado'))) { btnA?.classList.add('linkSelecionado'); };
        if (btnCo?.classList.contains('linkSelecionado')) { btnCo?.classList.remove('linkSelecionado'); };
        if (btnCa?.classList.contains('linkSelecionado')) { btnCa?.classList.remove('linkSelecionado'); };

        setShowPostagens(true);
        setShowComunidade(false);
        setShowCategorias(false);        
    };

    const btnComunidade = () => {
        if (btnA?.classList.contains('linkSelecionado')) { btnA?.classList.remove('linkSelecionado'); };
        if (!(btnCo?.classList.contains('linkSelecionado'))) { btnCo?.classList.add('linkSelecionado'); };
        if (btnCa?.classList.contains('linkSelecionado')) { btnCa?.classList.remove('linkSelecionado'); };
        
        setShowPostagens(false);
        setShowComunidade(true);
        setShowCategorias(false);
    };

    const btnCategorias = () => {
        if (btnA?.classList.contains('linkSelecionado')) { btnA?.classList.remove('linkSelecionado'); };
        if (btnCo?.classList.contains('linkSelecionado')) { btnCo?.classList.remove('linkSelecionado'); };
        if (!(btnCa?.classList.contains('linkSelecionado'))) { btnCa?.classList.add('linkSelecionado'); };
        
        setShowPostagens(false);
        setShowComunidade(false);
        setShowCategorias(true);
    };

    //Lógica para separar o tipo de lista a ser exibida! (transformar em função?)
    let json = JSON.parse(req);
    let posts = json.posts;
    let postagensComunidade: any = [];
    let postagens: any = [];

    posts.forEach((p: { type: number; }) => {
        if (p.type == 1) {
            postagensComunidade.push(p);
        } else {
            postagens.push(p);
        }
    });

    //TODO: Fazer a lógica para renderizar a lista de 8 em 8 postagens e depois, refazer a requisição.
    return <>
        <div className="containerMenuPostagem">
            <a id="btnPostagens" className="linkSelecionado" onClick={btnPostagens}>Postagens</a>
            <a id="btnComunidade" onClick={btnComunidade}>Comunidade</a>
            <a id="btnCategorias" onClick={btnCategorias}>Categorias</a>
        </div>
        <div className="conteudoMenuPostagem">
            {showPostagens && <FeedPerfil req={postagens} />}
            {showComunidade && <FeedPerfil req={postagensComunidade} />}
            {showCategorias && <MenuCategorias req={jsonCat} />}
        </div>
        
    </>
}

export default MenuPostagem;