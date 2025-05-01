{/* Shipping info*/ }
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


{/* checkout */ }
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

{/* cart */ }
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


{/* products */ }
export const products = [
    {
        "id": 1,
        "name": "air max 190",
        "details": "air max 190, product from air max,, u will love it even though this is just a test but you can trust my word annd purchse... u will see your money dancing.. limao.. okay no joke,, chao.",
        "image": "http://127.0.0.1:8000/media/NIKEAIRMAX_copy.png",
        "slug": "air-max-190",
        "category": {
            "name": "shoes"
        },
        "subcategory": {
            "name": "snickers"
        },
        "entries": [
            {
                "brand": "pesmic",
                "brand_tag": "pesmic",
                "image_catalog": null,
                "colors": [
                    {
                        "color": "white",
                        "image": "http://127.0.0.1:8000/media/NIKEAIRMAX_copy_7XhmVuD.png",
                        "product_variation": [
                            {
                                "size": "L",
                                "price": "40000.00",
                                "sales_price": "34000.00",
                                "quantity": 10,
                                "in_stock": true,
                                "weight": "0.40"
                            },
                            {
                                "size": "S",
                                "price": "50000.00",
                                "sales_price": null,
                                "quantity": 6,
                                "in_stock": true,
                                "weight": "500.00"
                            }
                        ]
                    },
                    {
                        "color": "red",
                        "image": "http://127.0.0.1:8000/media/nike-air-max-190_red_copy.png",
                        "product_variation": [
                            {
                                "size": "L",
                                "price": "40000.00",
                                "sales_price": null,
                                "quantity": 7,
                                "in_stock": true,
                                "weight": "400.00"
                            }
                        ]
                    }
                ]
            },
            {
                "brand": "jo_royal",
                "brand_tag": "joroyal",
                "image_catalog": null,
                "colors": [
                    {
                        "color": "red",
                        "image": "http://127.0.0.1:8000/media/sneakers.jpeg",
                        "product_variation": [
                            {
                                "size": "L",
                                "price": "50000.00",
                                "sales_price": "40000.00",
                                "quantity": 4,
                                "in_stock": true,
                                "weight": "1.00"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "adidas jordan 150",
        "details": "save for dish..",
        "image": "http://127.0.0.1:8000/media/adidas_copy.png",
        "slug": "adidas-jordan-150",
        "category": {
            "name": "shoes"
        },
        "subcategory": {
            "name": "snickers"
        },
        "entries": [
            {
                "brand": "jo_royal",
                "brand_tag": null,
                "image_catalog": null,
                "colors": [
                    {
                        "color": "green",
                        "image": "http://127.0.0.1:8000/media/adidas_jordan.jpeg",
                        "product_variation": [
                            {
                                "size": "S",
                                "price": "30000.00",
                                "sales_price": "25000.00",
                                "quantity": 3,
                                "in_stock": true,
                                "weight": "1.20"
                            }
                        ]
                    }
                ]
            },
            {
                "brand": "pesmic",
                "brand_tag": "pesmic",
                "image_catalog": null,
                "colors": [
                    {
                        "color": "blue",
                        "image": "http://127.0.0.1:8000/media/adidas_copy_c6chzwC.png",
                        "product_variation": []
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "necklase gold 25k",
        "details": "ust another testing gold necklase,  products.",
        "image": "http://127.0.0.1:8000/media/goldnecklase_copy.png",
        "slug": "necklase-gold-25k",
        "category": {
            "name": "jeweries"
        },
        "subcategory": {
            "name": "gold"
        },
        "entries": [
            {
                "brand": "jo_royal",
                "brand_tag": null,
                "image_catalog": null,
                "colors": []
            }
        ]
    },
    {
        "id": 4,
        "name": "JavaScript",
        "details": "test",
        "image": "http://127.0.0.1:8000/media/mobile-img.png",
        "slug": "JavaScript",
        "category": null,
        "subcategory": null,
        "entries": [
            {
                "brand": "pesmic",
                "brand_tag": null,
                "image_catalog": null,
                "colors": [
                    {
                        "color": "yellow",
                        "image": null,
                        "product_variation": [
                            {
                                "size": "L",
                                "price": "45000.00",
                                "sales_price": null,
                                "quantity": 5,
                                "in_stock": true,
                                "weight": "400.00"
                            }
                        ]
                    }
                ]
            },
            {
                "brand": "jo_royal",
                "brand_tag": null,
                "image_catalog": null,
                "colors": [
                    {
                        "color": "black",
                        "image": null,
                        "product_variation": [
                            {
                                "size": "XL",
                                "price": "45000.00",
                                "sales_price": null,
                                "quantity": 0,
                                "in_stock": false,
                                "weight": "500.00"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "jordan air 150",
        "details": "a air max verion 150 ft with jordan",
        "image": "http://127.0.0.1:8000/media/airmax_150_copy.png",
        "slug": "jordan-air-150",
        "category": {
            "name": "shoes"
        },
        "subcategory": {
            "name": "snickers"
        },
        "entries": []
    }
]