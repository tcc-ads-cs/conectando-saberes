import { Typography } from "@mui/material";
import MenuRecomendacoes from "../../../../components/MenuRecomendacoes";
import Postagem from "../../../../components/Postagem";

interface FeedPostagemProps {
    postagens: Array<any>,
    maisPosts: boolean
}

const FeedPostagem: React.FC<FeedPostagemProps> = ({ maisPosts, postagens }) => {
    return <>
        {postagens.map((p: any) => {
            return <Postagem key={p.guid} post={p} />
        })}
        <MenuRecomendacoes />
        {
            maisPosts && <button type="button" id="btnMaisPosts" onClick={() => alert('oi')}>
            <Typography fontFamily='poppins'>Mostrar mais postagens</Typography>
            </button>
        }
    </>
}

export default FeedPostagem;