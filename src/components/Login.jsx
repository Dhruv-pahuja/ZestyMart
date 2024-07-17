import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { login as authLogin } from '../store/authSlice';
import authService from "../appwrite/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const sessionData = await authService.login(formData);
      if (sessionData) {
        const currentUser = await authService.getCurrentUser();
        console.log("currentUser", currentUser);
        if (currentUser) dispatch(authLogin({ userData: currentUser }));
        navigate("/");
        console.log("User logged in successfully", currentUser);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await authService.SigninWithGoogle();
      const currentUser = await authService.getCurrentUser();
      console.log("currentUser:", currentUser);
      if (currentUser){
        console.log(currentUser);
         dispatch(authLogin({ userData: currentUser }));
      navigate("/");}
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen dark:bg-gray-900 dark:text-white bg-gray-100 text-black'>
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-lg mb-4 hover:bg-blue-700 transition duration-200"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <hr className="my-4" />
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
