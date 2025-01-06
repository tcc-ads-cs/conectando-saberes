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
let mockCategorias = JSON.stringify(postagem);

export let perfilUsuario: any;

const Perfil: React.FC = () => {  
    const [ perfil, setPerfil ] = useState<any>(null);
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
                    setLoading(false);
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
            setInfoPerfil(infoUser);
        }
        tipoFeed();
    }, [perfil]);

    const tipoFeed = (): string => {
        let feed = "default";
        if (localStorage.getItem('idUsuario') == idPerfil)  {
            feed = "meuPerfil";
        } else if (localStorage.getItem('idUsuario') != idPerfil)
        {
            feed = "perfil";
        }
        return feed;
    }

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
                    <MenuCategorias req={mockCategorias}/>
                </section>
            </aside>
            {infoPerfil && (
                <section className="grid-c padding-left">
                    <MenuPostagem type={tipoFeed()} user={infoPerfil} />
                </section>
            )}
        </div>
        : isLoading ? <Loading text="Carregando perfil"/> : <NotFound text="Perfil não encontrado." link='/' /> 
        }
    </>
}

export default Perfil;