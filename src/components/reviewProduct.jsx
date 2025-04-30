import React from 'react'
import { reviewData } from '../constants/shopCon'

export default function reviewProduct() {
    const averageRating = reviewData.meta.averageRating
    const totalReviews = reviewData.meta.totalReviews
    const ratingBreakdown = reviewData.meta.ratingBreakdown
    const reviews = reviewData.reviews

    const ratingBreakdownArray = Object.entries(ratingBreakdown)  // convert the key:value pair to → [ ['5', 12], ['4', 8] ]



    return (
        <div className="w-full flex gap-1 ">
            <div className="w-2/5 sticky top-0">
                <h3 className="pb-5 text-xl">Customer reviews of this product</h3>
                <div className='flex items-center gap-2 py-4'>
                    <h6 className='text-3xl'>{averageRating}</h6>
                    <div className="text-accent text-2xl font-jost">
                        {"★".repeat(Math.floor(averageRating))}
                        {"☆".repeat(5 - Math.floor(averageRating))}
                    </div>
                    <p className="text-sm text-blue-500">({totalReviews})reviews</p>
                </div>
                <p className='py-2'>
                    We rely only on
                    <span className="text-green-500 py-3"> Verified purchase ✔︎</span>
                </p>
                <p> Reviews can only be published by customers who have
                    <b className="text-secondary"> ordered and received</b> the item.
                </p>
                <div>
                    <h4 className="text-lg py-5">Rating breakdown</h4>
                    {ratingBreakdownArray.map(([rating, count]) => (
                        <div className="flex items-center gap-2 py-2" key={rating}>
                            <p>{rating}</p>
                            <div className='h-2 bg-gray-200 rounded-full w-full'>
                                <div className='h-2 bg-accent rounded-full' style={{ width: `${(count / totalReviews) * 100}%` }}></div>
                            </div>
                            <p>{count}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1"></div>
        </div >
    )
}
