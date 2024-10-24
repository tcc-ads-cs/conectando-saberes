import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import * as categorias from '../../assets/tags.json';
let obj = JSON.parse(JSON.stringify(categorias)).categorias;

export const getCategorias = (idTag: any) => {
    for (let i = 0; i < obj.length; i++) {
        if (idTag == obj[i].id) {
            return <Link to={'/pesquisa/' + obj[i].id} className="categoria"><Typography key={obj[i].id} fontFamily={'source-serif-4'} fontWeight={'bold'}>#{obj[i].dcCategoria}</Typography></Link>
        }
    }
}