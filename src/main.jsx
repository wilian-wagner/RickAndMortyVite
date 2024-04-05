import React from 'react'
import ReactDOM from 'react-dom/client'
import './pages/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './pages/App.jsx';
import Personagem from './pages/Personagem.jsx';


const paginas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Personagem/:id",
    element: <Personagem/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={paginas} />

)
