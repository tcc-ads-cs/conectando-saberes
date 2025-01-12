import { Typography } from "@mui/material";
import React, { useState } from "react";

type Program = "PIBIC-EM" | "PIVICT" | "PIBIC ou PIBIFSP";

const ProgramaIndicado: React.FC = () => {
    const [step, setStep] = useState(0);
    const [program, setProgram] = useState<Program | null>(null);

    const handleAnswer = (answer: boolean) => {
        step === 0 ? answer ? setProgram("PIBIC-EM") : setStep(1) : step === 1 ? setProgram(answer ? "PIVICT" : "PIBIC ou PIBIFSP") : null;
    };

    if (program) {
    return (
        <div>
            <Typography fontFamily='poppins' variant='h5'>Programa Indicado</Typography>
            <Typography fontFamily='poppins' fontWeight='500'>O programa indicado para você é: {program}</Typography>
        </div>
    );
    }

    return (
        <div>
            <Typography fontFamily='poppins' variant='h5'>Qual programa mais indicado para você?</Typography>
            <Typography fontFamily='poppins'>
                { step === 0
                    ? "Você está no ensino médio?"
                    : "Você está trabalhando?"
                }
            </Typography>
            <button
                onClick={() => handleAnswer(true)}
                className='btnTesteEdital'
            >Sim</button>
            <button
                onClick={() => handleAnswer(false)}
                className='btnTesteEdital'
            >Não</button>
        </div>
    );
};

export default ProgramaIndicado;
