import React from 'react'

export default function ProductDescription() {
    return (
        <div className='w-full bg-white py-10 border-b-4 border-bg-shop'>
            <div className="w-full lg:w-2/3 p-3 sm:p-5 ">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Product Description</h2>
                <p className="leading-relaxed text-sm">
                    Introducing our premium Relaxed Fit Linen Shirt – the ultimate blend of comfort, elegance, and everyday wearability.
                    <br /><br />
                    Crafted from 100% pure, breathable linen, this shirt features a soft-touch finish designed to keep you cool and stylish throughout the seasons. The relaxed silhouette, combined with a buttonless split-collar design, gives it a contemporary, effortless appeal — perfect for casual outings, weekend getaways, or layering under your favorite blazer.
                    <br /><br />
                    Each piece is carefully tailored to ensure a flattering drape while maintaining a lightweight feel against your skin. Thoughtfully designed side slits and slightly dropped shoulders add a touch of modern sophistication, allowing for ease of movement and versatility in styling.
                    <br /><br />
                    Whether paired with jeans, linen trousers, or a midi skirt, the NOVA Relaxed Linen Shirt transitions seamlessly from day to night. Available in classic hues — Black, White, Blue, and Red — to suit every mood and wardrobe.
                    <br /><br />
                    Elevate your basics with timeless pieces built for durability, style, and unmatched comfort.
                    <br /><br />

                </p>
                <span className="font-semibold text-secondary ">Key Features:</span>
                <ul className="list-disc list-inside mt-2 text-sm ">
                    <li>Made from 100% premium quality linen</li>
                    <li>Relaxed fit with a buttonless, split-collar design</li>
                    <li>Lightweight and breathable fabric</li>
                    <li>Available in 4 timeless colors</li>
                    <li>Machine washable and easy to care for</li>
                    <li>Designed for versatility: casual or smart-casual outfits</li>
                </ul>
                <br />
                <span className="font-semibold text-secondary">Care Instructions:</span>
                <ul className="list-disc list-inside mt-2 text-sm ">
                    <li>Machine wash cold with like colors</li>
                    <li>Use gentle detergent</li>
                    <li>Tumble dry low or hang to dry</li>
                    <li>Warm iron if needed</li>
                </ul>
            </div>
        </div>
    )
}
