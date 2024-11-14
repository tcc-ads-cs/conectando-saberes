import { Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import './index.css';
import { Link } from "react-router-dom";

interface BtnInteracaoProps {
    guid: string,
    tipo: string,
    qtInteracao: string
}

document.addEventListener('DOMContentLoaded', function() {
    let btns = document.querySelectorAll('[datatype="curtida"]');
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let curtiu = false;
            
            btn.innerHTML = "<svg class=\"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root\" focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"FavoriteIcon\"><path d=\"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z\"></path></svg>";
            btn.classList.toggle("iconClicado");
            
            curtiu = !curtiu;
            
            //TODO: 9 - Requisição para adicionar ou retirar curtida.
        });
    });
});

const BtnInteracao: React.FC<BtnInteracaoProps> = ({guid, tipo, qtInteracao}) => {
    switch (tipo) {
        case "curtida":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Curtir</Typography>
                    <button datatype={tipo} type="button" id={"btnCur-" + guid} className="iconInteracao"><FavoriteBorderIcon /></button>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
        case "comentario":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Comentar</Typography>
                    <Link to={"postagem/" + guid} datatype={tipo} type="button" id={"btnCom-" + guid} className="iconInteracao"><CommentOutlinedIcon /></Link>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
    }
}

export default BtnInteracao;