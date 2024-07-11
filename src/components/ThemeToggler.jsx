import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const ThemeToggler = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
    </button>
  );
};

export default ThemeToggler;
