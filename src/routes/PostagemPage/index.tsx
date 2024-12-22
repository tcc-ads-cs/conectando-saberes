import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { getRequest } from "../../hooks/useRequests";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MenuPrincipal from "../../components/MenuPrincipal";
import Postagem from "../../components/Postagem";
import MenuCategorias from "../../components/MenuCategorias";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import './index.css';

//TODO: Atualizar para requisição do banco de dados.
import * as categorias from '../../assets/tags.json';
let jsonCat = JSON.stringify(categorias);

const PostagemPage: React.FC = () => {
    const { guidPostagem } = useParams();
    const [postagem, setPostagem] = useState<any>(null);
    const req: string = '/Post/mostrar-post?guid=' + guidPostagem;
    
    useEffect(() => {
        const renderPostagem = async () => {
            try {
                const response = await getRequest(req);
                
                if (response.status === 200) {
                    setPostagem(<Postagem post={response.data}/>);
                    console.log(response.data);
                }
            } catch (e: any) {
                setPostagem(e.response.data?.message);
            }
        };
        renderPostagem();
    }, []);

    return <>
        <Navbar />
        <div className="grid">
            <aside className="grid-b">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias favoritas</Typography>
                    <MenuCategorias req={jsonCat}/>
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a post">
                {postagem}
            </main>
        </div>
    </>
}

export default PostagemPage;