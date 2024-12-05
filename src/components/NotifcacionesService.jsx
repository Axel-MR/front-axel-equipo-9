import React from "react";
import Notificaciones from "../images/servicio_notificaciones.png"; 

const NotificacionesService = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src={Notificaciones} alt="Servicio de notificaciones" className="w-10 h-10" />
      <span className="text-lg font-medium">Servicio de notificaciones personalizadas</span>
    </div>
  );
};

export default NotificacionesService;
