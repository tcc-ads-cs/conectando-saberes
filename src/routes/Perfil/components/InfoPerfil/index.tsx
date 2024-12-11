import { Typography } from "@mui/material"
import Broche from "../../../../components/Broche"
import { formataNumero } from "../../../../components/functions/formataNumero";
import { getGrauEscolaridade } from "../../../../components/functions/getGrauEscolaridade";
import { getSiglaEstado } from "../../../../components/functions/getSiglaEstado";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './index.css';

interface InfoPerfilProps {
    req: string
}

const seguirUsuario = async () => {
    console.log('a');
}

const InfoPerfil: React.FC<InfoPerfilProps> = ({req}) => {
    let obj = JSON.parse(req);
    
    return <>
        <div className="infoUsuario">
                <Typography className="bold" fontFamily={'poppins'} variant="h2">{obj.nmUsuario}</Typography>
                <Typography fontFamily={'poppins'}>{getGrauEscolaridade(obj.descTitulo)} • {obj.nmInstituicao}</Typography>
                <Typography fontFamily={'poppins'}>{(obj.dtNasc).split('T')[0].split('-').reverse().join('/')}</Typography>
                <Typography fontFamily={'poppins'}>{obj.cidade.name}/{getSiglaEstado(obj.cidade.estado)}</Typography>
                <Typography fontFamily={'poppins'}>{formataNumero(obj.seguidores) + " seguidores"}</Typography>
                <Typography fontFamily={'poppins'}>{formataNumero(obj.seguindo) + " seguindo"}</Typography>
                <Broche tipo={obj.tpPreferencia}/>
            </div>
            <div className="contatoUsuario">
                <img src={obj.ftPerfil} alt="" />
                <div className="ctaUsuario">
                <button id="btnSeguir "className="iconInteracao" onClick={seguirUsuario}><PersonAddIcon /></button>
                <button className="btnUsuario" type="button" onClick={() => {navigator.clipboard.writeText(obj.email)}}><Typography fontFamily={'poppins'}>Contato</Typography></button>
                </div>
        </div>
    </>
}

export default InfoPerfil;