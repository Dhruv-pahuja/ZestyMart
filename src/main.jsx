/*
 * Copyright 2024 Dhruv Pahuja
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




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
