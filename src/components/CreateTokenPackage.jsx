import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../images/servitoken_logo.png';


const CreateTokenPackage = () => {
  const [showForm, setShowForm] = useState(false);
  const [packageName, setPackageName] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [price, setPrice] = useState('');
  const [tokenPackages, setTokenPackages] = useState([]);

  // Obtener paquetes de créditos desde la base de datos
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:8000/api/credits-packages', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTokenPackages(response.data);
      } catch (error) {
        console.error('Error fetching token packages:', error);
      }
    };
    fetchPackages();
  }, []);

  // Crear nuevo paquete de créditos
  const handleCreatePackage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post(
        'http://localhost:8000/api/token-packages',
        { name: packageName, tokens: tokenAmount, price },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTokenPackages([...tokenPackages, response.data]);
      setPackageName('');
      setTokenAmount('');
      setPrice('');
      setShowForm(false);
    } catch (error) {
      console.error('Error creating package:', error);
      alert('Error al crear el paquete.');
    }
  };

  // Eliminar un paquete de créditos
  const handleDeletePackage = async (id) => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete(`http://localhost:8000/api/token-packages/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTokenPackages(tokenPackages.filter(pkg => pkg.id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('Error al eliminar el paquete.');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl mb-8 p-6 mt-8 bg-white rounded-lg shadow-lg flex items-center">
        <img src={Logo} alt="Logo Servitoken" className="w-12 h-12 mr-4" />
        <h2 className="text-2xl font-semibold text-black">Paquetes de Tokens Existentes</h2>
      </div>

      {/* Lista de paquetes de tokens desde la base de datos */}
      <div className="w-full max-w-2xl mb-8 p-6 bg-white rounded-lg shadow-lg">
        <ul className="space-y-4">
          {tokenPackages.map((pkg) => (
            <li key={pkg.id} className="border-b py-2 flex justify-between items-center text-black">
              <span className="font-semibold">{pkg.name}</span>
              <span>Cantidad: {pkg.tokens} Tokens</span>
              <span>Precio: ${pkg.price} MXN</span>
              <button
                onClick={() => handleDeletePackage(pkg.id)}
                className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulario de creación de paquetes */}
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4"
          >
            Crear Paquete
          </button>
        )}
        {showForm && (
          <form onSubmit={handleCreatePackage} className="space-y-4">
            <div>
              <label className="block text-black">Nombre del Paquete</label>
              <input
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-black">Cantidad de Tokens</label>
              <input
                type="number"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-black">Precio $MX</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Finalizar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateTokenPackage;
