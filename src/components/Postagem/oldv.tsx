import BtnInteracao from "../BtnInteracao";
import Broche from "../Broche";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileOpenIcon from '@mui/icons-material/FileOpen';

interface PostagemProps {
    type: string,
    ftPerfil: string,
    nmAutor: string,
    escolaridade: string,
    dcBroche: number,
    dcTags: string,
    dcTitulo: string,
    textPost: string, 
    lkDownload: string,
    quantityLikes: string,
    nbComentarios: string
}

const Postagem: React.FC<PostagemProps> = ({ftPerfil, nmAutor, escolaridade, dcBroche, textPost, type, dcTags, dcTitulo, lkDownload, nbComentarios, quantityLikes}) => {
    switch (type) {
        case "0":
            return <>
                <div id="containerPostagem">
                    <div id="infoPostagem">
                        <img src={ftPerfil} alt="" />
                        <Typography>{nmAutor}</Typography>
                        <Broche tipo={dcBroche} />
                        <Typography>{escolaridade}</Typography>
                    </div>
                    <div id="opcoesMenu">
                        <ArrowDropDownIcon />
                    </div>
                    <div id="conteudoPostagem">
                        <Typography>{dcTitulo}</Typography>
                        <Typography>{dcTags}</Typography>
                        <Typography>{textPost}</Typography>
                        
                        <div id="downloadPostagem">
                            <FileOpenIcon />
                            <Typography>{lkDownload}</Typography>
                        </div>
                    </div>
                    <div id="interacaoPostagem">
                        <BtnInteracao tipo="curtida" curtidas={quantityLikes}/>
                        <BtnInteracao tipo="comentario" curtidas={nbComentarios}/>
                    </div>
                </div>
            </>
        case "1":
            return <>
                <div id="containerPostagem">
                    <div id="infoPostagem">
                        <img src={ftPerfil} alt="" />
                        <Typography>{nmAutor}</Typography>
                        <Broche tipo={dcBroche} />
                        <Typography>{escolaridade}</Typography>
                    </div>
                    <div id="opcoesMenu">
                        <ArrowDropDownIcon />
                    </div>
                    <div id="conteudoPostagem">
                        <Typography>{textPost}</Typography>
                        
                        <div id="downloadPostagem">
                            <FileOpenIcon />
                            <Typography>{lkDownload}</Typography>
                        </div>
                    </div>
                    <div id="interacaoPostagem">
                        <BtnInteracao tipo="curtida" curtidas={quantityLikes}/>
                        <BtnInteracao tipo="comentario" curtidas={nbComentarios}/>
                    </div>
                </div>
            </>
    }
}