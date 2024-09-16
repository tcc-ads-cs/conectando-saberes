import { Typography } from "@mui/material";

interface CampoProps { tipo: string }

const Campo: React.FC<CampoProps> = ({tipo}) => {
    switch (tipo) {
        case "email":
            return <>
                <Typography>E-mail</Typography>
                <input
                required
                placeholder="seunome@ifsp.edu.br" />
            </>
        case "senha":
            return <>
                <Typography>Senha</Typography>
                <input
                required
                placeholder="********" />
            </>
    }
}

export default Campo;