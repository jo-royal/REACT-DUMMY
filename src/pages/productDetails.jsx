import React from 'react'
import DetailsCom from '../components/detailsCom'
import AsideShopRight from '../components/asideShopRight'
import Navbar from '../components/navbar'


export default function ProductDetails() {
  return (
    <div className='w-full max-w-[500px] sm:max-w-[1470px] mx-auto '>
      <div className='sticky top-0 w-full z-30 bg-white border-b-4 border-bg-shop'>
        <Navbar />
      </div>
      <div className='flex w-full gap-1  bg-bg-shop'>
        <div className='w-full md:w-[80%] lg:w-[83%]'>
          <DetailsCom />
        </div>

        <div className='hidden md:block md:w-[20%] lg:w-[17%]'>
          < AsideShopRight />
        </div>

      </div>

    </div>
  )
}
