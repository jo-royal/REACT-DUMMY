import React from 'react'
import { deals } from '../constants/firstCon'
import { Link } from 'react-router'
export default function Deals() {
  return (
    <>

      <section className='sections mt-8'>
        <div className="deals-container grid auto-cols-max grid-flow-col gap-3 overflow-x-auto justify-between">
          {deals.map((item, index) => (
            <Link key={index} className="bg-accent border border-accent w-fit rounded flex gap-2" to={item.href}>

              <div className='bg-white w-fit p-2 rounded'>{item.icons}</div>
              <p className='text-white w-fit p-2'>{item.label}</p>

            </Link>
          ))}


        </div>
      </section>
    </>
  )
}
