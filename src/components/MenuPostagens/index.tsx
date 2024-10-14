import { useState } from 'react';
import FeedPerfil from "../../routes/Perfil/components/FeedPerfil";

interface MenuPostagemProps {
    req: string | any;
}

const MenuPostagem: React.FC<MenuPostagemProps> = ({req}) => {
    //Lógica dos botões
    const [showArtigo, setShowArtigo] = useState(true);
    const [showComunidade, setShowComunidade] = useState(false);

    const btnArtigo = () => {
        setShowArtigo(true);
        setShowComunidade(false);
    };

    const btnComunidade = () => {
        setShowArtigo(false);
        setShowComunidade(true);
    };

    //Lógica para separar o tipo de lista a ser exibida!
    let json = JSON.parse(req);
    let posts = json.posts;
    let postagensComunidade: any = [];
    let postagens: any = [];

    posts.forEach((p: { type: number; }) => {
        if (p.type == 0) {
            postagensComunidade.push(p);
        } else {
            postagens.push(p)
        }
    });

    //TODO: Fazer a lógica para renderizar a lista de 8 em 8 postagens e depois, refazer a requisição.
    return <>
        <div id="menu">
            <a onClick={btnArtigo}>Artigo</a>
            <a onClick={btnComunidade}>Comunidade</a>
        </div>

        {showArtigo && <FeedPerfil req={postagens} />}
        {showComunidade && <FeedPerfil req={postagensComunidade} />}

    </>
}

export default MenuPostagem;