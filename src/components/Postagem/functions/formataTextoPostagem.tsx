import { Typography } from "@mui/material";

export function formataTextoPostagem(texto: string): JSX.Element {
    let textoFormatado = <Typography fontFamily={'source-serif-4'} fontSize={20}>{texto}</Typography>;
    if (texto.length > 300) {
        textoFormatado = <><Typography fontFamily={'source-serif-4'} fontSize={20}>{texto}</Typography><Typography fontFamily={'poppins'} variant={"body1"} fontWeight={'500'}>Clique no texto para ler a postagem completa.</Typography></>;
    }
    return textoFormatado;
}