import { UserRound, Heart, Search, AlignJustify, X } from 'lucide-react';
import { navBarLinks } from '../constants/firstCon';
import { NavLink, Link } from 'react-router'
import { useState } from 'react';
import { categories } from '../constants/shopCon';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //sub categories
  const [selectedCategory, setSelectedCategory] = useState(null);


  const toggleMenu = () => {
    setSelectedCategory(null);
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



  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };


  //for desktop
  const [showCategories, setShowCategories] = useState(false);



  return (
    <div className={isMenuOpen ? "fixed top-0 w-full bg-white z-30 py-3 sm:py-5" : "static py-3 sm:py-5"}>

      {/* mobile navbar */}
      <nav className='sections flex justify-between max-w-[500px] sm:max-w-full md:hidden' >
        <div className='flex items-center gap-4'>
          <button onClick={toggleMenu}> {menuSwitch()} </button>
          <Link to='/REACT-DUMMY/' className='text-2xl font-header'><span className='text-accent'>PES</span>MIC</Link>
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
        <Link to='/REACT-DUMMY/' className='text-2xl font-header'><span className='text-accent'>PES</span>MIC</Link>

        {/* navBarLinks */}
        <ul className='flex md:gap-5 lg:gap-10'>
          <li className='text-secondary'>
            <div
              className=""
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <button className={showCategories ? "bg-bg-shop text-accent p-2 rounded" : ""}>
                Categories
              </button>

              {/* Category Container */}
              {showCategories && (
                <div className="absolute top-15 left-8 bg-bg-shop rounded shadow-md p-4 w-3/5 z-50">
                  <ul className="grid grid-cols-2 gap-1 w-full mt-3 font-medium">
                    {categories.map((cat) => (
                      <li key={cat.id} className="w-full hover:text-accent bg-white rounded p-2 h-15 cursor-pointer">
                        <button className='flex justify-between items-center w-full h-full'>
                          <div className='flex gap-3 h-full items-center'>
                            <img className='h-full w-auto' src={cat.img} alt={cat.name} />
                            <p>{cat.name}</p>
                          </div>
                          <p className='w-full text-end'>&gt;</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
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
          <div className='w-full h-screen bg-black/50 fixed top-14 sm:top-18 left-0 z-30'
            onClick={toggleMenu}>
          </div>
          <div className='w-full h-screen bg-bg-shop max-w-[500px] fixed top-14 sm:top-18 left-0 z-40 p-3 pt-7 overflow-y-scroll'>
            <ul className='w-full h-fit flex flex-col gap-1 text-secondary font-medium'>
              {navBarLinks.map((link, index) => (
                <li key={index} className='bg-white rounded px-2 py-3'>
                  <Link to={link.href} >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className='my-5 pt-5 text-xl'>Categories</h4>
            <ul className='w-ful h-fit grid grid-cols-2 gap-2 text-secondary font-medium pb-5'>
              {categories.map((item) => (
                <li onClick={() => handleCategoryClick(item)} key={item.id} className='bg-white rounded p-2 flex justify-between items-center w-full h-15'>
                  <div >
                    {item.name}
                  </div>
                  <img className='h-full w-auto' src={item.img} alt={item.name} />
                </li>
              ))}
            </ul>
          </div>
        </>) :
        (null)}


      {/** subcategories updatte */}
      {selectedCategory ? (
        <>
          <div className=' w-full h-screen bg-bg-shop max-w-[500px] fixed top-14 sm:top-18 left-0 z-50 p-3 pt-7 overflow-y-scroll ease-out duration-300'>
            <div className='flex gap-15 items-center mb-5'>
              <button onClick={handleBack} className='shadow-sm px-2 py-1 rounded bg-white'>&lt;  Back</button>
              <h4 className=''>'{selectedCategory.name}'</h4>
            </div>
            <ul className='w-full h-fit flex flex-col text-secondary font-medium'>
              {selectedCategory.subcategories.map((subItem, index) => (
                <li key={index} className='bg-white rounded border-b border-bg-shop p-2 h-15 w-full'>
                  <button className='flex justify-between items-center w-full h-full'>
                    <div className='flex gap-3 h-full'>
                      <img className='h-full w-auto' src={subItem.img} alt={subItem.name} />
                      <p>{subItem.name}</p>
                    </div>
                    <p className='w-full text-end'>&gt;</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (null)}


    </div>



  )
}
