import React from 'react'
import {Container} from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Logo , ThemeToggler,} from '../index.js'
import { useSelector } from 'react-redux'
function Header() {
  const navigate = useNavigate()
  const authStatus = true
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "About",
      slug: "/about",
      active: authStatus,
    },
    {
      name: "Products",
      slug: "/products",
      active: authStatus,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: authStatus,
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
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
              </Link>
          </div>
          
          <ul className='flex ml-auto'>
          <li className='py-2 px-2'>
            <ThemeToggler />
          </li>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-3 py-2 text-gray-400 duration-200 hover:text-white rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className='inline-block px-3 py-2 duration-200 text-gray-400 hover:text-red-400'>
                <button>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header