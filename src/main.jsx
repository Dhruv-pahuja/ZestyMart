import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AuthLayout,AuthCallback} from "./components/index.js"
import {Home, About, ContactPage, LoginPage,SignupPage, ProductPage} from './pages/index.js'
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
        element : <About/>
      },
      {
        path : "/contact",
        element : <ContactPage/>
      },
      {
        path : "/login",
        element : (
          <AuthLayout authentication={false}>
            <LoginPage/>
          </AuthLayout>
        )
      },
      {
        path : "/signup",
        element : (
          <AuthLayout authentication={false}>
            <SignupPage/>
          </AuthLayout>
        )
      },
      {
        path : "/products",
        element : (
          <ProductPage/>
        )
      },
      {
        path: "/auth/callback",
        element: <AuthCallback />
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
