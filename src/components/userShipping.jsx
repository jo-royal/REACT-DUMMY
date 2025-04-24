import React from 'react'
import { Link } from 'react-router'


export default function UserShipping() {
  return (
    <div className='bg-deals sections mt-10'>
    <div className='flex justify-center w-full max-w-[500px] sm:max-w-[1470px] m-auto'>
        <div className='step-line'>
            <div className='step-num bg-accent'>1</div>
            <div className='text-sm sm:text-base'>Shipping</div>
        </div>
        <div className='step mt-3 bg-gray-400'></div>
        <div className='step-line'>
            <div className='step-num bg-gray-400'>2</div>
            <div className='text-sm sm:text-base'>Checkout</div>
        </div>
        <div className='step mt-3 bg-gray-400'></div>
        <div className='step-line'>
            <div className='step-num bg-gray-400'>3</div>
            <div className='text-sm sm:text-base'>Payment</div>
        </div>
    </div>



      <form  className='card flex flex-col gap-6 mt-10 p-5 w-full max-w-[500px] m-auto border border-border rounded-xl bg-white'>
      <h6 className='text-md font-medium my-4'>Shipping Information</h6>
      <input type="text" placeholder='Full Name' className='search border-b border-border' />
      <input type="number" placeholder='Phone Number' className='search w-full border-b border-border' />
      <input type="text" placeholder='Address' className='search w-full border-b border-border' />
      <div className='flex gap-3'>
        <input type="text" placeholder='City' className='search w-full border-b border-border' />
        <input type="text" placeholder='State' className='search w-full border-b border-border' />
      </div>
      <input type="number" placeholder='Zip Code' className='search w-full border-b border-border' />
      <p className='text-[12px]'><span className='font-semibold text-secondary'>Confirm Address: </span> Your profile address is pre-filled. Click 'Update' to proceed or change it if needed.</p>
      <div className='flex justify-around gap-3'>
      <Link className='card w-1/3 p-2 text-center text-white text-sm font-medium bg-accent' to="/REACT-DUMMY/shipping">Update</Link>
      <Link className='card w-1/3 p-2 text-center text-sm font-medium text-white bg-black' to="/REACT-DUMMY/checkout">Proceed</Link>
      </div>
      
    </form>
    
    
    </div>
  )
}
