import Postagem from "../../../../components/Postagem";

interface FeedPerfilProps {
    req: string | any;
}

const FeedPerfil: React.FC<FeedPerfilProps> = ({req}) => {
    return <div>
        {req.map((r: any) => {
            return <Postagem key={r.guid} post={r} />
        })}
    </div>
}

export default FeedPerfil;