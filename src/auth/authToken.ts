import api from "../api";

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Substitua por sessionStorage ou cookies, se necessário
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

