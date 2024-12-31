import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getRequest } from '../../hooks/useRequests';
import { useEffect, useState } from 'react';

// @param idTag -> Recebe uma lista de categorias e as renderiza a medida que ache sua correspondência no banco de dados 
export const getCategorias = (idTag: any) => {
    const [ categorias, setCategorias ] = useState<any>(null);
    const listaCategorias = async () => {
        try {
            let response = await getRequest('/Category/listar-categorias');
            if (response != null) {
                setCategorias(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { listaCategorias(); }, []);

    if (categorias != null) {
        for (let i = 0; i < categorias.length; i++) {
            if (idTag == categorias[i].id) {
                return <Link to={'/pesquisa/' + categorias[i].id} key={categorias[i].id} className="categoria"><Typography fontFamily={'poppins'} fontWeight={'500'}>#{categorias[i].description}</Typography></Link>
            }
        }
    }
}