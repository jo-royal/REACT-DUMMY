import { useAuth } from '../context/authContext';
import AuthLayout from '../components/authLayout'
import { Link, useNavigate } from 'react-router'


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate()

  const sendLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      await login(email, password);
      navigate(import.meta.env.VITE_FTD_BASE_URL + '/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };


  return (
    <AuthLayout title="Sign In">
      <form onSubmit={sendLogin} className='flex flex-col gap-5 mt-8'>
        <input name='email' id='email' type="email" placeholder='Email' className='search w-full border-b' />
        <input name='password' id='password' type="password" placeholder='Password' className='search w-full border-b' />
        <button type="submit" className='card w-full p-2 text-center text-white text-sm font-medium bg-accent cursor-pointer'>Sign In</button>
        <Link className='card w-full p-2 text-center text-sm font-medium text-white bg-black' to={import.meta.env.VITE_FTD_BASE_URL + "/register"}>Sign Up</Link>
        <p className='text-end text-sm'>Forgot Password? <Link to={import.meta.env.VITE_FTD_BASE_URL + "/reset"} className='text-accent'>Reset</Link></p>
      </form>
    </AuthLayout>
  )
}
