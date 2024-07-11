import React from 'react'
import SampleComponent from './components/Sample.jsx'
import {Header,ThemeToggler} from './components/index.js'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <>
    <div className={`${theme === 'dark' ? 'dark' : ''}`}  style={{minHeight:'100vh'}}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* <Header /> */}
        <ThemeToggler />
      <SampleComponent />
      </div>
    </div>
      
    </>
  )
}

export default App
