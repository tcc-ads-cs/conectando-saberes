import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import './index.css';

interface CategoriaProps {
    idCategoria: string,
    nmCategoria: string,
    qtTag: number
}

const Categoria: React.FC<CategoriaProps> = ({idCategoria, nmCategoria, qtTag}) => {
    return <>
        <Link to={"/pesquisa/" + idCategoria} className='categoriaLinkContainer'>
            <div className="iconCategoriaContainer"><FavoriteIcon className='iconCategoria'/></div>
            <div className="infosCategoria">
            <Typography className="tituloCategoria" fontFamily={'poppins'}>#{nmCategoria}</Typography>
            <Typography className="qtdeCategoria" fontFamily={'poppins'} fontWeight={500}>{qtTag} postagens</Typography>
            </div>
        </Link>
    </>
}

export default Categoria;