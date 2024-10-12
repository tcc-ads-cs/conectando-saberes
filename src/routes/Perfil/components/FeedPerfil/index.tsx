import Postagem from "../../../../components/Postagem";

interface FeedPerfilProps {
    req: string | any;
}

const FeedPerfil: React.FC<FeedPerfilProps> = ({req}) => {

    // Algoritmo para colocar os posts numa lista de comunidade ou artigo
    let artigos = [];
    let comunidade = [];
    for (var i=0; i < req.length; i++) {
        if (req[i].type == 0) {
            artigos.push(req[i])
        } else { comunidade.push(req[i]) }
    }

    //TODO: preciso de um identificador do banco sobre o tipo de feed no qual vai a postagem (artigos ou comunidade)
    let ident = 0;

    switch(ident) {
        case 0:
            return <div>
                {artigos.map((r: any) => {
                    return <Postagem key={r.guid} post={r} />
                })}
            </div>
        case 1:
            {comunidade.map((r: any) => {
                return <Postagem key={r.guid} post={r} />
            })}
    }
}

export default FeedPerfil;