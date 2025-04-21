import React from 'react'
import { Link } from 'react-router'
import { Home } from 'lucide-react'
import loginimg from '../assets/login-img.png'


export default function AuthLayout({title, image = loginimg, children}) {
  return (
    <section className='section card sm:pb-0 w-full sm:w-2/3 md:w-3/5 lg:flex lg:w-3/5 h-screen sm:h-3/4 m-auto sm:mt-25 sm:border sm:border-border sm:rounded-xl gap-3 max-w-[500px] sm:max-w-[1470px]'>
      <img className='hidden lg:block w-1/2 rounded-xl' src={image} alt="pesmic login" />
      <div className='w-full lg:w-1/2 flex flex-col gap-10 p-5'>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-bold'><span className='text-accent'>PES</span>MIC</h2>
          <Link to='/' className='flex card gap-2 h-fit p-2'> <Home />Home</Link>
        </div>
        <div>
          <h3 className='text-lg font-body font-semibold'>{title}</h3>
          {children}
        </div>
      </div>
    </section>
  )
}
