import { Typography } from "@mui/material";
import Postagem from "../../../../components/Postagem";
import MenuRecomendacoes from "../../../../components/MenuRecomendacoes";
import { SetStateAction, useEffect, useState } from "react";
import { getRequest } from "../../../../hooks/useRequests";

interface FeedPostagemProps {
    req: string | any;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnMaisPosts")?.addEventListener("click", () => {
        // Chamar a requisição da página atual + 1
        alert();
    });
})

const FeedPostagem: React.FC<FeedPostagemProps> = ({req}) => {
    const [posts, setPosts] = useState<any[]>([]);

    const buscaPosts = async (guidPosts: Array<string>) => {
        let arrayPosts: SetStateAction<any[]> = [];
        try {
            guidPosts.map(async (guid: string) => {
                let response = await getRequest('/Post/' + guid);
                if (response != null) {
                    arrayPosts.push(response);                
                }
            });
        } catch (error) {
            console.log(error);
        } finally {
            setPosts(arrayPosts);
        }
    };

    useEffect(() => { buscaPosts(req); }, [req]);


    //TODO: Fazer requisição para renderizar posts da página + incrementar a página.
    const renderPosts = async () => {
        alert('Requisição pra mais posts');
    }
    
    return <>
        {posts.map((p: any) => {
            return <Postagem key={p.post.guid} post={p} />
        })}
        <MenuRecomendacoes />
        <button type="button" id="btnMaisPosts" onClick={renderPosts}><Typography fontFamily='poppins'>Mostrar mais postagens</Typography></button>
    </>
}

export default FeedPostagem;