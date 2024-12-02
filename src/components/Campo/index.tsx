import { Typography } from "@mui/material";
import { ChangeEventHandler } from "react";

export interface CampoProps {
    id: string,
    tipo: string,
    label: string,
    name: string,
    classe?: string
    placeholder?: string,
    change: ChangeEventHandler,
    value?: string
}

const Campo: React.FC<CampoProps> = ({change, classe, id, label, name, placeholder, tipo, value}) => {    
    switch (tipo) {
        case "email":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            type={tipo}
            placeholder={placeholder}
            className={classe? "input " + classe : "input"} 
            onChange={change} />
        </>
        case "password":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            type={tipo}
            maxLength={24}
            placeholder={placeholder}
            className={classe? "input " + classe : "input"}
            onChange={change} />
        </>
        case "date":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            type={tipo}
            placeholder={placeholder}
            className={classe? "input " + classe : "input"}
            onChange={change} />
        </>
        case "radio":
        return <>
            <input
            id={id}
            name={name}
            type={tipo}
            placeholder={placeholder} 
            onChange={change}
            value={value} />
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
        </>
        case "checkbox":
        return <>
            <input
            id={id}
            name={name}
            type={tipo}
            placeholder={placeholder}
            onChange={change}
            value={value} />
            <label htmlFor={id} className="checkboxMargin"><Typography fontFamily={'poppins'}>{label}</Typography></label><br></br>
        </>       
        default:
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            placeholder={placeholder}
            className={classe? "input " + classe : "input"}
            onChange={change} />
        </> 
    }
}

export default Campo;