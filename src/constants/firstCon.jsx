import { Gift, Gem, HandCoins, Percent, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import productOne from "../assets/product-one.png";
import springProduct from '../assets/spring product.png'
import googleIcon from '../assets/google-store.png'
import appIcon from '../assets/app-store.png'



export const navBarLinks = [
    { label: "Shop", href: "/REACT-DUMMY/shop" },
    { label: "About ", href: "/REACT-DUMMY/checkout" },
    { label: "Contacts", href: "/REACT-DUMMY/contacts" },
    { label: "Login", href: "/REACT-DUMMY/login" },
];

export const deals = [
    { icons: <Gift className="text-accent" strokeWidth={1.5} size={24} />, label: "10% OFF For First Timer", href: "/" },
    { icons: <Gem className="text-accent" strokeWidth={1.5} size={24} />, label: "Minus -5000 Every End Of The Month", href: "/" },
    { icons: <HandCoins className="text-accent" strokeWidth={1.5} size={24} />, label: "5% Off Coupon Order Above 100,0000", href: "/" },
    { icons: <Percent className="text-accent" strokeWidth={1.5} size={24} />, label: "Gifts lorem presson avengers", href: "/" },
];

export const timer = [
    { label: "Days", time: "02" },
    { label: "Hr", time: "12" },
    { label: "Min", time: "30" },
    { label: "Sec", time: "45" },
];

export const dotm = [
    { title: "01 --Spring Sale", discount: "30% OFF", image: springProduct, href: "/REACT-DUMMY/shop" },
    { title: "02 --Spring Sale", discount: "40% OFF", image: springProduct, href: "/REACT-DUMMY/shop" },
    { title: "03 --Spring Sale", discount: "20% OFF", image: springProduct, href: "/REACT-DUMMY/shop" },
    { title: "04 --Spring Sale", discount: "50% OFF", image: springProduct, href: "/REACT-DUMMY/shop" },
    { title: "05 --Spring Sale", discount: "10% OFF", image: springProduct, href: "/REACT-DUMMY/shop" }
];

export const newArrivalCatigories = [
    { label: "Highlights", href: "/REACT-DUMMY/" },
    { label: "Bags", href: "/REACT-DUMMY/shoes" },
    { label: "Shoes", href: "/REACT-DUMMY/shoes" },
    { label: "Clothes", href: "/REACT-DUMMY/clothes" },
    { label: "Accessories", href: "/REACT-DUMMY/accessories" },
    { label: "Cosmetics", href: "/REACT-DUMMY/comestics" },
];

export const newArrivalProducts = [
    { image: productOne },
    { name: "Product Two", price: "20,000", image: productOne },
    { name: "Product Three", price: "30,000", image: productOne },
    { name: "Product Four", price: "40,000", image: productOne },
    { name: "Product Five", price: "50,000", image: productOne },
    { name: "Product Six", price: "60,000", image: productOne },
];

export const medias = [
    { icons: <Instagram className="text-accent" strokeWidth={1.5} size={24} />, href: "/" },
    { icons: <Twitter className="text-accent" strokeWidth={1.5} size={24} />, href: "/" },
    { icons: <Facebook className="text-accent" strokeWidth={1.5} size={24} />, href: "/" },
    { icons: <Youtube className="text-accent" strokeWidth={1.5} size={24} />, href: "/" }
];

export const quickLinks = [
    { label: "Contacts", href: "/REACT-DUMMY/contacts" },
    { label: "Shop", href: "/REACT-DUMMY/shop" },
    { label: "About ", href: "/REACT-DUMMY/checkout" },
    { label: "Login", href: "/REACT-DUMMY/login" },
    { label: "Register", href: "/REACT-DUMMY/register" },
];

export const careers = [
    { label: "Sellers", href: "/REACT-DUMMY/shop" },
    { label: "Models ", href: "/REACT-DUMMY/checkout" },
    { label: "Manufacturer", href: "/REACT-DUMMY/contacts" },
    { label: "Developers", href: "/REACT-DUMMY/login" },
];

export const apps = [
    { image: appIcon, href: '/' },
    { image: googleIcon, href: '/' },
];