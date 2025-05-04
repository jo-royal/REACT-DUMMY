import { Link } from 'react-router'
import { timer } from '../constants/firstCon'
import { dotm } from '../constants/firstCon'
import { useRef } from 'react'

export default function Dotm() {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className='sections dotm-section grid grid-cols-1 sm:grid-cols-2 justify-between gap-20 sm:gap-10 mt-30 pb-12 bg-gradient-to-b from-white to-[#FAFAFA] max-w-[500px] sm:max-w-[1470px] m-auto'>
            <div className=''>
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
            {/* <div className='grid grid-cols-2 gap-5 w-full overflow-x-scroll grid-flow-col'>
                {dotm.map((item, index) => (
                    <div key={index} className='w-full h-auto relative'>
                        <img className=' h-auto w-full min-h-[335px]' src={item.image} alt={item.title} />
                        <div className='bg-white absolute bottom-15 left-5 w-39 h-23 p-3 text-secondary backdrop-blur-sm z-50'>
                            <p>{item.title}</p>
                            <p className='text-2xl pt-3'>{item.discount}</p>
                        </div>
                    </div>
                ))}
                {dotm.map((item, index) => (
                    <div key={index + 1} className='w-full h-full'>
                        <img className='w-auto h-2/3' src={item.image} alt={item.title} />
                        <div className='w-20 m-auto mt-5 flex items-center gap-5'>
                            <button className='bg-white rounded-full text-lg shadow-sm px-2'>&lt;</button>
                            <button className='bg-white rounded-full text-lg shadow-sm px-2'>&gt;</button>
                        </div>
                    </div>
                ))}

            </div> */}
            <div>
                <div ref={scrollRef} className="deals-container w-full overflow-x-auto">
                    <div className="grid auto-cols-[80%] sm:auto-cols-[minmax(320px,_300px)] grid-flow-col gap-5">
                        {dotm.map((item, index) => (
                            <Link key={index} to={item.href} className="relative w-full h-auto">
                                <img className="h-auto w-full object-cover" src={item.image} alt={item.title} />

                                <div className="absolute bottom-5 left-5 bg-white backdrop-blur-sm p-3 z-10">
                                    <p className="">{item.title}</p>
                                    <p className="text-2xl pt-2 text-accent">{item.discount}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex items-center justify-center mt-7 gap-5">
                    <button onClick={scrollLeft} className="bg-white rounded-full shadow px-2 text-lg">&lt;</button>
                    <button onClick={scrollRight} className="bg-white rounded-full shadow px-2 text-lg">&gt;</button>
                </div>
            </div>


        </section>
    )
}
