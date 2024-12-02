import { Close } from "@mui/icons-material";
import { Typography } from "@mui/material"
import { useState } from "react"

interface ModalErroProps {
    mensagem: string
}

const ModalErro: React.FC<ModalErroProps> = ({mensagem}) => {
    const [showModal, setShowModal] = useState(true);

    return <>
            {showModal &&
            <div className="containerModalErro">
                <Close></Close>
                <Typography fontFamily='poppins'>{mensagem}</Typography>
                <button type='button' onClick={() => setShowModal(false)}>Fechar</button>
            </div>
            }
    </>
}

export default ModalErro;