import React from 'react'
import ReactDOM from 'react-dom/client'
import { routes } from '@generouted/react-router'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter(routes)

const Routes = () => <RouterProvider router={router} />

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes></Routes>
  </React.StrictMode>,
)
// INFO: use following code to build app without hash router
//
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Routes } from '@generouted/react-router'
//
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Routes></Routes>
//   </React.StrictMode>,
// )
