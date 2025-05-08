import React from 'react'
import Navbar from '../components/navbar'
import CartCom from '../components/cartCom'
import PageNav from '../components/pageNav'


export default function Cart() {
  return (
    <section>
      <div className='sticky top-0 w-full z-50 bg-white border-b-4 border-bg-shop'>
        <Navbar />
      </div>
      <PageNav title={'Cart'} subtitle={'Your Cart'} />
      <CartCom />
      <div className='h-1000 w-full'></div>
    </section>
  )
}
