import React from "react";

const IconWithText = ({ iconSrc, text, altText }) => {
  return (
    <div className="flex items-center space-x-4"> {/* Flex para colocar ícono y texto horizontalmente */}
      <img
        src={iconSrc}
        alt={altText}
        className="w-10 h-10" // Ajusta el tamaño de la imagen como desees
      />
      <span className="text-lg font-medium">{text}</span> {/* Texto junto al ícono */}
    </div>
  );
};

export default IconWithText;
