import { Typography } from "@mui/material";
import React, { useState } from "react";

type Program = "PIBIC-EM" | "PIVICT" | "PIBIC ou PIBIFSP";

interface ProgramaIndicadoProps {
    nomeFacul: string
}

const ProgramaIndicado: React.FC<ProgramaIndicadoProps> = ({nomeFacul}) => {
    const [step, setStep] = useState(0);
    const [program, setProgram] = useState<Program | null>(null);

    const handleAnswer = (answer: boolean) => {
        step === 0 ? answer ? setProgram("PIBIC-EM") : setStep(1) : step === 1 ? setProgram(answer ? "PIVICT" : "PIBIC ou PIBIFSP") : null;
    };

    if (program) {
    return (
        <div className='perguntasEditais'>
            <Typography fontFamily='poppins' variant='h5'>Programa Indicado</Typography>
            <Typography fontFamily='poppins'>O programa oferecido por {nomeFacul} indicado para você é:</Typography>
            <Typography fontFamily='poppins' fontWeight='bold'>{program}</Typography>
        </div>
    );
    }

    return (
        <div className='testeEditais'>
            <Typography fontFamily='poppins' variant='h4' fontWeight={'bold'}>Descubra qual programa mais indicado para você!</Typography>
            <Typography fontFamily='poppins' className='perguntasEditais'>
                { step === 0
                    ? "Você está no ensino médio?"
                    : "Você está trabalhando?"
                }
            </Typography>
            <div className="interacoesTesteEditais">
            <button
                onClick={() => handleAnswer(true)}
                className='btnForm'
            ><Typography fontFamily='poppins'>Sim</Typography></button>
            <button
                onClick={() => handleAnswer(false)}
                className='btnForm'
            ><Typography fontFamily='poppins'>Não</Typography></button>
            </div>
        </div>
    );
};

export default ProgramaIndicado;
