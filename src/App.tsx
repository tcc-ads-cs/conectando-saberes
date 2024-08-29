//* Sistema de rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cadastro from './routes/Cadastro';
import Feed from './routes/Feed';
import Login from './routes/Login';
import Pesquisa from './routes/Pesquisa';
import Postagem from './routes/Postagem';
import Erro404 from './routes/Erro404';
import Editais from './routes/Editais';
import LandingPage from './routes/LandingPage';

//TODO: Pensar em como será a verificação do ID do usuário para o perfil. 
//* Ideia: Quando a pessoa faz login, as infos do perfil dela já são baixadas e alocadas. (Mas e se ela quiser ver o perfil de outra pessoa?)
////import Perfil from './routes/Perfil';

const routerCS = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Erro404 />,
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
    element: <Postagem />
  }
  //! Falta colocar o perfil.
])

function App() {
  return (
    <RouterProvider router={ routerCS } />
  )
}

export default App;