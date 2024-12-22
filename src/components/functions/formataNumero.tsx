//* Função estipulada para qualquer tipo de número alto que seja exibido na aplicação
export const formataNumero = (numb: number) => {
    if (numb >= 1e9) {
        return ((numb / 1e9).toFixed(1) + 'B').toString();
      } else if (numb >= 1e6) {
        return ((numb / 1e6).toFixed(1) + 'M').toString();
      } else if (numb >= 1e3) {
        return ((numb / 1e3).toFixed(1) + 'K').toString();
      } else {
        return numb.toString();
      }
}