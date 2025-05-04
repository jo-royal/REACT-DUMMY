import React from 'react'
import { newArrivalCatigories } from "../constants/firstCon";
import { NavLink } from "react-router";
import RelatedProduct from './relatedProduct';
import { products } from '../constants/shopCon';


export default function NewArrival() {

    return (
        <section className='sections my-10 bg-white p-5 w-full max-w-[500px] sm:max-w-[1470px]'>
            <h1 className='text-3xl text-center py-7'>Featured Products</h1>
            <p className='text-center w-full md:w-3/5 lg:w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            <div className='grid grid-cols-3 lg:grid-cols-6 justify-between text-center mt-10 gap-2'>
                {newArrivalCatigories.map((item, index) => (
                    <NavLink key={index} to={item.href}
                        className={({ isActive }) =>
                            isActive ? "nnactive bg-black text-white p-3" : "nnactive bg-white p-3"
                        } >
                        {item.label}
                    </NavLink>
                ))}
            </div>

            <div className='my-10'>
                <RelatedProduct title="New Arrival" data={products} />
            </div>
            <div className='mt-15 md:mt-20'>
                <RelatedProduct title="Trending 🔥" data={products} />
            </div>

        </section>
    )
}
