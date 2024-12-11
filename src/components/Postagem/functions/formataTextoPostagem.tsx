import { Typography } from "@mui/material";

export function formataTextoPostagem(texto: string): JSX.Element {
    const limite = 300;
    
    let textoFormatado = <Typography fontFamily={'source-serif-4'} fontSize={20}>{texto}</Typography>;
    if (texto.length > limite) {
        textoFormatado = <><Typography fontFamily={'source-serif-4'} fontSize={20}>{texto.slice(0, limite) + "..."}</Typography><Typography fontFamily={'poppins'} variant={"body1"} fontWeight={'bold'}>Clique no texto para ler a postagem completa.</Typography></>;
    }
    return textoFormatado;
}