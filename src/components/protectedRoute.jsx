import { Navigate } from 'react-router';
import { useAuth } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to={import.meta.env.VITE_FTD_LOGIN_URL} replace />;
};


export default ProtectedRoute;