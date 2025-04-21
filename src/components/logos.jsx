import React from 'react'
import ck from "../assets/ck logo.png"
import lv from "../assets/lv logo.png"
import chanel from "../assets/chanel logo.png"
import denim from "../assets/denim logo.png"
import prada from "../assets/prada logo.png"

export default function Logos() {
  return (
    <>
        <div className="sections header-section flex flex-row flex-wrap justify-center sm:justify-evenly gap-10 sm:gap-5 mt-14 md:hidden ">
            <img className='mobile-logo' src={chanel} alt="pesmic chanel" />
            <img className='mobile-logo' src={lv} alt="pesmic lv" />
            <img className='mobile-logo' src={prada} alt="pesmic prada" />
            <img className='mobile-logo' src={ck} alt="pesmic ck" />
            <img className='mobile-logo' src={denim} alt="pesmic denim" />
        </div>
        <div className='sections header-section hidden md:grid grid-cols-5 justify-items-stretch gap-20  mt-16 '>
            <img className='logo' src={chanel} alt="pesmic chanel" />
            <img className='logo' src={lv} alt="pesmic lv" />
            <img className='logo' src={prada} alt="pesmic prada" />
            <img className='logo' src={ck} alt="pesmic ck" />
            <img className='logo' src={denim} alt="pesmic denim" />
        </div>
    </>
  )
}
