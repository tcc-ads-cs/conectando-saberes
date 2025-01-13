import { useState, useEffect, FormEvent } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Campo from '../../../../components/Campo';
import { getRequest } from '../../../../hooks/useRequests';
import trataFormCadastro from './functions/trataFormCadastro';

const FormCadastro: React.FC = () => {      
    const navigate = useNavigate();  
    const [campi, setCampi] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
      IEmail: "",
      IConfEmail: "",
      ISenha: "",
      IConfSenha: "",
      INomeComp: "",
      INomeSocial: "",
      IDtNasc: "",
      IGrauEsc: "1",
      ISituacao: "2",
      ICampus: "1",
      ICurso: "",
      ICidade: "1",
      IEstado: "1",
      IPrefer: "1",
    });

    let getCampi = async () => {
      let campi = await getRequest('/Location/listar-campi');
      setCampi(campi);
    };

    let getCidades = async () => {
      let cidades = await getRequest('/Location/listar-cidades');
      setCidades(cidades);
    };

    let getCursos = async () => {
      let curso = await getRequest('/Category/cursos');
      setCursos(curso);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof typeof formData;

      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    };
    
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const data = new FormData();
      for (const key in formData) {
        data.append(key, (formData as any)[key]);
      }

      try {
        const resultadoCadastro = await trataFormCadastro(data);
        typeof resultadoCadastro === "string" && resultadoCadastro != "Formulário enviado com sucesso!" ? console.log(resultadoCadastro) : navigate("/login");
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
      
    };

    useEffect(() => {
      getCampi();
      getCidades();
      getCursos();
    }, []);
    
    return (
        <form
        onSubmit={handleSubmit}
        id="formCadastro">
            <div id="etapa1" className="inputContainer">
                <Campo id="inputEmail" tipo="email" label="E-mail institucional:" name="IEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br" onChange={handleChange} />
                <Campo id="inputConfEmail" tipo="email" label="Digite seu e-mail institucional novamente:" name="IConfEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br" onChange={handleChange} />
                <Campo id="inputSenha" tipo="password" label="Senha:" name="ISenha" classe="inputMargin" placeholder="********" onChange={handleChange} />
                <Typography className="obsForm" fontFamily={'poppins'}>Sua senha DEVE ter, no mínimo, 8 caracteres, contendo, uma letra minúscula, uma letra maiúscula, um caracter especial e um número.</Typography>
                <Campo id="inputConfSenha" tipo="password" label="Digite sua senha novamente:" name="IConfSenha" classe="inputMargin" placeholder="********" onChange={handleChange} />
            </div>

            <div id="etapa2" className="inputContainer">
                <Campo id="inputNomeComp" tipo="text" label="Nome Completo:" name="INomeComp" classe="inputMargin" onChange={handleChange} />
                <label htmlFor="inputNomeSocial" className='inputLabel'><Typography fontFamily={'poppins'}>Nome Social:</Typography></label>
                <input type="text" id="inputNomeSocial" name="INomeSocial" className='input inputMargin' onChange={handleChange}/>
                <Typography className="obsForm" fontFamily={'poppins'}>O "nome social" é o nome que a pessoa travesti ou transexual prefere ser chamada e possui a mesma proteção concedida ao nome de registro, assegurada pelo Decreto nº 8.727/2016.</Typography>

                <Campo id="inputDtNasc" tipo="date" label="Data de Nascimento:" name="IDtNasc" classe="inputMargin" onChange={handleChange} />                
                <label className='inputLabel' htmlFor="grauEsc"><Typography fontFamily={'poppins'}>Grau de Escolaridade:</Typography></label>
                <select id="grauEsc" className="input inputMargin" name="IGrauEsc" onChange={handleChange}>
                    <option value="1">Ensino Médio/Técnico</option>
                    <option value="2">Graduação (Bacharel, Tecnológo ou Licenciatura)</option>
                    <option value="3">Pós-graduação</option>
                    <option value="4">MBA</option>
                    <option value="5">Mestrado</option>
                    <option value="6">Doutorado</option>
                    <option value="7">Pós Doutorado</option>
                </select>

                <div className="inputMargin radio">
                    <Campo id="inputSitCurs" tipo="radio" label="Cursando" name="ISituacao" value="0" onChange={handleChange} />
                    <Campo id="inputSitComp" tipo="radio" label="Completo" name="ISituacao" value="2" onChange={handleChange} />
                </div>
                
                <label className='inputLabel' htmlFor='inputInst'><Typography fontFamily={'poppins'}>Última instituição que frequentou:</Typography></label>
                <select id="inputCampi" name="ICampus" className="input inputMargin" onChange={handleChange}>
                    {
                      campi.sort((a: any, b: any) => a.campusName.localeCompare(b.campusName)).map((c: any) => {
                        return <option key={c.id} value={c.id}>{c.sgCampus + " - " + c.campusName}</option>
                      })
                    }
                </select>

                <label className='inputLabel' htmlFor='inputArea'><Typography fontFamily={'poppins'}>Sua área de formação/atuação:</Typography></label>
                <select id="inputCurso" name="ICurso" className="input inputMargin" onChange={handleChange}>
                    {
                        cursos.map((c: any) => {
                            return <option key={c.idCourse} value={c.idCourse}>{c.nmCourse}</option>
                        })
                    }
                </select>
                
                <label className='inputLabel' htmlFor='inputCidade'><Typography fontFamily={'poppins'}>Cidade onde reside:</Typography></label>
                <select id="inputCidade" name="ICidade" className="input inputMargin" onChange={handleChange}>
                    {
                        cidades.map((c: any) => {
                            return <option key={c.idCidade} value={c.idCidade}>{c.name}</option>
                        })
                    }
                </select>
                
                <label className='inputLabel' htmlFor='inputCidade'><Typography fontFamily={'poppins'}>Sigla do estado onde reside:</Typography></label>
                <select id="inputEstado" className="input inputMargin" name="IEstado" onChange={handleChange}>
                    <option value="1">SP</option>
                </select>
            </div>

            <div id="etapa3" className="inputContainer">
                <label className='inputLabel' htmlFor="inputPrefer"><Typography fontFamily={'poppins'}>O que você busca na plataforma?</Typography></label>
                <select id="inputPrefer" className="input inputMargin select" name="IPrefer">
                    <option value="2">Oportunidades como bolsista ou voluntária de iniciação científica.</option>
                    <option value="1">Candidatos para orientação de iniciação científica.</option>
                    <option value="3">Encontrar referências bibliográficas.</option>
                    <option value="4">Conhecer mais sobre IC e a plataforma.</option>
                </select>
            </div>
            
            <button type='submit' className="btnForm submit">
            {isLoading ? (
                        <img
                            src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/90-ring.svg"
                            alt="Carregando..."
                            style={{ width: '24px', height: '24px', filter: 'invert(1)' }}
                        />
                    ) : (
                      <Typography fontFamily={'poppins'} fontWeight={'bold'}>Finalizar</Typography>
                    )}
            </button>
        </form>
    );
}

export default FormCadastro;