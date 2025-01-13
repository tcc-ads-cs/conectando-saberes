import { useState } from "react";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { postRequest, deleteRequest } from "../../../../hooks/useRequests";
import { Link, useNavigate } from "react-router-dom";
import './index.css';

interface BtnInteracaoProps {
    guid: string,
    tipo: string,
    qtInteracao?: number | string;
}

const BtnInteracao: React.FC<BtnInteracaoProps> = ({guid, tipo, qtInteracao}) => {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const curtirPostagem = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        button.classList.toggle('iconClicado');
        setLiked(!liked);

        liked ? alert('Curtida retirada.') : alert('Curtida adicionada.');

        if (!liked) {
            try {
                await postRequest(`/Post/like/${guid}`, '', {
                    'token': localStorage.getItem('token') || ''
                });
            } catch (error) {
                console.error('Erro ao curtir a postagem:', error);
            }
        }
    }

    const excluirPostagem = async () => {
        try {
            let response = await deleteRequest(`/Post/delete/${guid}`, { 
                "token": localStorage.getItem('token') || ''
            });

            response.status == 200 ? navigate('..') : console.log(response);

            console.log(response);
        } catch (error) {
            console.error('Erro ao deletar a postagem:', error);
        } finally {
            
        }
    };
    
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
        case "deletar":
            return <>
                <div className="btnInteracao">
                    <button datatype={tipo} type="button" onClick={excluirPostagem} id={"btnDel-" + guid} className="iconInteracao" style={{marginLeft: '1.5em'}}><DeleteIcon /></button>
                </div>
            </>
    }
}

export default BtnInteracao;