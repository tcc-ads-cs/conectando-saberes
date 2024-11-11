let btnA = document.getElementById('btnPostagens');
let btnCo = document.getElementById('btnComunidade');
let btnCa = document.getElementById('btnCategorias');

export function togglePostagem() {
    btnA?.classList.toggle("linkSelecionado", true);
    btnCo?.classList.toggle("linkSelecionado", false);
    btnCa?.classList.toggle("linkSelecionado", false);
}

export function toggleComunidade() {
    btnCo?.classList.toggle("linkSelecionado", true);
    btnA?.classList.toggle("linkSelecionado", false);
    btnCa?.classList.toggle("linkSelecionado", false);
}

export function toggleCategoria() {
    btnA?.classList.toggle("linkSelecionado", false);
    btnCo?.classList.toggle("linkSelecionado", false);
    btnCa?.classList.toggle("linkSelecionado", true);
}