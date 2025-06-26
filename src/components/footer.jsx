import { Link } from 'react-router'
import { medias } from '../constants/firstCon'

export default function Footer() {
    return (
        <footer className="mt-30 mb-5 px-5 border-t-4 border-bg-shop">
            <div className="grid grid-cols-3 pt-10">
                <div className='flex flex-col gap-6'>
                    <Link to='/REACT-DUMMY/' className='text-2xl font-header'><span className='text-accent'>PES</span>MIC</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis iusto ea sit nesciunt architecto eum repellat quibusdam itaque velit fuga, rerum ad natus accusantium.</p>
                    <div className='flex flex-col gap-2'>
                        <h6>Follow Us:</h6>
                        <ul className='flex gap-3'>
                            {medias.map((media, index) => (
                                <li key={index}>
                                    <Link to={media.href}>{media.icons}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex '>
                    <div>
                        <h5>Quick Links</h5>
                    </div>
                    <div>
                        <h5>Careers</h5>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>
    )
}
