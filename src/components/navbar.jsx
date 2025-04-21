import { UserRound, Star, Search, AlignJustify } from 'lucide-react';
import { navBarLinks } from '../constants/firstCon';
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <>
    {/* mobile navbar */}
    <nav className='sections flex justify-between max-w-[500px] sm:max-w-full md:hidden' >
      <div className='flex items-center gap-4'>
      <AlignJustify color="#484848" size={24} stroke-width={1.5} className='' />
      <h1 className='text-2xl '><span className='text-accent'>PES</span>MIC</h1>
      </div>
      <div className='flex items-center gap-4 sm:gap-5'>
      <div className="search w-40 relative border-b p-1 hidden sm:block md:hidden"> 
            <input type="text" placeholder="Search Item..." className='w-full'/>
            <Search color="#484848" size={24} stroke-width={1.5} className='absolute right-1 top-1' />
        </div>
      <NavLink to="cart"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#484848" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </NavLink>
        <NavLink to="/wishlist"> <Star color="#484848" size={24} stroke-width={1.5}/> </NavLink>
        <NavLink to="/login">  <UserRound color="#484848" size={24} stroke-width={1.5}/> </NavLink>
      </div>

    </nav>
        {/* mobile search bar */}
    <div className="sections max-w-[450px] relative mt-[40px] px-6.5 border border-secondary-deep rounded-2xl w-11/12 sm:hidden"> 
            <input type="text" placeholder="Search Item..." className='w-full h-[35px]'/>
            <Search color="#8A8A8A" size={24} stroke-width={1.5} className='absolute right-6 top-1' />
    </div>

    {/* desktop navbar */}
    <nav className='sections hidden md:flex flex-row justify-between items-center'>
      <h1 className='text-2xl '><span className='text-accent'>PES</span>MIC</h1>

      {/* navBarLinks */}
      <ul className='flex md:gap-5 lg:gap-10'>
      {navBarLinks.map((item, index) => (
        <li className='text-secondary' key={index}>
          <NavLink 
          to={item.href} 
          className={({ isActive }) =>
          isActive ? "active" : ""
        } >{item.label}</NavLink>
        </li>
      ))}
      </ul>

      {/* navBarIcons*/}
      <div className="flex gap-4 lg:gap-5">
        <div className="search w-40 relative border-b p-1 hidden lg:block"> 
            <input type="text" placeholder="Search..." className='w-full'/>
            <Search color="#484848" size={24} stroke-width={1.5} className='absolute right-1 top-1' />
        </div>
        <Search color="#484848" size={24} stroke-width={1.5} className='lg:hidden' />
        <NavLink to="cart"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#484848" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </NavLink>
        <NavLink to="/wishlist"> <Star color="#484848" size={24} stroke-width={1.5}/> </NavLink>
        <NavLink to="/login">  <UserRound color="#484848" size={24} stroke-width={1.5}/> </NavLink>

      </div>
    </nav>
    </>
  )
}
