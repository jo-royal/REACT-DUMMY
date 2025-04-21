import React from 'react'
import { Link } from 'react-router'
import AuthLayout from '../components/authLayout'


export default function NewPassword() {
  return (
    <AuthLayout title="Create New Password">
      <form className='flex flex-col gap-5 mt-8'>
        <input type="text" placeholder='New Password' className='search w-full border-b' />
        <input type="text" placeholder='Confirmation Password' className='search w-full border-b' />
        <Link className='card w-full p-2 text-center text-white text-sm font-medium bg-black' to="/login">Submit</Link>
      </form>
    </AuthLayout>
  )
}
