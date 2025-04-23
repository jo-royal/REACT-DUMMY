import wishListCart from "../assets/wishListCart.png";

{/* Wislist Returns */}
export const wishList = [ 
    {"name": "Testing long words to see breaking or injuries", "slug": "air-max-190", "image": wishListCart},
    {"name": "air max 200", "slug": "air-max-200", "image": wishListCart},
    {"name": "air max 150", "slug": "air-max-150", "image": wishListCart},
    {"name": "Karl Kani 1 Box", "slug": "karl-kani-1-box", "image": wishListCart},
    {"name": "Adidas Cabosh Way", "slug": "adidas-cabosh-way", "image": wishListCart},
    {"name": "Jordan Move 12", "slug": "jordan-move-12", "image": wishListCart},
]

{/* Shipping info*/}
export const shippingInfo = [
    {
        "status": true,
        "shipping_info": {
            "id": 10,
            "full_name": "test test",
            "street_address": "jhjcvgzhc67",
            "city": "ikeja",
            "state": "Lagos",
            "zip_code": "87686",
            "phone_number": "+3809987987"
        }
    }
]



{/* checkout */}
export const checkout = [
    {
        "cart_total": 127000.0,
        "vat": "4.00%",
        "sub_total": 132080.0,
        "shipping_cost": 960.0,
        "Total": 133040.0,
        "cart_items": [
            {
                "product": "adidas jordan 150",
                "quantity": 1,
                "product_variations": {
                    "color": {
                        "color": "green",
                        "image": "/media/adidas_jordan.jpeg"
                    },
                    "size": "S",
                    "price": "30000.00",
                    "sales_price": "25000.00"
                },
                "created": "2025-04-23T00:15:13.328750Z",
                "totalProductPrice": 25000.0
            },
            {
                "product": "air max 190",
                "quantity": 3,
                "product_variations": {
                    "color": {
                        "color": "white",
                        "image": "/media/NIKEAIRMAX_copy_7XhmVuD.png"
                    },
                    "size": "L",
                    "price": "40000.00",
                    "sales_price": "34000.00"
                },
                "created": "2025-04-23T00:24:49.453016Z",
                "totalProductPrice": 102000.0
            }
        ],
        "billing_info": {
            "billing_name": "test test",
            "billing_phone": "+3809987987",
            "billing_address": "molodoi hvardii 2",
            "billing_city": "kharkov",
            "billing_state": "kharkov",
            "billing_zip": 18709
        },
        "shipping_info": {
            "shipping_name": "home",
            "shipping_phone": "6757685",
            "shipping_address": "noware location 1234",
            "shipping_city": "ikeja",
            "shipping_state": "lagos",
            "shipping_zip": "786987"
        }
    }
]

{/* cart */}
export const cart = [
    {
        "cartTotalPrice": 127000.0,
        "cartTotalWeight": 2.4,
        "items": [
            {
                "product": "adidas jordan 150",
                "quantity": 1,
                "product_variations": {
                    "color": {
                        "color": "green",
                        "image": "http://127.0.0.1:8000/media/adidas_jordan.jpeg"
                    },
                    "size": "S",
                    "price": "30000.00",
                    "sales_price": "25000.00"
                },
                "created": "2025-04-23T00:15:13.328750Z",
                "totalProductPrice": 25000.0
            },
            {
                "product": "air max 190",
                "quantity": 3,
                "product_variations": {
                    "color": {
                        "color": "white",
                        "image": "http://127.0.0.1:8000/media/NIKEAIRMAX_copy_7XhmVuD.png"
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