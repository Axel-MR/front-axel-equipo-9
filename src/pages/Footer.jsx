import React from 'react';
import servitokenLogo from '../images/servitoken_logo.png';
import IconText from '../components/IconText';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 shadow-lg"> {/* Solo sombra */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:space-x-4"> {/* Ajuste de espacio */}
        
        {/* Imagen grande centrada */}
        <div className="flex flex-col items-center space-y-1 mb-2 sm:mb-0 flex-grow h-full"> {/* Crecimiento flexible */}
          <img src={servitokenLogo} alt="Servtoken Logo" className="h-12 w-auto" />
          <h1 className="text-xl sm:text-2xl font-bold text-center">Servitoken</h1>
        </div>

        {/* Quiénes somos en el centro */}
        <div className="w-full sm:w-3/5 text-center mb-2 sm:mb-0 h-full flex flex-col justify-center"> {/* Ajuste de altura y flex */}
          <h3 className="text-lg font-semibold mb-2">Quiénes somos</h3>
          <p className="text-gray-300 text-sm">
            Somos una empresa dedicada a brindar soluciones tecnológicas avanzadas que faciliten el acceso a herramientas de última generación para nuestros clientes. Nuestro equipo trabaja con pasión para ofrecer productos de calidad y servicios que superen las expectativas.
          </p>
        </div>

        {/* Apartado de contacto a la derecha */}
        <div className="w-full sm:w-1/5 flex flex-col justify-center items-center h-full"> {/* Ajuste de tamaño */}
          <h3 className="text-lg font-semibold mb-2 text-center">Contacto</h3>

          <div className="flex justify-center mb-2">
            <IconText icon={faEnvelope} text="contacto@empresa.com" />
          </div>

          <div className="flex justify-center mb-2">
            <IconText icon={faPhone} text="+123 456 7890" />
          </div>

          <div className="flex justify-center">
            <IconText icon={faLocationDot} text="Calle Falsa 123, Ciudad" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
