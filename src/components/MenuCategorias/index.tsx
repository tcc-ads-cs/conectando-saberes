import { useEffect, useState } from 'react';
import { getRequest } from '../../hooks/useRequests';
import Categoria from './components/Categoria';
import './index.css';
import NotFound from '../NotFound';
import { useParams } from 'react-router-dom';

const MenuCategorias: React.FC = () => {
    const [ categorias, setCategorias ] = useState<JSX.Element | JSX.Element[]>([]);
    const { idPerfil } = useParams();

    let getCategoriasRecentes = async () => {
        let idUser = idPerfil != undefined ? idPerfil : localStorage.getItem('idUsuario');
        
        try {
            let response = await getRequest(`/Category/recentes/${idUser}`);

            if (response.length === 0) {
                setCategorias(<NotFound text='Este usuário ainda não fez nenhuma postagem.'/>);
            } else {
                setCategorias(response.map((c: any) => {
                    return <Categoria key={c.id} idCategoria={c.description} nmCategoria={c.description} qtTag={c.quantity} />
                }));
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCategoriasRecentes();
    }, [])

    return <>
        {categorias}
    </>
}

export default MenuCategorias;