import React ,{useState} from 'react'
import {Container} from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Logo , ThemeToggler,} from '../index.js'
import { useSelector,useDispatch } from 'react-redux'
import {FaBars,FaTimes} from 'react-icons/fa'
import authService from '../../appwrite/auth.js'
import {login,logout} from "../../store/authSlice.js"
function Header() {

  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  
  const dispatch = useDispatch();
  const HandleLogout = () =>{
    authService.logout()
    .then(()=>{
      dispatch(logout())
    })
  } 

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Products",
      slug: "/products",
      active: true,
    },
    {
      name: "Contact-us",
      slug: "/contact",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  ]


  return (
    <header className='z-[9999] sticky top-0 py-3 shadow bg-white dark:bg-[#1f2937] text-gray-600 mb-4 rounded-b-lg'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
              </Link>
          </div>
          <div className='flex items-center md:hidden'>
            <ThemeToggler/>
            <button onClick={handleMenuToggle} className='ml-4 dark:text-white text-dark'>
              {isMenuOpen? '': <FaBars className='text-xl'/>}
            </button>
          </div>
          <ul className={`flex-col md:flex md:flex-row ml-auto ${isMenuOpen?'flex':'hidden'} md:block`}>
          <li className='md:hidden'>
          <button onClick={handleMenuToggle} className='ml-4 dark:text-white text-dark'>
              {isMenuOpen? <FaTimes className='text-xl'/> : <FaBars className='text-xl'/>}
            </button>
          </li>
          <li className='hidden md:block py-2 px-2'>
            <ThemeToggler/>
          </li>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name} className='py-2 px-2'>
                <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate(item.slug)
                }}
                className='inline-bock px-3 py-1 md:text-black-500 border bg-primary-50 hover:bg-primary-100 dark:bg-slate-800 text-black dark:text-cyan-400 shadow-blue-300/50 dark:hover:bg-slate-900 duration-200 hover:text-blue-500 dark:hover:text-white rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className='py-2 px-2'>
                 <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    HandleLogout();
                  }}
                  className='inline-bock px-3 py-1 md:text-black-500 border bg-primary-50 hover:bg-red-100 dark:bg-slate-800 text-black dark:text-cyan-400 shadow-blue-300/50 dark:hover:bg-slate-900 duration-200 hover:text-red-500 dark:hover:text-red-500 rounded-full'
                > Logout </button>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header