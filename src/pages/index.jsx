import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Deals from '../components/deals'
import Logos from '../components/logos'
import Dotm from '../components/dotm'
import NewArrival from '../components/newArrival'
import MobileSearch from '../components/mobileSearch'

export default function Index() {
  return (
    <div className=''> 
      
      <Navbar /> 
      <div className='mt-[40px]'>
        <MobileSearch />
      </div>
      <Deals />
      <Header />
      <Logos />
      <Dotm />
      <NewArrival />
      
    </div>
  )
}
