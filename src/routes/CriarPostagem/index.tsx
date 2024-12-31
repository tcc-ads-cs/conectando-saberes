import React, { useState } from "react";
import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import MenuPrincipal from "../../components/MenuPrincipal";
import FormPostagemSimples from "./components/FormPostagemSimples";
import FormTopico from "./components/FormTopico";
import FormArtigo from "./components/FormArtigo";
import FormPostagemCompleta from "./components/FormPostagemCompleta";

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
                return "<FormPostagem />;"
        }
    };

    return (
        <>
            <Navbar />
            <div className="grid">
                <aside className="grid-b">
                    <MenuPrincipal />
                </aside>
                <main className="grid-a forms">
                    <Typography fontFamily={'poppins'} variant='h2'>Publique sua postagem!</Typography>
                    <Typography fontFamily={'poppins'} variant='h3'>Vamos lá, primeiro escolha o tipo de postagem que deseja publicar.</Typography>
                    
                    <div className="botoes">
                        <button className='btnFormPost' onClick={() => setFormSelecionado("simples")}>
                            Postagem Simples
                        </button>
                        <button className='btnFormPost' onClick={() => setFormSelecionado("completa")}>
                            Postagem Completa
                        </button>
                        <button className='btnFormPost' onClick={() => setFormSelecionado("topico")}>
                            Tópico
                        </button>
                        <button className='btnFormPost' onClick={() => setFormSelecionado("artigo")}>
                            Artigo
                        </button>
                    </div>
                    {renderizarFormulario()}
                </main>
            </div>
        </>
    );
};

export default CriarPostagem;