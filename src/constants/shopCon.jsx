import testImg from '../assets/test-one.png';
import testImg2 from '../assets/test-two.png';
import testImg3 from '../assets/test-three.png';



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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
    },
    {
        "id": 3,
        "title": "Loose Classic",
        "img": testImg,
        "vendor": "Pesmic",
        "rating": 4.5,
        "colors": ['black', 'white', 'blue', 'red'],
        "sizes": ["S", "M", "L", "XL"],
        "price": 10000,
        "salesPrice": 8000,
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
        "slug": "nova-relaxed-buttonless-linen-shirt"
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
            verified: true,
            date: "2024-12-01",
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            comment: "Pretty good but shipping was slow.",
            verified: true,
            date: "2024-11-15",
        },
        {
            id: 3,
            name: "Alice Johnson",
            rating: 3,
            comment: "Average quality. Not what I expected.",
            verified: false,
            date: "2024-10-20",
        },
        {
            id: 4,
            name: "Bob Brown",
            rating: 2,
            comment: "Not worth the price. Disappointed.",
            verified: true,
            date: "2024-09-10",
        },
        {
            id: 5,
            name: "Charlie Davis",
            rating: 1,
            comment: "Terrible experience. Will not buy again.",
            verified: false,
            date: "2024-08-05",
        },
        {
            id: 6,
            name: "Diana Prince",
            rating: 5,
            comment: "Absolutely love it! Highly recommend.",
            verified: true,
            date: "2024-07-25",
        },
        {
            id: 7,
            name: "Ethan Hunt",
            rating: 4,
            comment: "Good product but could be improved.",
            verified: true,
            date: "2024-06-30",
        },
        {
            id: 8,
            name: "Fiona Apple",
            rating: 3,
            comment: "It's okay, nothing special.",
            verified: false,
            date: "2024-05-15",
        },
        {
            id: 9,
            name: "George Clooney",
            rating: 2,
            comment: "Not what I expected. Would not recommend.",
            verified: true,
            date: "2024-04-10",
        },
        {
            id: 10,
            name: "Hannah Montana",
            rating: 1,
            comment: "Very disappointed with the quality.",
            verified: false,
            date: "2024-03-01",
        },
        // More mock reviews...
    ],
};