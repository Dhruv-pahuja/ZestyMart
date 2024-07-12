import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AuthLayout} from "./components/index.js"
import {Home, About, Contact, Login,Signup, ProductPage} from './pages/index.js'
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : (
          <AuthLayout authentication={false}>
            {" "}
            <About/>
          </AuthLayout>
        )
      },
      {
        path : "/contact",
        element : (
          <AuthLayout authentication={false}>
            {" "}
            <Contact/>
          </AuthLayout>
        )
      },
      {
        path : "/login",
        element : (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path : "/signup",
        element : (
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path : "/products",
        element : (
          <AuthLayout authentication={false}>
            <ProductPage/>
          </AuthLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
