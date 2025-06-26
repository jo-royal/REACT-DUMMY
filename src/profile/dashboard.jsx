
import { useState, useEffect } from 'react'
import { tokenAuthCheck } from '../services/authService'
import { useNavigate } from 'react-router'
import UserDashboard from '../components/userDashboard';

export default function Dashboard() {
    const [authen, setAuthen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const tokenValidty = async () => {
            const token = localStorage.getItem('token')
            if (token) {
                const convertToken = await tokenAuthCheck(JSON.parse(token));
                setAuthen(convertToken)
            } else {
                navigate('/REACT-DUMMY/login')
            }
        }
        tokenValidty();
    }, [])

    return (
        <>
            {authen ? <div>
                <UserDashboard /></div> : <div>something wrong loging again</div>}
        </>
    )
}
