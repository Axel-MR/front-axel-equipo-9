import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf, faFileExcel, faFilePowerpoint, faFileAudio, faFileVideo, faFileImage, faFile } from "@fortawesome/free-solid-svg-icons";
import IAimage from '../images/servicio_ia.png';

const CloudPage = () => {
  const [currentFolder, setCurrentFolder] = useState("/root");
  const [documents, setDocuments] = useState([
    {
      name: "Documento Ejemplo.docx",
      location: "/root/Carpeta 1",
      date: "2024-11-20",
    },
    {
      name: "Archivo PDF.pdf",
      location: "/root/Carpeta 2",
      date: "2024-11-18",
    },
    {
      name: "Hoja de cálculo.xlsx",
      location: "/root/Carpeta 3",
      date: "2024-11-17",
    },
    {
      name: "Presentación.pptx",
      location: "/root/Carpeta 1",
      date: "2024-11-16",
    },
    {
      name: "Canción.mp3",
      location: "/root/Carpeta 2",
      date: "2024-11-15",
    },
    {
      name: "Video.mp4",
      location: "/root/Carpeta 3",
      date: "2024-11-14",
    },
    {
      name: "Imagen.jpg",
      location: "/root/Carpeta 1",
      date: "2024-11-13",
    },
    {
      name: "Otro archivo.txt",
      location: "/root/Carpeta 2",
      date: "2024-11-12",
    },
  ]);

  // Función para obtener el ícono según la extensión del archivo
  const getIcon = (fileName) => {
    const fileExtension = fileName.split('.').pop().toLowerCase(); // Obtener la extensión del archivo

    switch (fileExtension) {
      case 'docx':
      case 'doc':
        return <FontAwesomeIcon icon={faFileWord} />;
      case 'pdf':
        return <FontAwesomeIcon icon={faFilePdf} />;
      case 'xlsx':
      case 'xls':
        return <FontAwesomeIcon icon={faFileExcel} />;
      case 'pptx':
      case 'ppt':
        return <FontAwesomeIcon icon={faFilePowerpoint} />;
      case 'mp3':
        return <FontAwesomeIcon icon={faFileAudio} />;
      case 'mp4':
      case 'mkv':
      case 'avi':
        return <FontAwesomeIcon icon={faFileVideo} />;
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'png':
        return <FontAwesomeIcon icon={faFileImage} />;
      default:
        return <FontAwesomeIcon icon={faFile} />;
    }
  };

  const handleAddDocument = () => {
    // Lógica para agregar un documento
    alert('Haz clic para añadir un documento');
  };

  const handleServiceRedirect = () => {
    // Redirigir a la página de compra si no se tiene servicio
    window.location.href = 'compra.html';  // Cambia la URL según la ruta real
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}




      <aside className="w-64 bg-[#516292] text-white p-6">
        
        
        {/* Imagen del servicio IA */}
        <div className="mt-6 mb-4 flex justify-center">
                    <img
                        src={IAimage}
                        alt="Imagen de servicio IA"
                        className="w-20 h-auto rounded-md shadow-lg"
                    />
                </div>

        <button
          className="w-full p-3 mb-6 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded"
          onClick={handleAddDocument}
        >
          Añadir Documento
        </button>
        <button
          className="w-full p-3 mb-6 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded"
          onClick={handleServiceRedirect}
        >
          Compra de Servicio
        </button>
        <div className="mt-6">
          <p>Estás en: <span className="font-semibold">{currentFolder}</span></p>
          <ul className="list-none mt-4">
            <li
              className="p-2 cursor-pointer hover:bg-teal-700 rounded"
              onClick={() => setCurrentFolder("/root/Carpeta 1")}
            >
              Carpeta 1
            </li>
            <li
              className="p-2 cursor-pointer hover:bg-teal-700 rounded"
              onClick={() => setCurrentFolder("/root/Carpeta 2")}
            >
              Carpeta 2
            </li>
            <li
              className="p-2 cursor-pointer hover:bg-teal-700 rounded"
              onClick={() => setCurrentFolder("/root/Carpeta 3")}
            >
              Carpeta 3
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-center mb-6">MIS DOCUMENTOS</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-[#516292] text-white">
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Carpeta</th>
                <th className="px-4 py-2 text-left">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 flex items-center">
                    {getIcon(doc.name)} {/* Muestra el ícono según la extensión */}
                    <span className="ml-3">{doc.name}</span>
                  </td>
                  <td className="px-4 py-2">{doc.location}</td>
                  <td className="px-4 py-2">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CloudPage;