import React from 'react';
import ImageTextBox from '../components/ImageTextBox'; // Importa tu componente
import Nube from '../images/servicio_nube.png';
import Notificaciones from '../images/servicio_notificaciones.png';
import IA from '../images/servicio_ia.png';

const Landingpage = () => {
  return (
    <div className="container mx-auto p-6">
    

      {/* Grid para dividir la página en 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Primera columna */}
        <div className="col-span-1 min-w-[300px] max-w-[400px] mx-auto">
          <ImageTextBox
            imageSrc={Nube}
            title="Almacenamiento en la nube"
            description="Con este servicio podrás obtener un almacenamiento en la nube de 1TB por un periodo definido de tiempo según el plan que selecciones."
          />
        </div>

        {/* Segunda columna */}
        <div className="col-span-1 min-w-[300px] max-w-[400px] mx-auto">
          <ImageTextBox
            imageSrc={Notificaciones}
            title="Notificaciones"
            description="Con este servicio podrás obtener un sistema de notificaciones personalizadas para no olvidarte de ningún evento importante."
          />
        </div>

        {/* Tercera columna */}
        <div className="col-span-1 min-w-[300px] max-w-[400px] mx-auto">
          <ImageTextBox
            imageSrc={IA}
            title="ServiBot"
            description="Con este servicio podrás dialogar con una IA donde cada prompt gastará X créditos."
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
