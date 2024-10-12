import { Typography } from "@mui/material";

interface BtnInteracaoProps {
    tipo: string,
    curtidas?: string,
    comentarios?: string
}

// Requisição para pegar o número de curtidas, comentários, etc

const BtnInteracao: React.FC<BtnInteracaoProps> = ({tipo, comentarios, curtidas}) => {
    switch (tipo) {
        case "curtida":
            return <>
                <div id="btnCurtir">
                    <Typography>Curtir</Typography>
                    {/* Icon */}
                    <Typography>{curtidas}</Typography>
                </div>
            </>
        case "comentario":
            return <>
                <div id="btnComentar">
                    <Typography>Comentar</Typography>
                    {/* Icon */}
                    <Typography>{comentarios}</Typography>
                </div>
            </>
    }
}

export default BtnInteracao;