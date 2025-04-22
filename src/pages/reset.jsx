import React from 'react'
import { Link } from 'react-router'
import AuthLayout from '../components/authLayout'

export default function Reset() {
  return (
    <AuthLayout title="Reset Password">
      <form className='flex flex-col gap-5 mt-10'>
            <input type="email" placeholder='Email Address' className='search w-full border-b' />
            <Link className='card w-full p-2 text-center text-white text-sm font-medium bg-black' to="/REACT-DUMMY/code-confirmation">Send Confirmation Code</Link>
            <p className='text-center text-sm'>Already have an account? <Link to="/REACT-DUMMY/login" className='text-accent'>Login</Link></p>
      </form>
    </AuthLayout>
  )
}
