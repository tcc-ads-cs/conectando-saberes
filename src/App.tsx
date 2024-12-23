import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './routes/Cadastro';
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
import ProtectedRoute from './auth/ProtectedRoute';
import Logout from './auth/Logout';
import RootRoute from './auth/RootRoute';

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log("Usuário autenticado:", isAuthenticated);

  const routerCS = createBrowserRouter([
    {
      path: "home",
      element: <LandingPage />,
      errorElement: <Erro404 />,
    },
    {
      path: "logout",
      element: <Logout />
    },    
    {
      path: "login",
      element: <Login />
    },
    {
      path: "/",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><RootRoute isAuthenticated={isAuthenticated} /></ProtectedRoute>
    },
    {
      path: "meu-feed",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><PaginaInicial /></ProtectedRoute>
    },
    {
      path: "cadastro",
      element: <Cadastro />
    },
    {
      path: "notificacoes",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><Notificacoes /></ProtectedRoute>
    },
    {
      path: "pesquisa",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><Pesquisa /></ProtectedRoute>
    },
    {
      path: "editais",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><Editais /></ProtectedRoute>
    },
    {
      path: "nova-postagem",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><CriarPostagem /></ProtectedRoute>
    },
    {
      path: "perfil",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><Perfil /></ProtectedRoute>
      //TODO: 1 - Implementar rotas dinâmicas utilizando o ID do usuário como parâmetro (perfil/id-da-pessoa).
    },
    {
      path: "postagem/:guidPostagem",
      element: <ProtectedRoute isAuthenticated={isAuthenticated}><PostagemPage /></ProtectedRoute>
    }
  ])
  
  return <>
      <RouterProvider router={ routerCS } />
    </>
}

export default App;