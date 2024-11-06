import { Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

import './index.css';

interface BtnInteracaoProps {
    tipo: string,
    qtInteracao: number
}

function clicar() {
    let btnA = document.getElementsByClassName("iconInteracao");
    console.log(btnA);
}

const BtnInteracao: React.FC<BtnInteracaoProps> = ({tipo, qtInteracao}) => {
    switch (tipo) {
        case "curtida":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Curtir</Typography>
                    <button onClick={clicar} className="iconInteracao"><FavoriteBorderIcon /></button>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
        case "comentario":
            return <>
                <div className="btnInteracao">
                    <Typography fontFamily={'poppins'}>Comentar</Typography>
                    <button onClick={clicar} className="iconInteracao"><CommentOutlinedIcon /></button>
                    <Typography fontFamily={'poppins'}>{qtInteracao}</Typography>
                </div>
            </>
    }
}

export default BtnInteracao;