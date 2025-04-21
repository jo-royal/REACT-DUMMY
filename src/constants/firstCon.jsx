import { Gift, Gem, HandCoins, Percent } from "lucide-react";
import productOne from "../assets/product-one.png";


export const navBarLinks = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/login" },
    { label: "Shop", href: "/shop" },
    { label: "About ", href: "/about" },
    { label: "Contacts", href: "/contacts" },
];

  export const deals = [
    {icons: <Gift className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" stroke-width={1.5} />, label: "10% OFF For First Timer", href: "/"},
    {icons: <Gem className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" stroke-width={1.5}/>, label: "Minus -5000 Every End Of The Month", href: "/"},
    {icons: <HandCoins className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" stroke-width={1.5}/>, label: "5% Off Coupon Order Above 100,0000", href: "/"},
    {icons: <Percent className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" stroke-width={1.5}/>, label: "Gifts lorem presson avengers", href: "/"},
];

export const timer = [
    { label: "Days", time: "02" },
    { label: "Hr", time: "12" },
    { label: "Min", time: "30" },
    { label: "Sec", time: "45" },
];

export const newArrivalCatigories = [
    { label: "Bags", href: "/" },
    { label: "Shoes", href: "/shoes" },
    { label: "Jewelries", href: "/jewelries" },
    { label: "Clothes", href: "/clothes" },
    { label: "Accessories", href: "/accessories" },
    { label: "Cosmetics", href: "/comestics" },
];

export const newArrivalProducts = [
    { name: "Product One", price: "10,000", image: productOne },
    { name: "Product Two", price: "20,000", image: productOne },
    { name: "Product Three", price: "30,000", image: productOne },
    { name: "Product Four", price: "40,000", image: productOne },
    { name: "Product Five", price: "50,000", image: productOne },
    { name: "Product Six", price: "60,000", image: productOne },
];


export const cart = [
    { name: "Mini dress with ruffled straps", price: "10,000", image: productOne , quantity: 1, total: "100,000"},
    { name: "Mini dress with ruffled straps", price: "10,000", image: productOne , quantity: 1, total: "100,000"},
    { name: "Mini dress with ruffled straps", price: "10,000", image: productOne , quantity: 1, total: "100,000"},
    { name: "Mini dress with ruffled straps", price: "10,000", image: productOne , quantity: 1, total: "100,000"},
];
  