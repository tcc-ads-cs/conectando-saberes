import { Typography } from "@mui/material";
import Campo from "../../../../components/Campo";

export const Etapa1 = () => {
    return <>
      <Campo classe="inputCadastro" tipo="email" id="email" label="E-mail:" placeholder="seuemail@ifsp.edu.br"/>
      <Campo classe="inputCadastro" tipo="email" id="emailConf" label="Confirmação de E-mail:" placeholder="seuemail@ifsp.edu.br"/>
      <Campo classe="inputCadastro" tipo="senha" id="senha" label="Senha:" placeholder="********"/>
      <Campo classe="inputCadastro" tipo="senha" id="senhaConf" label="Confirmação de Senha:" placeholder="********"/>
    </>;
  };

  export const Etapa2 = () => {
    return <>
        <Campo classe="inputCadastro" tipo="nome" id="nome" label="Nome Completo:"/>
        <Campo classe="inputCadastro" tipo="nome" id="nome" label="Nome Social: "/>
        <Typography id="obsNomeSocial" fontFamily={'poppins'}>O "nome social" é o nome que a pessoa travesti ou transexual prefere ser chamada e possui a mesma proteção concedida ao nome de registro, assegurada pelo Decreto nº 8.727/2016.</Typography>

        <Campo classe="inputCadastro" tipo="dtNasc" id="dtNasc" label="Data de Nascimento:"/>
        {/* Implementar o cenário de erro: https://www.notion.so/arielmartins/Detalhamento-de-Processos-018145894451445aa06d3aa88ecb343d?pvs=4#ebbd36482bce4cc2862521e0df73045c */}
        
        <label htmlFor="escolaridade"><Typography fontFamily={'poppins'}>Grau de Escolaridade:</Typography></label>
        <select className="inputCadastro" name="escolaridade">
          <option value="medio">Ensino Médio</option>
          <option value="grad">Graduação</option>
          <option value="pos-grad">Pós-graduação</option>
          <option value="mba">MBA</option>
          <option value="mest">Mestrado</option>
          <option value="dout">Doutorado</option>
          <option value="pos-dout">Pós Doutorado</option>
        </select>

        <label htmlFor="situacao"><Typography fontFamily={'poppins'}>Situação:</Typography></label>
        <div className="inputCadastro">
          <Campo tipo="radio" label="Cursando" grupo="situacao" id="curs" />
          <Campo tipo="radio" label="Completo" grupo="situacao" id="comp" />
        </div>

        <label htmlFor="instituicao"><Typography fontFamily={'poppins'}>Ultima instituição que frequentou:</Typography></label>
        <select className="inputCadastro" name="instituicao">
          {/* API de instituições */}
        </select>

        <label htmlFor="cidade"><Typography fontFamily={'poppins'}>Cidade onde reside:</Typography></label>
        <select className="inputCadastro" name="cidade">
          {/* API de cidades */}
        </select>

        <label htmlFor="estado"><Typography fontFamily={'poppins'}>Estado onde reside:</Typography></label>
        <select className="inputCadastro" name="estado">
          {/* API de estados */}
        </select>
    </>;
  };

  
  export const Etapa3 = () => {
    return (
      <div>
        <label htmlFor="interesse"><Typography fontFamily={'poppins'}>O que você busca na plataforma?</Typography></label>
        <select name="interesse">
          <option value="orientado">Busco oportunidades para ser uma pessoa bolsista ou voluntária de iniciação científica.</option>
          <option value="orientador">Busco oportunidades para ser uma pessoa orientadora de iniciação científica.</option>
          <option value="pesquisa">Busco encontrar referências bibliográficas para meu(s) projeto(s).</option>
          <option value="ic">Busco conhecer mais sobre iniciação científica e a plataforma.</option>
        </select>

        <label htmlFor="categorias"><Typography fontFamily={'poppins'}>Marque 3 categorias que te interessem:</Typography></label>
        <div>
          <Campo tipo="checkbox" label="Matemática" grupo="categorias" id="id-da-categoria" />
          <Campo tipo="checkbox" label="Tecnologia da Informação (TI)" grupo="categorias" id="id-da-categoria" />
          <Campo tipo="checkbox" label="Direito" grupo="categorias" id="id-da-categoria" />
          <Campo tipo="checkbox" label="Arquitetura" grupo="categorias" id="id-da-categoria" />
        </div>

        <button type='submit' className="btnForm"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Finalizar</Typography></button>
      </div>
    );
  };
  
  