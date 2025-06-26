
import Navbar from '../components/navbar'
import AsideShop from '../components/asideShop'
import MainShop from '../components/mainShop'
import AsideShopRight from '../components/asideShopRight'
import Footer from '../components/footer'


export default function Shop() {
  return (
    <>
      <div className='sticky top-0 w-full z-50 bg-white border-b-4 border-bg-shop'>
        <Navbar />
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-1  bg-bg-shop max-w-[500px] sm:max-w-[1470px] m-auto'>
        <aside className='bg-white w-full hidden md:block md:w-[30%] lg:w-1/5 p-5 h-screen lg:h-auto md:sticky lg:static top-20'>
          <AsideShop />
        </aside>
        <main className='w-full md:w-[70%] lg:w-[63%]'>
          <MainShop />
        </main>
        <aside className='hidden lg:block w-[17%]'>
          < AsideShopRight />
        </aside>
      </div>
      <Footer />
    </>





  )
}
