import React from 'react'
import AuthLayout from '../components/authLayout'
import { Link } from 'react-router'


export default function Login() {
  return (
    <AuthLayout title="Sign In">
      <form className='flex flex-col gap-5 mt-8'>
        <input type="text" placeholder='Email' className='search w-full border-b' />
        <input type="password" placeholder='Password' className='search w-full border-b' />
        <Link className='card w-full p-2 text-center text-white text-sm font-medium bg-accent' to="/REACT-DUMMY/login">Sign In</Link>
        <Link className='card w-full p-2 text-center text-sm font-medium text-white bg-black' to="/REACT-DUMMY/register">Sign Up</Link>
        <p className='text-end text-sm'>Forgot Password? <Link to="/REACT-DUMMY/reset" className='text-accent'>Reset</Link></p>
      </form>
    </AuthLayout>
  )
}
