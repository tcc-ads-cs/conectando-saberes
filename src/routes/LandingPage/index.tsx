import { Typography } from "@mui/material";
import { ArrowOutward, Hive, Search, Tv } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"
import RodapeDA from "../../components/RodapeDA";

import './index.css';

const LandingPage: React.FC = () => {
    return <>
    <Navbar />
    <div className="BGGradiente landingPage">
        <main className="heroSection">
            <div className="containerHeroSection">
                <div className="tituloHeroSection">
                    <Typography fontFamily='poppins' variant="h1">Chegou sua nova comunidade de...</Typography>
                    <Typography fontFamily='poppins' variant="h1">Iniciação Científica.</Typography>
                </div>
                <Typography fontFamily='poppins' className="textoHeroSection">Interaja. Engaje. Comente. Veja. Compartilhe.</Typography>
                <Link to={"/login"} className="ctaHeroSection"><ArrowOutward /></Link>
            </div>
            <img src="https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </main>
        <section>
            <Typography fontFamily='poppins' variant="h2">O que nossa plataforma oferece...</Typography>
            <Typography fontFamily='poppins' className="subtituloLandingPage">Aqui você conhece nossas principais funcionalidades.</Typography>
            <div className="funcionalidades">
                <article className="funcionalidadeLandingPage">
                    <div className="tituloFuncionalidadeLandingPage">
                        <Tv />
                        <Typography fontFamily='poppins' variant="h3" fontWeight={'bold'}>Mostra e Interações</Typography>
                    </div>
                    <Typography fontFamily='poppins'>Aqui você pode compartilhar seus trabalhos acadêmicos, colocando-os à mostra como uma “vitrine acadêmica” ou portfólio. Ou então, está com inspiração para ajudar os outros? Participe do nosso fórum!</Typography>
                </article>
                <article className="funcionalidadeLandingPage">
                    <div className="tituloFuncionalidadeLandingPage">
                        <Search />
                        <Typography fontFamily='poppins' variant="h3" fontWeight={'bold'}>Busca por referências</Typography>
                    </div>
                    <Typography fontFamily='poppins'>Aqui você encontra uma categorização de trabalhos de iniciação científica mais flexível, possibilitando uma pesquisa otimizada de trabalhos para ler, salvar ou até referenciar no seu trabalho.</Typography>
                </article>
                <article className="funcionalidadeLandingPage">
                    <div className="tituloFuncionalidadeLandingPage">
                        <Hive />
                        <Typography fontFamily='poppins' variant="h3" fontWeight={'bold'}>Ecossistema</Typography>
                    </div>
                    <Typography fontFamily='poppins'>Aqui você encontra um ecossistema de pessoas interessadas em Iniciação Científica, sendo elas pessoas orientadas, orientadoras, entusiastas, e muito mais!</Typography>
                </article>
            </div>
        </section>
        {/* TODO: Colocar as fotos do pessoal do grupo */}
        <section className="grupoLandingPage">
            <Typography fontFamily='poppins' variant="h2">Nossa equipe &lt;3</Typography>
            <Typography fontFamily='poppins' className="subtituloLandingPage">Aqui você conhece o grupo de TCC do curso de ADS do IFSP-CBT responsável pela plataforma!</Typography>
            <article className="integranteLandingPage">
                <img src="https://i.postimg.cc/rw69Y8W1/Ariel.jpg" alt="" />
                <Typography fontFamily='poppins' variant="h3">Ariel Martins</Typography>
                <Typography fontFamily='poppins'>UX/UI Designer</Typography>
                <Typography fontFamily='poppins'>Dev Front-End</Typography>
            </article>
            <article className="integranteLandingPage">
                <img src="https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Typography fontFamily='poppins' variant="h3">Melinda Horus</Typography>
                <Typography fontFamily='poppins'>Analista de Requisitos</Typography>
                <Typography fontFamily='poppins'>Dev Back-End</Typography>
            </article>
            <article className="integranteLandingPage">
                <img src="https://i.postimg.cc/Hs822JJW/Leon.jpg" alt="" />
                <Typography fontFamily='poppins' variant="h3">Fabio Leon</Typography>
                <Typography fontFamily='poppins'>Suporte/Apoio</Typography>
                <Typography fontFamily='poppins'>Suporte Back-End</Typography>
            </article>
            <article className="integranteLandingPage">
                <img src="https://i.postimg.cc/9FznCHGn/Ronald.jpg" alt="" />
                <Typography fontFamily='poppins' variant="h3">Ronald Pereira</Typography>
                <Typography fontFamily='poppins'>Arquiteto de Banco de Dados</Typography>
                <Typography fontFamily='poppins'>Dev Back-End</Typography>
            </article>
        </section>
    </div>
    <RodapeDA />
    </>
}

export default LandingPage;