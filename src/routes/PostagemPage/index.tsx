import api from "../../api";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MenuPrincipal from "../../components/MenuPrincipal";
import Postagem from "../../components/Postagem";
import MenuCategorias from "../../components/MenuCategorias";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import './index.css';

//TODO: Substituir para a requisição.
import * as jsonPostagem from '../../assets/mock.json';
let jp = jsonPostagem.posts[0];

const PostagemPage: React.FC = () => {
    const { guidPostagem } = useParams();
    const [postagem, setPostagem] = useState<any>(null);
    const req: string = '/Post/mostrar-post?guid=' + 'f897d72a1165463d8c54c118fbd6370e'; // Voltar para guidPostagem

    useEffect(() => {
        const renderPostagem = async () => {
            try {
                const response = await api.get(req);
                
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
                    {/* <MenuCategorias req={''}/> */}
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a post">
                {postagem}
                <Postagem post={jp} />
            </main>
        </div>
    </>
}

export default PostagemPage;