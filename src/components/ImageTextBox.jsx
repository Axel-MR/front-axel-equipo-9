import React from 'react';
import Button from './Button'; // Asegúrate de que la ruta sea correcta

const ImageTextBox = ({ imageSrc, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg max-w-md w-full mx-auto mt-10 flex flex-col items-center group min-h-[400px] bg-white dark:bg-gray-800" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Contenedor de imagen con barrido */}
      <div className="w-full h-48 overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transform transition-all duration-500 ease-in-out group-hover:bg-top"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </div>

      {/* Contenedor de texto debajo de la imagen */}
      <div className="w-full p-4 flex flex-col justify-between flex-grow" style={{ color: 'var(--text-color)' }}>
        <h2 className="text-xl font-semibold text-center" style={{ color: 'var(--text-color)' }}>
          {title}
        </h2>
        <p className="text-center mt-2 flex-grow" style={{ color: 'var(--text-color)' }}>
          {description}
        </p>

        {/* Botón en la parte inferior centrado */}
        <div className="mt-4 flex justify-center">
          <Button text="Obtener servicio" />
        </div>
      </div>
    </div>
  );
};

export default ImageTextBox;
