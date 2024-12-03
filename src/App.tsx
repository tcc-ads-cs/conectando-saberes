import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './routes/Cadastro';
import Feed from './routes/Feed';
import Login from './routes/Login';
import Pesquisa from './routes/Pesquisa';
import CriarPostagem from './routes/CriarPostagem';
import Erro404 from './routes/Erro404';
import Editais from './routes/Editais';
import LandingPage from './routes/LandingPage';
import Perfil from './routes/Perfil';
import Notificacoes from './routes/Notificacoes';
import PaginaInicial from './routes/PaginaInicial';
import PostagemPage from './routes/PostagemPage';

localStorage.setItem("logado", "false"); // Informação será estipulada através do login/JWT.

const routerCS = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Erro404 />,
  },
  {
    path: "/home",
    element: <PaginaInicial />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "notificacoes",
    element: <Notificacoes />
  },
  {
    path: "meu-feed",
    element: <Feed />
  },
  {
    path: "pesquisa",
    element: <Pesquisa />
  },
  {
    path: "editais",
    element: <Editais />
  },
  {
    path: "nova-postagem",
    element: <CriarPostagem />
  },
  {
    path: "perfil",
    element: <Perfil />
    //TODO: 1 - Implementar rotas dinâmicas utilizando o ID do usuário como parâmetro (perfil/id-da-pessoa).
  },
  {
    path: "postagem/:guidPostagem",
    element: <PostagemPage />
    //TODO: 2 - Implementar rotas dinâmicas utilizando o GUID da postagem como parâmetro (postagem/guid-da-postagem).
  }
])

function App() {
  return <>
      <RouterProvider router={ routerCS } />
    </>
}

export default App;