
import Navbar from '../components/navbar'
import CartCom from '../components/cartCom'
import PageNav from '../components/pageNav'
import Footer from '../components/footer'


export default function Cart() {
  return (
    <section className='max-w-[500px] sm:max-w-[1470px] m-auto'>
      <div className='sticky top-0 w-full z-50 bg-white border-b-4 border-bg-shop'>
        <Navbar />
      </div>
      <PageNav title={'Cart'} subtitle={'Your Cart'} />
      <CartCom />
      <Footer />
    </section>
  )
}
