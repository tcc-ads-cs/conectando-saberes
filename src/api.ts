import axios from 'axios';

// Definindo a URL base para todas as requisições
const api = axios.create({
  baseURL: 'https://cscrudapi.onrender.com/api',  // Substitua pela URL base da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

export const enviarCadastro = async (formData: any) => {
  try {
    // Fazendo a requisição POST para o endpoint de cadastro
    const response = await api.post('/UserAuth/cadastrar', formData); 
    
    // Retornando a resposta da API, que pode ser manipulada no componente
    return response;
  } catch (error) {
    console.error('Erro ao enviar o cadastro:', error);
    throw error;  // Relançando o erro para ser tratado no componente
  }
}
export default api;

