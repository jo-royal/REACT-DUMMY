
import Navbar from '../components/navbar.jsx'
import CheckoutCom from '../components/checkoutCom.jsx'
import Footer from '../components/footer'

export default function Checkout() {
  return (
    <div>
      <div className='shadow-lg pb-5 sm:pb-5 sm:pt-2'>
        <Navbar />
      </div>
      <CheckoutCom />
      <Footer />
    </div>
  )
}

