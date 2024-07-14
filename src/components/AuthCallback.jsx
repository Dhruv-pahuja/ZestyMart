import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import authService from '../appwrite/auth';

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(authLogin({ userData: currentUser }));
          navigate("/");
        }
      } catch (error) {
        console.error("AuthCallback error", error);
      }
    };
    handleAuthCallback();
  }, [dispatch, navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
