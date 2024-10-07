import { Typography } from "@mui/material";

interface BtnInteracaoProps {
    tipo: string
}

// Requisição para pegar o número de curtidas, comentários, etc

const BtnInteracao: React.FC<BtnInteracaoProps> = ({tipo}) => {
    switch (tipo) {
        case "curtida":
            return <>
                <div id="btnCurtir">
                    <Typography>Curtir</Typography>
                    {/* Icon */}
                    <Typography>454</Typography>
                </div>
            </>
        case "comentario":
            return <>
                <div id="btnComentar">
                    <Typography>Comentar</Typography>
                    {/* Icon */}
                    <Typography>454</Typography>
                </div>
            </>
    }
}

export default BtnInteracao;