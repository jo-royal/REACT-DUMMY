import React from 'react'
import { Link } from 'react-router'

export default function PageNav({ title, subtitle }) {
  return (
    <section className='sections my-5'>
      <div className="text-center">
        <h1 className='text-lg sm:text-xl font-normal sm:p-2'>{title}</h1>
        <p className='text-sm'><Link to="/REACT-DUMMY/">Home</Link>  &gt; {subtitle}</p>
      </div>
    </section>
  )
}
