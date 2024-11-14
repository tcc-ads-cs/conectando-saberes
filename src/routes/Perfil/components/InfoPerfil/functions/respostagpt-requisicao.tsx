/*

Para implementar uma função no React com TypeScript que faça requisições via Axios de 8 em 8 JSONs e transforme esses dados em elementos React, exibindo um botão de "Mostrar mais" que refaz a requisição para mais 8 itens, e, a cada 5 itens, exiba um outro elemento React, você pode seguir este fluxo:

Estado para armazenar os dados: Vamos armazenar os dados JSON recebidos e controlar o número de requisições feitas.
Componente de Requisição: Um componente que vai fazer as requisições a cada 8 itens e adicioná-los ao estado.
Exibição: Vamos renderizar os itens e adicionar a lógica para o botão "Mostrar mais" e a renderização do elemento adicional a cada 5 itens.

Explicação:

Estado:
data: Armazena os dados JSON que vão sendo carregados.
loading: Controla o estado de carregamento para mostrar um indicador de loading.
page: Controla a página da requisição, começando em 1 e aumentando a cada novo carregamento.
hasMore: Indica se ainda existem mais dados para carregar. Se o número de itens retornados pela API for 0, esse valor é atualizado para false.

Função fetchData:
Faz a requisição para a API utilizando axios.get.
Recebe os dados e os adiciona ao estado data com o método setData.
A cada requisição, é verificado se há mais dados para carregar, alterando o estado hasMore caso não haja.

Renderização Condicional:
O método renderItem verifica se o índice do item é múltiplo de 5. Se for, ele adiciona um componente extra (exibido como um div com um fundo colorido e um texto simples). Caso contrário, exibe apenas o título do item.
Botão "Mostrar mais":

O botão aparece apenas se houver mais dados (hasMore é true) e o carregamento não estiver em andamento.
Quando clicado, a página (page) é incrementada, o que dispara o efeito de carregamento de mais itens.

Observações:
API: A URL da API no código acima é um exemplo (https://api.example.com/items?_page=${page}&_limit=8). Substitua pela URL real da sua API.
Gerenciamento de erros: A função fetchData está capturando erros da requisição para evitar falhas no aplicativo.
Páginação: A paginação é feita com base na query string _page e _limit, mas você pode ajustar isso conforme a sua API.
Esse componente pode ser facilmente adaptado conforme suas necessidades, incluindo o tipo de dados que está manipulando, o estilo e os componentes extras a cada 5 itens.

*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DataItem {
  id: number;
  title: string;
  // Adicione outras propriedades conforme necessário
}

const PaginatedList: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true); // Para verificar se há mais dados

  // Função para carregar os dados
  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/items?_page=${page}&_limit=8`);
      if (response.data.length === 0) {
        setHasMore(false); // Não há mais dados
      } else {
        setData(prevData => [...prevData, ...response.data]);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  // Efetua o carregamento dos dados na primeira renderização e a cada alteração na página
  useEffect(() => {
    fetchData(page);
  }, [page]);

  const renderItem = (item: DataItem, index: number) => {
    if ((index + 1) % 5 === 0) {
      // Renderiza um componente adicional a cada 5 itens
      return (
        <div key={item.id}>
          <p>{item.title}</p>
          <div style={{ margin: '20px 0', backgroundColor: '#f0f0f0', padding: '10px' }}>
            <span>Componente extra para cada 5 itens!</span>
          </div>
        </div>
      );
    }
    return (
      <div key={item.id}>
        <p>{item.title}</p>
      </div>
    );
  };

  return (
    <div>
      <div>
        {data.map((item, index) => renderItem(item, index))}
      </div>
      {hasMore && !loading && (
        <button onClick={() => setPage(page + 1)} style={{ padding: '10px', marginTop: '20px' }}>
          Mostrar mais
        </button>
      )}
      {loading && <p>Carregando...</p>}
    </div>
  );
};

export default PaginatedList;
