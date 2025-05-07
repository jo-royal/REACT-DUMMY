import React from 'react'
import Navbar from '../components/navbar'
import CartCom from '../components/cartCom'


export default function Cart() {
  return (
    <section>
      <div className='sticky top-0 w-full z-50 bg-white border-b-4 border-bg-shop'>
        <Navbar />
      </div>
      <CartCom />
    </section>
  )
}
