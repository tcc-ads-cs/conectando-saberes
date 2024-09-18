import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface BotaoProps {
    funcao: string
    placeholder: string
    id?: string
}

const Botao: React.FC<BotaoProps> = ({funcao, id, placeholder}) => {
    return <Link to={"/" + funcao} id={id}><Typography>{placeholder}</Typography></Link>
}

export default Botao;





