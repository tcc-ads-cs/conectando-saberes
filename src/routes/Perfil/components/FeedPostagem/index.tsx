import { Typography } from "@mui/material";
import Postagem from "../../../../components/Postagem";
import MenuRecomendacoes from "../../../../components/MenuRecomendacoes";

interface FeedPostagemProps {
    req: string | any;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnMMP")?.addEventListener("click", () => {
        // Chamar a requisição da página atual + 1
        alert();
    });
})

const FeedPostagem: React.FC<FeedPostagemProps> = ({req}) => {
    //TODO: Fazer requisição para renderizar posts da página + incrementar a página.
    const renderPosts = async () => {
        alert('Requisição pra mais posts');
    }

    return <>
        {req.map((r: any) => {
            return <Postagem key={r.guid} post={r} />
        })}
        <MenuRecomendacoes />
        <button type="button" id="btnMMP" onClick={renderPosts}><Typography fontFamily='poppins'>Mostrar mais postagens</Typography></button>
    </>
}

export default FeedPostagem;