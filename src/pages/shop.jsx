import React from 'react'
import Navbar from '../components/navbar'
import AsideShop from '../components/asideShop'
import MainShop from '../components/mainShop'


export default function Shop() {
  return (
    <>
    <Navbar />
    <div className='flex flex-col sm:flex-row w-full gap-1 pt-1 mt-8 bg-bg-shop'>
      <aside className='bg-white w-full sm:w-1/5 p-5'>
        <AsideShop />
      </aside>
      <main className='w-[63%]'>
        <MainShop />
      </main>
    </div>
    </>
  )
}
