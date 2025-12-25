import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Use proxy in development, direct URL in production
  const API_BASE_URL = import.meta.env.DEV 
    ? '/api/v1' 
    : 'http://localhost:4000/api/v1';

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const user = localStorage.getItem('user');
      if (token && user) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store authentication token and user data
        localStorage.setItem('authToken', data.token || 'authenticated');
        localStorage.setItem('user', JSON.stringify(data.user || { email }));
        setIsAuthenticated(true);
        return { success: true, message: 'Login successful!' };
      } else {
        return { success: false, message: data.message || 'Login failed. Please try again.' };
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
        return { success: false, message: 'CORS error: Please ensure the backend server is running and allows CORS requests.' };
      }
      return { success: false, message: 'Network error. Please check your connection.' };
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, message: 'Account created successfully! You can now login.' };
      } else {
        return { success: false, message: data.message || 'Registration failed. Please try again.' };
      }
    } catch (error) {
      console.error('Register error:', error);
      if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
        return { success: false, message: 'CORS error: Please ensure the backend server is running and allows CORS requests. Make sure your backend has CORS enabled for localhost:5173 (or your frontend URL).' };
      }
      return { success: false, message: 'Network error. Please check your connection.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

