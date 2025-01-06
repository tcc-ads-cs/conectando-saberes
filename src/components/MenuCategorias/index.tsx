import Categoria from './components/Categoria';
import './index.css';

interface MenuCategoriasProps {
    req: string
}

const MenuCategorias: React.FC<MenuCategoriasProps> = ({req}) => {
    let obj = JSON.parse(req).categorias;
    
    //TODO: Transformar as categorias vindas da requsição (Ronald está fazendo ainda)
    return <>
        {
            obj.map((e: any) => {
                return <Categoria key={e.id} idCategoria={e.id} nmCategoria={e.dcCategoria} qtTag={e.qtdeTagCategoria} />
            })
        }
    </>
}

export default MenuCategorias;