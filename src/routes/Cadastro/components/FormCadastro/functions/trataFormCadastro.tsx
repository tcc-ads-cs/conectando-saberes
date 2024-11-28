import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Campo from '../../../../components/Campo'; //verificar essas requisições
import * as categorias from '../../../../assets/tags.json';
import { enviarCadastro } from '../../../../api/routes'; // Função para enviar dados para a API 
const obj = JSON.parse(JSON.stringify(categorias)).categorias;

const FormCadastro: React.FC = () => {  
    const [formData, setFormData] = useState({
        IEmail: '',
        IConfEmail: '',
        ISenha: '',
        IConfSenha: '',
        INomeComp: '',
        INomeSocial: '',
        IAvatar: '',
        IDtNasc: '',
        IGrauEsc: '',
        ISituacao: '',
        IInst: '',
        ICidade: '',
        IEstado: '',
        IPrefer: '',
        categorias: [],
    });

    const [errors, setErrors] = useState({
        emailMatch: '',
        senhaMatch: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação de e-mail
        if (formData.IEmail !== formData.IConfEmail) {
            setErrors(prev => ({
                ...prev,
                emailMatch: 'Os e-mails não correspondem.',
            }));
            return;
        } else {
            setErrors(prev => ({
                ...prev,
                emailMatch: '',
            }));
        }

        // Validação de senha
        if (formData.ISenha !== formData.IConfSenha) {
            setErrors(prev => ({
                ...prev,
                senhaMatch: 'As senhas não correspondem.',
            }));
            return;
        } else {
            setErrors(prev => ({
                ...prev,
                senhaMatch: '',
            }));
        }

        // Enviando dados para a API
        try {
            const response = await enviarCadastro(formData);
            console.log(response.data); // Manipule a resposta aqui, por exemplo, redirecionando ou exibindo uma mensagem de sucesso
        } catch (error) {
            console.error("Erro ao enviar o cadastro:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="" action="" id="formCadastro">
            {/* Etapas do formulário */}
            <div id="etapa1" className="inputContainer">
                <Campo id="inputEmail" tipo="email" label="E-mail:" name="IEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br" onChange={handleChange} />
                <Campo id="inputConfEmail" tipo="email" label="Digite seu e-mail novamente:" name="IConfEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br" onChange={handleChange} />
                {errors.emailMatch && (
                    <Typography color="error">{errors.emailMatch}</Typography>
                )}

                <Campo id="inputSenha" tipo="password" label="Senha:" name="ISenha" classe="inputMargin" placeholder="********" onChange={handleChange} />
                <Campo id="inputConfSenha" tipo="password" label="Digite sua senha novamente:" name="IConfSenha" classe="inputMargin" placeholder="********" onChange={handleChange} />
                {errors.senhaMatch && (
                    <Typography color="error">{errors.senhaMatch}</Typography>
                )}
            </div>

            {/* Etapa 2 do formulário */}
            <div id="etapa2" className="inputContainer">
                <Campo id="inputNomeComp" tipo="text" label="Nome Completo:" name="INomeComp" classe="inputMargin" onChange={handleChange} />
                <label htmlFor="inputNomeSocial" className='inputLabel'><Typography fontFamily={'poppins'}>Nome Social:</Typography></label>
                <input type="text" id="inputNomeSocial" name="INomeSocial" className='input inputMargin' onChange={handleChange} />
                <Typography id="obsNomeSocial" fontFamily={'poppins'}>O "nome social" é o nome que a pessoa travesti ou transexual prefere ser chamada e possui a mesma proteção concedida ao nome de registro, assegurada pelo Decreto nº 8.727/2016.</Typography>
                
                <label htmlFor="inputAvatar" className='inputLabel'><Typography fontFamily={'poppins'}>Selecione sua foto de perfil:</Typography></label>
                <input type="file" id="inputAvatar" name="IAvatar" className='input inputMargin' onChange={handleChange} required />
                {/*TODO: 7 - Entender como salvar o arquivo selecionado */}

                <Campo id="inputDtNasc" tipo="date" label="Data de Nascimento:" name="IDtNasc" classe="inputMargin" onChange={handleChange}/>                
                <label className='inputLabel' htmlFor="grauEsc"><Typography fontFamily={'poppins'}>Grau de Escolaridade:</Typography></label>
                <select id="grauEsc" className="input inputMargin" name="IGrauEsc" onChange={handleChange}>
                    <option value="emt">Ensino Médio/Técnico</option>
                    <option value="grad">Graduação (Bacharel, Tecnológo ou Licenciatura)</option>
                    <option value="pos-grad">Pós-graduação</option>
                    <option value="mba">MBA</option>
                    <option value="mest">Mestrado</option>
                    <option value="dout">Doutorado</option>
                    <option value="pos-doc">Pós Doutorado</option>
                </select>

                <div className="inputMargin radio">
                    <Campo id="inputSitCurs" tipo="radio" label="Cursando" name="ISituacao" onChange={handleChange} />
                    <Campo id="inputSitComp" tipo="radio" label="Completo" name="ISituacao" onChange={handleChange} />
                </div>
                
                <Campo id="inputInst" tipo="text" label="Última instituição que frequentou:" name="IInst" classe="inputMargin" placeholder="IFSP - Campus Cubatão" onChange={handleChange} />
                <Campo id="inputCidade" tipo="text" label="Cidade onde reside:" name="ICidade" classe="inputMargin" onChange={handleChange} />
                <Campo id="inputEstado" tipo="text" label="Sigla do estado onde reside:" name="IEstado" classe="inputMargin" placeholder="Ex.: SP" onChange={handleChange} />
            </div>

            <div id="etapa3" className="inputContainer">
                <label className='inputLabel' htmlFor="inputPrefer"><Typography fontFamily={'poppins'}>O que você busca na plataforma?</Typography></label>
                <select id="inputPrefer" className="input inputMargin select" name="IPrefer" onChange={handleChange}>
                    <option value="orientado">Oportunidades como bolsista ou voluntária de iniciação científica.</option>
                    <option value="orientador">Candidatos para orientação de iniciação científica.</option>
                    <option value="pesquisa">Encontrar referências bibliográficas.</option>
                    <option value="ic" defaultChecked={true}>Conhecer mais sobre IC e a plataforma.</option>
                </select>

                <Typography className='inputLabel' fontFamily={'poppins'}>Marque 3 categorias que te interessem:</Typography>
                <div id="categoriasContainer" className="inputMargin inputLabel">
                    {obj.map((e: any) => {
                        return <Campo key={e.dcCategoria} id={e.dcCategoria} tipo="checkbox" label={e.nmCategoria} name={e.dcCategoria} onChange={handleChange} />
                    })}
                </div>
            </div>

            <button type='submit' className="btnForm submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Finalizar</Typography></button>
        </form>
    );
};

export default FormCadastro;
