import { useState, useEffect } from 'react'
import { cart } from '../constants/shopCon'

export default function CartCom() {

  const cartItems = cart[0].items;
  const cartTotalPrice = cart[0].cartTotalPrice;


  const [quant, setQuant] = useState(null)



  const increaseQuant = () => {
    setQuant(quant + 1);
  }
  const decreaseQuant = () => {
    setQuant(quant - 1);
  }


  return (
    <div className='p-3 sm:p-5 my-10'>
      <table className='w-full'>
        <thead>
          <tr className=''>
            <th className='font-medium w-[50%]'>Product</th>
            <th className='font-medium '>Price</th>
            <th className='font-medium'>Quantity</th>
            <th className='font-medium'>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className='border-b border-bg-shop w-full text-'>
              <td>
                <div className='py-2 flex gap-2'>
                  <div className='w-24 h-auto py-1'>
                    <img
                      src={item.product_variations.color.image}
                      alt={item.product}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className='flex-1 h-auto py-1'>
                    <h5>{item.product}</h5>
                  </div>
                </div>
              </td>
              <td className='h-full'>
                <div className='flex items-start gap-1'>
                  <h6> ₦{item.product_variations.sales_price}</h6>
                  <span className='font-jost text-sm text-accent line-through -mt-2'>{item.product_variations.price}</span>
                </div>
              </td>
              <td>
                <div className='border border-bg-shop px-3 py-1 flex w-fit h-fit'>
                  <button
                    className='text-lg p-1'>+</button>
                  <p className="p-1">{quant}</p>
                  <button className='tex-lg p-1'>−</button>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
