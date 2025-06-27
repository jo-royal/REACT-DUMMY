// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { setAccessToken, clearAccessToken, getAccessToken } from '../api/tokenStore';
import API from '../api/axios';

const AuthContext = createContext();
const loginURL = '/auth/jwt/create/'

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());


  const login = async (email, password) => {
    const res = await API.post(loginURL, { email, password });
    const token = res.data.access;
    setAccessToken(token);
    setIsAuthenticated(true);

  };

  const logout = async () => {
    try {
      await API.post('/auth/logout/'); // optional, to clear cookie
    } catch (e) { }
    clearAccessToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
