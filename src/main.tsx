import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Participantes from './routers/Participantes/index.tsx'
import Agendamento from './routers/Agendamento/index.tsx'
import Error from './routers/Error/index.tsx'
// import ReactDOM from 'react-dom'


import { GlobalStyle } from './global-styles.ts'
import Home from './routers/Home/index.tsx'

import Cadastro from './routers/Cadastro/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home/>

      },
      {
        path: '/participantes',
        element: <Participantes />
      },
      {
        path: '/agendamento',
        element: <Agendamento />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      }
    ]
  }
])





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/> 
    <GlobalStyle />
    
  </StrictMode>,
)
