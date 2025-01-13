import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BtnInteracao from "../../../Postagem/components/BtnInteracao";
import formatarData from "../../../Postagem/functions/formataData";

interface ComentarioProps {
    comment: any,
    guid: string
};

const Comentario: React.FC<ComentarioProps> = ({comment, guid}) => {
    return <>
        <div id={comment.comment.id} className="commentContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" />
            <div className="commentInfo">
                <Link to={`/perfil/${comment.user.userId}`}><Typography fontFamily={'poppins'}>{comment.user.name}</Typography></Link>
                <Typography fontFamily={'poppins'}>{comment.comment.text}</Typography>
                <Typography fontFamily={'poppins'} className='obsForm'>{formatarData(comment.comment.lastUpdatedAt)}</Typography>
            </div>
            {comment.comment.userId == localStorage.getItem('idUsuario') ? <BtnInteracao tipo="deletarComentario" guid={guid} idComentario={comment.comment.id} /> : <></>}
        </div>
    </>
}

export default Comentario;