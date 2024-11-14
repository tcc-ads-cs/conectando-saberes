/*
Descrição do funcionamento:
Carregamento de dados:

No exemplo com import, o JSON é carregado no início do arquivo e armazenado na variável dataJson.
No exemplo com fetch, ele faz uma requisição GET para buscar o arquivo JSON. Ele pode ser armazenado no diretório public para ser acessado diretamente pelo navegador.
Paginação:

A cada mudança de página (page), a função loadDataFromJson recorta os dados do JSON conforme a página e o número de itens por página (8 neste caso).
O estado data é atualizado para incluir os novos itens carregados.
Quando a quantidade de dados carregados atingir o total do arquivo JSON, o estado hasMore é atualizado para false para impedir que o botão "Mostrar mais" seja exibido.
Renderização:

Os dados são renderizados de maneira similar ao exemplo anterior. A cada 5 itens, um componente extra é renderizado, e o restante é exibido normalmente.
O botão "Mostrar mais" permite carregar mais dados, aumentando a página.
Considerações:
Caminho do JSON: Se você usar o método fetch para carregar o JSON, garanta que o arquivo JSON esteja acessível na URL especificada. Arquivos dentro da pasta public são acessíveis diretamente.
Manipulação de erros: Se usar o fetch, é importante capturar erros de rede ou problemas ao ler o arquivo, o que já é feito no exemplo acima.
Se precisar de mais detalhes ou ajustes, estou à disposição!

*/

import React, { useState, useEffect } from 'react';
// Suponha que o JSON esteja no mesmo diretório que o componente
// import dataJson from './data.json';  Ajuste o caminho conforme necessário

//TROCAR ⬇️
import dataJson from '../../../../../assets/testRender.json';

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

  // Função para carregar os dados do arquivo JSON local
  const loadDataFromJson = () => {
    setLoading(true);
    // Carregar o arquivo JSON
    const dataToLoad = dataJson; // A variável 'dataJson' agora contém os dados do arquivo
    const itemsPerPage = 8;

    // Verifica se ainda há mais dados
    const startIndex = (page - 1) * itemsPerPage;
    const newData = dataToLoad.slice(startIndex, startIndex + itemsPerPage);
    
    // Adiciona os novos itens ao estado
    setData(prevData => [...prevData, ...newData]);

    // Verifica se há mais itens para carregar
    if (startIndex + itemsPerPage >= dataToLoad.length) {
      setHasMore(false);
    }

    setLoading(false);
  };

  // Carregar os dados ao montar o componente ou ao mudar a página
  useEffect(() => {
    loadDataFromJson();
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
