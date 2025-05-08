import { useState, useEffect } from 'react'
import { cart } from '../constants/shopCon'

export default function CartCom() {

  const cartItems = cart[0].items;
  const cartTotalPrice = cart[0].cartTotalPrice.toLocaleString();


  const [quant, setQuant] = useState(null)



  return (
    <div className='relative'>
      {/** big views */}
      <div className='p-3 hidden sm:block '>
        <table className='w-full'>
          <thead>
            <tr className='border-bg-shop border-b-3 w-full'>
              <th className='font-medium w-[55%] md:w-[50%]'>Product</th>
              <th className='font-medium'>Price</th>
              <th className='font-medium '>Quantity</th>
              <th className='font-medium'>Total</th>
            </tr>
          </thead>
          <tbody className=''>
            {cartItems.map((item, index) => (
              <tr key={index} className='border-b border-bg-shop w-full'>
                <td>
                  <div className='py-2 flex gap-2'>
                    <div className='w-24 h-auto py-1'>
                      <img
                        src={item.product_variations.color.image}
                        alt={item.product}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className='flex-1 h-auto py-1 flex flex-col justify-between  md:text-base pr-7'>
                      <h5 className=''>{item.product}</h5>
                      <p>Size: {item.product_variations.size} || Color: {item.product_variations.color.color}</p>
                      <button className='border-b border-border w-fit'>Remove</button>
                    </div>
                  </div>
                </td>
                <td className='h-full'>
                  <div className='flex items-start gap-1  md:text-base'>
                    <h6 className=''>₦{item.product_variations.sales_price}</h6>
                    <span className='hidden lg:block font-jost text-accent line-through -mt-2'>{item.product_variations.price}</span>
                  </div>
                </td>
                <td>
                  <div className='border border-bg-shop px-2 flex w-fit h-fit rounded gap-1.5 text-sm md:text-base'>
                    <button className='p-1'>+</button>
                    <p className="p-1">{item.quantity}</p>
                    <button className='p-1'>−</button>
                  </div>
                </td>
                <td><h5 className='text-sm md:text-base'>₦{item.totalProductPrice.toLocaleString()}</h5></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/** mobile views */}
      <div className='px-3 border-t-2 border-border w-full my-5  sm:hidden max-w-[500px] m-auto '>
        {cartItems.map((item, index) => (
          <div key={index} className='w-full py-3 border-b border-bg-shop flex justify-between'>
            <div className='flex gap-2 w-2/3'>
              <div className='w-20 h-fit'>
                <img
                  src={item.product_variations.color.image}
                  alt={item.product}
                  className="w-full h-auto object-cover" />
              </div>
              <div className='flex-1 w-1/3 flex flex-col justify-between text-sm'>
                <h3 className='w-full truncate'>{item.product}</h3>
                <p>Size: {item.product_variations.size}</p>
                <p>Color: {item.product_variations.color.color}</p>
                <div className='border border-border px-2 flex w-fit h-fit rounded gap-2'>
                  <button className=''>+</button>
                  <p className="px-1">{item.quantity}</p>
                  <button className=''>−</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between text-sm'>
              <h6>₦{item.totalProductPrice.toLocaleString()}</h6>
              <button className='border-b border-border'>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className='px-5 pb-5 w-full m-auto flex flex-col max-w-[500px] sm:max-w-[50%] lg:max-w-[500px] sticky bottom-0 sm:bottom-auto sm:absolute sm:right-5 bg-white border-t-2 border-border'>
        <div className='flex justify-between text-md p-2 w-full'>
          <h6>Total</h6>
          <h6>{cartTotalPrice}</h6>
        </div>
        <button className='card bg-black hover:bg-accent cursor-pointer text-white py-2 mt-10 w-full'>Checkout</button>
      </div>
    </div>
  )
}
