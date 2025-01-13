import { Typography } from "@mui/material";
import MenuCategorias from "../../components/MenuCategorias";
import MenuPrincipal from "../../components/MenuPrincipal";
import Navbar from "../../components/Navbar";
import MenuPostagem from "../../components/MenuPostagens";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import '../../styles/estruturas.css';
import './index.css';
import { getRequest } from "../../hooks/useRequests";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const PaginaInicial: React.FC = () => {
    const [ isLoading, setLoading ] = useState(false);
    const [ perfil, setPerfil ] = useState(null);
    
    const infoUser = async () => {
        setLoading(true);
        var id = localStorage.getItem('idUsuario');
        try {
            let response = await getRequest(`/User/perfil/${id}`);

            if (response) {
                setPerfil(response);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        infoUser();
    }, [])

    return <>
        <Navbar />
        <div className="grid">
            <aside className="grid-b">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias utilizadas</Typography>
                    <MenuCategorias />
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a">
                {isLoading ? <Loading text='Carregando seu feed de postagens...'/> : <MenuPostagem type="feed" user={perfil} />}
            </main>
        </div>
</>
}

export default PaginaInicial;