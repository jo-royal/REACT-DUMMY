import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import { cart } from '../constants/shopCon'
import { Trash2 } from 'lucide-react';

export default function Cart() {
  return (
    <>
    <div className='shadow-lg pb-5 sm:pb-5 sm:pt-2'>
          <Navbar />
    </div>

    <div className="cart-wrapper">

        {/* Laptop View */}
        <div className="cart-desktop">

          <table>
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, index) => {
        
                return (
                    <tr key={index} className="cart-item">
                    <td>
                    <div className="product-info">
                        <img src={item.image} alt={item.name} className="product-img" />
                        <div className="details">
                        <h4>{item.name}</h4>
                        <p className="color">Size : {item.size}</p>
                        <p className="color">Color: {item.color}</p>
                        <p className="remove">Remove</p>
                        </div>
                    </div>
                    </td>
                    <td>₦{item.price}</td>
                        <td>
                        <div className="quantity">
                            <button>-</button>
                            <span>{item.quantity}</span>
                            <button>+</button>
                        </div>
                        </td>
                    <td>₦10000</td>
                    </tr>
                );
                })}
            </tbody>
          </table>

                {/*Laptop View Total*/}
            <div className="total-section">
                <h3><span>Grand Total:</span> ₦10000 </h3>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>

      </div>

            {/*Laptop View Ends Here*/}

            {/* Mobile View Starts Here*/}

      <div className="cart-mobile">

        <table>
          <tbody>
            {cart.map((item, index) => {
    
              return (
                <tr key={index} className="cart-item">
                  <td>
                   <div className="product-info">
                    <img src={item.image} alt={item.name} className="product-img" />
                     <div className="details">
                      <h4>{item.name}</h4>
                      <p className="color">Size : {item.size}</p>
                      <p className="color">Color : {item.color}</p>
                     </div>
                     <p className="remove"><Trash2 /></p>
                   </div>
                  </td>
                    <td>
                    <div className='pqcontainer'>
                     <div className="quantity">
                        <button>-</button>
                        <span>{item.quantity}</span>
                        <button>+</button>
                     </div>
                     <td>₦{item.price}</td>
                     </div>
                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>

            {/* Mobile View Total*/}

      <div className="total-section">
          <h3><span>Grand Total:</span> ₦10000 </h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    
      </div>

        {/* Mobile View Ends Here*/}

    </div>
    </>
  )
}
