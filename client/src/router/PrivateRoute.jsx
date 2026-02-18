import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // While Firebase is checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // If not logged in → go to login
  if (!user) {
    return <Navigate to="/loginAsAdmin" state={{ from: location }} replace />;
  }

  // If logged in → show page
  return children;
};

export default PrivateRoute;
