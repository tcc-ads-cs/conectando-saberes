import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Campo from "../../../../components/Campo"
import { FormEvent, useState } from "react";
import api from "../../../../api";

const FormLogin: React.FC = () => {
    const [formData, setFormData] = useState({
        ILogin: '',
        ISenha: ''
    });
    
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
  
        const data = new FormData();
        for (const key in formData) {
          data.append(key, (formData as any)[key]);
        }
        
        let usuarioLogado = JSON.stringify({
            email: data.get('ILogin'),
            password: data.get('ISenha')
        });
        
        try {
            const response = await api.post('/UserAuth/login', usuarioLogado);
            if (response.status === 200) {
                //TODO: Login (JWT)
                alert('Formulário enviado com sucesso!');
            }
        } catch (error: any) {
            if (error.response) {
                alert(`Usuário ou senha incorretos.`);
            } else if (error.request) {
                alert('Erro ao enviar formulário. Nenhuma resposta recebida do servidor.');
            }
        }
      };


    return <>
        <form
        onSubmit={handleSubmit}
        className="inputContainer"
        >
            <Campo classe="inputMargin" tipo="email" label="E-mail:" placeholder="seuemail@ifsp.edu.br" id={"inputLogin"} name={"ILogin"} change={handleChange}/>
            <Campo tipo="password" label="Senha:" placeholder="********" id={"inputSenha"} name={"ISenha"} change={handleChange}/>
            <Link
                to="/redefinir-senha"
                className="linkForm"
            >Esqueceu sua senha?</Link>
            <button className="btnForm" type="submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Acessar</Typography></button>
        </form>
    </>
}

export default FormLogin;