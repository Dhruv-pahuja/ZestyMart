import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Header,Footer } from './components'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`} style={{ minHeight: '100vh' }}>
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#111827] text-black dark:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  )
}

export default App
