import React from 'react'
import Navbar from '../components/navbar'
import AsideShop from '../components/asideShop'
import MainShop from '../components/mainShop'
import AsideShopRight from '../components/asideShopRight'


export default function Shop() {
  return (
    <>
    <Navbar />
    <div className='flex flex-col sm:flex-row w-full gap-1 pt-1 mt-8 bg-bg-shop'>
      <aside className='bg-white w-full hidden md:block md:w-[30%] lg:w-1/5 p-5 h-screen md:sticky lg:static top-0'>
        <AsideShop />
      </aside>
      <main className='w-full md:w-[70%] lg:w-[63%]'>
        <MainShop />
      </main>
      <aside className='hidden lg:block w-[17%]'>
        < AsideShopRight />
      </aside>
    </div>
    </>
    
  

  

  )
}
