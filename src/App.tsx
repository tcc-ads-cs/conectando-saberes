// Sistema de rotas
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

//TODO: Pensar em como será a verificação do ID do usuário para o perfil. 
//* Ideia: Quando a pessoa faz login, as infos do perfil dela já são baixadas e alocadas. (Mas e se ela quiser ver o perfil de outra pessoa?)

const routerCS = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
    errorElement: <Erro404 />,
  },
  {
    path: "/home",
    element: <LandingPage />
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
  }
])

function App() {
  return <>
      <RouterProvider router={ routerCS } />
    </>
}

export default App;