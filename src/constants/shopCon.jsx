import testImg from '../assets/test-one.png';
import testImg2 from '../assets/test-two.png';
import testImg3 from '../assets/test-three.png';
import catCloth from '../assets/cat-cloth.png';
import catShoe from '../assets/cat-shoe.png';
import catAcc from '../assets/cat-accessories.png';
import catFitness from '../assets/cat-fitness.png';
import catBabies from '../assets/cat-babies.png';
import catBag from '../assets/cat-bag.png';
import catBikini from '../assets/cat-bikini.png';
import catMaternity from '../assets/cat-maternity.png';
import catSportwear from '../assets/cat-sportwear.png';
import catSnickers from '../assets/cat-snickers.png';
import catJoggers from '../assets/cat-joggers.png';


{/* cart */ }
export const cart = [
    {
        "cartTotalPrice": 127000.0,
        "cartTotalWeight": 2.4,
        "items": [
            {
                "product": "Mini dress with ruffled straps",
                "quantity": 1,
                "product_variations": {
                    "color": {
                        "color": "green",
                        "image": testImg2
                    },
                    "size": "S",
                    "price": "30000.00",
                    "sales_price": "25000.00"
                },
                "created": "2025-04-23T00:15:13.328750Z",
                "totalProductPrice": 25000.0
            },
            {
                "product": "Air max 190",
                "quantity": 3,
                "product_variations": {
                    "color": {
                        "color": "white",
                        "image": testImg3
                    },
                    "size": "L",
                    "price": "40000.00",
                    "sales_price": "34000.00"
                },
                "created": "2025-04-23T00:24:49.453016Z",
                "totalProductPrice": 102000.0
            }
        ]
    }
]


// 🧪 Mock Category Data
export const categories = [
    {
        "id": 1,
        "name": "Clothes",
        "img": catCloth,
        "description": "hello world, this is clothes section",
        "subcategories": [
            {
                "name": "Bikini",
                "img": catBikini
            },
            {
                "name": "Maternity",
                "img": catMaternity
            },
            {
                "name": "Sportwear",
                "img": catSportwear
            }
        ]
    },
    {
        "id": 2,
        "name": "Shoes",
        "img": catShoe,
        "description": "hello world, this is shoes section",
        "subcategories": [
            {
                "name": "Snickers",
                "img": catSnickers
            },
            {
                "name": "Joggers",
                "img": catJoggers
            }
        ]
    },
    {
        "id": 3,
        "name": "Bags",
        "img": catBag,
        "description": "hello world, this is bags section",
        "subcategories": [
        ]
    },
    {
        "id": 4,
        "name": "Bikini",
        "img": catBikini,
        "description": "hello world, this is bikini section",
        "subcategories": [
            {
                "name": "Clothes",
                "img": catCloth
            },
            {
                "name": "Accessories",
                "img": catAcc
            }
        ]
    },
    {
        "id": 5,
        "name": "Accessories",
        "img": catAcc,
        "description": "hello world, this is accessories section",
        "subcategories": [
            {
                "name": "Bags",
                "img": catBag
            },
            {
                "name": "Fitness",
                "img": catFitness
            }
        ]
    },
    {
        "id": 6,
        "name": "Fitness",
        "img": catFitness,
        "description": "hello world, this is fitness section",
        "subcategories": [
            {
                "name": "Clothes",
                "img": catCloth
            },
            {
                "name": "Accessories",
                "img": catAcc
            }
        ]
    },
    {
        "id": 7,
        "name": "Maternity",
        "img": catMaternity,
        "description": "hello world, this is maternity section",
        "subcategories": [
            {
                "name": "Clothes",
                "img": catCloth
            },
            {
                "name": "Accessories",
                "img": catAcc
            }
        ]
    },
    {
        "id": 8,
        "name": "Babies",
        "img": catBabies,
        "description": "hello world, this is babies section",
        "subcategories": [
            {
                "name": "Clothes",
                "img": catCloth
            },
            {
                "name": "Accessories",
                "img": catAcc
            }
        ]
    }
]


// 🧪 Mock Product Data and recomended products}
export const products = [
    {
        "id": 1,
        "title": "Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas",
        "img": testImg3,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red', 'green', 'yellow', 'purple', 'pink'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 2,
        "title": "Loose Classic",
        "img": testImg2,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "slug": "details"
    },
    {
        "id": 3,
        "title": "Loose Classic",
        "img": testImg3,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 4,
        "title": "Loose Classic",
        "img": testImg,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "slug": "details"
    },
    {
        "id": 5,
        "title": "Loose Classic",
        "img": testImg,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 6,
        "title": "Loose Classic",
        "img": testImg3,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 7,
        "title": "Loose Classic",
        "img": testImg,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 8,
        "title": "Loose Classic",
        "img": testImg3,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 9,
        "title": "Loose Classic",
        "img": testImg,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 10,
        "title": "Loose Classic",
        "img": testImg,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 11,
        "title": "Loose Classic",
        "img": testImg2,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    },
    {
        "id": 12,
        "title": "Loose Classic",
        "img": testImg2,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "details"
    }
]

// 🧪 Mock Review Data
export const reviewData = {
    meta: {
        totalReviews: 500,
        averageRating: 4.2,
        ratingBreakdown: {
            5: 320,
            4: 100,
            3: 50,
            2: 20,
            1: 10,
        },
    },
    reviews: [
        {
            id: 1,
            name: "John Doe",
            rating: 5,
            comment: "Amazing product. Exceeded expectations.",
            date: "2025-09-28T23:59:59.504Z",
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            comment: "Pretty good but shipping was slow. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo. ",
            date: "2025-10-03T04:41:37.332Z",
        },
        {
            id: 3,
            name: "Alice Johnson",
            rating: 3,
            comment: "Average quality. Not what I expected.",
            date: "2025-09-25T07:46:34.428Z",
        },
        {
            id: 4,
            name: "Bob Brown",
            rating: 2,
            comment: "Not worth the price. Disappointed.",
            date: "2025-09-21T23:41:30.340Z",
        },
        {
            id: 5,
            name: "Charlie Davis",
            rating: 1,
            comment: "Terrible experience. Will not buy again.",
            date: "2024-11-14T07:44:28.735Z",
        },
        {
            id: 6,
            name: "Diana Prince",
            rating: 5,
            comment: "Absolutely love it! Highly recommend.",
            date: "2024-07-26T12:37:48.256Z",
        },
        {
            id: 7,
            name: "Ethan Hunt",
            rating: 4,
            comment: "Good product but could be improved.",
            date: "2024-04-29T11:07:21.456Z",
        },
        {
            id: 8,
            name: "Fiona Apple",
            rating: 3,
            comment: "It's okay, nothing special.",
            date: "2025-11-03T18:50:54.772Z",
        },
        {
            id: 9,
            name: "George Clooney",
            rating: 2,
            comment: "Not what I expected. Would not recommend.",
            date: "2024-01-18T00:42:05.710Z",
        },
        {
            id: 10,
            name: "Hannah Montana",
            rating: 1,
            comment: "Very disappointed with the quality.",
            date: "2025-05-28T21:29:44.421Z",
        },
        // More mock reviews...
    ],
};