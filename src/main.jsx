import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './routes/Cadastro/index.jsx'
import Entrar from './routes/Entrar/index.jsx'
import Error from './routes/Error'
import Home from './routes/Home/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'
import Principal from './routes/Principal/index.jsx'
import Usuario from './routes/Usuario/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import Vistoria2 from './routes/Vistoria2/index.jsx'
import FotoBike from './routes/FotoBike/index.jsx'
import ResultadoVistoria from './routes/ResultadoVistoria/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/Cadastro',
        element:<Cadastro/>
      },
      {
        path:'/Entrar',
        element: <Entrar/>
      },
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Integrantes',
        element:<Integrantes/>
      },
      {
        path:'/principal',
        element:<Principal/>
      },
      {
        path:'/Usuario',
        element: <Usuario/>
      },
      {
        path:'/Vistoria',
        element: <Vistoria/>
      },
      {
      path:'/Vistoria2',
      element: <Vistoria2/>
    },
    {
      path:'/fotobike',
      element: <FotoBike/>
    },
    {
    path:'/ResultadoVistoria',
    element: <ResultadoVistoria/>
  },
      // {
      //   path: '/antiga',
      //   element: <Navigate to='/'/>
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
