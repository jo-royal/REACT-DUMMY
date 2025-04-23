import React from 'react'
import { wishList } from '../constants/userFlowCon'
import { Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router';



export default function WishlistCom() {
  return (
    <section className='sections max-w-[900px] mx-auto'>
        <table className='w-full'>
            <thead>
                <tr className=''>
                    <th className='font-medium sm:font-bold w-2/3'>Product</th>
                    <th className='font-medium sm:font-bold w-1/5'>View</th>
                    <th className='font-medium sm:font-bold w-1/5'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {wishList.map((item, index) => (
                <tr className='border-b border-border' key={index}>
                    <td>
                        <div className='flex items-center gap-2 p-2'>
                            <img className='max-w-[100px] h-auto' src={item.image} alt="Product" />
                            <h6 className='text-sm sm:text-base sm:pr-5'>{item.name}</h6>
                        </div>
                    </td>
                    <td><Link to={"/REACT-DUMMY/" + item.slug}> <Eye color='#FB00B5' strokeWidth={1.5} /></Link> </td>
                    <td><Trash2 strokeWidth={1.5} /> </td>
                </tr>
                ))}
            </tbody>
        </table>
    </section>
    
  )
}
