import { Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import trataFormPostagem from "../../functions/trataFormPostagem";
import InputPalavrasChave from "../../functions/InputPalavrasChave";
import Campo from "../../../../components/Campo";

const FormArtigo: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 3,
        dcTitulo: "",
        textPost: "",
        flPost: "",
        dcCategorias: [] as string[]
    });

    let colsTextArea = (): number => {
        if (window.innerWidth >= 768) {
            return 70;
        } else if (window.innerWidth >= 500) {
            return 45;
        } else {
            return 32;
        }
    };

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
        Object.entries(formData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((item) => data.append(key, item));
            } else {
                data.append(key, value as string);
            }
        });

        const resultadoPostagem = await trataFormPostagem(data);
        if (resultadoPostagem === "OK") {
            navigate("/");
        } else if (resultadoPostagem === undefined) {
            alert("Erro ao criar sua postagem.");
        } else {
            alert(resultadoPostagem);
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="headerForm">
                <Typography fontFamily="poppins" variant="h4" fontWeight={500}>
                    Neste tipo de postagem, você apresenta seu projeto para a comunidade.
                </Typography>
                <Typography fontFamily="poppins" variant="h5">
                    Instigue seus seguidores para conhecer seu trabalho.
                </Typography>
            </div>
            <form onSubmit={handleSubmit} id="formArtigo">
                <Campo id="inputTituloArtigo" classe="mBottom-16 tituloPostagem" tipo="text" label="Insira o título do seu trabalho" name="dcTitulo" onChange={handleChange} value={formData.dcTitulo} required/>
                <label htmlFor="inputDetalhesArtigo" className="inputLabel">Insira aqui o resumo do seu trabalho.</label>
                <textarea id="inputDetalhesArtigo" value={formData.textPost} name="textPost" rows={20} cols={colsTextArea()} maxLength={2000} className="inputTextArea" onChange={handleChange} required></textarea>
                <Typography fontFamily={'poppins'} className="obsForm">Máximo de 2.000 (dois mil) caracteres.</Typography>
                <Campo id="inputLinkExterno" classe="mBottom-16 inputLongo" tipo="text" label="Insira aqui o link externo do seu trabalho." name="flPost" onChange={handleChange} value={formData.flPost} />
                <InputPalavrasChave
                    keywords={formData.dcCategorias}
                    setKeywords={(keywords) => setFormData({ ...formData, dcCategorias: keywords })} />
                <button type="submit" className="btnForm submit">
                    <Typography fontFamily={"poppins"} fontWeight={"bold"}>
                        {isLoading ? (
                            <img
                                src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/90-ring.svg"
                                alt="Carregando..."
                                style={{ width: "24px", height: "24px", filter: "invert(1)" }}
                            />
                        ) : (
                            "Publicar postagem"
                        )}
                    </Typography>
                </button>
            </form>
        </>
    );
};

export default FormArtigo;
