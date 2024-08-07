import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-2xl shadow dark:bg-[#1f2937] mt-4 border-t-2 dark:border-none">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Logo />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="hover:underline hover:text-black duration-150 me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline hover:text-black duration-150 me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline hover:text-black duration-150 me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-black duration-150">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-300 lg:my-8" />
        <span className="block text-sm text-gray-700  sm:text-center dark:text-gray-400">
          © 2024 <a href="https://github.com/Dhruv-pahuja/ZestyMart" target='blank' className="hover:underline text-gray-900 dark:text-gray-300">Dhruv Pahuja</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
