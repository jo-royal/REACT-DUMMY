import React from 'react'
import { colorClasses } from '../constants/colorList';
import { ShoppingCart, Heart  } from 'lucide-react';
import { Link } from 'react-router';

export default function ProductCard( {title, img, vendor, rating, colors, sizes, price, salesPrice, slug } ) {
   

  return (
    <div className='w-full'>
        <div className="rounded bg-white p-1 w-full">
            <Link to={slug} className='w-full hover:text-primary'>
                <img className='transform hover:scale-102 hover:rounded duration-300 ease-in-out' src={img} alt={title} />
                <p className='truncate py-1 sm:px-2 md:px-0 font-medium font-header text-secondary'>{title}</p>

                {/* vendor and rating */}
                <div className='flex justify-between sm:px-2 md:px-0'>
                    <p className='w-2/5 truncate'>{vendor}</p>
                    <div className="flex items-center gap-1 text-accent text-sm">
                        {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
                    </div>
                </div>
                    {/* colors and sizes */}
                <div className='flex justify-between gap-3 w-full items-center px-1 sm:px-2 md:px-0'>
                    {/* Colors */}
                    <div className="flex gap-1 w-1/2 sm:hidden">
                        {colors.slice(0, 2).map((color, idx) => (
                            <div key={idx} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: colorClasses[color] || color }}/>
                        ))}
                        {colors.length > 3 && (
                            <div className="w-5 h-5 rounded-full border border-gray-300 text-sm">+{colors.length - 3}</div>
                        )}
                    </div>
                    <div className="hidden sm:flex gap-1 w-1/2">
                        {colors.slice(0, 3).map((color, idx) => (
                            <div key={idx} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: colorClasses[color] || color }}/>
                        ))}
                        {colors.length > 3 && (
                            <div className="w-5 h-5 rounded-full border border-gray-300 text-sm">+{colors.length - 3}</div>
                        )}
                    </div>
                    {/* Sizes */}
                    <div className="deals-container flex gap-1 py-2 w-1/2 overflow-x-scroll pr-1">
                    {sizes.slice(0, 3).map((size) => (
                        <p key={size}className="px-1 text-sm border border-gray-400 rounded bg-white">{size}</p>
                    ))}
                    {sizes.length > 3 && (
                        <span className="px-1 text-sm border border-gray-400 rounded bg-white">+{sizes.length - 3}</span>
                    )}
                    </div>
                </div>
            </Link>
          {/* price and icons */}
          <div className='flex justify-between gap-2 pt-1 sm:px-2 md:px-0'>
              <div className="flex items-start gap-1">
              {salesPrice ? (
                <>
                  <span className="text-pink-500 font-semibold sm:text-lg">₦{price}</span>
                  <span className="text-gray-400 line-through text-sm hidden sm:block">₦{salesPrice}</span>
                </>
                ) : (
                    <span className="text-gray-900 font-semibold text-lg">₦{price}</span>
             )}
              </div>
              <div className="flex gap-2 sm:gap-4 justify-between p-1">
                  <button className=" "><Heart strokeWidth={1.5} color='#484848' size={25}/></button>
                  <button className=" "><ShoppingCart strokeWidth={1.5} color='#484848' size={25}/></button>
              </div>
          </div>
          
      </div>
    </div>
  )
}
