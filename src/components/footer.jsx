import { Link } from 'react-router'
import { apps, careers, medias, quickLinks } from '../constants/firstCon'

export default function Footer() {
    return (
        <footer className="mt-30 mb-2 border-t-4 border-bg-shop w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 md:gap-10 pt-10 px-5 max-w-[500px] sm:max-w-[1470px] m-auto w-full">
                <div className='flex flex-col gap-6 sm:order-last md:order-first sm:col-span-2 md:col-span-1 sm:text-center md:text-start w-full'>
                    <Link to='/REACT-DUMMY/' className='text-2xl font-header'><span className='text-accent'>PES</span>MIC</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis iusto ea sit nesciunt architecto eum repellat quibusdam itaque velit fuga, rerum ad natus accusantium.</p>
                    <div className='flex flex-col gap-4 w-full'>
                        <h6>Follow Us:</h6>
                        <ul className='flex gap-3 justify-center'>
                            {medias.map((media, index) => (
                                <li key={index}>
                                    <Link to={media.href}>{media.icons}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:order-last'>
                    <h5 className='font-body text-lg'>Install Our App</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, assumenda.</p>
                    <div className="flex w-full gap-7">
                        {apps.map((app, index) => (
                            <Link key={index} to={app.href}> <img className='w-30 h-auto rounded-md' src={app.image} alt="pesmic apps" /></Link>
                        ))}
                    </div>
                </div>
                <div className='flex justify-between sm:px-5 '>
                    <div className='flex flex-col gap-5'>
                        <h5 className='font-body text-lg'>Quick Links</h5>
                        <ul>
                            {quickLinks.map((links, index) => (
                                <li className='py-1' key={index}><Link to={links.href}>{links.label}</Link></li>

                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <h5 className='font-body text-lg'>Careers</h5>
                        <ul>
                            {careers.map((links, index) => (
                                <li className='py-1' key={index}><Link to={links.href}>{links.label}</Link></li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-y-4 border-bg-shop w-full mt-10 p-5 '>
                <p className='text-center max-w-[500px] sm:max-w-[1470px]'>© 2025 PEMIC COLLECTION. Trademarks and brands are the property of their respective owners.</p>
            </div>
        </footer>
    )
}
