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
import Loading from "../../components/Loading";
import './index.css';
import MenuComentarios from "../../components/MenuComentarios";

const PostagemPage: React.FC = () => {
    const { guidPostagem } = useParams();
    const [postagem, setPostagem] = useState<any>(null);
    const [isLoading, setIsLoading ] = useState(false);
    
    const renderPostagem = async () => {
        try {
            setIsLoading(true);
            let reqPostagem = await getRequest(`/Post/${guidPostagem}`);
            
            if (typeof reqPostagem !== 'object' || reqPostagem === null) {
                setIsLoading(false);
                setPostagem(<NotFound text="Post não encontrado." link=".." />)
            } else {
                setIsLoading(false);
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
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias utilizadas</Typography>
                    <MenuCategorias />
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a">
                {isLoading ? <Loading text='Carregando postagem'/> : postagem}
                {guidPostagem ? <MenuComentarios guid={guidPostagem} /> : <NotFound text='Erro ao renderizar comentários.'/> }
            </main>
        </div>
    </>
}

export default PostagemPage;