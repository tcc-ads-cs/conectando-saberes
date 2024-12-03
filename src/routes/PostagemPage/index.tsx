import { useParams } from "react-router-dom";
import Postagem from "../../components/Postagem";
import api from "../../api";
import { useEffect, useState } from "react";

const PostagemPage: React.FC = () => {
    const { guidPostagem } = useParams();
    const [postagem, setPostagem] = useState<any>(null);
    const req: string = '/Post/mostrar-post?guid=' + guidPostagem;
    // TODO: Se achar o postagem, mostra a página, se não mostra o erro (componentes com useState show)

    useEffect(() => {
        const renderPostagem = async () => {
            try {
                const response = await api.get(req);
                
                if (response.status === 200) {
                    setPostagem(response.data);
                }
            } catch (e: any) {
                return e.response.data?.message;
            }
        };
        renderPostagem();
    }, []);

    return <>
        <div>
            {/* TODO: Fazer a página e renderizar a postagem! */}
            {JSON.stringify(postagem)}
        </div>
    </>
}

export default PostagemPage;