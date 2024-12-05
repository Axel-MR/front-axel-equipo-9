import { faCoins, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import servitokenLogo from '../../images/servitoken_logo.png';
import ThemeToggle from '../../components/ThemeToggle'; // Importa el ThemeToggle

const HeaderAdmin = ({ username = 'Pedro' }) => {
  // Función para manejar el logout
  const handleLogout = () => {
    // Aquí puedes agregar la lógica para eliminar el token de autenticación o cerrar sesión
    alert("Has cerrado sesión");
    window.location.href = '/login'; // Redirigir a la página de login después de cerrar sesión
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-blue-900 text-white p-4 shadow-md">
      {/* Logo y título como enlace */}
      <div
        className="flex items-center space-x-2 mb-2 sm:mb-0 cursor-pointer"
        onClick={() => (window.location.href = '/')}>
        <img src={servitokenLogo} alt="Servtoken Logo" className="h-8 w-auto" />
        <h1 className="text-2xl sm:text-3xl font-bold">Servitoken</h1>
      </div>

      {/* Sección derecha */}
      <div className="flex flex-wrap items-center space-x-4">
        {/* Enlaces de administración */}
        <a href="/admin/crear-paquete" className="text-white hover:text-yellow-300">
          Crear Paquetes de Créditos
        </a>
        <a href="/admin/ver-usuarios" className="text-white hover:text-yellow-300">
          Usuarios
        </a>

        {/* Agrega el interruptor de tema */}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        {/* Credihrefs (Monedas Doradas) */}
        <a href="/Credihrefs" className="flex items-center space-x-2 hover:text-yellow-300">
          <FontAwesomeIcon icon={faCoins} className="text-yellow-400" />
          <span className="font-semibold">50</span>
        </a>

        {/* Credihrefs (Monedas Plateadas) */}
        <a href="/Credihrefs-silver" className="flex items-center space-x-2 hover:text-gray-300">
          <FontAwesomeIcon icon={faCoins} className="text-gray-300" />
          <span className="font-semibold">30</span>
        </a>

        {/* Enlace de usuario / Perfil */}
        <a href="/Perfil" className="flex items-center space-x-2 hover:text-yellow-300">
          <FontAwesomeIcon icon={faUser} className="text-yellow-400" />
          <span>{username}</span>
        </a>

        {/* Botón de Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-white hover:text-red-300 focus:outline-none">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderAdmin;
