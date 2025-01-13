import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import RodapeDA from "../../components/RodapeDA";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const VerificarEmail: React.FC = () => {
    const [ isLoading, setLoading ] = useState(false);
    
    const handleVerify = async () => {
        setLoading(true);
        try {
            //TODO: Adicionar requisição para verificar e-mail.
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleVerify();
    })
    
    return <>
    <Navbar />
        <div className="cta">
            <Typography className="text" fontFamily={'poppins'}>Deseja logar no CS? <Link to='/login'><em>Clique aqui</em></Link></Typography>
        </div>
        <main className="BGGradiente checkinContainer login">
            <div className="formContainer">
                <div className="formHeader">
                    <Typography className="titulo" variant='h2' fontFamily={'poppins'}>Falta pouco para você conhecer nossa comunidade!</Typography>
                    <Typography fontFamily={'poppins'}>{isLoading ? 'Aguarde a verificação do seu e-mail.' : 'E-mail verificado!'}</Typography>
                </div>
                { isLoading ? <Loading text='Aguarde...'/> : <></>}
            </div>
        </main>
        <RodapeDA />
    </>
}

export default VerificarEmail;