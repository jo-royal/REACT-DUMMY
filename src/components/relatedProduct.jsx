import React from 'react'
import { useRef } from 'react'
import ProductCard from './productCard'

export default function RelatedProduct({ title, data }) {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className='bg-white px-1 sm:px-5 w-full'>
            <div className='flex justify-between '>
                <h2 className='text-xl lg:text-2xl font-medium'>{title}</h2>
                <div className='flex gap-2 py-1 border border-border rounded w-fit'>
                    <button onClick={scrollLeft} className='px-3  cursor-pointer hover:text-accent '> &lt; </button>
                    <button onClick={scrollRight} className='px-3  hover:text-accent cursor-pointer'> &gt; </button>
                </div>
            </div>

            <div ref={scrollRef} className='deals-container bg-bg-shop mt-8 w-full grid auto-cols-[minmax(230px,_300px)] grid-flow-col gap-1 overflow-x-scroll'>
                {data.map((item) => (
                    <div key={item.id} className=' p-1 bg-bg-shop'>
                        < ProductCard title={item.title} img={item.img} vendor={item.vendor} rating={item.rating} colors={item.colors} sizes={item.sizes} price={item.price} salesPrice={item.salesPrice} slug={item.slug}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
