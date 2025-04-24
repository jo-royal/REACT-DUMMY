import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/navbar'

export default function Cart() {
  return (
    <>
    <div className='shadow-lg pb-5 sm:pb-5 sm:pt-2'>
          <Navbar />
    </div>
    <div className='text-center mt-40'>
        <h1>Cart</h1>
        <h6>Cart in progress... </h6>
        <p>proceed to checkout. </p>
        <div className='mt-10'>
        <Link className='card p-3 w-10 bg-black' to='/REACT-DUMMY/shipping-update'> Check Out</Link>
        </div>
        
    </div>
    </>
  )
}
