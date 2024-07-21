import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router'
import { Header,Footer } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ?(
    <div className={`${theme === 'dark' ? 'dark' : ''}`} style={{ minHeight: '100vh' }}>
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#111827] text-black dark:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  ) : null
}

export default App
