
import { House } from 'lucide-react';
import { userNav } from '../Constants/dashboard';


export default function UserDashboard() {
    return (

        <aside className='w-1/4 h-screen bg-white shadow-lg flex flex-col justify-between pt-3'>
            <div className=''>
                {userNav.map((item, index) => (
                    <div key={index} className='flex flex-row gap-5 p-3'>
                        <div className=''>{item.icon}</div>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <div >
                <div className='flex flex-row gap-5 p-3'>
                    <House color='black' strokeWidth={1} size={24} />
                    <p>Contact</p>
                </div>
                <div className='flex flex-row gap-5 p-3'>
                    <House color='black' strokeWidth={1} size={24} />
                    <p>Contact</p>
                </div>
                <div className='flex flex-row gap-5 p-3'>
                    <House color='black' strokeWidth={1} size={24} />
                    <p>Contact</p>
                </div>
            </div>
        </aside>
    )
}
