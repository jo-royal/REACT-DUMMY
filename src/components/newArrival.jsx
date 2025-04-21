import React from 'react'
import { newArrivalCatigories, newArrivalProducts } from "../constants/firstCon";
import { NavLink, Link } from "react-router";


export default function NewArrival() {

  return (
    <section className='sections my-15 bg-white p-5 max-w-[500px] sm:max-w-[1470px]'>
        <h1 className='text-3xl text-center py-5'>New Arrival</h1>
        <div className='grid grid-cols-3 lg:grid-cols-6 text-center mt-10 gap-5'>
            {newArrivalCatigories.map((item, index) => (
                <NavLink key={index} to={item.href}
                className={({ isActive })  =>
                    isActive ? "nnactive bg-black text-white p-3" : "nnactive bg-linear-bg p-3"
                } >
                    {item.label}
                </NavLink>
            ))}
        </div>
        
        <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-15 gap-2'>
            {newArrivalProducts.map((item, index) => (
                <Link key={index} className=''>
                    <img src={item.image} alt={item.name} className='w-auto' />
                    <div>
                        <h2 className='text-lg font-bold'>{item.name}</h2>
                        <p className='text-sm'>₦{item.price}</p>
                    </div>
                </Link>
            ))}
        </div>

    </section>
  )
}
