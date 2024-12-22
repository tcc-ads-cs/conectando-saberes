import { Typography } from "@mui/material";
import { InputHTMLAttributes } from "react";

export interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    tipo: string,
    label: string,
    name: string,
    classe?: string
}

const Campo: React.FC<CampoProps> = ({classe, id, label, name, tipo, ...props}) => {    
    switch (tipo) {
        case "email":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            type={tipo}
            className={classe? "input " + classe : "input"} 
            {...props} />
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
            className={classe? "input " + classe : "input"}
            {...props}/>
        </>
        case "date":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            type={tipo}
            className={classe? "input " + classe : "input"}
            {...props} />
        </>
        case "radio":
        return <>
            <input
            id={id}
            name={name}
            type={tipo}
            {...props} />
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
        </>
        case "checkbox":
        return <>
            <input
            id={id}
            name={name}
            type={tipo}
            {...props} />
            <label htmlFor={id} className="checkboxMargin"><Typography fontFamily={'poppins'}>{label}</Typography></label><br></br>
        </>       
        default:
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            className={classe? "input " + classe : "input"}
            {...props} />
        </> 
    }
}

export default Campo;