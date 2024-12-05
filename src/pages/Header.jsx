import { faCoins, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import servitokenLogo from '../images/servitoken_logo.png';
import ThemeToggle from '../components/ThemeToggle';
import { AuthContext } from '../components/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, isAdmin, logout } = useContext(AuthContext); // Usar logout del contexto

  // Monedas según si es admin o usuario
  const displayCoins = isAdmin
    ? { gold: '∞', silver: '∞' }
    : { gold: user?.free_credits || 0, silver: user?.bought_credits || 0 };

  // Manejador de cierre de sesión
  const handleLogout = () => {
    logout(); // Llamar a logout desde el contexto
    navigate('/'); // Redirigir a la página principal
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-blue-900 text-white p-4 shadow-md">
      {/* Logo y título como enlace */}
      <div
        className="flex items-center space-x-2 mb-2 sm:mb-0 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src={servitokenLogo} alt="Servtoken Logo" className="h-8 w-auto" />
        <h1 className="text-2xl sm:text-3xl font-bold">Servitoken</h1>
      </div>

      {/* Sección derecha */}
      <div className="flex flex-wrap items-center space-x-4">
        {/* Interruptor de tema */}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        {/* Solo mostrar monedas y usuario si está autenticado */}
        {isAuthenticated && (
          <>
            {/* Monedas Doradas */}
            <div
              onClick={() => navigate('/creditos')}
              className="flex items-center space-x-2 hover:text-yellow-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faCoins} className="text-yellow-400" />
              <span className="font-semibold">{displayCoins.gold}</span>
            </div>

            {/* Monedas Plateadas */}
            <div
              onClick={() => navigate('/creditos')}
              className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faCoins} className="text-gray-300" />
              <span className="font-semibold">{displayCoins.silver}</span>
            </div>

            {/* Enlace de usuario / Perfil */}
            <div
              onClick={() => navigate('/perfil')}
              className="flex items-center space-x-2 hover:text-yellow-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faUser} className="text-yellow-400" />
              <span>{user?.name}</span> {/* Nombre del usuario */}
            </div>

            {/* Botón para ir a la página de créditos, solo visible para admin */}
            {isAdmin && (
              <button
                onClick={() => navigate('/admin/create-token-package')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
              >
                Paquetes de Créditos
              </button>
            )}
          </>
        )}

        {/* Condicional para mostrar los botones de login/registro o cerrar sesión */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
          >
            Cerrar Sesión
          </button>
        ) : (
          <>
            {/* Botones de Iniciar Sesión y Registrarse */}
            <button
              onClick={() => navigate('/login')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => navigate('/registro')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
            >
              Registrarse
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
