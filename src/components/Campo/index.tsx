import { Typography } from "@mui/material";

export interface CampoProps {
    id?: string,
    label: string,
    placeholder?: string,
    tipo: string
}

const Campo: React.FC<CampoProps> = ({id, label, placeholder, tipo}) => {    
    switch (tipo) {
        case "senha":
        return <>
            <label htmlFor={tipo}><Typography>{label}</Typography></label>
            <input
            required
            name={tipo}
            type="password"
            placeholder={placeholder} />
        </>
        case "email":
        return <>
            <label htmlFor={tipo}><Typography>{label}</Typography></label>
            <input
            required
            id={id}
            name={tipo}
            type="email"
            placeholder={placeholder} />
        </>
        case "dtNasc":
        return <>
            <label htmlFor={tipo}><Typography>{label}</Typography></label>
            <input
            required
            name={tipo}
            type="date"
            placeholder={placeholder} />
        </>
        case "dropdown":
            return <> 
            <label htmlFor={tipo}><Typography>{label}</Typography></label>
            <input
            required
            name={tipo}
            placeholder={placeholder} />
            
            {/* Pensar numa lógica para renderizar as opções também! */}
            
            </>         
        default:
        return <>
            <label htmlFor={tipo}><Typography>{label}</Typography></label>
            <input
            required
            type="text"
            name={tipo}
            placeholder={placeholder} />
        </> 
    }
}

export default Campo;