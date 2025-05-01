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
                <div className='flex gap-2 p-1 border border-border rounded w-fit'>
                    <button onClick={scrollLeft} className='px-2 cursor-pointer hover:text-accent'> &lt; </button>
                    <button onClick={scrollRight} className='px-2 hover:text-accent cursor-pointer'> &gt; </button>
                </div>
            </div>

            <div ref={scrollRef} className='deals-container flex mt-8 w-full overflow-x-scroll'>
                {data.map((item) => (
                    <div key={item.id} className='w-1/2 sm:w-1/3 lg:w-1/5 p-1 bg-bg-shop'>
                        < ProductCard title={item.title} img={item.img} vendor={item.vendor} rating={item.rating} colors={item.colors} sizes={item.sizes} price={item.price} salesPrice={item.salesPrice} slug={item.slug}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
