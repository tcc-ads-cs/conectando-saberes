import { Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { FormEvent, useState } from "react";
import Campo from "../../../../components/Campo";
import NotFound from "../../../../components/NotFound";
import './index.css';

interface FormDataType {
    IType: string;
    IQuery: string;
}

const FormPesquisa: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [busca, setBusca] = useState<JSX.Element>();
    const [formData, setFormData] = useState<FormDataType>({
        IType: "0",
        IQuery: "",
    });

    const pesquisar = async (form: FormData) => {
        switch (form.get('IType')) {
            case "0":
                let perfilEncontrado = <NotFound text='Pesquisa de postagens ainda em construção.' />
                try {
                    //TODO: Requisição para encontrar um perfil via nome.
                    
                    //* Achou? Atribui à perfilEncontrado 
                } catch (e) {
                    console.log(e);
                }
                return perfilEncontrado;
            case "1":
                let postagensEncontradas = <NotFound text='Pesquisa de categorias ainda em construção.' />
                try {
                    //TODO: Requisição para listar postagens de uma categoria.
                    
                    //* Achou? Atribui à postagensEncontradas 
                } catch (e) {
                    console.log(e);
                }
                return postagensEncontradas
            case "2":
                let postagemEncontrada = <NotFound text='Pesquisa de perfis ainda em construção.' />
                try {
                    //TODO: Requisição para encontrar um post via nome.
                    
                    //* Achou? Atribui à postagemEncontrada 
                } catch (e) {
                    console.log(e);
                }
                return postagemEncontrada;
            default:
                return <NotFound text='Erro no tipo de pesquisa.' />
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            data.append(key, formData[key as keyof FormDataType]);
        }

        try {
            let resultQuery = await pesquisar(data);
            if (resultQuery != undefined) {
                setBusca(resultQuery);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form className='formPesquisa' onSubmit={handleSubmit}>
            <Typography fontFamily="poppins" variant="h3">Pesquisar</Typography>
                <input
                    type="text"
                    id="inputPesqQuery"
                    name="IQuery"
                    onChange={handleChange}
                    className="input inputPesquisa"
                    value={formData.IQuery}
                    required
                />
                <div className="filtroPesquisa">
                    <Campo
                        tipo="radio"
                        label="Perfil"
                        id="inputPesqPerfil"
                        name="IType"
                        className="optionPesquisa"
                        value="0"
                        checked={formData.IType === "0"}
                        onChange={handleChange}
                    />
                    <Campo
                        tipo="radio"
                        label="Categoria"
                        id="inputPesqCategoria"
                        name="IType"
                        className="optionPesquisa"
                        value="1"
                        checked={formData.IType === "1"}
                        onChange={handleChange}
                    />
                    <Campo
                        tipo="radio"
                        label="Usuário"
                        id="inputPesqUsuario"
                        name="IType"
                        className="optionPesquisa"
                        value="2"
                        checked={formData.IType === "2"}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btnForm">
                    {isLoading ? (
                        <img
                            src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/90-ring.svg"
                            alt="Carregando..."
                            style={{ width: '24px', height: '24px', filter: 'invert(1)' }}
                        />
                    ) : (
                        <Typography fontFamily="poppins"><Search /></Typography>
                    )}
                </button>
            </form>
            {isLoading ? (
                <img
                src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/90-ring.svg"
                alt="Carregando..."
                style={{ width: '24px', height: '24px', filter: 'invert(1)' }}
            />
            ) : busca}
        </>
    );
};

export default FormPesquisa;
