import React from "react";
import Nube from "../images/servicio_nube.png"; 

const NubeService = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src={Nube} alt="Servicio de almacenamiento en la nube" className="w-10 h-10" />
      <span className="text-lg font-medium">Servicio de almacenamiento en la nube</span>
    </div>
  );
};

export default NubeService;
