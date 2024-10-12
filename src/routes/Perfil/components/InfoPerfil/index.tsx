import { Typography } from "@mui/material"
import Broche from "../../../../components/Broche"

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

const InfoPerfil: React.FC<InfoPerfilProps> = ({req}) => {
    let obj = JSON.parse(req);
    
    return <>
        <div id="infoUsuario">
            <Typography fontFamily={'poppins'} variant="h2">{obj.nmUsuario}</Typography>
            <Typography fontFamily={'poppins'}>{getGrauEscolaridade(obj.descTitulo)}</Typography>
            <Typography fontFamily={'poppins'}>{(obj.dtNasc).split('T')[0].split('-').reverse().join('/')}</Typography>
            <Typography fontFamily={'poppins'}>{obj.cidade.name}</Typography>
            <Typography fontFamily={'poppins'}>{obj.seguidores + " Seguidores"}</Typography>
            <Typography fontFamily={'poppins'}>{obj.seguindo + " Seguindo"}</Typography>
            <Broche tipo={obj.tpPreferencia}/>
        </div>
        <div id="contatoUsuario">
            <img src="https://yavuzceliker.github.io/sample-images/image-1.jpg" alt="" />
            <button type="reset" onClick={() => {navigator.clipboard.writeText(obj.email)}}>Contato</button>
        </div>
    </>
}

export default InfoPerfil;