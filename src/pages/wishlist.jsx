import React from 'react'
import Navbar from '../components/navbar'
import PageNav from '../components/pageNav'
import WishlistCom from '../components/wishlistCom'

export default function Wishlist() {
  return (
    <div>
        <Navbar />
        <PageNav title="Your WishList" subtitle=" Your WishList" />
        <WishlistCom />
    </div>
  )
}
