import React from 'react'
import Navbar from '../components/navbar'
import UserShipping from '../components/userShipping'

export default function ShippingUpdate() {
  return (
    <div>
        <div className='shadow-lg pb-3 sm:pb-5 sm:pt-2'>
           <Navbar />
        </div>
        <UserShipping />
    </div>
  )
}