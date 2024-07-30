import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { logout } from '../../store/authSlice.js';
import authService from '../../appwrite/auth.js';

function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userData.name);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ml-2">
        <FaUserCircle className="text-2xl" />
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="py-2 px-4">
          <p className="text-sm text-gray-900 dark:text-gray-100">{userName}</p>
        </div>
        <div className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/orders')}>
          <p className="text-sm text-gray-900 dark:text-gray-100">Order History</p>
        </div>
        <div className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>
          <p className="text-sm text-red-500 dark:text-red-400">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
