import { Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { FormEvent, useState } from "react";
import Campo from "../../../../components/Campo";
import NotFound from "../../../../components/NotFound";
import './index.css';
import { getRequest } from "../../../../hooks/useRequests";
import ItemBusca from "../../../../components/ItemBusca";

interface FormDataType {
    IType: string;
    IQuery: string;
}

const FormPesquisa: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<JSX.Element[]>([]);
    const [formData, setFormData] = useState<FormDataType>({
        IType: "0",
        IQuery: "",
    });
    let pageNumber = 1;
    const pageSize = 8; 

    const pesquisar = async (form: FormData) => {
        switch (form.get('IType')) {
            case "0":
                try {
                    let response = await getRequest(`/User/buscar?namePart=${form.get('IQuery')}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

                    if ('code' in response) {
                        console.log(response);
                    } else if (response.length > 0) {
                        console.log(response);
                        setResult(response.map((r: any) => {
                            return <ItemBusca key={r.id} tipo="perfil" infos={r} />
                        }));
                    }
                } catch (e) {
                    console.log(e);
                }
                break;
            case "1":
                try {
                    let response = await getRequest(`/Category/buscar?partName=${form.get('IQuery')}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
                        if ('code' in response) {
                            console.log(response);
                        } else if (response.length > 0) {
                            console.log(response);
                            setResult(response.map((r: any) => {
                                return <ItemBusca key={r.post.guid} tipo="postagem" infos={r} />
                            }));
                        } else {
                            setResult([<NotFound key="semResultados" text='Sem resultados.' />]);
                        }
                    
                } catch (e) {
                    console.log(e);
                }
                break;
            case "2":
                try {
                    let response = await getRequest(`/Post/buscar?titlePart=${form.get('IQuery')}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

                    if ('code' in response) {
                        console.log(response);
                    } else if (response.length > 0) {
                        console.log(response);
                        setResult(response.map((r: any) => {
                            return <ItemBusca key={r.user.userId} tipo="postagem" infos={r} />
                        }));
                    }
                } catch (e) {
                    console.log(e);
                }
                break;
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
            await pesquisar(data);
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
                        label="Postagem"
                        id="inputPesqPostagem"
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
            ) : 
            <div className="resultadosBusca">
                {result}
            </div>
            
            }
        </>
    );
};

export default FormPesquisa;
