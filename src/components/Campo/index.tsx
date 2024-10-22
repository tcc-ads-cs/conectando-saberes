import { Typography } from "@mui/material";

export interface CampoProps {
    id: string,
    tipo: string,
    label: string,
    name: string,
    classe?: string
    placeholder?: string,

}

const Campo: React.FC<CampoProps> = ({classe, id, label, name, placeholder, tipo}) => {    
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
            className={classe? "input " + classe : "input"} />
        </>
        case "password":
        return <>
            <label className="inputLabel" htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
            <input
            required
            id={id}
            name={name}
            type={tipo}

            // Alinhar com o Ronald ⬇️
            maxLength={20}

            placeholder={placeholder}
            className={classe? "input " + classe : "input"} />
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
            className={classe? "input " + classe : "input"} />
        </>
        case "radio":
        return <>
            <input
            id={id}
            name={name}
            type={tipo}
            placeholder={placeholder} />
            <label htmlFor={id}><Typography fontFamily={'poppins'}>{label}</Typography></label>
        </>
        case "checkbox":
        return <>
            <input
            id={id}
            name={name}
            type={tipo}
            placeholder={placeholder} />
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
            className={classe? "input " + classe : "input"} />
        </> 
    }
}

export default Campo;