import React from "react";
import { Navigate } from "react-router-dom";

const Logout: React.FC = () => {
  // Remove o token do armazenamento
  localStorage.removeItem("token"); // Substitua por sessionStorage ou cookies, se necessário

  // Redireciona para a página de login
  return <Navigate to="/login" />;
};

export default Logout;
