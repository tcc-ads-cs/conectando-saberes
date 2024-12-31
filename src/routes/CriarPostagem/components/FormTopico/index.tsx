import { FormEvent, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputPalavrasChave from "../../functions/InputPalavrasChave";
import trataFormPostagem from "../../functions/trataFormPostagem";
import Campo from "../../../../components/Campo";

const FormTopico: React.FC = () => {   
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 1,
        dcTitulo: "",
        textPost: "",
        dcCategorias: [] as string[]
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          if (formData.hasOwnProperty(key)) {
              data.append(key, (formData as any)[key]);
          }
      }
      
      const resultadoPostagem = await trataFormPostagem(data);
      if (resultadoPostagem === "OK") {
          navigate("/");
      } else {
          alert(resultadoPostagem);
      }
      setIsLoading(false);
    };
    
    return <>
        <Typography fontFamily='poppins' variant='h4'>Não existe pergunta besta, pergunta que a comunidade responde!</Typography>
        <Typography fontFamily='poppins' variant='h5'>Inicie uma discussão na plataforma.</Typography>
        <form
        onSubmit={handleSubmit}
        id='formTopico'>
            <Campo id='inputTituloTopico' tipo='text' label='Insira sua pergunta no campo abaixo.' name='dcTitulo' onChange={handleChange} value={formData.dcTitulo} />
            <label htmlFor="lblDetalhesTopico" className="inputLabel">Utilize esse espaço para detalhar sua pergunta.</label>
            <textarea id="inputDetalhesTopico" value={formData.textPost} name="textPost" rows={5} cols={35} className="inputTextArea" onChange={handleChange}></textarea>
            <InputPalavrasChave
            keywords={formData.dcCategorias}
            setKeywords={(keywords) => setFormData({ ...formData, dcCategorias: keywords })} />
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

export default FormTopico;