import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Shop from "./pages/shop";
import Reset from "./pages/reset";
import CodeConfirmation from "./pages/codeConfirmation";
import NewPassword from "./pages/newPassword";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {< Index />}  />
        <Route path="login" element={ <Login />} />
        <Route path="register" element={< Register />} />
        <Route path="reset" element={<Reset />} />
        <Route path="code-confirmation" element={<CodeConfirmation />} />"
        <Route path="new-password" element={<NewPassword />} />
        <Route path="contact" element={< Register />} />
        <Route path="shop" element={< Shop />} />
      </Routes>
    </BrowserRouter>
  )
}
