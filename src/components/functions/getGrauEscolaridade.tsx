export function getGrauEscolaridade(grau: number): string {
    let grauEscolaridade = "";
    if (grau == 0) { grauEscolaridade = "Ensino Médio"; }
    else if (grau == 1) { grauEscolaridade = "Ensino Superior"; }
    else if (grau == 2) { grauEscolaridade = "Pós-Graduação"; }
    else if (grau == 3) { grauEscolaridade = "MBA"; }
    else if (grau == 4) { grauEscolaridade = "Mestrado"; }
    else if (grau == 5) { grauEscolaridade = "Doutorado"; }
    else if (grau == 6) { grauEscolaridade = "Pós Doutorado"; }
    return grauEscolaridade;
}
