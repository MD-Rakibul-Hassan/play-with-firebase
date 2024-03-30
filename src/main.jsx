import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/pages/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login.jsx'
const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element:<Home/>
      },
      {
        path: '/login',
        element:<Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
     <App/>
  </RouterProvider>
)
