import React, { useState } from 'react'
import { Columns3  } from 'lucide-react';
import ProductCard from './productCard';
import { products } from '../constants/shopCon';
import MobileSearch from './mobileSearch';


export default function MainShop() {

    const options = [
        "Best Seller",
        "Top Rating",
        "New Arrival",
        "Sales",
        "Price: lowest",
      ];
      
      
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    

  return (
    <div className='flex flex-col gap-1 max-w-[500px] sm:max-w-[1280px] m-auto'>
      <div className='sm:hidden w-full bg-white py-6'>
        < MobileSearch />
      </div>
      <div className='flex w-full justify-between bg-white p-4'>
        <div className="relative z-10 text-secondary ">
        <button
          className="bg-white font-normal lg:font-semibold px-4 py-2 border border-gray-200 rounded-md shadow-sm w-40 text-left flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          {selected} <span className="ml-2">▿</span>
        </button>

      {open && (
        <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md">
          {options
            .filter((opt) => opt !== selected)
            .map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {option}
                </button>
              </li>
            ))}
        </ul>
      )}
        </div>
        <Columns3 color='#484848' strokeWidth={1.5} />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-4 md:gap-3 lg:gap-2 p-1 sm:p-5 md:p-3 lg:p-1 md:pr-4'>
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              title={product.title}
              img={product.img}
              vendor={product.vendor}
              rating={product.rating}
              colors={product.colors}
              sizes={product.sizes}
              price={product.price}
              salesPrice={product.salesPrice}
              slug={product.slug}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
