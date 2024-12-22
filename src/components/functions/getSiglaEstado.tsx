//TODO: Atualizar para requisição do banco de dados (recebendo o número e pesquisando no banco)
export function getSiglaEstado(e: number): string {
    let estado = "";
    if (e == 1) { estado = "SP"; }
    return estado;
}
