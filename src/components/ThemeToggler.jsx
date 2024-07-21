import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <button 
      onClick={() => dispatch(toggleTheme())} 
      className='px-2 py-2 bg-blue-500 dark:bg-white dark:text-black text-white rounded-xl flex items-center justify-center'
    >
      {theme === 'light' ? <FaMoon className='text-lg'/> : <FaSun className='text-lg'/>}
    </button>
  );
};

export default ThemeToggler;
