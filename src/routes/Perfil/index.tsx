import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import InfoPerfil from "./components/InfoPerfil";
import MenuPostagem from "../../components/MenuPostagens";
import MenuCategorias from "../../components/MenuCategorias";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import { getRequest } from "../../hooks/useRequests";
import './index.css';

import * as postagem from '../../assets/tags.json';
let jsonPo = JSON.stringify(postagem);

export let perfilUsuario: any;

const Perfil: React.FC = () => {  
    const [ perfil, setPerfil ] = useState<any>(null);
    const [ posts, setPosts ] = useState<any>(null);
    const [ infoPerfil, setInfoPerfil ] = useState<any>(null);
    const [ isLoading, setLoading ] = useState<boolean>(true);
    const { idPerfil } = useParams();
    
    const buscaPerfil = async () => {
            try {
                const response = await getRequest('/User/perfil/' + idPerfil);
                setLoading(true);
    
                if (response?.status === 200 || !(typeof response === 'object' && 'status' in response)) {
                    setLoading(false);
                    setPerfil(response);
                    perfilUsuario = response;
                } else {
                    console.log('Resposta não OK:', response);
                }
            } catch (e: any) {
                console.log('Erro na requisição:', e.response.data?.message);
            }
        };
    
    useEffect(() => { 
        buscaPerfil();
    }, [idPerfil]);

    useEffect(() => {
        if (perfil != null) {
            const { posts: postagensUser, ...infoUser } = perfil;
            setPosts(postagensUser);
            setInfoPerfil(infoUser);
        }
    }, [perfil]);

    return <>
        <Navbar />
        {
            perfil ? 
            <div className="grid-alt">
            <main className="grid-a containerInfoUsuario">
                {
                    isLoading ? <Loading text="Aguardando informações do perfil..." /> : <InfoPerfil obj={infoPerfil}/>
                }
            </main>
            <aside className="grid-b padding-right">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias utilizadas</Typography>
                    
                    {/* TODO: Requisição das últimas categorias utilizadas em posts. */}
                    <MenuCategorias req={jsonPo}/>
                </section>
            </aside>
            <section className="grid-c padding-left">
                {/* Enviar lista de postagens + tópicos */}
                <MenuPostagem type='meuPerfil' />
            </section>
        </div>
        : <NotFound text="Perfil não encontrado." link='/' />
        }
    </>
}

export default Perfil;