import React from 'react'
import { Link } from 'react-router'
import AuthLayout from '../components/authLayout'

export default function Register() {
  return (
    <AuthLayout title="Sign Up">
      <form className='flex flex-col gap-5 mt-8'>
            <div className='flex gap-3'>
              <input type="text" placeholder='First Name' className='search w-1/2 border-b' />
              <input type="text" placeholder='Last Name' className='search w-1/2 border-b' />
            </div>
            <input type="text" placeholder='Email' className='search w-full border-b' />
            <div className='flex gap-3'>
              <input type="password" placeholder='Password' className='search w-full border-b' />
              <input type="password" placeholder='Confirm Pass...' className='search w-full border-b' />
            </div>
            <Link className='card w-full p-2 text-center text-white text-sm font-medium bg-accent' to="/REACT-DUMMY/register">Sign Up</Link>
            <Link className='card w-full p-2 text-center text-sm font-medium text-white bg-black' to="/REACT-DUMMY/login">Sign In</Link>
      </form>
    </AuthLayout>
  )
}
