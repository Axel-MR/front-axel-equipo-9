import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon

const IconText = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2"> {/* Flex para alinear icono y texto horizontalmente */}
      <FontAwesomeIcon icon={icon} className="text-xl" /> {/* Ajusta el tamaño del icono según lo necesites */}
      <span>{text}</span>
    </div>
  );
};

export default IconText;
