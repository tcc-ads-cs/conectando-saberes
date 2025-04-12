import { FileOpen } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getCategorias } from "../functions/getCategorias";


interface ItemBuscaProps {
    tipo: string,
    infos: any
}

const ItemBusca: React.FC<ItemBuscaProps>= ({infos, tipo}) => {
    switch (tipo) {
        case "perfil": 
            return <>
                <div className="containerRecomendacao">
                    <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" />
                    <div className='conteudoRecomendacao'>
                        <Link to={'/perfil/' + infos.id} className="link"><Typography fontFamily={'poppins'}  fontSize={24} fontWeight={300}>{infos.nome}</Typography></Link>
                    </div>
                </div>
            </>
        case "postagem": 
            return <>
                <div className="containerRecomendacao">
                    <FileOpen className="iconPostagem"/>
                    <div className="conteudoRecomendacao">
                        <Link to={'/postagem/' + infos.post.guid} className="link">
                            <Typography fontFamily={'poppins'} className="nomeRecomendacao" fontSize={24}>
                                {infos.post.dcTitulo}
                            </Typography>
                        </Link>
                        {infos.categories.map((c: any) => {
                            return getCategorias(c);
                        })}
                        <Link to={'/perfil/' + infos.id} className="link">
                            <Typography fontFamily={'poppins'} className="bold">
                                por {infos.user.nmSocial}
                            </Typography>
                        </Link>
                        <Typography fontFamily='poppins' className="obsForm">
                            {infos.post.quantityLikes} curtidas
                        </Typography>
                    </div>
                </div>
            </>
    }
}

export default ItemBusca;