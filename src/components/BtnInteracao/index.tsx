import { Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

import './index.css';

interface BtnInteracaoProps {
    guid: string,
    tipo: string,
    qtInteracao: number
}

const BtnInteracao: React.FC<BtnInteracaoProps> = ({guid, tipo, qtInteracao}) => {
    let btns = document.querySelectorAll('button');
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("iconClicado");
        });
    });
    
    switch (tipo) {
        case "curtida":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Curtir</Typography>
                    <button type="button" id={"btnCur-" + guid} className="iconInteracao"><FavoriteBorderIcon /></button>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
        case "comentario":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Comentar</Typography>
                    <button type="button" id={"btnCom-" + guid} className="iconInteracao"><CommentOutlinedIcon /></button>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
    }
}

export default BtnInteracao;