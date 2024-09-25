import { Typography } from "@mui/material";

import './index.css';

export interface CampoProps {
    id?: string,
    label?: string,
    placeholder?: string,
    tipo: string,
    grupo?: string
}

const Campo: React.FC<CampoProps> = ({grupo, id, label, placeholder, tipo}) => {    
    switch (tipo) {
        case "senha":
        return <>
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={tipo}
            type="password"
            placeholder={placeholder} />
        </>
        case "email":
        return <>
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={tipo}
            type="email"
            placeholder={placeholder} />
        </>
        case "dtNasc":
        return <>
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={tipo}
            type="date"
            placeholder={placeholder} />
        </>
        case "radio":
        return <>
            <input
            id={id}
            name={grupo}
            type="radio"
            placeholder={placeholder} />
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
        </>
        case "checkbox":
        return <>
            <input
            id={id}
            name={grupo}
            type="checkbox"
            placeholder={placeholder} />
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
        </>       
        default:
        return <>
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            type="text"
            name={tipo}
            placeholder={placeholder} />
        </> 
    }
}

export default Campo;