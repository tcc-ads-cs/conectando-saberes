import { FormEvent, useEffect, useState } from "react";
import { getRequest, postRequest } from "../../hooks/useRequests";
import Comentario from "./components/Comentario";
import { Typography } from "@mui/material";
import './index.css';
import NotFound from "../NotFound";

interface MenuComentariosProps {
    guid: string,
}

const MenuComentarios: React.FC<MenuComentariosProps> = ({guid}) => {
    const [ comentarios, setComentarios ] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        idUser: localStorage.getItem('idUsuario'),
        textComment: ""
    });

    const getComentarios = async () => {
        try {
            let response = await getRequest(`/Comment/${guid}`);
            console.log(response);
            setComentarios(response);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const data = new FormData();
        for (const key in formData) {
            data.append(key, (formData as any)[key]);
        }

        try {
            await postRequest('/Comment', JSON.stringify({
                "id": 0,
                "userId": data.get('idUser'),
                "postGUID": guid,
                "text": data.get('textComment'),
                "createdAt": new Date().toISOString(),
                "lastUpdatedAt": new Date().toISOString()
            }), {
                token: localStorage.getItem('token') || ''
            });

            document.location.reload();
        } catch (e) {
             console.log(e)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    useEffect(() => {
        getComentarios();
    }, [])
    
    return <>
    <div className="secaoComment">
        <Typography fontFamily={'poppins'} variant='h3'>Comentários</Typography>
        {comentarios.length != 0 ? comentarios.map((c: any) => {return <Comentario key={c.comment.id} comment={c} guid={c.comment.postGUID} />}) : <NotFound text='Essa postagem não tem comentários.'/>}
        <div className="containerInputComentario">
            <form onSubmit={handleSubmit}>
                <Typography fontFamily={'poppins'} variant='h3'>Faça um comentário</Typography>
                <textarea id="inputComentario" value={formData.textComment} name="textComment" rows={5} cols={35} maxLength={200} className="inputTextArea" onChange={handleChange} required></textarea>
                <button type='submit' className='btnForm'><Typography fontFamily={'poppins'}>Comentar</Typography></button>
            </form>
        </div>
    </div>
    </>
}

export default MenuComentarios;