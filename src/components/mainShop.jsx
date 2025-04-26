import React, { useState } from 'react'
import { Columns3, ShoppingCart, Heart  } from 'lucide-react';
import testImg from '../assets/test-one.png';

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

    const rating = 4;

    const sizes = ['S', 'M', 'L', 'XL']

    const colors = ["red", "green", "blue", "yellow"]

  return (
    <div className='flex flex-col gap-1'>
    <div className='flex w-full justify-between bg-white p-4'>
     <div className="relative z-10 text-secondary ">
      <button
        className="bg-white font-semibold px-4 py-2 border border-gray-200 rounded-md shadow-sm w-40 text-left flex justify-between items-center"
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

    <div className='grid grid-cols-3 gap-2 p-1'>
        <div className="rounded bg-white p-1">
            <img className='h-[260px] w-full transform hover:scale-102 hover:rounded duration-300 ease-in-out' src={testImg} alt="" />
            <p className='w-full truncate py-2 font-medium font-header text-secondary'>NOVA Relaxed Buttonless Linen Shirt with Split Collar, Boyfriend Linen Shirt, Loose Classic Top for Women, KNOTIUM Fall Linen Clothing</p>

            {/* vendor and rating */}
            <div className='flex justify-between'>
                <p className='w-3/5 truncate'>Pesmic</p>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))} ({rating})
                </div>
            </div>
            <div className='flex justify-between gap-2 w-full items-center'>
                {/* Colors */}
                <div className="flex gap-1 flex-wrap">
                    {colors.slice(0, 3).map((color, idx) => (
                        <div key={idx} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }}/>
                    ))}
                    {colors.length > 3 && (
                        <div className="w-5 h-5 rounded-full border border-gray-300 text-sm">+{colors.length - 3}</div>
                    )}
                </div>
                {/* Sizes */}
                <div className="flex flex-wrap gap-1 py-2 ">
                {sizes.slice(0, 3).map((size) => (
                    <p key={size}className="px-1 text-sm border border-gray-400 rounded bg-white">{size}</p>
                ))}
                {sizes.length > 3 && (
                    <span className="px-1 text-sm border border-gray-400 rounded bg-white">+{sizes.length - 3}</span>
                )}
                </div>
            </div>

            {/* price and icons */}
            <div className='flex justify-between gap-2'>
                <div className="flex items-start gap-1">
                    <span className="text-pink-500 font-semibold text-lg">₦10000</span>
                    <span className="text-gray-400 line-through text-sm">₦14000</span>
                </div>
                <div className="flex gap-4 justify-between p-1">
                    <button className=" "><Heart strokeWidth={1.5} color='#484848' size={25}/></button>
                    <button className=" "><ShoppingCart strokeWidth={1.5} color='#484848' size={25}/></button>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}
