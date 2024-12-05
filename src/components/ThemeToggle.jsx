import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'; // Solo importamos un ícono sólido
import { faSun } from '@fortawesome/free-solid-svg-icons'; // También podemos agregar un ícono de sol

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // Almacenar el tema en localStorage y aplicarlo
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Función para alternar entre temas
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="flex items-center">
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} /> {/* Usa el ícono de la luna o el sol */}
    </button>
  );
};

export default ThemeToggle;
