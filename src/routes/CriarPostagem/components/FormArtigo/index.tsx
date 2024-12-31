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
            <Typography fontFamily="poppins" variant="h4">
                Neste tipo de postagem, você apresenta seu projeto para a comunidade
            </Typography>
            <Typography fontFamily="poppins" variant="h5">
                Instigue seus seguidores para conhecer seu trabalho.
            </Typography>
            <form onSubmit={handleSubmit} id="formArtigo">
                <Campo id="inputTituloTopico" tipo="text" label="Insira o título do seu trabalho" name="dcTitulo" onChange={handleChange} value={formData.dcTitulo} />
                <label htmlFor="inputDetalhesTopico" className="inputLabel">Insira aqui o resumo do seu trabalho.</label>
                <textarea id="inputDetalhesTopico" value={formData.textPost} name="textPost" rows={5} cols={35} className="inputTextArea" onChange={handleChange}></textarea>
                <Campo id="inputLinkExterno" tipo="text" label="Insira aqui o link externo do seu trabalho." name="flPost" onChange={handleChange} value={formData.flPost} />
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
