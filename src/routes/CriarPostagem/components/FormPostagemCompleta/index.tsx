import { FormEvent, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputPalavrasChave from "../../functions/InputPalavrasChave";
import trataFormPostagem from "../../functions/trataFormPostagem";
import Campo from "../../../../components/Campo";

const FormPostagemCompleta: React.FC = () => {   
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 2,
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
        <div className="headerForm">
            <Typography fontFamily='poppins' variant='h4' fontWeight={500}>Com esse tipo de postagem, você tem a experiência padrão da plataforma!</Typography>
            <Typography fontFamily='poppins' variant='h5'>Faça uma postagem completa.</Typography>
        </div>
        <form
        onSubmit={handleSubmit}
        id='formPostagemCompleta'>
            <Campo id='inputTituloCompleta' classe="mBottom-16 tituloPostagem" tipo='text' label='Título da sua postagem:' name='dcTitulo' onChange={handleChange} value={formData.dcTitulo} required />
            <label htmlFor="inputDetalhesCompleta" className="inputLabel">Insira o texto da sua postagem:</label>
            <textarea id="inputDetalhesCompleta" value={formData.textPost} name="textPost" rows={10} cols={35} maxLength={500} className="inputTextArea mBottom-16" onChange={handleChange} required></textarea>
            <Typography fontFamily={'poppins'} className="obsForm">Máximo de 500 (quinhentos) caracteres.</Typography>
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

export default FormPostagemCompleta;