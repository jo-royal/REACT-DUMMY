import React from 'react'
import { colorClasses } from '../constants/colorList';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router';

export default function ProductCard({ title, img, vendor, rating, colors, sizes, price, salesPrice, slug }) {


    return (
        <div className='w-full'>
            <div className="rounded bg-white p-1 w-full">
                <Link to={slug} className='w-full hover:text-primary'>
                    <img className='transform hover:scale-102 hover:rounded duration-300 ease-in-out w-full' src={img} alt={title} />
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
                                <div key={idx} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: colorClasses[color] || color }} />
                            ))}
                            {colors.length > 3 && (
                                <div className="w-5 h-5 rounded-full border border-gray-300 text-sm">+{colors.length - 3}</div>
                            )}
                        </div>
                        <div className="hidden sm:flex gap-1 w-1/2">
                            {colors.slice(0, 3).map((color, idx) => (
                                <div key={idx} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: colorClasses[color] || color }} />
                            ))}
                            {colors.length > 3 && (
                                <div className="w-5 h-5 rounded-full border border-gray-300 text-sm">+{colors.length - 3}</div>
                            )}
                        </div>
                        {/* Sizes */}
                        <div className="deals-container flex gap-1 py-2 w-1/2 overflow-x-scroll pr-1">
                            {/* {sizes.slice(0, 3).map((size) => (
                        <p key={size}className="px-1 text-sm border border-gray-400 rounded bg-white hover:text-primary">{size}</p>
                    ))}
                    {sizes.length > 3 && (
                        <span className="px-1 text-sm border border-gray-400 rounded bg-white">+{sizes.length - 3}</span>
                    )} */}
                            {sizes.map((size, idx) => (
                                <p key={idx} className="px-1 text-sm border border-gray-400 rounded bg-white">{size}</p>
                            ))}
                        </div>
                    </div>
                </Link>
                {/* price and icons */}
                <div className='flex justify-between gap-2 pt-1 sm:px-2 md:px-0'>
                    <div className="flex items-start gap-1">
                        {salesPrice ? (
                            <>
                                <span className="text-accent font-semibold md:text-lg">₦{salesPrice}</span>
                                <span className="text-gray-400 font-jost line-through text-sm hidden sm:block">₦{price}</span>
                            </>
                        ) : (
                            <span className="text-gray-900 font-semibold text-lg">₦{price}</span>
                        )}
                    </div>
                    <div className="flex gap-2 justify-between p-1">
                        <button className=" "><Heart strokeWidth={1.5} color='#484848' size={24} /></button>
                        <button className=" ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#484848" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
