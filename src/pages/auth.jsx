import React, { useState } from 'react';
import axios from 'axios';
import authbg from './authbg.png';
import { Link } from 'react-router-dom';



const LoginForm = ({ onLogin, onSwitchToRegister }) => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    axios.post('https://mcf-backend-main.vercel.app/loginAdmin', formData)
      .then(response => {
        console.log('Successful login:', response);
        localStorage.setItem("token" , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0YmJiMWQ5YTE2MGYxNTBkYjNiMWMxIiwidXNlck5hbWUiOiJBbGkiLCJ1aWQiOiI4MzYwMjYxMzU4MyJ9LCJpYXQiOjE2OTk0NjE5MTd9.yHsKqTOyVv-aElFARozNEURJhjwFKjc4yBvNTj0qyc0")
        // Redirect to /dash or perform any other actions
        window.location.href = '/dash';
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login error, update state, or display an error message to the user
      });

  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"  style={{
      backgroundImage: `url(${authbg})`,
      backgroundSize: "cover",
      backgroundPosition: "left",
      height: "100vh",
    }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
           
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          
          </div>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterForm = ({ onRegister, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    axios.post('https://mcf-backend-main.vercel.app/addAdmin', formData)
    .then(response => {
      console.log('successful registration:', response);
      localStorage.setItem("token" , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0YmJiMWQ5YTE2MGYxNTBkYjNiMWMxIiwidXNlck5hbWUiOiJBbGkiLCJ1aWQiOiI4MzYwMjYxMzU4MyJ9LCJpYXQiOjE2OTk0NjE5MTd9.yHsKqTOyVv-aElFARozNEURJhjwFKjc4yBvNTj0qyc0")
      // Redirect to /dash or perform any other actions
      window.location.href = '/';
      
    })
    .catch(error => {
      console.error('registration failed:', error);
      // Handle login error, update state, or display an error message to the user
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: `url(${authbg})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        height: "100vh",
      }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div>
          
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
         
          </div>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async (formData) => {
  
    try {
      const response = await axios.post('https://mcf-backend-main.vercel.app/loginAdmin', formData);
      console.log('Login successful:', response.data);
      window.location.href = '/dash';
      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login error, update state, or display an error message to the user
    }
  };

  const handleRegister = (formData) => {
    // Handle registration logic (you can send data to the server or perform any other actions)
    console.log('Registration submitted:', formData);
  };

  const switchForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onLogin={handleLogin} onSwitchToRegister={switchForm} />
      ) : (
        <RegisterForm onRegister={handleRegister} onSwitchToLogin={switchForm} />
      )}
    </div>
  );
};

export default AuthPage;
