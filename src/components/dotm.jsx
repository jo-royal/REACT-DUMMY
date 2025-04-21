import { Link } from 'react-router'
import { timer } from '../constants/firstCon'
import springProduct from '../assets/spring product.png'

export default function Dotm() {
  return (
    <section className='sections dotm-section flex flex-col md:flex-row justify-between gap-4 mt-30 pb-30'>
        <div className='md:w-1/2'>
            <h2 className='text-3xl pb-10'>Deals Of The Month</h2>
            <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            <Link to="/shop" className="card bg-black py-3 px-7 text-white text-sm">SHOP NOW</Link>
            <h5 className='mt-15 font-body font-medium text-xl'>Hurry, Before It’s Too Late!</h5>
            <div className='flex gap-5 mt-2'>
            {timer.map((item, index) => (
                <div key={index} className="time text-center mt-3">
                    <p className='font-digital timer text-center text-secondary text-xl p-3'>{item.time}</p>
                    <span className='text-secondary text-md'>{item.label}</span>
                </div>
            ))}
            </div>
        </div>
        <div className='md:w-1/2 flex justify-between m-auto gap-5'>
            <div className=''>
                <img className='md:h-10/12 lg:h-full w-auto' src={springProduct} alt="" />
            </div>
            <div className='hidden sm:block md:hidden lg:block'>
                <img className='h-full w-auto' src={springProduct} alt="" />  
            </div>

            
        </div>

    </section>
  )
}
