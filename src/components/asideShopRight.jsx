import { Link } from 'react-router'
import React from 'react'

export default function AsideShopRight() {
    return (
        <div className='p-2 lg:p-5 flex flex-col gap-5 h-screen bg-white w-full sticky top-20 lg:pt-10'>
            <div className="w-full">
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 p-4 rounded-md shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Limited Time Offer!</h3>
                    <p className="text-gray-600 text-sm mb-3">Get 50% off your next purchase! Don't miss out on this great deal.</p>
                    <Link href="#" className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm">Shop Now</Link>
                    <p className="text-xs text-gray-400 mt-4">--This is a DEMO Ads--</p>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full h-full flex flex-col justify-center items-center bg-black p-4 rounded-md shadow-lg">
                    <h3 className="text-xl font-semibold text-white mb-3">Limited Time Offer!</h3>
                    <p className="text-bg-shop text-sm mb-3">Get 50% off your next purchase! Don't miss out on this great deal.</p>
                    <Link href="#" className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm">Shop Now</Link>
                    <p className="text-xs text-bg-shop mt-4">--This is a DEMO Ads--</p>
                </div>
            </div>
        </div>
    )
}
