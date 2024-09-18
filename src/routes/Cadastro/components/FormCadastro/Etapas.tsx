import { Typography } from "@mui/material";
import Campo from "../../../../components/Campo";

export const Etapa1 = () => {
    return (
      <div>
        <form>
            <Campo tipo="email" id="email" label="E-mail:" placeholder="seuemail@ifsp.edu.br"/>
            <Campo tipo="email" id="emailConf" label="Confirmação de E-mail:" placeholder="seuemail@ifsp.edu.br"/>
            <Campo tipo="senha" id="senha" label="Senha:" placeholder="********"/>
            <Campo tipo="senha" id="senhaConf" label="Confirmação de Senha:" placeholder="********"/>
        </form>
      </div>
    );
  };

  
  export const Etapa2 = () => {
    return (
      <div>
        <form>
          <Campo tipo="nome" id="nome" label="Nome Completo/Nome Social:"/>
          
          <Campo tipo="dtNasc" id="dtNasc" label="Data de Nascimento:"/>
          {/* Implementar o cenário de erro: https://www.notion.so/arielmartins/Detalhamento-de-Processos-018145894451445aa06d3aa88ecb343d?pvs=4#ebbd36482bce4cc2862521e0df73045c */}
          
          <Campo tipo="dropdown" label="Grau de escolaridade:" />
          
          {/*
          Grau de escolaridade (dropdown)
          Cursando/Cursado (escolha)
          */}
          
          <Campo tipo="escolaFrequentada" id="escolaFrequentada" label="Última instituição na qual estuda/estudou?" />
          
          {/*
          Cidade (dropdown)
          Estado (dropdown)
          */}
        
        </form>
      </div>
    );
  };

  
  export const Etapa3 = () => {
    return (
      <div>
        <form>
            {/*
            - O que busca na plataforma (dropdown)
            - 3 categorias (dropdown)
            */}
          <button type='submit' className="btnForm"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Finalizar</Typography></button>
        </form>
      </div>
    );
  };
  
  