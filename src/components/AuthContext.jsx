import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Cargar el usuario autenticado
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setIsAuthenticated(true);
          setIsAdmin(response.data.role === 'admin');  // Si tienes un campo 'role' en tu usuario
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
          setIsAuthenticated(false);
        }
      }
    };
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
