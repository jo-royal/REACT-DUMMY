import React from 'react'
import AuthLayout from '../components/authLayout'
import { Link, useNavigate } from 'react-router'
import { loginRequest } from '../services/authService';


export default function Login() {
  const navigate = useNavigate()

  const sendLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    loginRequestCall(email, password)
  };

  const loginRequestCall = async (email, password) => {
    const response = await loginRequest(email, password);
    if (response) {
      localStorage.setItem('token', JSON.stringify(response.token));
      navigate('/REACT-DUMMY/dashboard');
    } else {
      console.log('error here')
    }
  }

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={sendLogin} className='flex flex-col gap-5 mt-8'>
        <input name='email' id='email' type="email" placeholder='Email' className='search w-full border-b' />
        <input name='password' id='password' type="password" placeholder='Password' className='search w-full border-b' />
        <button type="submit" className='card w-full p-2 text-center text-white text-sm font-medium bg-accent' to="/REACT-DUMMY/login">Sign In</button>
        <Link className='card w-full p-2 text-center text-sm font-medium text-white bg-black' to="/REACT-DUMMY/register">Sign Up</Link>
        <p className='text-end text-sm'>Forgot Password? <Link to="/REACT-DUMMY/reset" className='text-accent'>Reset</Link></p>
      </form>
    </AuthLayout>
  )
}
