import React from 'react'
import { Search } from 'lucide-react'

export default function MobileSearch() {
  return (
      // mobile search bar
       <div className="sections max-w-[450px] relative mt-[40px] px-6.5 border border-secondary-deep rounded-2xl w-11/12 sm:hidden"> 
        <input type="text" placeholder="Search Item..." className='w-full h-[35px]'/>
        <Search color="#8A8A8A" size={24} strokeWidth={1.5} className='absolute right-6 top-1' />
      </div>
  )
}
