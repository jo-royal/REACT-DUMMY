import React from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router'
import Navbar from '../components/navbar'

export default function Payment() {
  return (
    <>
    <div className='shadow-lg pb-5 sm:pb-5 sm:pt-2'>
      <Navbar />
    </div>
    <div className='bg-deals sections mt-10 mb-10 sm:mb-0'>
      <div className='flex justify-center w-full max-w-[500px] sm:max-w-[1470px] m-auto'>
        <div className='step-line'>
            <div className='step-num bg-accent'> <Check strokeWidth={1.5} /> </div>
            <div className='text-sm sm:text-base'>Shipping</div>
        </div>
        <div className='step mt-3 bg-accent'></div>
        <div className='step-line'>
            <div className='step-num bg-accent'><Check strokeWidth={1.5} /></div>
            <div className='text-sm sm:text-base'>Checkout</div>
        </div>
        <div className='step mt-3 bg-accent'></div>
        <div className='step-line'>
            <div className='step-num bg-accent'><Check strokeWidth={1.5} /></div>
            <div className='text-sm sm:text-base'>Payment</div>
        </div>
      </div>

      {/* stepper end */}


      <div className='text-center pb-50 mt-20 m-auto flex flex-col items-center gap-3'>
      <div className='step-num bg-green-400 m-auto'><Check strokeWidth={1.5} /></div>
        <h1 className='text-2xl sm:text-3xl font-bold'>Payment Successful</h1>
        <p className='text-sm sm:text-base text-gray-500'>Your payment was successful. Thank you for your order!</p>
      <div className='mt-10'>
      <Link className='card p-3 w-10 bg-black ' to="/REACT-DUMMY"  >Go To Dashboard</Link>
      </div>
      </div>
</div>
</>
  )
}
