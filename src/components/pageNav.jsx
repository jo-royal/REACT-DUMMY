import React from 'react'
import { Link } from 'react-router'

export default function PageNav ({ title, subtitle }) {
  return (
    <section className='sections my-10'>
        <div className="text-center">
            <h1 className='text-lg sm:text-3xl font-normal sm:p-4'>{title}</h1>
            <p className='text-sm'><Link to="/REACT-DUMMY/">Home</Link>  &gt; {subtitle}</p>
        </div>
    </section>
  )
}
