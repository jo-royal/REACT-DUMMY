import React from 'react'
import { useState } from 'react';
import { colorClasses } from '../constants/colorList';
import PriceRange from '../components/priceRange';



export default function AsideShop() {

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const colors = ['indigo', 'violet', 'sky', 'cyan', 'emerald', 'amber'];
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const brands = ["Pesmic", "Royal", "Wave", "Random", "Just", "About"]
  const seasons = ["Winter", "Springs", "Autums", "Summer"]



  return (
    <div className=''>
      <h3 className='text-xl pb-8'>Filter</h3>

      {/**   color in filter  */}
      <p className='text-secondary pb-2'>Color</p>
      <div className="flex gap-3 w-full flex-wrap mb-8">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorClick(color)}
            className={`w-6 h-6 rounded-full border transition duration-200
              ${selectedColor === color ? "scale-110 border-4 border-accent" : "border"} `}
            style={{ backgroundColor: colorClasses[color] || color }}
          />
        ))}
      </div>

      {/**   size in filter  */}
      <p className='text-secondary pb-2'>Size</p>
      <div className="flex gap-2 text-sm ">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`px-3 py-1 border rounded-md cursor-pointer 
            ${selectedSize === size ? "border-accent" : "border-border text-primary"} 
            bg-white transition duration-200`}
          >
            {size}
          </button>
        ))}
      </div>

      {/**   price in filter  */}
      <p className='text-secondary mt-8 pb-2'>Prices range</p>
      <div className='flex w-full justify-between -mt-3 text-sm'>
        <PriceRange />
      </div>

      <p className='text-secondary mt-8 pb-2'>Seasons</p>
      <div className='flex flex-col items-start gap-1 text-sm'>
        {seasons.map((season) => (
          <button key={season}>{season}</button>
        ))}
      </div>

      <p className='text-secondary mt-8 pb-2'>Brands</p>
      <div className='flex flex-wrap gap-3 text-sm'>
        {brands.map((brand) => (
          <button key={brand}>{brand}</button>
        ))}
      </div>


    </div>
  )
}
