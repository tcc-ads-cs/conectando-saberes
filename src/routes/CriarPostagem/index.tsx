import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuPrincipal from "../../components/MenuPrincipal";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CriarPostagem: React.FC = () => {
    const [formSelecionado, setFormSelecionado] = useState<string>("postagem");

    const renderizarFormulario = () => {
        switch (formSelecionado) {
            case "simples":
                return "<FormPostagemSimples />;"
            case "completa":
                return "<FormPostagemCompleta />;"
            case "topico":
                return "<FormTopico />;"
            case "artigo":
                return "<FormArtigo />;"
            case "link":
                return "<FormLink />;"
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
                    <Typography fontFamily={'poppins'} variant='h3'>Vamos lá, primeiro escolha o tipo de postagem que deseja publicar. <Link to='/postagem/guia-postagens'>Caso esteja em dúvida, clique neste link para acessar nosso guia de postagens.</Link></Typography>
                    
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
                        <button className='btnFormPost' onClick={() => setFormSelecionado("link")}>
                            Link
                        </button>
                    </div>
                    {renderizarFormulario()}
                </main>
            </div>
        </>
    );
};

export default CriarPostagem;