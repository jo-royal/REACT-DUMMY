import React from 'react'
import Navbar from '../components/navbar'
import CartCom from '../components/cartCom'
import PageNav from '../components/pageNav'

export default function Cart() {
  return (
    <section>
      <div>
        < Navbar />
      </div>
      <PageNav title={'Cart'} subtitle={'Your Shopping Cart'} />
      <CartCom />
    </section>
  )
}
