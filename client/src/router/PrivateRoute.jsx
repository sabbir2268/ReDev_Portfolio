import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="authLoading authLoading-spinner authLoading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/loginAsAdmin" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
