import { useState } from 'react';
import { Etapa1, Etapa2, Etapa3 } from './Etapas';
import { Typography } from '@mui/material';

const FormCadastro: React.FC = () => {
    const [etapaAtual, setEtapaAtual] = useState(1);

    const proximaEtapa = () => {
        switch (etapaAtual) {
            case 1:
                {/* Verificação de consistência

                Exemplo 1: 
                if (document.getElementById('email')?.innerText.includes('@')) {
                    alert("Por favor, insira um e-mail válido.");
                } else {  setEtapaAtual(etapaAtual + 1); }
                */}

                setEtapaAtual(etapaAtual + 1);
                break;
            case 2: 
                // Verificação de consistência
                setEtapaAtual(etapaAtual + 1);
                break;
            case 3:
                // Verificação de consistência
                setEtapaAtual(etapaAtual + 1);
                break;
        }
    };

    return (
        <div className="containerForm">
            <div className="conteudoForm">
                {etapaAtual === 1 && <Etapa1 />}
                {etapaAtual === 2 && <Etapa2 />}
                {etapaAtual === 3 && <Etapa3 />}
            </div>
            <Typography>{"Passo " + etapaAtual + " de 3"}</Typography>
            {etapaAtual < 3 && (
            <button onClick={proximaEtapa}>Próxima</button>
            )}
        </div>
    );
}

export default FormCadastro;