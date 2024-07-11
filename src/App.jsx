import React from 'react'

import {Header} from './components/index.js'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <>
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-slate-900 text-white'}  style={{minHeight:'100vh'}}>
      <Header />
    </div>
      
    </>
  )
}

export default App
