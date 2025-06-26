import React from 'react'
import { Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { cartItems } from '../constants/userFlowCon';


export default function CheckoutCom() {
  const sub_total = 100000;
  const weight_total = "1.4kg";
  const shipping_cost = 250;
  const vat = "4%";
  const Total = 104500;

  const navigate = useNavigate();

  const handlePaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_581caa7a5f4ffaac83cb9a4e242238e4ad997202", // Replace with your public test key
      email: "customer@example.com",
      amount: Total, // Amount in kobo (₦100)
      currency: "NGN",
      ref: "ref_" + Math.floor(Math.random() * 1000000000 + 1),

      callback: (response) => {
        alert("Payment successful! Ref: " + response.reference);
        navigate("/REACT-DUMMY/payment"); // 🚀 auto-redirect on success
      },
      onClose: () => {
        alert("Payment not successful! Please try again.");
      },
    });

    handler.openIframe();
  };


  return (
    <div className='bg-deals px-2 mt-10 mb-10 sm:mb-0'>
      <div className='px-3 flex justify-center w-full max-w-[500px] sm:max-w-[1470px] m-auto'>
        <div className='step-line'>
          <div className='step-num bg-accent'> <Check strokeWidth={1.5} /> </div>
          <div className='text-sm sm:text-base'>Shipping</div>
        </div>
        <div className='step mt-3 bg-accent'></div>
        <div className='step-line'>
          <div className='step-num bg-accent'>2</div>
          <div className='text-sm sm:text-base'>Checkout</div>
        </div>
        <div className='step mt-3 bg-gray-400'></div>
        <div className='step-line'>
          <div className='step-num bg-gray-400'>3</div>
          <div className='text-sm sm:text-base'>Payment</div>
        </div>
      </div>

      {/* stepper end */}


      <div className='card md:flex justify-between w-full my-10 bg-white border border-border rounded-xl max-w-[500px] sm:max-w-[1470px] m-auto '>
        <div className='md:w-2/3'>
          <div className='p-3 sm:p-5'>
            <div className='text-lg text-secondary font-bold py-3 w-full border-b border-accent'>Items To Order</div>


            {/* mapping order items*/}
            {cartItems.map((item, index) => (
              <div key={index}>
                <div className='flex justify-between items-center border-b border-border py-2'>
                  <div className='flex gap-2'>
                    <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
                    <div className='flex flex-col'>
                      <h6 className='text-sm font-bold'>{item.name}</h6>
                      <p className='text-sm'>Size: {item.size}</p>
                      <p className='text-sm'>Color: {item.color}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-end w-1/6'>
                    <p className='text-sm font-bold'>₦{item.price}</p>
                    <p className='text-sm'>Qty: {item.qauntity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 justify-between w-full'>
            <div className='p-5 h-fit w-fit flex flex-col gap-2'>
              <h6 className='text-lg font-bold py-3'>Billing Info <Link className='text-accent text-sm font-normal' to='/REACT-DUMMY/shipping-update' >(edit)</Link></h6>
              <p className='text-sm'><span className='font-medium text-secondary'>Full Name:</span> <span className='tracking-widest'>Test Test</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>Phone Number:</span> <span className='tracking-widest'>+1234567890</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>Street Address:</span> <span className='tracking-widest'>123 Main St</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>City:</span> <span className='tracking-widest'>New York</span> </p>
              <p className='text-sm'><span className='font-medium text-secondary'>State:</span> <span className='tracking-widest'>NY</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>Zip Code:</span> <span className='tracking-widest'>10001</span></p>
            </div>

            <div className='p-5 h-fit w-fit flex flex-col gap-2'>
              <h6 className='text-lg font-bold py-3'>Shipping Info <Link className='text-accent text-sm font-normal' to='/REACT-DUMMY/shipping-update' >(edit)</Link></h6>
              <p className='text-sm'><span className='font-medium text-secondary'>Full Name:</span> <span className='tracking-widest'>Test Test</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>Phone Number:</span> <span className='tracking-widest'>+1234567890</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>Street Address:</span> <span className='tracking-widest'>123 Main St</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>City:</span> <span className='tracking-widest'>New York</span> </p>
              <p className='text-sm'><span className='font-medium text-secondary'>State:</span> <span className='tracking-widest'>NY</span></p>
              <p className='text-sm'><span className='font-medium text-secondary'>Zip Code:</span> <span className='tracking-widest'>10001</span></p>
            </div>
          </div>
        </div>
        <aside className='w-full md:w-4/12 bg-border'>
          <div className='p-5'>
            <h6 className='text-lg font-bold py-3'>Order Summary</h6>
            <div className='flex justify-between items-center border-b border-border py-2'>
              <p className='text-sm'>Subtotal</p>
              <p className='text-sm'>₦{sub_total}</p>
            </div>
            <div className='flex justify-between items-center border-b border-border py-2'>
              <p className='text-sm'>Total Weight</p>
              <p className='text-sm'>{weight_total}</p>
            </div>

            <div className='flex justify-between items-center border-b border-border py-2'>
              <p className='text-sm'>Shipping Cost</p>
              <p className='text-sm'>₦{shipping_cost}</p>
            </div>
            <div className='flex justify-between items-center border-b border-border py-2'>
              <p className='text-sm'>VAT</p>
              <p className='text-sm'>{vat}</p>
            </div>
            <div className='flex justify-between items-center border-b border-border py-2'>
              <p className='text-lg font-bold'>Total</p>
              <p className='text-lg font-bold'>₦{Total}</p>
            </div>
            <div className='flex justify-between items-center height-7 w-full gap-2 my-7'>
              <input className='border border-black p-2 rounded w-2/3' placeholder='Discount code' type="text" name="" id="" />
              <p className='card bg-accent text-white text-center rounded-md p-3 w-1/3 text-sm'>Apply</p>
            </div>

            <button className='card bg-black text-white text-center rounded-md p-3 mt-5 block w-full' onClick={handlePaystack}>Proceed to Payment</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
