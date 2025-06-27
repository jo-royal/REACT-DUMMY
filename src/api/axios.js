import axios from 'axios';
import { getAccessToken, setAccessToken, clearAccessToken } from './tokenStore';
import { useNavigate } from 'react-router'



const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // needed for refresh cookie
});

// Add access token to requests
API.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `BOF ${token}`;
  }
  return config;
});

// Handle 401: try refresh
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await API.post('/auth/jwt/refresh/');
        const newAccess = res.data.access;
        setAccessToken(newAccess);
        originalRequest.headers.Authorization = `BOF ${newAccess}`;
        return API(originalRequest); // retry original
      } catch (refreshError) {
        clearAccessToken();
        // redirect to login
        const navigate = useNavigate();
        navigate(import.meta.env.VITE_FTD_LOGIN_URL)
        
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default API;



/**
 * ✅ Auth Flow Summary (Frontend)
Login:

POST /auth/jwt/create/

Store access in memory (setAccessToken)

Django sets refresh cookie (HttpOnly)

Auto-refresh:

On 401, call /auth/jwt/refresh/

Retry original request

Logout:

POST /auth/logout/ (optional)

clearAccessToken()


 */