import { Typography } from '@mui/material';
import Campo from '../../../../components/Campo';

import * as categorias from '../../../../assets/tags.json';
const obj = JSON.parse(JSON.stringify(categorias)).categorias;

const FormCadastro: React.FC = () => { 
    return (
        <form
        method=""
        action=""
        >
            <div id="etapa1" className="inputContainer">
                <Campo id="inputEmail" tipo="email" label="E-mail:" name="IEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br"/>
                <Campo id="inputConfEmail" tipo="email" label="Digite seu e-mail novamente:" name="IConfEmail" classe="inputMargin" placeholder="seuemail@ifsp.edu.br"/>
                <Campo id="inputSenha" tipo="password" label="Senha:" name="ISenha" classe="inputMargin" placeholder="********"/>
                <Campo id="inputConfSenha" tipo="password" label="Digite sua senha novamente:" name="IConfSenha" classe="inputMargin" placeholder="********"/>
            </div>

            <div id="etapa2" className="inputContainer">
                <Campo id="inputNomeComp" tipo="text" label="Nome Completo:" name="INomeComp" classe="inputMargin" />
                <label htmlFor="inputNomeSocial" className='inputLabel'><Typography fontFamily={'poppins'}>Nome Social:</Typography></label>
                <input type="text" id="inputNomeSocial" name="INomeSocial" className='input inputMargin' />
                <Typography id="obsNomeSocial" fontFamily={'poppins'}>O "nome social" é o nome que a pessoa travesti ou transexual prefere ser chamada e possui a mesma proteção concedida ao nome de registro, assegurada pelo Decreto nº 8.727/2016.</Typography>
                
                <label htmlFor="inputAvatar" className='inputLabel'><Typography fontFamily={'poppins'}>Selecione sua foto de perfil:</Typography></label>
                <input type="file" id="inputAvatar" name="IAvatar" className='input inputMargin' required />
                {/*TODO: Entender como salvar o arquivo selecionado */}

                <Campo id="inputDtNasc" tipo="date" label="Data de Nascimento:" name="IDtNasc" classe="inputMargin"/>
                {/*TODO: Implementar o cenário de erro: https://www.notion.so/arielmartins/Detalhamento-de-Processos-018145894451445aa06d3aa88ecb343d?pvs=4#ebbd36482bce4cc2862521e0df73045c */}
                
                <label className='inputLabel' htmlFor="grauEsc"><Typography fontFamily={'poppins'}>Grau de Escolaridade:</Typography></label>
                <select id="grauEsc" className="input inputMargin" name="IGrauEsc">
                    <option value="emt">Ensino Médio/Técnico</option>
                    <option value="grad">Graduação (Bacharel, Tecnológo ou Licenciatura)</option>
                    <option value="pos-grad">Pós-graduação</option>
                    <option value="mba">MBA</option>
                    <option value="mest">Mestrado</option>
                    <option value="dout">Doutorado</option>
                    <option value="pos-doc">Pós Doutorado</option>
                </select>

                <div className="inputMargin radio">
                    <Campo id="inputSitCurs" tipo="radio" label="Cursando" name="ISituacao" />
                    <Campo id="inputSitComp" tipo="radio" label="Completo" name="ISituacao" />
                </div>
                
                <Campo id="inputInst" tipo="text" label="Última instituição que frequentou:" name="IInst" classe="inputMargin" placeholder="IFSP - Campus Cubatão"/>
                <Campo id="inputCidade" tipo="text" label="Cidade onde reside:" name="ICidade" classe="inputMargin" />
                <Campo id="inputEstado" tipo="text" label="Sigla do estado onde reside:" name="IEstado" classe="inputMargin" placeholder="Ex.: SP"/>
            </div>

            <div id="etapa3" className="inputContainer">
                <label className='inputLabel' htmlFor="inputPrefer"><Typography fontFamily={'poppins'}>O que você busca na plataforma?</Typography></label>
                <select id="inputPrefer" className="input inputMargin select" name="IPrefer">
                    <option value="orientado">Oportunidades como bolsista ou voluntária de iniciação científica.</option>
                    <option value="orientador">Candidatos para orientação de iniciação científica.</option>
                    <option value="pesquisa">Encontrar referências bibliográficas.</option>
                    <option value="ic" defaultChecked={true}>Conhecer mais sobre IC e a plataforma.</option>
                </select>

                <Typography className='inputLabel' fontFamily={'poppins'}>Marque 3 categorias que te interessem:</Typography>
                    <div id="categoriasContainer" className="inputMargin inputLabel">
                        {
                            obj.map((e: any) => {
                                return <Campo key={e.dcCategoria} id={e.dcCategoria} tipo="checkbox" label={e.nmCategoria} name={e.dcCategoria} />
                            })
                        }
                    </div>
            </div>

            <button type='submit' className="btnForm submit"><Typography fontFamily={'poppins'} fontWeight={'bold'}>Finalizar</Typography></button>
        </form>
    );
}

// Devolutiva ok! (IEmail=jsgjfbg%40usdbsdj.com&IConfEmail=jsgjfbg%40usdbsdj.com&ISenha=sdgffg&IConfSenha=ghfghfhg&INomeComp=dgdfgd&INomeSocial=&IAvatar=01.png&IDtNasc=8454-04-05&IGrauEsc=emt&ISituacao=on&IInst=dfgdfg&ICidade=dfgdfg&IEstado=dfgdfg&IPrefer=orientado&matematica=on)

export default FormCadastro;