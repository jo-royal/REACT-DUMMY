import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Shop from "./pages/shop";
import Reset from "./pages/reset";
import CodeConfirmation from "./pages/codeConfirmation";
import NewPassword from "./pages/newPassword";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/REACT-DUMMY/" element= {< Index />}  />
        <Route path="/REACT-DUMMY/login" element={ <Login />} />
        <Route path="/REACT-DUMMY/register" element={< Register />} />
        <Route path="/REACT-DUMMY/reset" element={<Reset />} />
        <Route path="/REACT-DUMMY/code-confirmation" element={<CodeConfirmation />} />"
        <Route path="/REACT-DUMMY/new-password" element={<NewPassword />} />
        <Route path="/REACT-DUMMY/wishlist" element={< Wishlist />} />
        <Route path="/REACT-DUMMY/checkout" element={< Checkout />} />
        <Route path="/REACT-DUMMY/contact" element={< Register />} />
        <Route path="/REACT-DUMMY/shop" element={< Shop />} />
      </Routes>
    </BrowserRouter>
  )
}
