import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//TODO: Atualizar para requisição do banco de dados
import * as categorias from '../../assets/tags.json';
let obj = JSON.parse(JSON.stringify(categorias)).categorias;

// @param idTag -> Recebe uma lista de categorias e as renderiza a medida que ache sua correspondência no banco de dados 
export const getCategorias = (idTag: any) => {
    for (let i = 0; i < obj.length; i++) {
        if (idTag == obj[i].id) {
            return <Link to={'/pesquisa/' + obj[i].id} key={obj[i].id} className="categoria"><Typography fontFamily={'poppins'} fontWeight={'500'}>#{obj[i].dcCategoria}</Typography></Link>
        }
    }
}