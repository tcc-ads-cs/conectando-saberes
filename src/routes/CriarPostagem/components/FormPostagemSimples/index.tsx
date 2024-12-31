import { Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import trataFormPostagem from "../../functions/trataFormPostagem";

const FormPostagemSimples: React.FC = () => {   
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 0,
        textPost: ""
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const data = new FormData();
        for (const key in formData) {
            data.append(key, (formData as any)[key]);
        }
        
        const resultadoPostagem = await trataFormPostagem(data);
        if (resultadoPostagem === "OK") {
            navigate("/");
        } else if (resultadoPostagem === undefined){
            alert('Erro ao criar sua postagem.');
        } else {
            alert(resultadoPostagem);
        }
        setIsLoading(false);
    };
    
    return <>
        <Typography fontFamily='poppins' variant='h4'>Oh, você é uma pessoa de poucas palavras...</Typography>
        <Typography fontFamily='poppins' variant='h5'>Crie sua postagem simples apenas com um texto.</Typography>
        <form
        onSubmit={handleSubmit}
        id='formPostagemSimples'>
            <label htmlFor="inputTextoPostagem" className="inputLabel">Insira o texto da sua postagem no campo abaixo.</label>
            <textarea id="inputTextoPostagem" value={formData.textPost} name="textPost" rows={5} cols={35} className="inputTextArea" onChange={handleChange}></textarea>
            <button type='submit' className="btnForm submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>
            {isLoading ? (
                <img
                    src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/90-ring.svg"
                    alt="Carregando..."
                    style={{ width: '24px', height: '24px', filter: 'invert(1)' }}
                />
            ) : "Publicar postagem"}</Typography></button>
        </form>
    </>;
}

export default FormPostagemSimples;