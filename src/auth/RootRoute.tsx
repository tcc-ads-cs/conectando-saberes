import React from "react";
import { Navigate } from "react-router-dom";

interface RootRouteProps {
  isAuthenticated: boolean;
}

const RootRoute: React.FC<RootRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/meu-feed" /> : <Navigate to="/home" />;
};

export default RootRoute;
