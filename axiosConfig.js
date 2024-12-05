// src/utils/axiosConfig.js
import axios from 'axios';

// Configuración base de Axios
axios.defaults.baseURL = 'http://localhost:8000/api';

// Interceptor para agregar el token de autenticación a cada solicitud
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
