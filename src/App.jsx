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
import ShippingUpdate from "./pages/shippingUpdate";
import Payment from "./pages/payment";
import Cart from "./pages/cart";
import ProductDetails from "./pages/productDetails";
import Dashboard from "./profile/dashboard";
import { AuthProvider } from './context/authContext';
import ProtectedRoute from "./components/protectedRoute";


export default function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/REACT-DUMMY" element={<Index />} />
          <Route path="/REACT-DUMMY/login" element={<Login />} />
          <Route path="/REACT-DUMMY/register" element={<Register />} />
          <Route path="/REACT-DUMMY/reset" element={<Reset />} />
          <Route path="/REACT-DUMMY/code-confirmation" element={<CodeConfirmation />} />
          <Route path="/REACT-DUMMY/new-password" element={<NewPassword />} />
          <Route path="/REACT-DUMMY/shop" element={<Shop />} />
          <Route path="/REACT-DUMMY/shop/details" element={<ProductDetails />} />

          {/* ✅ PROTECTED ROUTES BELOW */}
          <Route path="/REACT-DUMMY/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/REACT-DUMMY/shipping-update" element={<ProtectedRoute><ShippingUpdate /></ProtectedRoute>} />
          <Route path="/REACT-DUMMY/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/REACT-DUMMY/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/REACT-DUMMY/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/REACT-DUMMY/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
