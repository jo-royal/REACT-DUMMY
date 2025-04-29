import React from 'react'
import DetailsCom from '../components/detailsCom'
import AsideShopRight from '../components/asideShopRight'
import Navbar from '../components/navbar'


export default function ProductDetails() {
  return (
    <div>
      <Navbar />
      <div className='flex w-full gap-1 pt-1 mt-8 bg-bg-shop'>
        <div className='w-[87%]'>
          <DetailsCom />
        </div>
        
        <div className='hidden lg:block w-[17%]'>
          < AsideShopRight />
        </div>
         
      </div>
      
    </div>
  )
}
