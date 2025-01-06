export const togglePostagem = () => toggleButton('btnPostagens');
export const toggleComunidade = () => toggleButton('btnComunidade');
export const toggleCategoria = () => toggleButton('btnCategorias');

const toggleButton = (activeButtonId: string) => {
    const buttons = ['btnPostagens', 'btnComunidade', 'btnCategorias'];
    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        button?.classList.toggle('linkSelecionado', buttonId === activeButtonId);
    });
};