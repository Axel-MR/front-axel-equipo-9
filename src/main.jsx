import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col"> {/* Envuelve el contenido en un div con flex */}
      <Header username="axel" />
      <main className="flex-grow">
        <App /> {/* El contenido principal toma el espacio restante */}
      </main>
      <Footer /> {/* El footer al final */}
    </div>
  </StrictMode>
);
