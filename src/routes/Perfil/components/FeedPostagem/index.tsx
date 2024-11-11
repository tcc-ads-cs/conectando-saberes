import Postagem from "../../../../components/Postagem";

interface FeedPostagemProps {
    req: string | any;
}

const FeedPostagem: React.FC<FeedPostagemProps> = ({req}) => {
    return <>
        {req.map((r: any) => {
            return <Postagem key={r.guid} post={r} />
        })}
    </>
}

export default FeedPostagem;