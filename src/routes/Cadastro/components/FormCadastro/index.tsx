import { useState, useEffect, FormEvent } from 'react';
import { Typography } from '@mui/material';
import Campo from '../../../../components/Campo';
import api from '../../../../api';
import trataFormCadastro from './functions/trataFormCadastro';

import * as categorias from '../../../../assets/tags.json';
const obj = JSON.parse(JSON.stringify(categorias)).categorias;

const FormCadastro: React.FC = () => {      
    const [campi, setCampi] = useState([]);
    const [cidades, setCidades] = useState([]);
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
      ICidade: "1",
      IEstado: "1",
      IPrefer: "1",
      categorias: [],
      IAvatar: null as File | null,
    });

    let getCampi = async () => {
      try {
        const response = await api.get("/Location/listar-campi");
        if (response.status === 200) {
          setCampi(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    let getCidades = async () => {
      try {
        const response = await api.get("/Location/listar-cidades");
        if (response.status === 200) {
          setCidades(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const fieldName = name as keyof typeof formData;

      if (type === "checkbox") {
        const target = e.target as HTMLInputElement;

        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: target.checked
            ? [...((prevState[fieldName] as string[]) ?? []), value]
            : ((prevState[fieldName] as string[]) ?? []).filter(
                (item) => item !== value
              ),
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: value,
        }));
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, files } = e.target;
      if (files) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: files[0],
        }));
      }
    };

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      const data = new FormData();
      for (const key in formData) {
        data.append(key, (formData as any)[key]);
      }

      const resultadoCadastro = await trataFormCadastro(data);
      if (typeof resultadoCadastro === "string") {
        alert(resultadoCadastro);
      } else {
        //TODO: Logar!!!!!!!!!!!!
        console.log("Cadastro realizado com sucesso:", resultadoCadastro);
      }
    
    };

    let avatarImg = document.getElementById('avatarForm') as HTMLImageElement | null;
    let inputImg = document.getElementById('inputAvatar') as HTMLInputElement | null;

    if (avatarImg != null && inputImg != null) {
      inputImg.onchange = function() {
        if (inputImg.files && inputImg.files[0]) {
          avatarImg.src = URL.createObjectURL(inputImg.files[0]);
        }
      };
    }

    useEffect(() => {
      getCampi();
      getCidades();
    }, []);

    return (
        <form
        onSubmit={handleSubmit}
        id="formCadastro">
            <div id="etapa1" className="inputContainer">
                <Campo id="inputEmail" tipo="email" label="E-mail institucional:" name="IEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br" change={handleChange} />
                <Campo id="inputConfEmail" tipo="email" label="Digite seu e-mail institucional novamente:" name="IConfEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br" change={handleChange} />
                <Campo id="inputSenha" tipo="password" label="Senha:" name="ISenha" classe="inputMargin" placeholder="********" change={handleChange} />
                <Typography className="obsForm" fontFamily={'poppins'}>Sua senha DEVE ter, no mínimo, 8 caracteres, contendo, uma letra minúscula, uma letra maiúscula, um caracter especial e um número.</Typography>
                <Campo id="inputConfSenha" tipo="password" label="Digite sua senha novamente:" name="IConfSenha" classe="inputMargin" placeholder="********" change={handleChange} />
            </div>

            <div id="etapa2" className="inputContainer">
                <Campo id="inputNomeComp" tipo="text" label="Nome Completo:" name="INomeComp" classe="inputMargin" change={handleChange} />
                <label htmlFor="inputNomeSocial" className='inputLabel'><Typography fontFamily={'poppins'}>Nome Social:</Typography></label>
                <input type="text" id="inputNomeSocial" name="INomeSocial" className='input inputMargin' onChange={handleChange}/>
                <Typography className="obsForm" fontFamily={'poppins'}>O "nome social" é o nome que a pessoa travesti ou transexual prefere ser chamada e possui a mesma proteção concedida ao nome de registro, assegurada pelo Decreto nº 8.727/2016.</Typography>
                
                <img id="avatarForm" src="https://cdn-icons-png.freepik.com/512/11120/11120447.png?ga=GA1.1.1137919026.1724783522" alt="" />
                <label htmlFor="inputAvatar" className='inputLabel'><Typography fontFamily={'poppins'}>Selecione sua foto de perfil:</Typography></label>
                <input type="file" id="inputAvatar" name="IAvatar" className='input inputMargin' accept="image/*" onChange={handleFileChange} required />

                <Campo id="inputDtNasc" tipo="date" label="Data de Nascimento:" name="IDtNasc" classe="inputMargin" change={handleChange} />                
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
                    <Campo id="inputSitCurs" tipo="radio" label="Cursando" name="ISituacao" value="0" change={handleChange} />
                    <Campo id="inputSitComp" tipo="radio" label="Completo" name="ISituacao" value="2" change={handleChange} />
                </div>
                
                <label className='inputLabel' htmlFor='inputInst'><Typography fontFamily={'poppins'}>Última instituição que frequentou:</Typography></label>
                <select id="inputCampi" name="ICampus" className="input inputMargin" onChange={handleChange}>
                    {
                        campi.map((c: any) => {
                            return <option key={c.id} value={c.id}>{c.sgCampus}</option>
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

                <Typography className='inputLabel' fontFamily={'poppins'}>Marque 3 categorias que te interessem:</Typography>
                    <div id="categoriasContainer" className="inputMargin inputLabel">
                        {
                            obj.map((e: any) => {
                                return <Campo key={e.dcCategoria} id={"categoria-" + e.id} tipo="checkbox" label={e.nmCategoria} name={"ICategorias"} value={e.id} change={handleChange} />
                            })
                        }
                    </div>
            </div>
            <button type='submit' className="btnForm submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Finalizar</Typography></button>
        </form>
    );
}

export default FormCadastro;