import React from 'react'
import ReactDOM from 'react-dom/client'
////import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//TODO: Converter as seguintes páginas de funções para elementos React:
import Cadastro from './routes/Cadastro';
import LandingPage from './routes/LandingPage';
import PaginaInicial from './routes/PaginaInicial';
import Login from './routes/Login';
import Pesquisa from './routes/Pesquisa';
import Postagem from './routes/Postagem';
import Erro404 from './routes/Erro404';

//* Páginas convertidas
import Editais from './routes/Editais';

//TODO: Fazer a URL dinâmica com o ID do perfil caso o perfil não seja o seu para o path "Perfil" + Adicionar o path no objeto.
////import Perfil from './routes/Perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Erro404 />,
    
    //! Não tá lendo os filhos.
    children: [
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
        element: <PaginaInicial />
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
      },
    ]
  }  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
