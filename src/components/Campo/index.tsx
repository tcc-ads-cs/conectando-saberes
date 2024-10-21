import { Typography } from "@mui/material";

export interface CampoProps {
    id?: string,
    label?: string,
    placeholder?: string,
    tipo: string,
    grupo?: string,
    classe?: string
}

const Campo: React.FC<CampoProps> = ({classe, grupo, id, label, placeholder, tipo}) => {    
    switch (tipo) {
        case "senha":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            className={"input " + classe}
            id={id}
            name={tipo}
            type="password"
            placeholder={placeholder} />
        </>
        case "email":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            className={"input " + classe}
            id={id}
            name={tipo}
            type="email"
            placeholder={placeholder} />
        </>
        case "dtNasc":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            className={"input " + classe}
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
            <label htmlFor={id} className="checkboxMargin"><Typography fontFamily={'poppins'}>{label}</Typography></label><br></br>
        </>       
        default:
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            className={"input " + classe}
            id={id}
            type="text"
            name={tipo}
            placeholder={placeholder} />
        </> 
    }
}

export default Campo;