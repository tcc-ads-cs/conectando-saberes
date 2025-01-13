import { PersonAdd, WebStories } from "@mui/icons-material";
import Recomendacao from "../../components/MenuRecomendacoes/components/Recomendacao";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRequest } from "../../hooks/useRequests";
import './index.css';

const MenuRecomendacoes: React.FC = () => {
    const [ perfis, setPerfis ] = useState<any[]>([]);
    const [ categorias, setCategorias ] = useState<any[]>([]);
    
    const getRecPerfil = async () => {
        try {
            let response = await getRequest('/Category/feed-users', {
                token: localStorage.getItem('token') || ''
            });
            setPerfis(response);
        } catch (e) {
            console.log(e);
        }
    }

    const getRecCategorias = async () => {
        try {
            let response = await getRequest('/Category/feed-categories', {
                token: localStorage.getItem('token') || ''
            });
            setCategorias(response);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRecPerfil();
        getRecCategorias();
    }, [])

    return <>
    <div className="containerMenuRecomendacoes">
        <div className="headerRecomendacao">
            <PersonAdd />
            <Typography fontFamily={'poppins'} variant={'h3'}>Perfis para você</Typography>
        </div>
        {perfis && perfis.map((r: any) => <Recomendacao key={r.id} tipo="perfil" req={r} />)}
    </div>
    <div className="containerMenuRecomendacoes">
        <div className="headerRecomendacao">
            <WebStories />
            <Typography fontFamily={'poppins'} variant={'h3'}>Categorias para você</Typography>
        </div>
        <Recomendacao tipo="categoria" req={categorias} />
    </div>
    </>
}

export default MenuRecomendacoes;