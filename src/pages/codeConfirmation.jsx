import React from 'react'
import { Link } from 'react-router'
import AuthLayout from '../components/authLayout'

export default function CodeConfirmation() {
  return (
    <AuthLayout title="Code Confirmation">
      <form className='flex flex-col gap-5 mt-10'>
        <input type="text" placeholder='Confirmation Code' className='search w-full border-b' />
        <Link className='card w-full p-2 text-center text-white text-sm font-medium bg-black' to="/REACT-DUMMY/new-password">Recover Account</Link>
        <p className='text-center text-sm'>Didn’t receive Confirmation Code? <Link to="/REACT-DUMMY/reset" className='text-accent'>Resend Now</Link></p>
      </form>
    </AuthLayout>
  )
}


