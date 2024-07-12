import React ,{useState} from 'react'
import {Container} from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Logo , ThemeToggler,} from '../index.js'
import { useSelector } from 'react-redux'
import {FaBars,FaTimes} from 'react-icons/fa'

function Header() {

  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = ()=>{
    setIsMenuOpen(!isMenuOpen)
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
      name: "Contact",
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
    <header className='py-3 shadow bg-[#023b6d] dark:bg-slate-700 text-white'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
              </Link>
          </div>
          <div className='flex items-center md:hidden'>
            <ThemeToggler/>
            <button onClick={handleMenuToggle} className='ml-4'>
              {isMenuOpen? '': <FaBars className='text-xl'/>}
            </button>
          </div>
          <ul className={`flex-col md:flex md:flex-row ml-auto ${isMenuOpen?'flex':'hidden'} md:block`}>
          <li className='md:hidden'>
          <button onClick={handleMenuToggle} className='ml-4'>
              {isMenuOpen? <FaTimes className='text-xl'/> : <FaBars className='text-xl'/>}
            </button>
          </li>
          <li className='hidden md:block py-3 px-2'>
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
                className='inline-bock px-3 py-2 text-gray-400 duration-200 hover:text-white rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className='py-2 px-2'>
                 <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Logout functionality here
                  }}
                  className='inline-block px-3 py-2 text-gray-400 duration-200 hover:text-red-400'
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