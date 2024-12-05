import React, { useState } from "react";
import axios from "axios";
import servitokenLogo from "../images/servitoken_logo.png";
import ButtonSubmit from "../components/ButtonSubmit";
import Logo from '../images/servitoken_logo.png';

const Registro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      });
      setSuccess("Registro exitoso.");
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      setError("Error en el registro. Verifica tus datos.");
      console.error("Error en la solicitud:", error.response ? error.response.data : error.message);
    }
  };
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-white-900">
      <div className="max-w-md w-full p-8 bg-[#4b5778] text-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Logo" className="w-24 h-24" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Registro de Usuario
          </h2>

          {/* Mostrar mensaje de éxito o error */}
          {success && <p className="text-green-500 text-center">{success}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label className="block font-semibold mb-1 text-white">
              Nombre de Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-white">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-white">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-white">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="flex justify-center">
            <ButtonSubmit text="Registrarse" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
