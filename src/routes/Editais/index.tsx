import { Typography } from "@mui/material";
import MenuCategorias from "../../components/MenuCategorias";
import MenuPrincipal from "../../components/MenuPrincipal";
import MenuRecomendacoes from "../../components/MenuRecomendacoes";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { getRequest } from "../../hooks/useRequests";

//TODO: Atualizar para requisição do banco de dados.
import * as categorias from '../../assets/tags.json';
import ProgramaIndicado from "./components/ProgramaIndicado";
let jsonCat = JSON.stringify(categorias);

const Editais: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [instUsuario, setInstUsuario] = useState<any[]>([]);
    
    let getInfoUser = async () => {
        const idPerfil = localStorage.getItem('idUsuario') || '';
        
        try {
            setIsLoading(true);
            let response = await getRequest(`/User/perfil/${idPerfil}`);
            
            if (response) {                
                var infos: any[] = [];
                infos.push((response.nmUsuario).split(' ')[0]);
                infos.push(response.grauEscolaridade);
                infos.push(response.idCampus);
                infos.push(response.nmInstituicao);
                setInstUsuario(infos);
            } else {
                console.log('Resposta não OK:', response);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    let infoUniversidade = (info: any[]) => {
        switch (info[2]) {
            case 1:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://unifesp.br/reitoria/prograd/programas-institucionais/pibic-pibiti-pibic-af#O%20que%20%C3%A9%20o%20programa">https://unifesp.br/reitoria/prograd/programas-institucionais/pibic-pibiti-pibic-af#O%20que%20%C3%A9%20o%20programa</a></Typography>
                    <button onClick={() => window.location.href = 'mailto:contato@unifesp.br'}>Enviar Email</button>
                </>
            case 2:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://www.unisantos.br/pesquisa/comite-de-iniciacao-cientifica/bolsas-de-iniciacao-cientifica">https://www.unisantos.br/pesquisa/comite-de-iniciacao-cientifica/bolsas-de-iniciacao-cientifica</a></Typography>
                    <button onClick={() => window.location.href = 'mailto:coic.ipeci@unisantos.br'}>Enviar Email</button>
                </>
            case 3:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://www.unip.br/pesquisa/bolsas_iniciacao_cientifica/index.aspx">https://www.unip.br/pesquisa/bolsas_iniciacao_cientifica/index.aspx</a></Typography>
                    <Typography fontFamily={'poppins'}>Link para o envio de dúvidas: <a href="https://www.unip.br/universidade/ouvidoria.aspx">https://www.unip.br/universidade/ouvidoria.aspx</a></Typography>
                </>
            case 4:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://portal.unimes.br/centro-de-pesquisa">https://portal.unimes.br/centro-de-pesquisa</a></Typography>
                    <button onClick={() => window.location.href = 'mailto:cpq@unimes.br'}>Enviar Email</button>
                </>
            case 5:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://www.cps.sp.gov.br/tag/iniciacao-cientifica">https://www.cps.sp.gov.br/tag/iniciacao-cientifica</a></Typography>
                    <Typography fontFamily={'poppins'}>Link para o envio de dúvidas: <a href="https://fala.sp.gov.br">https://fala.sp.gov.br</a></Typography>
                </>
            case 6:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://www.unip.br/pesquisa/bolsas_iniciacao_cientifica/index.aspx">https://www.unip.br/pesquisa/bolsas_iniciacao_cientifica/index.aspx</a></Typography>
                    <Typography fontFamily={'poppins'}>Link para o envio de dúvidas: <a href="https://www.unip.br/universidade/ouvidoria.aspx">https://www.unip.br/universidade/ouvidoria.aspx</a></Typography>
                </>
            case 7:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://www.cps.sp.gov.br/tag/iniciacao-cientifica">https://www.cps.sp.gov.br/tag/iniciacao-cientifica</a></Typography>
                    <Typography fontFamily={'poppins'}>Link para o envio de dúvidas: <a href="https://fala.sp.gov.br">https://fala.sp.gov.br</a></Typography>
                </>
            case 8:
                return <>
                    <Typography fontFamily={'poppins'}>{info[3]}</Typography>
                    <Typography fontFamily={'poppins'}>Link para a página de informações de IC no portal da sua faculdade: <a href="https://cbt.ifsp.edu.br/index.php/iniciacao-cientifica">https://cbt.ifsp.edu.br/index.php/iniciacao-cientifica</a></Typography>
                    <button onClick={() => window.location.href = 'mailto:contato@unifesp.br'}>Enviar Email</button>

                    <ProgramaIndicado />
                </>
            default:
                return 'Ainda não temos informações sobre esse campus na nossa base :(';
        }
    }

    useEffect(() => {
        getInfoUser();
    }, []);
    
    return <>
        <Navbar />
        <div className="grid">
            <aside className="grid-b">
                <section>
                    <MenuPrincipal />
                </section>
                <section className="containerMenuCategorias">
                    <Typography fontFamily={'poppins'} variant={'h2'} fontWeight={500}>Categorias utilizadas</Typography>
                    <MenuCategorias req={jsonCat}/>
                </section>
                <section className="containerMenuCategorias">
                    <MenuRecomendacoes />
                </section>
            </aside>
            <main className="grid-a">
                <Typography fontFamily={'poppins'} variant='h3' fontWeight={'500'}> Dicas e Informações de Iniciação Científica</Typography>
                <div className="infosEditais">
                    <Typography fontFamily={'poppins'} variant='subtitle1'>Aqui você nossa curadoria de informações sobre oportunidades de Iniciação Científica seja, no seu campus ou outros.</Typography>
                    <Typography fontFamily={'poppins'} variant='h4'>O que é Iniciação Científica?</Typography>
                    <Typography fontFamily={'poppins'}>Apelidada carinhosamente por nós como IC, a Iniciação Científica, segundo o Conselho Nacional de Desenvolvimento Científico e Tecnológico, tem como objetivo, despertar vocação científica e incentivar talentos potenciais entre estudantes de graduação universitária, mediante participação em projeto de pesquisa, orientados por pesquisador qualificado.</Typography>
                    <Typography fontFamily={'poppins'} variant='h4'>Quais os benefícios de participar de um projeto de IC?</Typography>
                    <Typography fontFamily={'poppins'}>De acordo com a Universidade Federal de Goiás (UFG), a iniciação científica não se destina apenas àqueles que desejam seguir carreira acadêmica; ela desenvolve habilidades como resolução de questões complexas, pensamento crítico, organização, escrita, comunicação de ideias, desenvolvimento de projetos e gerenciamento de tempo. Essas competências são valiosas em qualquer trajetória profissional escolhida pelo estudante.</Typography>
                </div>
                <div className="infosEditaisUser" style={{marginBottom: '5em'}}>
                    <Typography fontFamily={'poppins'} variant='h4'>Iniciação Científica para você</Typography>
                    { isLoading ? <Loading text="Carregando as informações de IC na sua faculdade." /> :
                    <>
                    <Typography fontFamily={'poppins'} variant='h5'>Essas são as informações de IC na sua faculdade, {instUsuario[0]}.</Typography>
                    {infoUniversidade(instUsuario)}
                    </>}
                </div>
            </main>
        </div>
    </>
}

export default Editais;
