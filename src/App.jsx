import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './pages/Header';
import Landingpage from './pages/Landingpage';
import Perfil from './pages/Perfil';
import Registro from './pages/Registro';
import LoginPage from './pages/LoginPage';
import CloudPage from './pages/CloudPage';
import ServiBotPage from './pages/admin/ServiBotPage';
import NotificationPage from './pages/admin/NotificationPage';
import CreateTokenPackage from './components/CreateTokenPackage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('Usuario');
  const [coins, setCoins] = useState({ gold: 0, silver: 0 });

  // Fetch user data if there's a token in localStorage
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/api/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          const userData = response.data;
          setIsAuthenticated(true);
          setUsername(userData.name);
          setCoins({ gold: userData.bought_credits, silver: userData.free_credits });
        } catch (error) {
          console.error('Error fetching user data:', error);
          handleLogout();
        }
      }
    };
    fetchUserData();
  }, []);

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUsername(userData.name);
    setCoins({ gold: userData.bought_credits, silver: userData.free_credits });
    localStorage.setItem('token', userData.token); // Guarda el token al iniciar sesión
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('Usuario');
    setCoins({ gold: 0, silver: 0 });
    localStorage.removeItem('token'); // Elimina el token al cerrar sesión
  };

  return (
    <AuthProvider>
      <Router>
        <Header 
          isAuthenticated={isAuthenticated} 
          username={username} 
          coins={coins} 
          onLogout={handleLogout} 
        />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/service-cloud" element={<CloudPage />}/>
          <Route path='/service-notification' element={<NotificationPage />} />
          <Route path='/service-servibot' element={<ServiBotPage />} />
          <Route 
            path="/perfil" 
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/create-token-package" 
            element={
              <ProtectedRoute>
                <CreateTokenPackage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
