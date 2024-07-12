import React from 'react';
import { useSelector } from 'react-redux';
import darkLogo from '../assets/zestymart-high-resolution-logo-white-transparent.png';
import lightLogo from '../assets/zestymart-high-resolution-logo-transparent.png';

const Logo = () => {
  const theme = useSelector((state) => state.theme);
  console.log(theme);

  return (
    <img
      src={theme === 'light' ? darkLogo : darkLogo}
      alt="Logo"
      style={{ width: '120px', height: 'auto' }} // adjust the size as needed
    />
  );
};

export default Logo;
