import React, { useState } from "react";


export default function PriceRange() {
    const [minPrice, setMinPrice] = useState(5000);
    const [maxPrice, setMaxPrice] = useState(499999);

    const min = 5000;
    const max = 1000000;
    const gap = 5000;

    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (value + gap <= maxPrice) {
        setMinPrice(value);
        }
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (value - gap >= minPrice) {
        setMaxPrice(value);
        }
    };

  return (
    <div className="w-full max-w-sm">

      <div className="relative h-10 flex items-center">
        {/* Track */}
        <div className="absolute left-0 right-0 h-1 bg-gray-300 rounded-full" />

        {/* Range fill */}
        <div
          className="absolute h-1 bg-pink-500 rounded-full"
          style={{
            left: `${(minPrice / max) * 100}%`,
            right: `${100 - (maxPrice / max) * 100}%`,
          }}
        />

        {/* Input sliders */}
        <input
          type="range"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
          className="range-thumb absolute w-full bg-transparent appearance-none pointer-events-none"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
          className="range-thumb absolute w-full bg-transparent appearance-none pointer-events-none"
        />
      </div>

      <div className="flex justify-between -mt-3 text-sm">
        <span>₦{minPrice}</span>
        <span>₦{maxPrice}</span>
      </div>

      {/* Extra styling */}
      <style jsx>{`
        input[type="range"].range-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 1rem;
          width: 1rem;
          background: #ec4899; /* Tailwind pink-500 */
          border-radius: 9999px;
          cursor: pointer;
          pointer-events: auto;
        }

        input[type="range"].range-thumb::-moz-range-thumb {
          height: 1rem;
          width: 1rem;
          background: #ec4899;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          pointer-events: auto;
        }

        input[type="range"].range-thumb::-ms-thumb {
          height: 1rem;
          width: 1rem;
          background: #ec4899;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          pointer-events: auto;
        }
      `}</style>
    </div>
  )
}
