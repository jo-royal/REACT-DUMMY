import React from 'react'
import { useState } from 'react'
import { reviewData } from '../constants/shopCon'
import { formatDate } from './js/formatsDates';



export default function ReviewProduct() {
    const averageRating = reviewData.meta.averageRating
    const totalReviews = reviewData.meta.totalReviews
    const ratingBreakdown = reviewData.meta.ratingBreakdown
    const reviews = reviewData.reviews

    const ratingBreakdownArray = Object.entries(ratingBreakdown)// convert the key:value pair to → [ ['5', 12], ['4', 8] ]
        .sort(([a], [b]) => b - a) // For descending 5 -> 1  


    const sortOptions = [
        "Relevance",
        "Lowest",
        "Oldest",
        "Newest",
    ];
    const [selected, setSelected] = useState(sortOptions[0]);

    const handleSort = (option) => {
        setSelected(option);
        if (option === "Lowest") {
            reviews.sort((a, b) => a.rating - b.rating);
        } else if (option === "Oldest") {
            reviews.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (option === "Newest") {
            reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            reviews.sort((a, b) => b.rating - a.rating);
        }
    }


    return (
        <div className="w-full flex flex-col lg:flex-row gap-1 bg-bg-shop border-b-4 border-bg-shop">
            {/** sticky sidebar customer review */}
            <div className="w-full lg:w-[35%] bg-white lg:sticky lg:h-screen top-0 py-10 px-3 sm:px-5">
                <h3 className="lg:pb-5 text-xl">Customer reviews</h3>
                <div className='flex items-center gap-2 py-4'>
                    <h6 className='text-3xl'>{averageRating}</h6>
                    <div className="text-accent text-2xl font-jost">
                        {"★".repeat(Math.floor(averageRating))}
                        {"☆".repeat(5 - Math.floor(averageRating))}
                    </div>
                    <p className="text-sm text-blue-500">({totalReviews})reviews</p>
                </div>
                <p className='py-3'>
                    We rely only on
                    <span className="text-green-500 py-3"> Verified purchase ✔︎</span>
                </p>
                <p> Reviews can only be published by customers who have
                    <b className="text-secondary"> ordered and received</b> the item.
                </p>
                <div className='py-2 lg:py-5'>
                    <h4 className="text-xl py-7">Rating breakdown</h4>
                    {ratingBreakdownArray.map(([rating, count]) => (
                        <div className="flex items-center gap-5 py-2" key={rating}>
                            <p>{rating} stars</p>
                            <div className='h-1 bg-bg-shop rounded-full flex-1'>
                                <div className='h-1 bg-accent rounded-full' style={{ width: `${(count / totalReviews) * 100}%` }}></div>
                            </div>
                            <p className='text-sm text-blue-500'>({count})</p>
                        </div>
                    ))}
                </div>
            </div>
            {/** reviews list */}
            <div className="flex-1 bg-white">
                {/** sortOptions menu */}
                <div className='py-2 items-center border-b-4 border-bg-shop'>
                    <div className='flex justify-between lg:items-center px-3 sm:px-5'>
                        {sortOptions.map((option, index) => (
                            <button key={index} className={`card text-secondary text-sm cursor-pointer px-3 py-1.5 ${selected === option ? 'card bg-black text-white' : ''}`}
                                onClick={() => handleSort(option)} >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                {/** customers reviews */}
                <div className='p-3 sm:p-5'>
                    {reviews.map((review) => (
                        <div className='flex items-center gap-5 py-3 lg:py-5 border-b-2 border-bg-shop' key={review.id}>
                            <div className='w-full lg:w-5/6'>
                                <div className='flex items-center gap-5'>
                                    <h4 className='text-md font-semibold'>{review.name}</h4>
                                    <div className="text-accent text-md font-jost">
                                        {"★".repeat(Math.floor(review.rating))}
                                        {"☆".repeat(5 - Math.floor(review.rating))}
                                    </div>
                                </div>
                                <p className='text-sm text-gray-500'>{formatDate(review.date)}</p>
                                <p className='py-2'>{review.comment}</p>
                            </div>
                        </div>
                    ))}
                    <div className='w-full flex justify-between'></div>
                </div>
            </div>
        </div >
    )
}
