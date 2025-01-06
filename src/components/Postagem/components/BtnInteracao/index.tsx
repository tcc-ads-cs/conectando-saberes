import { useState } from "react";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { postRequest } from "../../../../hooks/useRequests";
import { Link } from "react-router-dom";
import './index.css';

interface BtnInteracaoProps {
    guid: string,
    tipo: string,
    qtInteracao: number | string;
}

const BtnInteracao: React.FC<BtnInteracaoProps> = ({guid, tipo, qtInteracao}) => {
    const [liked, setLiked] = useState(false);

    const curtirPostagem = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        button.classList.toggle('iconClicado');
        setLiked(!liked);

        try {
            await postRequest(`/Post/like/${guid}`, '', {
                'token': localStorage.getItem('token') || ''
            });
        } catch (error) {
            console.error('Erro ao curtir a postagem:', error);
        }
    }
    
    switch (tipo) {
        case "curtida":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Curtir</Typography>
                    <button datatype={tipo} type="button" onClick={curtirPostagem} id={"btnCur-" + guid} className="iconInteracao">{ liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</button>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
        case "comentario":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Comentar</Typography>
                    <Link to={"/postagem/" + guid} datatype={tipo} type="button" id={"btnCom-" + guid} className="iconInteracao"><CommentOutlinedIcon /></Link>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
    }
}

export default BtnInteracao;