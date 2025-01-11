import MenuRecomendacoes from "../../../../components/MenuRecomendacoes";
import Postagem from "../../../../components/Postagem";

interface FeedPostagemProps {
    postagens: Array<any>,

}

const FeedPostagem: React.FC<FeedPostagemProps> = ({ postagens }) => {
    const sortedPostagens = postagens.sort((a, b) => new Date(b.post.postDate).getTime() - new Date(a.post.postDate).getTime());

    return <>
        {sortedPostagens.map((p: any) => {
            return <Postagem key={p.post.guid} post={p} />
        })}
        <MenuRecomendacoes />
    </>
}

export default FeedPostagem;