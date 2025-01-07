function formatarData(dataStr: string): string {
    const data = new Date(dataStr);
    const agora = new Date();
    const diff = Math.abs(agora.getTime() - data.getTime());

    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(dias / 365);

    if (anos > 0) {
        return `${anos}a`;
    } else if (meses > 0) {
        return `${meses}m`;
    } else if (semanas > 0) {
        return `${semanas}s`;
    } else if (dias > 0) {
        return `${dias}d`;
    } else {
        return '0d';
    }
}

export default formatarData;
