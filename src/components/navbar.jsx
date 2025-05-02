import { UserRound, Heart, Search, AlignJustify, X } from 'lucide-react';
import { navBarLinks } from '../constants/firstCon';
import { NavLink, Link } from 'react-router'
import { useState } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuSwitch = () => {
    switch (isMenuOpen) {
      case true:
        return <X color="#484848" size={26} strokeWidth={1.5} className='' />
      case false:
        return <AlignJustify color="#484848" size={26} strokeWidth={1.5} className='' />
      default:
        return <AlignJustify color="#484848" size={26} strokeWidth={1.5} className='' />
    }
  };


  return (
    <div className={isMenuOpen ? "fixed top-0 w-full bg-white z-30 py-3 sm:py-5" : "static py-3 sm:py-5"}>

      {/* mobile navbar */}
      <nav className='sections flex justify-between max-w-[500px] sm:max-w-full md:hidden' >
        <div className='flex items-center gap-4'>
          <button onClick={toggleMenu}> {menuSwitch()} </button>
          <h1 className='text-2xl '><span className='text-accent'>PES</span>MIC</h1>
        </div>
        <div className='flex items-center gap-4 sm:gap-5'>
          <div className="search w-40 relative border-b p-1 hidden sm:block md:hidden">
            <input type="text" placeholder="Search Item..." className='w-full' />
            <Search color="#484848" size={24} strokeWidth={1.5} className='absolute right-1 top-1' />
          </div>
          <NavLink to="/REACT-DUMMY/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#484848" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </NavLink>
          <NavLink to="/REACT-DUMMY/wishlist"> <Heart color="#484848" size={24} strokeWidth={1.5} /> </NavLink>
          <NavLink to="/REACT-DUMMY/login">  <UserRound color="#484848" size={24} strokeWidth={1.5} /> </NavLink>
        </div>
      </nav>

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
            <input type="text" placeholder="Search..." className='w-full' />
            <Search color="#484848" size={24} strokeWidth={1.5} className='absolute right-1 top-1' />
          </div>
          <Search color="#484848" size={24} strokeWidth={1.5} className='lg:hidden' />
          <NavLink to="/REACT-DUMMY/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#484848" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </NavLink>
          <NavLink to="/REACT-DUMMY/wishlist"> <Heart color="#484848" size={24} strokeWidth={1.5} /> </NavLink>
          <NavLink to="/REACT-DUMMY/login">  <UserRound color="#484848" size={24} strokeWidth={1.5} /> </NavLink>

        </div>
      </nav>

      {/* mobile navBarLinks */}
      {isMenuOpen ?
        (<>
          <div className='w-full h-screen bg-black/50 fixed top-14 sm:top-18 left-0 z-40'
            onClick={toggleMenu}>
          </div>
          <div className='w-full h-screen bg-bg-shop max-w-[500px] fixed top-14 sm:top-18 left-0 z-50 p-3 pt-7'>
            <ul className='w-full h-full flex flex-col gap-1 text-secondary font-medium'>
              {navBarLinks.map((link, index) => (
                <li key={index} className='bg-white rounded p-2'>
                  <Link to={link.href} >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>) :
        (null)}
    </div>
  )
}
