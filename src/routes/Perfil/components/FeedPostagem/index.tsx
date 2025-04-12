import MenuRecomendacoes from "../../../../components/MenuRecomendacoes";
import Postagem from "../../../../components/Postagem";

interface FeedPostagemProps {
    postagens: Array<any>,

}

const FeedPostagem: React.FC<FeedPostagemProps> = ({ postagens }) => {
    return <>
        {postagens.map((p: any) => {
            return <Postagem key={p.post.guid} post={p} />
        })}
        <MenuRecomendacoes />
    </>
}

export default FeedPostagem;