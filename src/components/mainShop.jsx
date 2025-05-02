import React, { useState } from 'react'
import { Columns3, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from './productCard';
import { products } from '../constants/shopCon';
import MobileSearch from './mobileSearch';
import AsideShop from './asideShop';


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

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };


  return (
    <div className='flex flex-col gap-1 max-w-[500px] sm:max-w-[1470px] m-auto'>
      <div className='sm:hidden w-full bg-white py-6'>
        < MobileSearch />
      </div>

      <div className='flex w-full justify-between bg-white p-4 items-center'>
        <div className="relative z-10 text-secondary ">
          <button
            className="bg-white font-normal lg:font-semibold px-2 sm:px-4 py-2 border border-gray-200 rounded-md shadow-sm w-30 sm:w-40 text-left flex justify-between items-center"
            onClick={() => setOpen(!open)}
          >
            {selected} <span className="ml-1 sm:ml-2">▿</span>
          </button>

          {open && (
            <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md">
              {options
                .filter((opt) => opt !== selected)
                .map((option) => (
                  <li key={option}>
                    <button
                      onClick={() => handleSelect(option)}
                      className="w-full text-left px-2 sm:px-4 py-2 hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <button
          className='bg-accent px-2 py-1 rounded md:hidden'
          onClick={handleFilterToggle}
        >< SlidersHorizontal className='' size={22} color='#fff' strokeWidth={1.5} /></button>
        <Columns3 className='hidden md:block' color='#484848' strokeWidth={1.5} />
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

      {isFilterOpen ?
        <div>
          <div className='fixed top-0 left-0 w-full h-screen bg-black/50 z-40' onClick={handleFilterToggle} >
          </div>
          <div className='z-50 w-full bg-bg-shop p-1 fixed bottom-0 rounded-2xl'>
            <div className='p-3 sm:p-5 pt-8 bg-white rounded-2xl'>
              <X className='absolute right-5' onClick={handleFilterToggle} />
              <AsideShop />
            </div>
          </div>
        </div> : null}

    </div>
  )
}
