import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CheckoutCom from '../components/checkoutCom.jsx'

export default function Checkout() {
  return (
    <div>
      <div className='shadow-lg pb-5 sm:pb-5 sm:pt-2'>
      <Navbar />
      </div>
        <CheckoutCom / >
    </div>
    
  )
}

