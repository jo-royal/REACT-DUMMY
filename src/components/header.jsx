import { Link } from 'react-router'
import React from 'react'
import headerb from '../assets/headerb.png'
import headert from '../assets/headert.png'

export default function Header() {
  return (
    <header className='sections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-20 mt-10 sm:mt-16 max-w-[500px] sm:max-w-[1470px]'>
      <div className='header h-[550px] hidden md:block '>

      </div>
      <div className='flex flex-col justify-between h-[550px]'>
        <div className='header min-h-[110px]'>
          <img className='w-full min-h-[110px] h-auto ' src={headert} alt="pesmic header" />
        </div>
        <div className='text-center flex flex-col justify-center items-center sm:gap-3 lg:gap-0'>
          <h1 className="text-secondary text-5xl font-body ">WOMEN</h1>
          <h1 className="stext text-secondary text-7xl lg:text-8xl font-body">WORLD</h1>
          <h6 className="text-secondary text-xl font-body mb-5 lg:mb-4">COLLECTIONS</h6>
          <Link to="/REACT-DUMMY/shop" className="card bg-black px-10 py-3 text-white text-sm ">SHOP NOW</Link>

        </div>
        <div className='header min-h-[110px]'>
          <img className='w-full min-h-[110px] h-auto ' src={headerb} alt="pesmic header" />
        </div>
      </div>
      <div className='header h-[550px] hidden sm:block'>

      </div>
    </header>
  )
}
