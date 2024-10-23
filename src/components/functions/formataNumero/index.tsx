export const formataNumero = (numb: number) => {
    if (numb >= 1e9) {
        return (numb / 1e9).toFixed(1) + 'B';
      } else if (numb >= 1e6) {
        return (numb / 1e6).toFixed(1) + 'M';
      } else if (numb >= 1e3) {
        return (numb / 1e3).toFixed(1) + 'K';
      } else {
        return numb;
      }
}