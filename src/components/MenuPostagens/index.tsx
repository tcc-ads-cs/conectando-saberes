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

    let json = JSON.parse(req);
    let posts = json.posts;

    return <>
        <div id="menu">
            <a onClick={btnArtigo}>Artigo</a>
            <a onClick={btnComunidade}>Comunidade</a>
        </div>

        {showArtigo && <FeedPerfil req={posts} />}
        {showComunidade && <FeedPerfil req={posts} />}

    </>
}

export default MenuPostagem;