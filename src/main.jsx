import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Cooperativa from './pages/Cooperativa/Cooperativa.jsx'
import FaleConosco from './pages/FaleConosco/FaleConosco.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: 'cooperativa',
          element: <Cooperativa />,
        },

        {
          path: 'fale-conosco',
          element: <FaleConosco />,
        },

        {
          path: 'carbono',
          element: <Navigate to="/" replace />,
        },

        {
          path: 'cadastro',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ],
  {
    basename: '/bioloop',
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)