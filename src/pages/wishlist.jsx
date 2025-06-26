
import Navbar from '../components/navbar'
import PageNav from '../components/pageNav'
import WishlistCom from '../components/wishlistCom'
import Footer from '../components/footer'


export default function Wishlist() {
  return (
    <div>
      <Navbar />
      <PageNav title="Your WishList" subtitle=" Your WishList" />
      <WishlistCom />
      <Footer />
    </div>
  )
}
