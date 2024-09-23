import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/LandingPage/index.jsx'
import Browse from './pages/Browse/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([{

  element: <Home />,
  path: "/"
},
{
  element: <Browse />,
  path: '/browse'
}])

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >,
)
