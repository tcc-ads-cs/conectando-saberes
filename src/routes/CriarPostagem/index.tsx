import React, { useState } from "react";
import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import MenuPrincipal from "../../components/MenuPrincipal";
import FormPostagemSimples from "./components/FormPostagemSimples";
import FormTopico from "./components/FormTopico";
import FormArtigo from "./components/FormArtigo";
import FormPostagemCompleta from "./components/FormPostagemCompleta";
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TaskIcon from '@mui/icons-material/Task';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import './index.css';

const CriarPostagem: React.FC = () => {
    const [formSelecionado, setFormSelecionado] = useState<string>("postagem");

    const renderizarFormulario = () => {
        switch (formSelecionado) {
            case "simples":
                return <FormPostagemSimples />;
            case "completa":
                return <FormPostagemCompleta />;
            case "topico":
                return <FormTopico />;
            case "artigo":
                return <FormArtigo />;
            default:
                return <></>
        }
    };

    return (
        <>
            <Navbar />
            <div className="grid">
                <aside className="grid-b">
                    <MenuPrincipal />
                </aside>
                <main className="grid-a formsPostagens">
                    <Typography fontFamily={'poppins'} variant='h2' fontWeight={'500'}>Publique sua postagem!</Typography>
                    <Typography fontFamily={'poppins'} variant='h3' className="mBottom-16">Vamos lá, primeiro escolha o tipo de postagem que deseja publicar.</Typography>
                    
                    <div className="btnPostagens">
                        <button className='btnFormPost' onClick={() => setFormSelecionado("simples")}>
                            <PostAddIcon />
                            <Typography fontFamily={'poppins'} fontWeight={'500'}>Postagem<br></br>Simples</Typography>
                        </button>
                        <button className='btnFormPost' onClick={() => setFormSelecionado("completa")}>
                            <AssignmentTurnedInIcon />
                            <Typography fontFamily={'poppins'} fontWeight={'500'}>Postagem<br></br>Completa</Typography>
                        </button>
                        <button className='btnFormPost' onClick={() => setFormSelecionado("topico")}>
                            <QuestionAnswerIcon />
                            <Typography fontFamily={'poppins'} fontWeight={'500'}>Tópico</Typography>
                        </button>
                        <button className='btnFormPost' onClick={() => setFormSelecionado("artigo")}>
                            <TaskIcon />
                            <Typography fontFamily={'poppins'} fontWeight={'500'}>Artigo</Typography>
                        </button>
                    </div>
                    {renderizarFormulario()}
                </main>
            </div>
        </>
    );
};

export default CriarPostagem;