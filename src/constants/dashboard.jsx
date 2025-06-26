import { House, Logs, ShoppingCart, Heart, UserRoundPen, LogOut } from "lucide-react";


/* user nav menu */
export const userNav = [
    { label: "Dashboard", icon: <House color='black' strokeWidth={1} size={24} />, href: "/" },
    { label: "Orders", icon: <Logs color='black' strokeWidth={1} size={24} />, href: "/" },
    { label: "Cart", icon: <ShoppingCart color='black' strokeWidth={1} size={24} />, href: "/" },
    { label: "Wishlist", icon: <Heart color='black' strokeWidth={1} size={24} />, href: "/" },
    { label: "Profile", icon: <UserRoundPen color='black' strokeWidth={1} size={24} />, href: "/" },
    { label: "Logout", icon: <LogOut color='black' strokeWidth={1} size={24} />, href: "/" },
];