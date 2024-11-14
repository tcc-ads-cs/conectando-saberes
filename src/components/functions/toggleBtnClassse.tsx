export let togglePostagem: Function;
export let toggleComunidade: Function;
export let toggleCategoria: Function;

document.addEventListener('DOMContentLoaded', function() {
    let btnA = document.getElementById('btnPostagens');
    let btnCo = document.getElementById('btnComunidade');
    let btnCa = document.getElementById('btnCategorias');
    
    togglePostagem = () => {
        btnA?.classList.toggle("linkSelecionado", true);
        btnCo?.classList.toggle("linkSelecionado", false);
        btnCa?.classList.toggle("linkSelecionado", false);
    }
    
    toggleComunidade = () =>  {
        btnCo?.classList.toggle("linkSelecionado", true);
        btnA?.classList.toggle("linkSelecionado", false);
        btnCa?.classList.toggle("linkSelecionado", false);
    }
    
    toggleCategoria = () => {
        btnA?.classList.toggle("linkSelecionado", false);
        btnCo?.classList.toggle("linkSelecionado", false);
        btnCa?.classList.toggle("linkSelecionado", true);
    }

});