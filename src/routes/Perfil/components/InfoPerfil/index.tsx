import { Typography } from "@mui/material"
import Broche from "../../../../components/Broche"
import { formataNumero } from "../../../../components/functions/formataNumero";
import { getGrauEscolaridade } from "../../../../components/functions/getGrauEscolaridade";
import { getSiglaEstado } from "../../../../components/functions/getSiglaEstado";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from "react";
import './index.css';
import { getRequest } from "../../../../hooks/useRequests";
import { useParams } from "react-router-dom";

//TODO: Alterar para o link da foto de perfil do usuário.
const InfoPerfil = ({ obj }: { obj: any }) => {
    const [copied, setCopied] = useState(false);
    const { idPerfil } = useParams();
    const handleCopy = () => {
        window.location.href = `mailto:${obj.email}`;
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [isDisabled, setIsDisabled] = useState(false);

    const seguirUsuario = async () => {
        try {
            let response = await getRequest(`/User/seguir/${idPerfil}`, {
                'token': localStorage.getItem('token') || ''
            })
            if (response.status == 200) {
                alert('Usuário seguido com sucesso');
                setIsDisabled(true);
            } else {
                alert(`Erro ao seguir usuário.`);
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <>
            {obj && <>
                <div className="infoUsuario">
                <Typography className="bold" fontFamily={'poppins'} variant="h2">{obj.nmUsuario}</Typography>
                <Typography fontFamily={'poppins'}>{getGrauEscolaridade(obj.grauEscolaridade)} • {obj.nmInstituicao}</Typography>
                <Typography fontFamily={'poppins'}>{(obj.dtNasc).split('T')[0].split('-').reverse().join('/')}</Typography>
                <Typography fontFamily={'poppins'}>{getSiglaEstado(obj.cidade)}</Typography>
                <Typography fontFamily={'poppins'}>{formataNumero(obj.seguidores) + " seguidores"}</Typography>
                <Typography fontFamily={'poppins'}>{formataNumero(obj.seguindo) + " seguindo"}</Typography>
                <Broche tipo={obj.tpPreferencia} />
            </div>
            <div className="contatoUsuario">
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Ícone de perfil" />
                <div className="ctaUsuario">
                    <button id="btnSeguir" className={`iconInteracao`} onClick={seguirUsuario} disabled={isDisabled ? true : false}><PersonAddIcon /></button>
                    <button className={`btnUsuario ${copied ? 'copied' : ''}`} type="button" onClick={handleCopy}>
                        <Typography fontFamily={'poppins'}> {copied ? 'Abrindo...' : 'E-mail'}</Typography>
                    </button>
                </div>
            </div>
            </>}
        </>
    );
};

export default InfoPerfil;