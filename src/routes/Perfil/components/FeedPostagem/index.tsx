import { Typography } from "@mui/material";
import Postagem from "../../../../components/Postagem";
import api from "../../../../api";
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
    
    let urldasPostagensViaParametro = "mostrar-posts/" + req;
    
    const renderPosts = async () => {
        try {
            let response = await api.get(urldasPostagensViaParametro);
            if (response.status == 200) {
                req = response.data;
            }
             else {
                return <Typography>Não foi possível carregar o Feed. Recarregue a página.</Typography>
            }
        } catch (e) {
            console.log(e);
        }
    }

    return <>
        {req.map((r: any) => {
            return <Postagem key={r.guid} post={r} />
        })}
        <MenuRecomendacoes />
        <button type="button" id="btnMMP"><Typography fontFamily='poppins'>Mostrar mais postagens</Typography></button>
    </>
}

export default FeedPostagem;