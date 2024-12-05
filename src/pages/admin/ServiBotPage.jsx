import React, { useState } from 'react';
import ServiBotImage from '../../images/servicio_ia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const ServiBotPage = () => {
  const [userQuery, setUserQuery] = useState('');
  const [responses, setResponses] = useState([]);
  const [isFirstQuery, setIsFirstQuery] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (userQuery.trim()) {
      // Agrega la nueva respuesta al inicio del arreglo
      setResponses((prevResponses) => [
        `Respuesta generada para: "${userQuery}"`,
        ...prevResponses,
      ]);
      setUserQuery('');
      setIsFirstQuery(false); // Marca como no primera consulta
      setFadeOut(true); // Inicia la animación de desvanecimiento
    }
  };

  const handleInputChange = (e) => {
    setUserQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleQuerySubmit(e); // Llamamos a la función de envío de consulta al presionar Enter
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header: título, imagen y texto adicional */}
      {isFirstQuery && !fadeOut && (
        <header className="flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold mb-4">Servibot</h1>
          <img
            src={ServiBotImage}
            alt="Servicio IA Bot"
            className="w-32 h-auto rounded-lg shadow-md"
          />
          <p className="mt-2 text-lg text-gray-700">Cada consulta costará un servitoken</p>
        </header>
      )}

      {/* Animación de desaparición del header */}
      {fadeOut && (
        <div className="animate-fadeOutUp opacity-0 transition-all duration-700">
          <header className="flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-4">Servibot</h1>
            <img
              src={ServiBotImage}
              alt="Servicio IA Bot"
              className="w-32 h-auto rounded-lg shadow-md"
            />
            <p className="mt-2 text-lg text-gray-700">Cada consulta costará un servitoken</p>
          </header>
        </div>
      )}

      {/* Contenedor de respuestas */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col-reverse">
        {responses.length > 0 && (
          <div className="space-y-4">
            {responses.map((response, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-gray-700"
              >
                {response}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Chat en la parte inferior */}
      <form
        onSubmit={handleQuerySubmit}
        className="bg-white shadow-md p-4 flex items-center space-x-2 sticky bottom-0 w-full max-w-2xl mx-auto"
      >
        <textarea
          id="query"
          value={userQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Detectar la tecla Enter
          placeholder="Hacer consulta..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none overflow-hidden max-w-[90%] mx-auto"
          rows={1} // Tamaño inicial
          onInput={(e) => {
            e.target.style.height = 'auto'; // Reinicia el tamaño
            e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta al contenido
          }}
        ></textarea>

        {/* Botón ícono */}
        <button
          type="submit"
          className="text-teal-600 hover:text-teal-700 transition-colors text-2xl"
          aria-label="Enviar consulta"
        >
          <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </button>
      </form>

      {/* Animación CSS en el mismo archivo JSX */}
      <style jsx>{`
        @keyframes fadeOutUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .animate-fadeOutUp {
          animation: fadeOutUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiBotPage;
