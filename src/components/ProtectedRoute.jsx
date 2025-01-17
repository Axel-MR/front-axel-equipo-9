import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Cargando...</div>; // Muestra un mensaje de carga

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
