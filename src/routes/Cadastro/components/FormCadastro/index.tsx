import { useState } from 'react';
import { Etapa1, Etapa2, Etapa3 } from './Etapas';
import { Typography } from '@mui/material';

import './index.css';

const FormCadastro: React.FC = () => {
    const [etapaAtual, setEtapaAtual] = useState(1);

    // const proximaEtapaConsistente = () => {
    //     switch (etapaAtual) {
    //         case 1:
    //             Exemplo: 
    //             if (document.getElementById('email')?.innerText.includes('@')) {
    //                 alert("Por favor, insira um e-mail válido.");
    //             } else {  setEtapaAtual(etapaAtual + 1); }
    //             
    //             break;
    //         case 2: 
    //             break;
    //         case 3:
    //             break;
    //     }
    // };

    const proximaEtapa = () => {setEtapaAtual(etapaAtual + 1)}

    return (
        <form
        method=""
        action=""
        >
            <div className="conteudoForm">
                {etapaAtual === 1 && <Etapa1 />}
                {etapaAtual === 2 && <Etapa2 />}
                {etapaAtual === 3 && <Etapa3 />}
            </div>
            <div className="etapasForm">
                <Typography className="passos" fontFamily={'poppins'}>{"Passo " + etapaAtual + " de 3"}</Typography>
                {etapaAtual < 3 && (
                <button className="btnForm" type="button" onClick={proximaEtapa}><Typography fontFamily={'poppins'} fontWeight={'bold'}>Próximo</Typography></button>
                )}
            </div>
        </form>
    );
}

export default FormCadastro;