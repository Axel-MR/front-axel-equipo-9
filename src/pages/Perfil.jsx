import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Asegúrate de que la configuración de axios esté bien definida
import { useNavigate } from 'react-router-dom';
import foto from '../images/perfil_foto.png';
import tokenDorado from '../images/token_dorado.png';
import tokenPlateado from '../images/token_plateado.png';
import Button from '../components/Button';
import ServicioIA from '../components/IAService';
import ServicioNotificaciones from '../components/NotifcacionesService';
import ServicioNube from '../components/NubeService';

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        // Redirige al login solo si el error es de autorización o token inválido
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) return <p>Cargando perfil...</p>;
  if (!user) return <p>No se encontró usuario. Inicia sesión.</p>;

  return (
    <div className="p-4 mt-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Sección de perfil */}
        <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
          <img
            src={foto}
            alt="Perfil"
            className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
          />
          <h1 className="text-3xl font-bold mt-2">{user.name}</h1>
          <h2 className="text-xl font-semibold">{user.fullName || 'Nombre Completo'}</h2>
          <p>Email: {user.email}</p>
          <p>Teléfono: {user.phone || 'No disponible'}</p>
        </div>

        {/* Sección de tokens */}
        <div className="w-full md:w-1/3 flex flex-col items-start md:ml-4 mb-8 md:mb-0">
          <div className="mt-4 flex flex-col">
            <div className="flex items-center space-x-4 hover:text-yellow-300">
              <img src={tokenDorado} alt="Moneda dorada" className="w-20 h-20" />
              <span className="text-3xl font-semibold">{user.bought_credits}</span>
              <Button text="Añadir" />
            </div>
            <div className="flex items-center space-x-4 hover:text-gray-300 mt-4">
              <img src={tokenPlateado} alt="Moneda plateada" className="w-20 h-20" />
              <span className="text-3xl font-semibold">{user.free_credits}</span>
              <h1 className="text-2xl font-bold mt-2">Se regeneran cada 24 hrs</h1>
            </div>
            <p className="mt-2 ml-5">
              Tu cantidad de tokens plateados se regeneran hasta 50 cada 24 horas.
            </p>
          </div>
        </div>

        {/* Sección de servicios disponibles */}
        <div className="w-full md:w-1/3 text-center flex flex-col items-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Servicios Adquiridos</h2>
          <ul className="mt-4 space-y-4">
            <li className="bg-gray-100 p-4 rounded shadow">
              <ServicioNube />
            </li>
            <li className="bg-gray-100 p-4 rounded shadow">
              <ServicioIA />
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-6">Servicios Adquiribles</h2>

          <div className="bg-gray-100 p-4 rounded shadow">
            <ServicioNotificaciones />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
