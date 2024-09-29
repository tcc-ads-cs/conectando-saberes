import { useState } from 'react';
import { Etapa1, Etapa2, Etapa3 } from './Etapas';
import { Typography } from '@mui/material';

const FormCadastro: React.FC = () => {
    const [etapaAtual, setEtapaAtual] = useState(1);

    const proximaEtapa = () => {setEtapaAtual(etapaAtual + 1)}

    return (
        <form
        method=""
        action=""
        >
            <div className="inputContainer formCadastro">
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