import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { getRequest } from "../../hooks/useRequests";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MenuPrincipal from "../../components/MenuPrincipal";
import Postagem from "../../components/Postagem";
import MenuCategorias from "../../components/MenuCategorias";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import NotFound from "../../components/NotFound";
import './index.css';

//TODO: Atualizar para requisição do banco de dados.
import * as categorias from '../../assets/tags.json';
let jsonCat = JSON.stringify(categorias);

const PostagemPage: React.FC = () => {
    const { guidPostagem } = useParams();
    const [postagem, setPostagem] = useState<any>(null);
    
    const renderPostagem = async () => {
        try {
            let reqPostagem = await getRequest(`/Post/${guidPostagem}`);
            
            if (!Array.isArray(reqPostagem)) {
                setPostagem(<NotFound text="Post não encontrado." link="/" />)
            } else {
                setPostagem(<Postagem post={reqPostagem}/>);
            }
        } catch (e: any) {
            setPostagem(e.reqPostagem.data?.message);
        }
    };

    useEffect(() => {
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
            <main className="grid-a">
                {postagem}
            </main>
        </div>
    </>
}

export default PostagemPage;