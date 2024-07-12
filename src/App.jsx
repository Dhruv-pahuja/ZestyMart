import React from 'react'
import { Home } from './pages/index'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Header,Footer } from './components'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <>
    <div className={`${theme === 'dark' ? 'dark' : ''}`}  style={{minHeight:'100vh'}}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
      
    </>
  )
}

export default App
