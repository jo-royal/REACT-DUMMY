import React from 'react'
import { deals } from '../constants/firstCon'
import { Link } from 'react-router'
export default function Deals() {
  return (
    <>
   
    <section className='sections mt-8 sm:mt-15'>
        <div className="deals-container flex gap-6 sm:gap-10 overflow-x-auto max-w-[460px]  sm:max-w-[1470px] m-auto">
        {deals.map((item, index) => (
            <Link key={index} className="border-2 border-accent bg-accent w-fit p-2 lg:p-5 rounded-2xl flex flex-row gap-3 lg:gap-5" to={item.href}>
                
                <div className=''>{item.icons}</div>
                <p className='text-[13px] lg:text-xl w-[80px] sm:w-fit text-white'>{item.label}</p>
                
            </Link>
        ))}
        

        </div>
    </section>
    </>
  )
}
