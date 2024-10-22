import { Typography } from "@mui/material"
import Broche from "../../../../components/Broche"
import { formataNumero } from "../../../../components/formataNumero";

import './index.css';

interface InfoPerfilProps {
    req: string
}

function getGrauEscolaridade(grau: number): string {
    let grauEscolaridade = ""
    if (grau == 0) { grauEscolaridade = "Ensino Médio" }
    else if (grau == 1) { grauEscolaridade = "Ensino Superior" }
    else if (grau == 2) { grauEscolaridade = "Pós-Graduação" }
    else if (grau == 3) { grauEscolaridade = "MBA" }
    else if (grau == 4) { grauEscolaridade = "Mestrado" }
    else if (grau == 5) { grauEscolaridade = "Doutorado" }
    else if (grau == 6) { grauEscolaridade = "Pós Doutorado" }
    return grauEscolaridade;
}

function getSiglaEstado(e: number): string {
    let estado = ""
    if (e == 1) { estado = "SP"}
    return estado;
}

const InfoPerfil: React.FC<InfoPerfilProps> = ({req}) => {
    let obj = JSON.parse(req);
    
    return <>
        <div className="containerInfoUsuario">
            <div className="infoUsuario">
                <Typography className="bold" fontFamily={'poppins'} variant="h2">{obj.nmUsuario}</Typography>
                <Typography fontFamily={'poppins'}>{getGrauEscolaridade(obj.descTitulo)}</Typography>
                <Typography fontFamily={'poppins'}>{(obj.dtNasc).split('T')[0].split('-').reverse().join('/')}</Typography>
                <Typography fontFamily={'poppins'}>{obj.cidade.name}/{getSiglaEstado(obj.cidade.estado)}</Typography>
                <Typography fontFamily={'poppins'}>{formataNumero(obj.seguidores) + " seguidores"}</Typography>
                <Typography fontFamily={'poppins'}>{formataNumero(obj.seguindo) + " seguindo"}</Typography>
                <Broche tipo={obj.tpPreferencia}/>
            </div>
            <div className="contatoUsuario">
                <img src="https://yavuzceliker.github.io/sample-images/image-1.jpg" alt="" />
                <button className="btnUsuario" type="reset" onClick={() => {navigator.clipboard.writeText(obj.email)}}><Typography fontFamily={'poppins'}>Contato</Typography></button>
            </div>
        </div>
    </>
}

export default InfoPerfil;