import React from "react";
import IA from "../images/servicio_ia.png"; // Asegúrate de ajustar la ruta según tu estructura

const IAService = () => {
  return (
    <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-2 rounded" style={{ color: 'var(--text-color)' }}>
      <img src={IA} alt="Servicio de consulta con Servibot" className="w-10 h-10" />
      <span className="text-lg font-medium" style={{ color: 'var(--text-color)' }}>
        Servicio de consulta con Servibot
      </span>
    </div>
  );
};

export default IAService;
