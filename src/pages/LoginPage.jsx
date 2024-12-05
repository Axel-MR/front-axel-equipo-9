import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/servitoken_logo.png';
import Button from '../components/Button';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (email && password) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.msg || 'Error en el inicio de sesión');
        }
  
        const data = await response.json();
        console.log('Login successful:', data);
        
        // Almacenar el token en localStorage para mantener la sesión
        localStorage.setItem('authToken', data.token);
  
        // Actualiza el contexto de autenticación
        if (onLoginSuccess) {
          onLoginSuccess(data);
        }
  
        navigate('/landing');
      } catch (error) {
        alert('Error: ' + error.message);
      }
    } else {
      alert('Por favor ingresa tu correo y contraseña');
    }
  };
  
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-white-900">
      <div className="max-w-md w-full p-8 bg-[#4b5778] text-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-24 h-24" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-900"
            />
          </div>
          <div>
            <label className="block">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-900"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
