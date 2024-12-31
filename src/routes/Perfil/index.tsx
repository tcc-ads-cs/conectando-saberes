import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import InfoPerfil from "./components/InfoPerfil";
import MenuPostagem from "../../components/MenuPostagens";
import MenuCategorias from "../../components/MenuCategorias";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import './index.css';

//! Esse json deve ser obtido via requisição!!!
import * as perfil from '../../assets/mock.json';
let jsonPe = JSON.stringify(perfil);

import * as postagem from '../../assets/tags.json';
import { getRequest } from "../../hooks/useRequests";
import { useEffect, useState } from "react";
let jsonPo = JSON.stringify(postagem);

const Perfil: React.FC = () => {  
    const [ perfil, setPerfil ] = useState<any>(null);
    const [ posts, setPosts ] = useState<any>(null);
    const [ infoPerfil, setInfoPerfil ] = useState<any>(null);
    const { idPerfil } = useParams();
    
    const buscaPerfil = async () => {
            try {
                const response = await getRequest('/User/perfil/' + idPerfil);
    
                if (response?.status === 200 || !(typeof response === 'object' && 'status' in response)) {
                    setPerfil(response);
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
        <div className="grid-alt">
            <main className="grid-a containerInfoUsuario">
                <InfoPerfil obj={infoPerfil}/>
            </main>
            <aside className="grid-b padding-right">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias favoritas</Typography>
                    <MenuCategorias req={jsonPo}/>
                </section>
            </aside>
            <section className="grid-c padding-left">
                {/* Enviar lista de postagens + tópicos */}
                <MenuPostagem req={posts}/>
            </section>
        </div>
    </>
}

export default Perfil;